# 약수 구하기 - 120897

## 문제 요약
자연수 n의 모든 약수를 오름차순으로 담은 리스트를 반환한다.

## 접근 방법
- 1부터 n까지 모두 탐색하는 방법은 정확하지만 비효율적이다.
- 약수는 쌍으로 존재하는 성질을 활용하여 탐색 범위를 줄인다.

## 코드
```python
def get_divisors(n):
    small = []
    large = []
  
    for x in range(1, int(n**0.5) + 1):
        if n % x == 0:
            small.append(x)
            if x != n // x:
                large.append(n // x)
                
    return small + large[::-1]
```

## 정리
- O(n) 탐색을 O(√n)으로 최적화한다.
- 2개의 버퍼를 활용하여 별도의 정렬 연산 없이 결과를 구성한다.
