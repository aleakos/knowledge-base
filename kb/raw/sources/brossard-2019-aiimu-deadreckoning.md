---
id: "brossard-2019-aiimu-deadreckoning"
type: "misc"
title: "AI-IMU Dead-Reckoning"
authors:
  - family: "Brossard"
    given: "Martin"
  - family: "Barrau"
    given: "Axel"
  - family: "Bonnabel"
    given: "Silvère"
year: 2019
date: "2019-04-12"
journal: null
volume: null
pages: null
doi: "10.48550/arXiv.1904.06064"
url: "http://arxiv.org/abs/1904.06064"
tags:
  - "engineering/numerical-methods"
domain: "engineering"
abstract: "In this paper we propose a novel accurate method for dead-reckoning of wheeled vehicles based only on an Inertial Measurement Unit (IMU). In the context of intelligent vehicles, robust and accurate dead-reckoning based on the IMU may prove useful to correlate feeds from imaging sensors, to safely navigate through obstructions, or for safe emergency stops in the extreme case of exteroceptive sensors failure. The key components of the method are the Kalman filter and the use of deep neural networks to dynamically adapt the noise parameters of the filter. The method is tested on the KITTI odometry dataset, and our dead-reckoning inertial method based only on the IMU accurately estimates 3D position, velocity, orientation of the vehicle and self-calibrates the IMU biases. We achieve on average a 1.10% translational error and the algorithm competes with top-ranked methods which, by contrast, use LiDAR or stereo vision. We make our implementation open-source at: https://github.com/mbrossar/ai-imu-dr"
has_pdf: true
pdf_path: "raw/pdfs/brossard-2019-aiimu-deadreckoning.pdf"
cite_key: "brossard_ai-imu_2019"
source_format: "bibtex"
ingested_at: "2026-04-05T04:32:14.911Z"
chunk_count: 0
---

## Summary

In this paper we propose a novel accurate method for dead-reckoning of wheeled vehicles based only on an Inertial Measurement Unit (IMU). In the context of intelligent vehicles, robust and accurate dead-reckoning based on the IMU may prove useful to correlate feeds from imaging sensors, to safely navigate through obstructions, or for safe emergency stops in the extreme case of exteroceptive sensors failure. The key components of the method are the Kalman filter and the use of deep neural networks to dynamically adapt the noise parameters of the filter. The method is tested on the KITTI odometry dataset, and our dead-reckoning inertial method based only on the IMU accurately estimates 3D position, velocity, orientation of the vehicle and self-calibrates the IMU biases. We achieve on average a 1.10% translational error and the algorithm competes with top-ranked methods which, by contrast, use LiDAR or stereo vision. We make our implementation open-source at: https://github.com/mbrossar/ai-imu-dr

## Metadata

- **Authors**: Martin Brossard, Axel Barrau, Silvère Bonnabel
- **Year**: 2019
- **DOI**: 10.48550/arXiv.1904.06064
- **PDF**: [[raw/pdfs/brossard-2019-aiimu-deadreckoning.pdf]]
