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

{% if categ == "SICP" %}
This section contains all of my notes and solutions to exercises for <a href="https://en.wikipedia.org/wiki/Structure_and_Interpretation_of_Computer_Programs" title="SICP Wikipedia Page">Structure and Interpretation of Computer Programs</a> (SICP) (<a href="https://web.mit.edu/6.001/6.037/sicp.pdf" title="SICP PDF">pdf</a>). I also use the <a href="https://en.wikipedia.org/wiki/Structure_and_Interpretation_of_Computer_Programs,_JavaScript_Edition" title="SICP JS Wikipedia Page">JavaScript edition</a> (<a href="https://sicp.sourceacademy.org/sicpjs.pdf" title="SICP JS PDF">pdf</a>) together with the original one.
{% endif %}

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
