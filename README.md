---
home: true
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
modules:
  - BannerBrand
  - MdContent
bannerBrand:
  bgImage: '/bg.svg'
  title: PowerPhone
  description: Unleashing the Acoustic Sensing Capability of Smartphones
  tagline: > 
    ACM MobiCom 2023 Paper "PowerPhone: Unleashing the Acoustic Sensing Capability of Smartphones" 
  buttons:
    - { text: Get Started, link: '/docs/quickStart' }
    - { text: Cite, link: '/#citation' }
    - { text: Paper, link: '/2023ACM_Mobicom_PowerPhone.pdf', type: 'plain' }
    - { text: DOI, link: 'https://doi.org/10.1145/3570361.3613270', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/PowerPhone/PowerPhone' }
---

## Features
PowerPhone reconfigures selected Android smartphones to support high-sampling-rate recording and playing on their built-in microphones and speakers. Such high sampling rates bring many benefits to **acoustic sensing**. Specifically:

* **Finer Resolution**: We improved the resolution of the acoustic sensing on smartphones using single microphone to **1cm**.
* **Finer Granularity**: We push the sensing granularity of subtle movements to **2μm** and show the feasibility of turning the smartphone into a micrometer-level machine vibration meter.
* **Longer Range**:  We increase the sensing range to **6m** and showcase room-scale human presence detection using a smartphone.
* **More Applications**:  With much higher Nyquist frequency (i.e. **96kHz**), PowerPhone can enable many new applications that were previously infeasible. 


## Video

TBD

## Get Started

1. Have a [supported smartphone](/docs/quickStart.md).
2. [Unlock bootloader](/docs/quickStart.md).
3. [Flash recovery image](/docs/quickStart.md).
4. [Flash system image](/docs/quickStart.md).
5. You're ready to go!

## Citation
If you use this project or its artifacts in your research, please cite:
:::: code-group
::: code-group-item LaTex
```latex
@inproceedings{powerphone,
  title={PowerPhone: Unleashing the Acoustic Sensing Capability of Smartphones},
  author={Cao*, Shirui and Li*, Dong and Lee, Sunghoon Ivan and Xiong, Jie},
  booktitle={Proceedings of the 29th Annual International Conference on Mobile Computing And Networking},
  year={2023},
  url = {https://doi.org/10.1145/3570361.3613270},
  doi = {10.1145/3570361.3613270}
}
```
:::
::: code-group-item ACM Ref
```
Shirui Cao∗, Dong Li∗, Sunghoon Ivan Lee, Jie Xiong. 2023. Power-
Phone: Unleashing the Acoustic Sensing Capability of Smartphones.
In The 29th Annual International Conference on Mobile Computing
and Networking (ACM MobiCom ’23), October 2–6, 2023, Madrid,
Spain. ACM, New York, NY, USA, 16 pages. https://doi.org/10.1145/
3570361.3613270
```
:::
::::