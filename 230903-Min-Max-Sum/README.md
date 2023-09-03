# Min Max Sum Read Me

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

## Language

JavaScript

## Origin

HackerRank

## Example

> arr = [1, 3, 5, 7, 9]

The minimum sum is 1 + 3 + 5 + 7 = 16

The maximum sum is 3 + 5 + 7 + 9 = 24

The function prints:

```
16 24
```

## Idea for solve

> min sum = total sum - largest int
> max sum = total sum - smallest int

therefor iterate through array of ints to find:
1. total of all ints
2. smallest int
3. largest int