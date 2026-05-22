AICE basic 공부할 때 사용했던 AIDUez를 통해 Titanic 데이터 분석 과정을 살펴보았다.

먼저 Titanic 데이터를 불러와 데이터의 전체적인 구조와 컬럼 정보를 확인하였다.

<img width="1198" height="798" alt="aidu_load_data" src="https://github.com/user-attachments/assets/b41c692a-9164-4685-aeed-cc6dc8a1d71f" />

다음으로 EDA(탐색적 데이터 분석)를 통해 데이터 분포와 특징을 확인하였다. 승객의 성별, 나이, 객실 등급 등의 정보를 살펴보며 생존 여부와의 관계를 분석하였다.

<img width="1196" height="798" alt="aidu_eda" src="https://github.com/user-attachments/assets/80cad91b-12fd-4876-987a-17086f2c2c35" />

이후 Heatmap을 사용하여 각 데이터 간 상관관계를 확인하였다. 이를 통해 생존 여부와 관련성이 높은 항목들을 파악할 수 있었다.

<img width="1198" height="795" alt="aidu_heatmap" src="https://github.com/user-attachments/assets/d810168c-d1df-459f-af01-ddd14ff478e2" />

또한 결측치(Missing Value)를 확인하고 처리하는 과정도 진행하였다. 특히 Age와 Embarked 등의 결측 데이터를 확인하고 적절한 값으로 채워 데이터 전처리를 수행하였다.

<img width="1197" height="798" alt="aidu_missing_values" src="https://github.com/user-attachments/assets/cb3ea05d-3952-4ef7-8acb-2b84333c3236" />

전처리 이후에는 Logistic Regression 모델을 사용하여 생존 여부를 예측하는 학습을 진행하였다.

<img width="1198" height="796" alt="aidu_logistic_regression" src="https://github.com/user-attachments/assets/6ed8f0b2-ce96-4062-89f4-aa8c503dc966" />

마지막으로 학습된 모델을 통해 예측 결과를 확인하였다. 이를 통해 데이터 분석과 머신러닝의 기본적인 흐름을 이해할 수 있었다.

<img width="1197" height="794" alt="aidu_prediction" src="https://github.com/user-attachments/assets/d6dfa9a2-3a04-4be9-b4ce-bcdce7f3c3a1" />
