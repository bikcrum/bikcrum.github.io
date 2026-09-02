---
layout: page
title: Bipedal Obstacle Avoidance and Point-Goal Navigation (Cassie)
description: Vision-augmented heuristic navigation layered on top of a blind RL locomotion controller.
video: https://www.youtube.com/embed/a1FWJLUHkkQ
importance: 4
category: capstone
---

Cassie's blind RL locomotion controller — known for setting the Guinness world record for fastest 100m bipedal run — takes only high-level speed commands and proprioception as input, so it fails when it needs to react to terrain such as stepping on a block or avoiding an obstacle. This project added a depth camera and built an autonomous navigation heuristic on top of the controller, enabling Cassie to navigate terrain with obstacles without relying on constant user commands.

<div class="video-embed-large">
{% include youtube_facade.liquid id="a1FWJLUHkkQ" %}
</div>
