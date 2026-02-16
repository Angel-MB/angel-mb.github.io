---
layout: page
title: Posts
permalink: /posts/
---

<p>Technical write‑ups and reflections are listed below in reverse chronological order.</p>

<ul class="post-list">
{% for post in site.posts %}
  <li class="post-item">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span style="display:block; font-size:0.8rem; color: var(--color-pink);">{{ post.date | date: '%B %d, %Y' }}</span>
  </li>
{% endfor %}
</ul>