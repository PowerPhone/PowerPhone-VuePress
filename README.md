---
home: true
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
modules:
  - BannerBrand
  - Banner
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
banner:
  heroText: 'Video Will Be Uploaded Soon'
---

![](/logo.svg)

## Features
PowerPhone reconfigures selected Android smartphones to support high-sampling-rate recording and playing on their built-in microphones and speakers. Such high sampling rates bring many benefits to **acoustic sensing**. Specifically:

* **Finer Resolution**: We improved the resolution of the acoustic sensing on smartphones using single microphone to **1cm**.
* **Finer Granularity**: We push the sensing granularity of subtle movements to **2μm** and show the feasibility of turning the smartphone into a micrometer-level machine vibration meter.
* **Longer Range**:  We increase the sensing range to **6m** and showcase room-scale human presence detection using a smartphone.
* **More Applications**:  With much higher Nyquist frequency (i.e. **96kHz**), PowerPhone can enable many new applications that were previously infeasible. 

## Steps

1. Have a [supported smartphone](/docs/supportedSmartphones.md).
2. [Unlock bootloader](/docs/quickStart.md).
3. [Flash recovery image](/docs/quickStart.md).
4. [Flash system image](/docs/quickStart.md).
5. You're ready to go!

## Authors
[Shirui Cao*](https://github.com/charlescao460) - PhD Student, CICS, University of Massachusetts Amherst

[Dong Li*](https://people.cs.umass.edu/~dli/) - PhD Candidate, CICS, University of Massachusetts Amherst

[Sunghoon Ivan Lee†](https://groups.cs.umass.edu/ahha/) - Principal Investigator, CICS, University of Massachusetts Amherst

[Jie Xiong†](https://people.cs.umass.edu/~jxiong/) - Principal Investigator, CICS, University of Massachusetts Amherst

\* Equal contribution. † Co-corresponding authors.

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
  url={https://doi.org/10.1145/3570361.3613270},
  doi={10.1145/3570361.3613270}
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

## License
Unless otherwise restricted, all source codes, code snippets and source files are released under [MIT License](https://github.com/PowerPhone/PowerPhone/blob/main/LICENSE). Unless otherwise restricted, all documents, instructions, videos, images, and other contents are released under [Creative Commons CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/).

Please note that the Linux driver codes are under [GPL license](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html), and the published paper is copyright owned by [ACM](https://www.acm.org/publications/policies/publication-rights-and-licensing-policy). 


## Terms
### Disclaimer
<p style="line-height:120%;font-size:10px;">
Our system images are specifically built for acoustic sensing research and are outdated without necessary security updates. Never use it on your daily-used smartphone. 
<br/><br/>
All information and files — both in source and compiled form — are provided on an as is basis. No guarantees or warranties are given or implied. The user assumes all risks of any damages that may occur, including but not limited to loss of data, damages to hardware, or loss of business profits. Please use at your own risk. 
<br/><br/>
Certain images, logos, pictures, and other works originating with organizations other than us may be or are the trademarks and/or servicemarks of those other organizations and are subject to the laws of their registered countries. Our usage constitutes a ‘fair use’ of any such copyrighted material as provided for in section 107 of the US Copyright Law. If you wish to use copyrighted material from this site for purposes of your own that go beyond ‘fair use’, you must obtain permission from the copyright owner. Requests for removal of copyright material may be sent to any of the paper's authors through email. 
</p>

### Privacy Policy
<p style="line-height:120%;font-size:10px;">
As is true of most websites, we gather some information automatically and store it in log files. This information includes Internet Protocol (IP) addresses, browser type (and version) and language, Internet service provider (ISP), referring and exit pages, operating system, date/time stamp, and clickstream data. We do not share your information with third-parties.
</p>