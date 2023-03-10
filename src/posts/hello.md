---
title: Hello World
postDescription: "First post and a lab to test all the available markdown stuff that I can do with 11ty together with my custom configurations."
tags: ["first post"]
categories: [11ty]
---

I finally finished this first personal website of mine with the help of [11ty](https://11ty.dev) (eleventy). I tried to make this website minimal as possible with its styling and components, but also usable, in a sense that I can conveniently use some markdown syntaxes that I am familiar with from using [Obsidian.MD](https://obsidian.md). This is also my first encounter with some web development tools aside from HTML and CSS such as Node.js, `npm`, Javascript, and [Nunjucks](https://mozilla.github.io/nunjucks/) for templating. Hence $90\\%$ of the development process is just me searching on the internet for solutions or reading documentations, and tweak them based on my needs. The other $10\\%$ is implementing my knowledge of general concepts in programming.

---

## Markdown test

### Embedding images and YouTube videos

The syntax for embedding images

```md
![alt](/image/path "title")
![An image of a cat](/assets/images/cat.webp "Cat")
```

![An image of a cat](/assets/images/cat.webp "Cat")

For YouTube videos, the link must be in a separate line with one blank space before and after. For embedding two or more videos in a row, there must be two blank lines between them.

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

int main(void) { for (int i = 0; i < 11; ++i) { printf("Hello 11ty!\n"); } return 0; }
```

```scheme
; Scheme
(define (square x)
    (* x x))
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

For this one, I maximize the use of [shortcodes](https://www.11ty.dev/docs/shortcodes/), one of 11ty's features, to mimick Obsidian.MD's  [admonitions](https://notes.nicolevanderhoeven.com/Obsidian+Admonition).

#### Quotes

```md
{% raw %}{% Quote content_of_a_quote, who_said_the_quote, admonition_title %}

{% Quote "This is a quote", "Some dude", "A Quote" %}
{% Quote "Another quote", "", "Second Quote" %}
{% endraw %}
```

Renders the following:

{% Quote "This is a quote", "Some dude", "A Quote" %}
{% Quote "Another quote", "", "Second Quote" %}

#### Note, info, warning, question

For the following admonitions, they follow this general syntax:

```md
{% raw %}{% AdmonitionType content, optional_title %}

{% Note content, optional_title %}
{% Info content, optional_title %}
{% Warning content, optional_title %}
{% Question content, optional_title %}
{% endraw %}
```

{% Note "This is a note" %}
{% set secNote %}
$$
\\f(x)=
\begin{cases}
    2x+1 & x > 1 \\\\
    x+3 & \text{otherwise}
\end{cases}
$$
{% endset %}

{% Note secNote, "Second Note" %}

{% Info "A new info" %}

{% Warning "A new warning" %}

{% Question "A question" %}
