---
layout: page
title: Fall Recovery for the D1H Wheeled-Biped Robot
description: RL policy for a D1H wheeled-biped robot that autonomously recovers from any fall, trained in MjLab with a gated sparse reward and no reference motion.
video: https://www.youtube.com/embed/oWZmIzgQfwY
importance: 5
category: explorations
---

Trained a reinforcement learning policy for autonomous fall recovery on a D1H wheeled-biped robot in MjLab simulation, using only a gated sparse reward that incentivizes uprightness, without any reference motion, trajectory, or supervision on lower joint positions. Regardless of how the robot is started, knocked down, or how it lands, the policy recovers to standing on its own and continues to track commands normally afterward.

<div class="video-embed-large">
{% include youtube_facade.liquid id="oWZmIzgQfwY" %}
</div>
