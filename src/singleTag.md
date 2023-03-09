---
layout: layouts/listPosts.html
title: Tags
pagination:
    data: collections
    size: 1
    alias: tag
    addAllPagesToCollections: true
permalink: /posts/tag/{{ tag | slugify }}/
---

<h2>Tagged with <span class="single-tag">{{ tag }}</span></h2>

<ul>
    {% for post in collections[tag] %}
        <li><span class="post-date">{{ post.date | htmlDateString }}</span> - 
        <a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {% endfor %}
</ul>