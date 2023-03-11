---
layout: "layouts/listPosts.html"
title: "Posts"
numLatestPostShow: 10
---

<h2>Latest posts</h2>

<ul class="posts-container">
    {% set latestPosts = collections.posts | reverse %}
    {% for post in latestPosts.slice(0, numLatestPostShow) %}
        {% set postDate = post.date | htmlDateString %}
        <li>
            <span class="post-date">{{ postDate }}</span> - 
            <a href="{{ post.url }}">{{ post.data.title }}</a>
        </li>
    {% endfor %}
</ul>

<h2>Categories</h2>

<ul class="categs-container categs">
    {% for category in collections.categsList %}
    	{% set categUrl %}/posts/category/{{ category | slugify }}/{% endset %}
        <li><a href="{{ categUrl }}" class="post-categ">{{ category }}</a></li>
    {% endfor %}
</ul>

<h2>Tags</h2>

<ul class="tags-container tags">
    {% for tag in collections.tagsList %}
    	{% set tagUrl %}/posts/tag/{{ tag | slugify }}/{% endset %}
        <li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a></li>
    {% endfor %}
</ul>

<div class="archives-link">
<a class="archives-link" href="/archives">Archives</a>
</div>
