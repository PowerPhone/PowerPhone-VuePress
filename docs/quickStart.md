---
title: Quick Start
date: 2023/08/16
---

We are providing custom ROMs for you to quickly enjoy the benefit brought by PowerPhone. 

## 1. Supported Smartphones ##

Make sure you have one of the following smartphones:

| Brand | Model | Codename |
| ----- | ----- | -------  |
| Motorola| Edge (2020) | racer |
| Xiaomi | Redmi Note 9 Pro | joyeuse |
| Samsung | Galaxy S9+ (Snapdragon version) | star2qltechn |
| Samsung | Galaxy S10 (Exynos version) | beyond1lte |

(Results shown in the paper are mostly done using **racer**.) 

If you don't have above-mentioned smartphones, please check [Smartphones Model Info](/docs/supportedSmartphones.md) to see if you can access smartphones that are similar to above-mentioned and are *possible* compatible to our published system images.

Or you can [reconfigure a smartphone from scratch](/docs/hack.md). 

::: warning
Check [Smartphones Model Info](/docs/supportedSmartphones.md) carefully before purchasing a smartphones. Depends on the country / region, the same smartphone may be advertised as a completely different model name, and the same model name may represent a different smartphone.
:::

## 2. Tooling  ##
You will need to install [Android SDK Platform-Tools](https://developer.android.com/tools/releases/platform-tools) to access the command-line utilities we're going to use such as `adb` and `fastboot`. After downloading, unzip it to your desired location, and add it to your environment variable `$PATH`. 

Samsung does not implement fastboot, therefore you will need [Odin](https://samsungodin.com/) (Windows GUI) or [Heimdall suite](https://androidfilehost.com/?w=files&flid=304516)(Multi-platform CLI)

## 3. Unlock Bootloader ##

On factory-setting, the bootloader of the Android smartphones is locked, meaning it can only flash signed images from the manufacturer. We need to unlock it before applying our systems. In general, by Googleing "PHONE_MODEL unlock bootloader" should lead you to tutorials of this producers. Helpful links: 

* [Bootloader overview](https://source.android.com/docs/core/architecture/bootloader).
* [Apply for unlocking Mi devices](https://en.miui.com/unlock/index.html).
* [Unlock Motorola devices](https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a)

Note that bootloader locks are different from the [carrier locks](https://en.wikipedia.org/wiki/SIM_lock), though normally you will need to unlock carrier locks before unlocking bootloader. 

::: warning
You will lost all data after unlocking. A smartphone with a unlocked bootloader is extremely vulnerable. Never do this on your personal daily-used smartphone.
:::

::: info
Samsung officials do not support unlocking Qualcomm Snapdragon devices sold in North America region. The only way to unlock such devices is exploiting security vulnerabilities or buying unlocking services from grey market. Samsung smartphones with Snapdragon SoC sold in Asia should be generally fine.  
:::

## 4. Flash Custom Custom Recovery Image ##

1. Download custom recovery image from our [Release](https://github.com/PowerPhone/PowerPhone/releases).
2. Reboot smartphone to bootloader mode by running `adb reboot bootloader`.
3. Flash custom recovery by `fastboot flash recovery xxxxx.img`. For Samsung smartphones, you'll need [Odin](https://samsungodin.com/) to do so.
4. Reboot to recovery through `fastboot reboot recovery`. For Samsung smartphones, reboot to recovery through volume keys.

::: warning
If operate incorrectly, this step may brick your smartphone.
:::

## 4. Flash Our System Image ##

1. Download our system image (.zip) from our [Release](https://github.com/PowerPhone/PowerPhone/releases).
2. Reboot into custom recovery through `fastboot reboot recovery` if you are in bootloader mode, or through `adb reboot recovery` if you are in the Android system.
3. In the custom recovery, find and enter "ADB Sideload" mode.
4. On the computer, run `adb sideload xxxx.zip` to install our Android distribution.

## 5. Play & Record Audios ##

1. Run `adb root` to get root privilege.
2. Run `adb shell` to enter the shell of the smartphone.
3. Create a playground working directory for yourself `mkdir /data/tmp/`.
4. Explore [scripts](https://github.com/PowerPhone/PowerPhone) in our repo. 
5. Copy corresponding script to your working directory.
6. Use our scripts to play and / or record audio from/to files.
7. You can use `adb pull` and `adb push` commands to fetch / send files to the smartphone. 