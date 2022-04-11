<h1>Kidsney Shop</h1><br/><br/><br/>
<h2>Introduction</h2>


* 프로젝트 진행 기간 : 3월 28일 ~ 4월 8일
* 프로젝트 주제 : 커머스 웹사이트 클론 코딩하기
* 클론 코딩한 웹사이트 : 디즈니샵 https://www.shopdisney.com
* 구성 : Front-end 3명, Back-end 2명


<h2>Demo</h2>

<img width="1424" alt="image" src="https://user-images.githubusercontent.com/90507720/162644315-d2510c11-e306-4621-94a7-4dcfda959894.png">
<img width="1283" alt="스크린샷 2022-04-11 오전 8 25 21" src="https://user-images.githubusercontent.com/90507720/162644398-2feb9df0-6c0c-4da7-b0ff-63a2d17ed4d7.png">

![](https://velog.velcdn.com/images/hoje15v/post/e5347a1b-9a8e-4e45-b90c-dfd4af836bfb/image.gif)

![제품필터링](https://velog.velcdn.com/images/gonkang_jeondosa/post/3eea78f7-fbc3-4543-88e8-38011b8e6ef3/image.gif)

![ezgif com-gif-maker (13)](https://user-images.githubusercontent.com/90507720/162644439-45e38047-e494-446b-b350-9edf35ef769f.gif)

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/90507720/162644465-04a13653-648a-4dbd-8be2-74fb3822380d.gif)

![결제](https://velog.velcdn.com/images/gonkang_jeondosa/post/2ba03bd0-b2c6-4cbc-a62d-6d1098f6c4cd/image.gif)

<h2>Technologies</h2>

* 공통 : Git, github
* Front-End : ReactJS, sass
* Back-End : Python, Django web

<h2>구현 기능</h2>

![](https://user-images.githubusercontent.com/24951988/162650028-4cade30c-a0ee-4ca0-8cd1-2d4bd0c2fcfc.png)
※적색으로 표기한 부분이 본 프로젝트에서 담당한 part입니다.

#### 1. 로그인 / 회원가입

- 로그인 / 회원가입 모달창
- 로그인 / 회원가입 유효성 검사
- localStorage 와 useState Hook을 사용한 로그인 전역관리


#### 2. 상품리스트 필터&검색기능 (담당 Part)

![image](https://user-images.githubusercontent.com/24951988/162650319-36be1e6b-70b5-4026-a90e-509735982ca2.png)

1)개요: 쿼리 파라미터를 활용한 다양한 기능구현
    - 다중필터 : 의류타입, 브랜드 , 사이즈별 필터링
    - 가격순 / 최신상품순 정렬
    - 페이지네이션 : `Limit` & `Offset` 활용
    - 상품 검색 기능 구현: 쿼리 파라미터를 활용한 Like검색 
    
2)특징 및 제약사항
    - 디즈니샵의 경우 필터링시 쇼핑몰 URL이 변하지 않아 `useLocation`에서 `url`을 받아 렌더링하는 방법 사용할 수 없음.
    - 대신 각 조건을 배열의 형태로 `state`에 저장하여 렌더링의 대상이 되는 `queryString`으로 만들어 렌더링하는 방식으로 구현함.

3)구현상세
    - `Product List`에서는 `Filter`, `Sorter`, `Search`, `Pagination`에 필요한 `state`와 이를 수정할 수 있는 function을 만들어 각각의 컴포넌트로 전달.
    - 각각의 컴포넌트에서는 `onClick`, `onChange` 등을 통해 내려받은 `function`으로 부모의 `state`를 수정하고 끌어올림.
    - 끌어올린 `state`값으로 `queryParameter`를 만들고 이에 의존성에 있는 `useEffect`내부의 `fetch`함수로 화면을 렌더링.
   
#### 3. 제품 상세 페이지

- 상품리스트에서 상품이미지를 클릭하면 해당 상품 이미지로 이동
- 데이터베이스로 부터 사이즈 별 재고를 받아와 품절된 상품의 버튼은 비활성화
- 썸네일 사진 클릭 시 메인 페이지 보여준다.

#### 4. 리뷰

- 상품 상세페이지 내 해당 상품에 대한 리뷰 컴포넌트 구현
- 리뷰 작성 및 삭제 기능

#### 5. 위시리스트

- 위시리스트(찜) 기능 구현 : 좋아요 버튼 클릭시 데이터베이스로 해당 위시리스트 상품 전송. 페이지를 새로고침 했을 때도 좋아요 버튼 클릭 상태 유지

#### 6. 장바구니

- 장바구니 기능 구현: 상품 상세페이지 내에서 add to bag 클릭 시 데이터베이스로 해당 상품 전송. 이후 장바구니 모달창을 통해 업데이트 된 상품 리스트 렌더링
- 장바구니 상품 삭제 기능 구현: fetch(Delete 메소드) 활용
- 장바구니 상품 수정 기능 구현: fetch(Patch 메소드) 활용

#### 7. 결제 (담당 part)

1)개요 : `JWT token`,`fetch`함수 활용한 서버 인터페이스
    - 결제 : `POST`메소드 통한 마일리지 차감
    - 배송지변경 : `PATCH`메소드 통한 주소 업데이트

2)특징 및 제약사항
    - 가입시점에 고객주소정보 입력하지않으므로, 배송정보를 수집 및 고객정보로 저장하는 기능 필요.
    - PG를 붙일 수 없으므로 고객마일리지에서 차감하는 형식으로 진행.

3)구현상세
    - 배송정보 유효성 검사 후, 고객이 입력한 주소를 기본배송지로 업데이트하겠다는 의사를 확인하고 이에 따라 결제대금 차감 및 주소 업데이트 진행.
    - 결제는 `POST`메소드로 서버통신하여 진행하며 처리결과는 `alert`로 안내.(재고부족, 잔액부족 이슈 대응 완료)
    - 주소 업데이트는 `PATCH`메소드로 서버와 통신하여 진행하며 처리결과는 `alert`로 안내.

<h2>Reference</h2>

* 본 프로젝트는 디즈니샵 사이트를 참고하여 학습목적으로 만들었습니다.
* 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 본 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적인 이슈 발생할 수 있는 점 양지바랍니다.

