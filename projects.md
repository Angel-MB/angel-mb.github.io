---
layout: page
title: Projects
permalink: /projects/
---

<p>Below is a selection of electrical engineering projects I’ve worked on, ranging from breadboard prototypes to HDL designs. Click on any project to view more details.</p>

<div class="project-grid">
{% for project in site.projects %}
  <div class="project-card">
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    {% if project.summary %}
    <p>{{ project.summary }}</p>
    {% endif %}
  </div>
{% endfor %}
</div>