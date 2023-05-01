# Final Team Project - LAB 12 [ Together ]

![image](https://user-images.githubusercontent.com/94541099/228397630-638f9c5e-68f1-4e01-9ba2-684330e19e9c.png)

# 프로젝트 소개
TVING UI 기반 반응형 OTT 웹 서비스 프로젝트
<br/>
<br/>
>**프로젝트 기간** 2023.03.09 - 2023.03.29<br/>**리팩토링 및 타입스크립트 마이그레이션 기간** 2023.04.02 - 2023.04.14
<br/>

# 팀원 소개

[강수영](https://github.com/sykang013) | [구아영](https://github.com/guahyoung) | [박세은](https://github.com/senasoon) | [변경섭](https://github.com/kyungseob7)  | [임철진](https://github.com/imironjin) | [김주현](https://github.com/pingandthepong)
:--: | :--: | :--: |:--:| :--: |:--:
|🏊‍♀️|🍠|☕️|🚇|🔩👖|🦉|

<br/>

# 🔥 프로젝트 목표
완성보다는 **성장**💪

- 웹 접근성 준수를 위해 대체 텍스트 제공, 마우스로 조작할 수 있는 기능은 키보드로 접근 및 조작이 가능하게 하며 폼 컨트롤, 명도대비 고려
- 웹 표준 준수를 위한 적절한 헤딩 사용 및 시멘틱 마크업
- 크로스 브라우징 체크, 검색엔진 최적화 및 성능 최적화
- 반응형 웹 구현 / 애니메이션 활용 / 이미지 다루기
- 프로젝트 협업 과정 기록 및 회고
- Firebase 활용

<br/>

# 🔗 배포 주소

https://together-taing-ts.netlify.app/

<br/>

# 🛠 기술스택 

![image](https://user-images.githubusercontent.com/102699437/235487094-12c81e20-179e-42d3-a02b-98e973e3b725.png)

# 주요기능

## 랜딩 페이지
- **Firebase**로부터 이미지를 불러와 화면에 동적으로 렌더링
- **GSAP**의 **`스크롤 트리거`** 와 **`fromTo`** 등을 이용한 애니메이션 구현
- **CSS Animation**을 통한 **`Auto Carousel`**

![landing4-min](https://user-images.githubusercontent.com/102699437/229759370-d42bbc3b-5a58-4dd6-89d0-87c3a6cd9f89.gif)

<br>

## 메인 페이지
- **React Portal**과 **LocalStorage**를 활용한 모달 팝업.
- **Firebase**로부터 컨텐츠의 정보와 이미지를 불러와 **`react-slick`** 을 활용한 **`Carousel`** 로 **동적으로 렌더링**
- **Firebase**의 **Authentication**을 활용한 **로그아웃**

![main6-min](https://user-images.githubusercontent.com/102699437/229760721-0f92f38b-a22a-4f39-ae6b-7827ff22c345.gif)

<br>

## 회원가입 페이지
- 회원가입 진행 시, 이메일과 비밀번호 유효성 검사 통과 후 **Firebase의 메서드를 활용한 회원가입**

![register](https://user-images.githubusercontent.com/102699437/229749434-83ae650e-671b-4921-baff-74bb5912ce22.gif)

<br>

## 로그인 페이지
- 로그인 진행 시, 이메일과 비밀번호를 통한 **Firebase 메서드를 활용한 로그인**

![login](https://user-images.githubusercontent.com/102699437/229747669-02c94e6f-d7eb-4968-a7ce-262f67976ead.gif)

<br>

## 프로필 생성/삭제 페이지
- 현재 로그인 한 유저에 해당하는 프로필들의 이름과 이미지를 **Firebase**로부터 동적으로 렌더링
- 유저 프로필의 개수가 4개를 초과하지 않도록 조건 설정
- 사진 업로드 시 미리보기 가능
- **Firebase database**를 활용해 프로필 이미지, 이름 **생성 및 삭제 기능** 구현

![profile-create-delete](https://user-images.githubusercontent.com/102699437/229747811-41a6f541-5d2f-48e0-b4e7-4f7817819e87.gif)

<br>

## 프로필 편집 페이지
- 프로필 페이지에서 클릭한 프로필을 **`useLocation`** 을 활용해 **URL** 정보를 가져와 해당 프로필의 이름 수정이 가능

![profile-edit](https://user-images.githubusercontent.com/102699437/229748462-3e85692c-f748-45e0-9852-7d330fba01be.gif)

<br>

## 검색 페이지
- **`Debounce`** 와 **Firebase**의 쿼리문을 이용한 **컨텐츠 검색 기능** 구현
- **LocalStorage**를 사용한 **최근 검색어 저장 기능** 구현

![search](https://user-images.githubusercontent.com/102699437/229749487-450aafc2-736d-4b51-9c75-c07d874a947c.gif)

<br/>

# 프로젝트 사용법

```
npm i
npm start
```

