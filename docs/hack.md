---
title: Reconfigure An Android Smartphone
date: 2023/08/16
---

## Know The Codenames
The codenames are the only names used in the source codes, so be sure to understand all the codenames of your smartphones. Such information can be found by Google. You will encounter many codenames when exploring source codes.

Take Xiaomi Redmi Note 9 Pro  as an example. `joyeuse` is the codename of this specific smartphone. `miatoll` is the codename for a series of Xiaomi smartphone, including `joyeuse`. And `atoll` is the codename of Qualcomm Snapdragon 720G platform, which also has a internal name as `sm6250`

## Check Compatibility
We will need to know the true hardware sampling rates limits before reconfiguration. As introduced in the paper, we can infer the hardware topology and the codec and amplifier model number from their [Device-Tree-Overlays (DTO)](https://docs.kernel.org/devicetree/overlay-notes.html).

We will add more details about the process and some alternative methods for determining the hardware component. 

### How To Find DTO
1. Get the Linux Kernel source of your smartphones. Normally the smartphone manufactures will open source it on the GitHub, or on their website. Some simple search should lead you there. In the worst case, you have to write them a letter and they will mail you a CD. That is how GPL license works. 
2. In the Linux source tree, the DTO are located under `arch/arm64/boot/dts` directory. Note that there might be many other DTOs not related to your smartphones at all. So, look for some file containing the codenames of your smartphones. For example, `arch/arm64/boot/dts/qcom/joyeuse-atoll-ab-idp-overlay.dts`.

### Check Compatibility Through Kernel Build Config
Kernel build configs can tell you which driver are enabled. And if you see a codec driver enabled, it may imply that such codec is present (though not necessary). The build configs are located under `arch/arm64/configs`. The build configs are normally named with codename, such as `joyeuse_defconfig)`. 

If you see something like
:::: code-group
::: code-group-item defconfig
```
...
CONFIG_SND_SOC_WCD937x=y
...
CONFIG_SND_SOC_TAS2562=y
...
```
:::
::::


It means WCD937x series codec and TAS2562 amplifier are likely presents. 

### Check Compatibility Through Third-Party Teardown
Some tech media like [TechInsights](https://www.techinsights.com/) and [iFixit](https://www.ifixit.com/) will publish teardown report of popular smartphones with part numbers. We can then know the codec and amplifier model. 

## Port Your Own Android To The Smartphones
Although it is possible to reconfigure with the stock OS by replacing only kernel. Things would be much harder if you use stock OS, many debugging feature is unavailable. You can port [LineageOS](https://lineageos.org/) or [Android GSI](https://developer.android.com/topic/generic-system-image) with a `eng` build or `user-debug` build variants. You can turn on some kernel driver logging to help you debug. 

## Get TinyALSA Ready
[TinyALSA](https://github.com/tinyalsa/tinyalsa) is a non-GPL libraries to interact with Linux ALSA drivers. We will use its utilities tools to try our reconfiguration. Specifically:

`tinyplay`: Play directly through ALSA, in Android it means play directly on top of HAL. 

`tinycap`: Record directly through ALSA.

`tinymix`: Change ALSA controls.

`tinypcminfo`: List available input / output streams.

You will need [Android NDK](https://developer.android.com/ndk) to cross-compile TinyALSA tools, and copy it to the smartphones. 

## Try with ALSA mixer settings.
1. Find `mixer_paths.xml` under `/vendor/etc` or its subdirectory.
2. Find a correct combinations of settings to play & record with factory settings. For example:
:::: code-group
::: code-group-item mixer_paths.xml
```xml
    <!-- TX part -->
    <path name="main-mic">
        <ctl name="AIF1_CAP Mixer SLIM TX7" value="1" />
        <ctl name="CDC_IF TX7 MUX" value="DEC7" />
        <ctl name="SLIM_0_TX Channels" value="One" />
        <ctl name="ADC MUX7" value="DMIC" />
        <ctl name="DMIC MUX7" value="DMIC0" />
    </path>
```
:::
::::

3. Reproduce the playing & recording sequence by `tinymix`. For example:
:::: code-group
::: code-group-item Testing Script
```bash
tinymix "AIF1_CAP Mixer SLIM TX7" "1"
tinymix "CDC_IF TX7 MUX" "DEC7"
tinymix "SLIM_0_TX Channels" "One"
tinymix "ADC MUX7" "DMIC" 
tinymix "DMIC MUX7" "DMIC0"
tinymix "MultiMedia1 Mixer SLIM_0_TX" "1"
tinycap test.wav -c 1 -r 48000 -b 16 -p 48000
```
:::
::::

4. Change those setting sequences to higher sampling rates. For example:
:::: code-group
::: code-group-item Testing Script
```bash
tinymix "AIF1_CAP Mixer SLIM TX7" "1"
tinymix "CDC_IF TX7 MUX" "DEC7"
tinymix "SLIM_0_TX Channels" "One"
tinymix "SLIM_0_TX Format" "S16_LE"
tinymix "SLIM_0_TX SampleRate" "KHZ_192"
tinymix "ADC MUX7" "DMIC" 
tinymix "DMIC MUX7" "DMIC0"
tinymix "DEC7 Volume" "85"
tinymix "MultiMedia1 Mixer SLIM_0_TX" "1"
tinycap test.wav -c 1 -r 192000 -b 16 -p 19200
```
:::
::::


5. Those controls are defined in their driver implementation, normally under `sound/soc/codecs` in the kernel source. In Qualcomm smartphones, sometimes under `techpack/audio/asoc` directory. If there are some hard-coded sampling rates settings, you need to fix it and recompile kernel.

6. If you want to integrate those changes with your own Android system, you need to also change `/vendor/etc/audio_policy_configuration.xml` for the Framework (System service) behavior. But that not enough, you need to increase the buffer size of the HAL to avoid jitters. And that could be very tricky, as Qualcomm HAL are implemented through IPC, so you can't step-in using debugger or by simply reading the driver code. And Samsung HAL are much more complex involving many routing and DSP stuffs. The only smartphone we have went through all the step is Xiaomi Redmi Note 9 Pro. 