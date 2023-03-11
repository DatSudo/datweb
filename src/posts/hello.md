---
title: Hello World
description: "First post and a lab to test all the available markdown stuff that I can do with 11ty together with my custom configurations."
tags: ["first post"]
categories: [11ty]
---

I finally finished my personal website with the help of [11ty](https://11ty.dev) (eleventy). I tried to make this website minimal as possible with its styling and components, but also usable, in a sense that I can conveniently use some markdown syntaxes that I am familiar with from using [Obsidian.MD](https://obsidian.md). This is also my first encounter with some web development tools aside from HTML and CSS such as Node.js, `npm`, Javascript, and [Nunjucks](https://mozilla.github.io/nunjucks/) for templating. Hence $90\\%$ of the development process is just me searching on the internet for solutions or reading documentations, and tweak them based on my needs. The other $10\\%$ is me implementing my knowledge of general concepts in programming.

---

## Markdown test

### Embedding images and YouTube videos

Default markdown syntax for embedding images:

```md
![alt](/image/path "title")
![An image of a cat](/assets/images/cat.webp "Cat")
```

![An image of a cat](/assets/images/cat.webp "Cat")

For YouTube videos, the link must be in a separate line with one blank line before and after of it. For embedding two or more videos in a row, there must be two blank lines between them.

```md
...some content

https://www.youtube.com/watch?v=dQw4w9WgXcQ

...some content
```

https://www.youtube.com/watch?v=dQw4w9WgXcQ

### Tables

```md
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

| abc | def |
| --- | --- |
| bar |
| bar | baz | boo |
```

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

| abc | def |
| --- | --- |
| bar |
| bar | baz | boo |

### Lists

```md
- [x] Foo
- [ ] Bar
- [ ] Ham
- [x] Cheese
```

- [x] Foo
- [ ] Bar
- [ ] Ham
- [x] Cheese

```md
- Foo
    - Bar
        - Ham
            - Cheese
```

- Foo
    - Bar
        - Ham
            - Cheese

### Code blocks

```python
# Python
def greet(name) -> None:
    return f"Hello {name}!"


if __name__ == "__main__":
    for _ in range(11): 
        print(greet("11ty"))
```

```c
// C
#include <stdio.h>

int main(void) { int eleventy = 11; for (int i = 0; i < eleventy; ++i) { printf("Hello %dty!\n", eleventy); } return 0; }
```

```scheme
; Scheme
(define (square x)
    (* x x))

(display (square 5)) (newline)
```

### $\LaTeX \text{ Math}$

```md
$$
\text{Fib}(n) =
\begin{cases}
    1 & n < 2 \\\\ \\\\
    \text{Fib}(n-1) + \text{Fib}(n-2) & \text{otherwise}
\end{cases}
$$

$$
\begin{align}
\frac{a}{b} + \frac{c}{d} &= \frac{ad + bc}{bd}\\\\ \\\\
\frac{3}{2} + \frac{4}{7} &= \frac{3\cdot7 + 2\cdot4}{2\cdot7} \\\\ \\\\
&= \frac{21 + 8}{14} \\\\ \\\\
\frac{3}{2} + \frac{4}{7} &= \frac{29}{14}
\end{align}
$$
```

$$
\text{Fib}(n) =
\begin{cases}
    1 & n < 2 \\\\ \\\\
    \text{Fib}(n-1) + \text{Fib}(n-2) & \text{otherwise}
\end{cases}
$$

$$
\begin{align}
\frac{a}{b} + \frac{c}{d} &= \frac{ad + bc}{bd}\\\\ \\\\
\frac{3}{2} + \frac{4}{7} &= \frac{3\cdot7 + 2\cdot4}{2\cdot7} \\\\ \\\\
&= \frac{21 + 8}{14} \\\\ \\\\
\frac{3}{2} + \frac{4}{7} &= \frac{29}{14}
\end{align}
$$

### Admonitions

Admonitions follow this general syntax:

```md
!!! admonition_type title
Admonition content
!!!
```

!!! quote
This is a quote
!!!

!!! note A note
This is a note
!!!

!!! note Second Note
$$
f(x)=
\begin{cases}
    2x+1 & x > 1 \\\\
    x+3 & \text{otherwise}
\end{cases}
$$
!!!

!!! info
A new info

Footnote test.[^1]
!!!

[^1]: This is a footnote.

!!! warning
A new warning
!!!

!!! question
A new question
!!!

#### Quote with author

```md
{% raw %}{% Quote "Quote content", "Author" %}{% endraw %}
```

{% Quote "Quote content", "Author" %}