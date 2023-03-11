---
layout: "layouts/base.html"
title: "Contact"
---

## Contact

You can message me at

<div class="contact-list">
<ul>
    <li><i class="fa-solid fa-envelope"></i> Email: <img src="/assets/images/email.webp" class="email-img" alt="Email address" title="My email address"></li>
    <li><i class="fa-brands fa-linkedin"></i> <a href="https://linkedin.com/in/{{ metadata.author.linkedin }}" title="My LinkedIn profile">LinkedIn</li>
    <li><i class="fa-brands fa-discord"></i>
        <a href="https://discordapp.com/users/{{ metadata.author.discordid }}" title="My Discord account"> 
        Discord</a></li>
</ul>
</div>

### Other links

<div class="contact-list">
<ul>
    <li><i class="fa-solid fa-key"></i> <a title="My PGP Key" href="{{ '/assets/docs/datsudo.txt' | url }}"> PGP Key</a></li>
    <li><i class="fa-brands fa-square-github"></i> <a href="https://github.com/{{ metadata.author.github }}" title="My GitHub profile">GitHub</a></li>
    <li><i class="fa-brands fa-square-gitlab"></i> <a href="https://gitlab.com/{{ metadata.author.gitlab }}" title="My GitLab profile">GitLab</a></li>
</ul>
</div>