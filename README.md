# Youtube Web
React로 제작한 Youtube 사이트



## Project 소개
React, Storybook을 활용하여 만든 Youtube 사이트에

Youtube Data API로 데이터를 불러옵니다.



## 제작 기간
23.12.24 ~



## 개발 환경
### 라이브러리
- Lint : ESLint + Prettier



### 사용법
Yarn 설치
``` 
yarn install
```

Storybook 실행
```
yarn run storybook
```



## 주요 기능
1. 메인 페이지
2. 로그인
3. 동영상 재생 페이지
4. 구독 페이지
5. 보관함 페이지



## 문서 구조
```
├── .storybook
├── public
├── src
│   ├── components
│   ├── fonts
│   ├── images
│   ├── pages
│   │   └── mainPage
│   │       └── components
│   │       │   └── VideoItem.jsx
│   │       └── VideoItem.stories.js
│   ├── styles
│   │   ├── _button.scss
│   │   ├── _dropdown.scss
│   │   ├── _fonts.scss
│   │   ├── _input.scss
│   │   ├── _mainPage.scss
│   │   ├── _reset.scss
│   │   ├── _tab.scss
│   │   ├── _variable.scss
│   │   ├── _videoItem.scss
│   │   └── index.scss
│   └── layouts
│       └── MainLayout.jsx
├── .eslintrc.js  // eslint 설정
├── .prettierrc.js  // prettier 설정
├── jsconfig.json
└── yarn.lock
```
