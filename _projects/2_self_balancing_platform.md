---
layout: page
title: Self-Balancing Platform via Reinforcement Learning
description: Sim-to-real RL for a 2-DOF self-balancing platform, deployed on low-power hardware.
video: https://www.youtube.com/embed/c2jNfePjQmM
importance: 2
category: class-project
---

Trained a 2-DOF self-balancing platform in the MuJoCo physics simulator using policy optimization. The training and inference pipeline combined MuJoCo, Gym, PyTorch, and TensorFlow. Achieved successful sim-to-real transfer via TFLite model quantization for low-power hardware inference, outperforming model-based approaches for balancing an object on a wobbling surface.

<div class="video-embed-large">
{% include youtube_facade.liquid id="c2jNfePjQmM" %}
</div>

[Code](https://github.com/bikcrum/self-balancing-platform)
