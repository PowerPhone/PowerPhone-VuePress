---
title: Flash Motorola Edge 2020
date: 2023/08/16
---

## I. Flashing official Android 11 Images
Before applying any of our images and patches, please flash or upgrade to an official Android 11 system to keep the firmware in the right version.

(By clicking "Update" on the stock system should do this for you).

## II. Unlock Bootloader
Follow the instruction on this link: [Unlock Motorola devices](https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a)

## III. Flush Custom Recovery
1. Boot into bootloader through `adb reboot bootloader` or through pressing "Volume Down"+"Power" buttons when the devices is off. 
2. Use `fastboot devices` to see if the smartphones is recognized, if not you will need to install the driver for it.
3. Flush our custom recovery `fastboot flash recovery recovery-racer.img`
4. Reboot to our new recovery through `fastboot reboot recovery`
::: danger
If you skip the following step, you will brick your smartphone.
:::
5. Under the recovery, select "Apply Update", then "Apply from ADB" to begin sideload.
6. Run `adb sideload copy-partitions-20220613-signed.zip`. The file can be downloaded [here](https://github.com/PowerPhone/PowerPhone/releases/tag/release)
7. Now reboot to recovery by tapping "Advanced", then "Reboot to recovery". 

## IV. Flush System Image
1. If you are not in recovery, reboot into recovery: With the device powered off, hold Volume Down + Power, then select "Recovery mode" using Volume keys.
2. Tap Factory Reset - Format data / factory reset
3. Return to the main menu, select "Apply Update", then "Apply from ADB"
4. Sideload the system image by `adb sideload lineage_racer-ota-eng.ubuntu.zip`