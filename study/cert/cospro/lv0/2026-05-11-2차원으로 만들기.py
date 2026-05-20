# 2차원으로 만들기

## 출처
https://school.programmers.co.kr/learn/courses/30/lessons/120842

## 문제
정수 배열 num_list와 정수 n이 주어진다.
num_list를 앞에서부터 n개씩 나눠 2차원 배열로 변환하여 반환한다.

예:
num_list = [1,2,3,4,5,6,7,8], n=2
→ [[1,2], [3,4], [5,6], [7,8]]

## 접근
- 오이를 썰어나가는 것처럼, 반복문을 써서 간단하게 처리할 수 있다.
- 동일 구조가 반복되는 상황이므로, 재귀함수로 문제를 해결할 수 있다.

## 코드

### 재귀
```python
def chunked_list(num_list, n):
    if not num_list:
        return []
 
    return [num_list[:n]] + chunked_list(num_list[n:], n)
```

### 반복문(1)
```python
def chunked_list(num_list, n):
    result = []
    
    for i in range(0, len(num_list), n):
        result.append(num_list[i:i+n])
    
    return result
```

### 반복문(2)
```python
def chunked_list(num_list, n):
    return [num_list[i:i+n] for i in range(0, len(num_list), n)]
```

## 정리
- 반복문, 재귀함수 모두 시간 복잡도는 O(n)이다.
- 콜스택까지 고려하면 재귀함수보다 반복문이 더 효율적인 듯 하다.
