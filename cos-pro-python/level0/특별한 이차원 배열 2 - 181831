# 특별한 이차원 배열 2

## 출처
https://school.programmers.co.kr/learn/courses/30/lessons/181831

## 문제
n × n 크기의 이차원 배열 arr이 주어질 때,
모든 i, j (0 ≤ i, j < n)에 대해 arr[i][j] == arr[j][i]를 만족하면 1, 아니면 0을 반환하는 함수를 작성한다.

## 접근
- 최소 시간복잡도는 O(n²)이며, 모든 (i, j) 쌍을 비교하면 문제를 해결할 수 있다.
- (i, j)와 (j, i)는 서로 같은 값을 비교하는 대칭 관계이므로, 전체를 탐색할 경우 동일한 비교가 중복 수행된다.
- 따라서 상삼각 영역을 확인하는 것만으로도 모든 조건을 확인할 수 있다.
- 즉, j를 i+1부터 탐색하여 비교 횟수를 반감시킬 수 있다.

## 코드
```python
def is_symmetric_matrix(arr):
    n = len(arr)
    
    for i in range(n):
        # 상삼각 영역만 탐색 (대칭 비교 중복 제거)
        for j in range(i + 1, n):
            if arr[i][j] != arr[j][i]:
                return 0
                
    return 1
```

## 정리
- 시간복잡도는 여전히 O(n²)이지만, 실제 연산량은 n(n−1)/2로 최적화된다.
- early return을 통해 불일치 발견 즉시 종료되어 불필요한 비교를 줄인다.

## 참고

### 1. all() 함수 활용
```python
def is_symmetric_matrix(arr):
    n = len(arr)

    # 모든 대칭 조건을 한 번에 검사
    # j를 i+1부터 시작하여 상삼각 영역만 탐색 (중복 비교 제거)
    return int(all(
        arr[i][j] == arr[j][i]
        for i in range(n)
        for j in range(i + 1, n)
    ))
```

### 2. 전치 행렬 생성
```python
def is_symmetric_matrix(arr):
    # 정사각행렬이 전치 행렬과 동일하면 대칭 행렬이다.
    transposed = [
        list(row)
        for row in zip(*arr)
    ]

    return arr == transposed
```

### 3. 상삼각 영역
- 정사각행렬의 대각선을 기준으로 위쪽에 위치한 영역을 상삼각 영역이라고 한다.
- 아래쪽 영역은 하삼각 영역이라고 한다.
- 이중 for문은 일반적으로 행을 기준으로 순회하기 때문에, 구현에서는 상삼각 영역만 순회하도록 구성하는 방식이 자연스럽다.
