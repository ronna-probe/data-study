# 데이터 분석 과정

AICE basic 공부할 때 사용했던 AIDUez를 통해 Titanic 데이터 분석 과정을 살펴보았다.

---

## 분석 흐름

데이터 이해 → 패턴 탐색 → 관계 분석 → 데이터 전처리 → 모델 학습 → 예측

---

## 1. 데이터 로드 및 구조 확인

Titanic 데이터를 불러오고 전체 구조와 컬럼 정보를 확인하였다.

<img width="1198" height="798" alt="aidu_load_data" src="https://github.com/user-attachments/assets/b41c692a-9164-4685-aeed-cc6dc8a1d71f" />

---

## 2. 탐색적 데이터 분석 (EDA)

다음으로 EDA(탐색적 데이터 분석)를 통해 데이터 분포와 특징을 확인하였다.
- 변수 구성, 데이터의 형태, 결측치 존재 여부 등 파악
- 승객의 성별, 나이, 객실 등급 등 주요 변수 분포 분석

<img width="1196" height="798" alt="aidu_eda" src="https://github.com/user-attachments/assets/80cad91b-12fd-4876-987a-17086f2c2c35" />

---

## 3. 변수 간 상관관계 분석 (Correlation Heatmap)

Heatmap을 통해 변수 간 상관관계를 시각화하였다.
이를 통해 생존 여부와 상대적으로 관련성이 높은 변수들을 확인하였다.

<img width="1198" height="795" alt="aidu_heatmap" src="https://github.com/user-attachments/assets/d810168c-d1df-459f-af01-ddd14ff478e2" />

---

## 4. 데이터 전처리

Age, Embarked 등 주요 변수의 결측치를 확인하였다.
데이터 특성에 맞는 방식으로 결측치를 보완하여 분석 및 모델링이 가능하도록 전처리하였다.

<img width="1197" height="798" alt="aidu_missing_values" src="https://github.com/user-attachments/assets/cb3ea05d-3952-4ef7-8acb-2b84333c3236" />

---

## 6. 생존 예측 모델 (Logistic Regression)

Logistic Regression 모델을 사용하여 생존 여부를 예측하도록 학습을 진행하였다.
데이터를 기반으로 생존 확률을 추정하는 이진 분류 문제로 정의하였다.

<img width="1198" height="796" alt="aidu_logistic_regression" src="https://github.com/user-attachments/assets/6ed8f0b2-ce96-4062-89f4-aa8c503dc966" />

---

## 7. 예측 결과 확인 및 평가

학습된 모델을 기반으로 생존 여부를 예측하고 결과를 확인하였다.

<img width="1197" height="794" alt="aidu_prediction" src="https://github.com/user-attachments/assets/d6dfa9a2-3a04-4be9-b4ce-bcdce7f3c3a1" />
