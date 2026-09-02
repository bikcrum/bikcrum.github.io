---
layout: page
title: Learning to Face a Chair from Egocentric Depth
description: RL policy that orients a robot to face a chair using only an onboard depth camera, no external sensing.
video: https://www.youtube.com/embed/ufZNADHzrqg
importance: 8
category: explorations
---

Trained a reinforcement learning policy for a robot to turn and face the front of a chair using only an egocentric depth camera as input, with no external motion capture, localization, or other sensing of the chair. The behavior is fully learned end-to-end, with no hand-crafted heuristics.

<div class="video-embed-large">
{% include youtube_facade.liquid id="ufZNADHzrqg" %}
</div>

Simulation result:

<div class="video-embed-large">
{% include youtube_facade.liquid id="8w6ZdPyhS2M" %}
</div>
