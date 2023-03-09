---
layout: layouts/listPosts.html
title: Categories
pagination:
    data: collections.categsList
    size: 1
    alias: categ
    addAllPagesToCollections: true
permalink: /posts/category/{{ categ | slugify }}/
---

<h2>{{ categ }}</h2>

<ul>
    {% for post in collections.posts %}
        {% set postCategs = post.data.categories | default([]) %}
        {% if postCategs.includes(categ) %}
            <li>
                <span class="post-date">{{ post.date | htmlDateString }}</span> - 
                <a href="{{ post.url }}">{{ post.data.title }}</a>
            </li>
        {% endif %}
    {% endfor %}
</ul>
