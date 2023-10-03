---
title: Flash Galaxy S9+ Snapdragon
date: 2023/08/16
---

## I. Unlock Bootloader
Search "Samsung S9 plus unlock bootloader" should lead you to some useful links about how to unlock the bootloader. Depends on your country and carrier, steps may varies. But there are plenty source online.

::: info
If your Samsung smartphone with Snapdragon SoC is U.S. version, you won't be able to unlock its bootloader unless you purchase a grey-market unlocking service or a third-part tool that exploit the security vulnerability.
:::

## II. Flash The Official ROM
We need to flash the official ROM first so the firmware is updated and compatible to our images.

1. Samsung does not incorporate Android's fastboot scheme. You need a utility tool such as [Odin](https://samsungodin.com/) to be able to flash it.
2. Download the official ROM `Samfw.com_SM-G965U1_XAA_G965U1UES9FUB1_fac.rar` from our [release](https://github.com/PowerPhone/PowerPhone/releases/tag/release) page. Note that this image consists of multiple files due to GitHub file size limit. So you will need to download all 3 parts and decompress it.
3. Boot into bootloader through `adb reboot bootloader`. Or you can press "Volume Down" + "Bixby" + "Power" buttons when the device is off. 
4. Flash the official ROM with the files you just decompressed. Note that the CSC partition should use the file starts with `HOME_CSC_`.
5. Once the official ROM installed and you booted to the Android launcher, you can proceed to the next step.

::: warning
When flashing, make sure the "lock bootloader" is not selected. Otherwise you will need to unlock it again.
:::

## III. Flash Custom Recovery

1. Download our the custom recovery `USERDATA_AIO_G965U_ZYGISK_FORCE_WIPE_2022_06_02.tar.md5` from our [release](https://github.com/PowerPhone/PowerPhone/releases/tag/release) page. 
2. Flash it using Odin. To enter the bootloader, use `adb reboot bootloader` when you are in the Android system. Or you can press "Volume Down" + "Bixby" + "Power" buttons when the device is off. 
3. You can use the volume keys and power keys to navigate in the bootloader. Select recovery and reboot to our newly flashed recovery. Or you can press "Volume Up" + "Bixby" + "Power" buttons when the device is off.
## IV. Flash System Image
1. Once you enter the custom recovery. Wipe the user data through the UI.
2. Download our system image `lineage_star2qltechn-ota-eng.ubuntu.zip` from [release](https://github.com/PowerPhone/PowerPhone/releases/tag/release) page.
3. Enter the ADB sideload mode under the recovery, then sideload our image using `adb sideload lineage_star2qltechn-ota-eng.ubuntu.zip`.



