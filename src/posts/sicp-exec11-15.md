---
title: SICP Exercises 1.1 to 1.5
description: My solutions to SICP Exercises 1.1 to 1.5
categories: [SICP]
tags: [exercises]
---


## Exercise 1.1

The exercise gives a set of expressions and the task is to tell the result of each of them. Assume that the sequence is to be evaluated in the order in which it is presented.

```scheme
10
; Result -> 10

(+ 5 3 4)
; Result -> 12

(/ 6 2)
; Result -> 3

(+ (* 2 4) (- 4 6))
; (+ 8 -2)
; Result -> 6

(define a 3)
(define b (+ a 1)) ; 4
; Result -> No output. We're just defining a and b

(+ a b (* a b))
; (+ 3 4 (* 3 4))
; (+ 3 4 12)
; Result -> 19

(= a b)
; (= 3 4)
; Result -> #f (racket's notation for boolean value False)

(if (and (> b a) (< b (* a b)))
    b
    a)
; (and (> 4 3) (< 4 (* 3 4)))
; (and #t (< 4 12))
; (and #t #t)
; Result -> 4

(cond ((= a 4) 6)
      ((= b 4) (+ 6 7 a))
      (else 25))
; (= 3 4) -> #f
; (= 4 4) -> #t
; (+ 6 7 4)
; Result -> 17

(+ 2 (if (> b a) b a))
; (> 4 3) -> #t
; (+ 2 4)
; Result -> 6

(* (cond ((> a b) a) ; (> 3 4) -> #f
         ((< a b) b) ; (< 3 4) -> #t
         (else -1))
   (+ a 1))
; (* 4 (+ 3 1))
; (* 4 4)
; Result -> 16
```
___

## Exercise 1.2

Translate the following expression into prefix form:

$$
\frac{5+4+(2-(3-(6+\frac{4}{5})))}{3(6-2)(2-7)}
$$

```scheme
(/ (+ 5
      4
      (- 2 (- 3 (+ 6 (/ 4 5)))))
   (* 3
      (- 6 2)
      (- 2 7)))
```
___

## Exercise 1.3

> Define a procedure that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.

```scheme
(define (two-larger-sum-squares x y z)
    (define (square x)
        ; returns the square of a given number x
        (* x x))

    (define (sum-squares x y)
        ; returns the sum of the squares of x and y)
        (+ (square x) (square y))

    (define (larger-between-two x y)
        ; returns the larger integer between x and y
        (if (> x y) x y))

    (define (largest x y z)
        ; returns the largest integer from the given three integers
        (cond ((and (> x y) (> x z)) x)
              ((and (> y x) (> y z)) y)
              (else z)))

    (define (larger x y z)
        ; returns the larger integer from the given three integers
        (cond ((= (largest x y z) x) (larger-between-two y z))
                  ((= (largest x y z) y) (larger-between-two x z))
                  (else (larger-between-two x y))))
    
    (sum-squares (largest x y z)
                 (larger x y z)))
```
___

## Exercise 1.4

The task is to describe the behavior of the following expression:

```scheme
(define (a-plus-abs-b a b)
    ((if (> b 0) + -) a b))
```

!!! note Answer
The goal of the procedure is to return the sum of `a` and the absolute value of `b`. We can see from the `if` condition that it checks if `b` is greater than $0$ or not. If yes, the sign of the `b` should be kept positive, resulting to just adding `a` and `b`; if not, `b` is negative and the operator will become `-`, resulting to `a - -b` that is equivalent to `a + b`.
!!!
___

## Exercise 1.5

The task is to describe again the behavior of the following expressions that will be evaluated with an interpreter that uses applicative-order evaluation:

```scheme
(define (p) (p))
(define (test x y)
    (if (= x 0) 0 y))

(test 0 (p))
```

!!! note Answer
If the interpreter uses applicative-order evaluation,
before it evaluates the

```scheme
(test 0 (p))
```
it will first evaluate the `test`, `0` and `(p)`. `(p)` uses
the definition statement

```scheme
(define (p) (p))
```
But the procedure `(p)` also returns another procedure `(p)`, that returns another procedure `(p)`, that returns another `(p)` ..., making an infinite recursion!

Therefore, Ben will wait **infinitely**  for the expression to return the expected answer ($0$), because it satisfies the condition under the `(test)` procedure.
!!!

