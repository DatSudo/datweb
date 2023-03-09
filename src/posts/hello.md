---
title: Hello 11ty!
postDescription: "This is just going to be a lab for testing some markdown stuff and custom short codes."
tags: [misc]
categories: [Random]
---

I *somewhat* finally finished this first personal website of mine with the help of [11ty](https://11ty.dev).

![Image alt](/assets/images/cat.webp "Image title")

Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Can you do some `inline code like this`? Can you do some footer shit?[^1]

[^1]: This is a footer.

**Code blocks**

```python
def main() -> None:
    print("Hello 11ty!")
```

```c
#include <stdio.h>

int main(void) {
    printf("Hello 11ty!\n");
    return 0;
}
```

```scheme
(define (square x)
    (* x x))
```

**Inline links**

Search at [Google](https://google.com).

**Task lists**

- [X] Task 1
- [ ] Task 2

**Lists**

- List 1
    - List 1.1
        - List 1.1.1
- List 2

**Tables**

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

| abc | def |
| --- | --- |
| bar |
| bar | baz | boo |

**Math $(\mathbb{Z})$**

$$
\text{Fib}(n) = \begin{cases}
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

**Quote**

{% Quote "This is a quote", "Some dude", "A Quote" %}
{% Quote "Another quote", "", "Second Quote" %}
{% Note "This is a note" %}
{% set secNote %}
$$
\\f(x)=\begin{cases}
            2x+1 & x > 1 \\\\
            x+3 & \text{otherwise}
        \end{cases}
$$
{% endset %}
{% Note secNote, "Second Note" %}
{% Info "A new info" %}
{% Warning "A new warning" %}
{% Question "A question" %}

# Header 1

## Header 2

### Header 3

#### Header 4

Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.

### Header 3

Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
