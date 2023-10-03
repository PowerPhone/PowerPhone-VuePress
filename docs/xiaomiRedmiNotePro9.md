---
title: Flush Redmi Note 9 Pro
date: 2023/08/16
---

## I. Unlock Bootloader
Search "Samsung S9 plus unlock bootloader" should lead you to some useful links about how to unlock the bootloader. You need apply through [Xiaomi Officials](https://en.miui.com/unlock/index.html) to get the unlocking keys. 

## II. Flash Official Android 11 ROM
1. Download the official ROM `joyeuse_global_images_V12.5.7.0.RJZMIXM_20220428.0000.00_11.0_global` from our [Release](https://github.com/PowerPhone/PowerPhone/releases/tag/release) page. Note that this is a multi-partition RAR archive. Therefore, you will need to download all 3 parts of them.
2. Boot into bootloader through `adb reboot bootloader` or through pressing "Volume Down" + "Power" buttons when the devices is off. 
3. Execute `flash_all.bat` script inside the decompressed directory (or `flash_all.sh` if Linux or MacOS) to flash the official ROM.
4. Once the official ROM installed and you booted to the Android launcher, you can proceed to the next step.

## III. Flush Custom Recovery
1. Boot into bootloader through `adb reboot bootloader` or through pressing "Volume Down" + "Power" buttons when the devices is off. 
2. Download `recovery-miatoll.img` from our [Release](https://github.com/PowerPhone/PowerPhone/releases/tag/release) page.
3. Flush our custom recovery `fastboot flash recovery recovery-miatoll.img`
4. Reboot to our new recovery through `fastboot reboot recovery`
5. Sideload `recovery-miatoll.img` in the recovery ("Apply Update" -> "Apply from ADB").

## IV. Flush System Image
1. If you are not in recovery, reboot into recovery: With the device powered off, hold Volume Down + Power, then select "Recovery mode" using Volume keys.
2. Tap Factory Reset - Format data / factory reset
3. Return to the main menu, select "Apply Update", then "Apply from ADB"
4. Sideload the system image by `adb sideload lineage-18.1-20220617-UNOFFICIAL-miatoll.zip`