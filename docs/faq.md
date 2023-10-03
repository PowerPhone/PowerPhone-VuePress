---
title: FAQ & Troubleshooting
date: 2023/08/16
---

::: tip
**If you encounter any problem that is not discussed in this website, feel free to email us through the address in the paper. Alternatively, you can [create an issue](https://github.com/PowerPhone/PowerPhone/issues), so the problem-solving process can be fully documented and viewed by others.**
:::

### Q: The smartphone manufacturer does not provide me the unlocking keys, what should I do? 
Unlocking bootloader will soon be considered as "illegal" in China mainland according to [MIIT 2022-269 Administrative Regulation](http://www.cac.gov.cn/2022-12/14/c_1672656825925035.htm). So if your smartphone is from a Chinese manufacturer (basically all Android smartphones other than Samsung and Google), it is likely you cannot get the unlocking keys from the officials. But still the unlocking is possible. For example:
1. You may join the "insider" program of the manufacturer to access their beta system, which will normally unlock you bootloader as well.
2. You may join the developer program of the manufacturer.
3. You may find a third-party unlocking tool online.
4. You may find unlocking services through [XDA Forum](https://forum.xda-developers.com/), [Taobao](https://world.taobao.com/) or Telegram groups.

### Q: I followed all the steps found online, but the "OEM Unlocking" option is still not available.
1. Make sure you don't have PIN, Gesture, Fingerprint or any kind of locked screen.
2. Some smartphones require you connect to the internet before unlocking bootloader.
3. Some smartphones require you to log-in their account (e.g. Mi account) before unlocking.
4. Some smartphones needs you to wait a few weeks after the first activation, before you can unlocking the phone.
5. Make sure your carrier lock are unlocked first.

### Q: I entered the bootloader, but my computer doesn't recognize the smartphone.
1. Install drivers of your smartphones under bootloader mode. Such driver can be found online.
2. Make sure you plug the USB cable before turning on the smartphone.
3. Consider change a different USB port, a different USB cable (A-to-C is recommended, C-to-C normally not work). Though weird, some smartphones only work on computers with Intel CPUs. Adding or removing a USB hub might also help.

### Q: My smartphone is bricked. How do I save it?
There two kinds of brick - soft brick and hard brick. If you can still enter the bootloader through volume keys, it's a **soft brick**, which can be simply fixed by flashing a full official ROM.

If you cannot enter the bootloader and the smartphone is in a boot logo loops, or keep black or white, you got a **hard brick**. Hard brick means nothing in your flash can boot the smartphone, and it is harder to repair. There are still some ways to save it:
1. Try to enter the [EDL mode](https://en.wikipedia.org/wiki/Qualcomm_EDL_mode) and find a corresponding EDL images to save your smartphone. 
2. Open the backplate, find the flash, remove it with a hot wind, then use a eMMC or UFS reader to write a full image to it.

In the worst case, you can look for customer service of the smartphone. 

### Q: I got error complaining the model is not correct when flashing S9+, what should I do?
If you are sure your smartphone is a Samsung S9 Plus with Snapdragon SoC, you can suppress the model check in the file `lineage_star2qltechn-ota-eng.ubuntu.zip/META-INF/com/google/android/updater-script`.

::: danger
If you suppress the check but the smartphone is indeed wrong, you may permanently brick it.
:::