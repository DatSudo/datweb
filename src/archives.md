---
layout: "layouts/listPosts.html"
title: Posts
---

{% for year, posts in collections.posts | reverse | groupByYear %}
    <section data-year="{{ year }}" data-count="{{ posts.length }}">
        <h2>{{ year }}</h2>
        <ul>
        {% for post in posts %}
            <li>
                <span class="post-date">{{ post.date | removeYear }} - 
                <a href="{{ post.url }}">{{ post.data.title }}</a>
            </li>
        {% endfor %}
        </ul>
    </section>
{% endfor %}
