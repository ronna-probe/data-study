# 데이터 분석 과정

AICE basic 공부할 때 사용했던 AIDUez를 통해, Titanic 데이터 분석 과정을 살펴보았다.

---

## 분석 흐름

본 분석은 KDD(Knowledge Discovery in Databases) 프로세스 흐름을 따라 진행하였다.

- Selection
- Preprocessing
- Transformation
- Data Mining
- Interpretation/Evaluation

---

## 1. Selection (데이터 선택 및 이해)

분석을 위해 수집한 데이터를 불러오고 전체 구조와 컬럼 정보를 확인하였다.

<img width="1198" height="798" alt="aidu_load_data" src="https://github.com/user-attachments/assets/b41c692a-9164-4685-aeed-cc6dc8a1d71f" />

---

## 2. Preprocessing (데이터 전처리 준비 및 EDA)

다음으로 EDA(탐색적 데이터 분석)를 통해 데이터 분포와 특징을 확인하였다.
- 변수 구성, 데이터의 형태, 결측치 존재 여부 파악
- 승객의 성별, 나이, 객실 등급 등 주요 변수 분포 분석

<img width="1196" height="798" alt="aidu_eda" src="https://github.com/user-attachments/assets/80cad91b-12fd-4876-987a-17086f2c2c35" />

---

## 3. Transformation (데이터 변환 및 관계 분석)

Heatmap을 통해 변수 간 상관관계를 분석하고 생존과 관련성이 높은 변수를 확인하였다.

<img width="1198" height="795" alt="aidu_heatmap" src="https://github.com/user-attachments/assets/d810168c-d1df-459f-af01-ddd14ff478e2" />

모델 학습을 위한 데이터 형태로 변환을 준비하였다.

<img width="1197" height="798" alt="aidu_missing_values" src="https://github.com/user-attachments/assets/cb3ea05d-3952-4ef7-8acb-2b84333c3236" />

---

## 4. Data Mining (모델 학습)

Logistic Regression을 사용하여 생존 여부를 예측하는 모델을 학습하였다.
데이터를 기반으로 생존 확률을 추정하는 이진 분류 문제로 정의하였다.

<img width="1198" height="796" alt="aidu_logistic_regression" src="https://github.com/user-attachments/assets/6ed8f0b2-ce96-4062-89f4-aa8c503dc966" />

---

## 5. Interpretation / Evaluation (결과 해석 및 평가)

학습된 모델을 기반으로 생존 여부를 예측하고 결과를 확인하였다.

<img width="1197" height="794" alt="aidu_prediction" src="https://github.com/user-attachments/assets/d6dfa9a2-3a04-4be9-b4ce-bcdce7f3c3a1" />
