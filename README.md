# 박준성

***
## 6주차 4/06
### 컴포넌트 추출
* 복잡한 컴포넌트를 여러 개의 컴포넌트로 분리 가능
* 그러나 1개의 컴포넌트에 하나의 기능만 사용하도록 설계 지향
### 오늘 한 실습
1. Comment 컴포넌트 작성
2. CommentList 컴포넌트 안에 Comment 컴포넌트의 props 값 입력
3. 기존의 index.js 에서 setInterval 제거
4. CommentList 컴포넌트 안에서 props 를 json 배열의 객체값에서 꺼내어 사용
***
## 5주차 3/30
### Element
* 리액트 요소는 자바스크립트 객체의 형태로 존재
* 컴포넌트 (Button 등), 속성(color 등) 및 내부의 모든 childen 을 포함하는 일반 JS 객체
* 불변성을 가지고 있음
* Virtual DOM
![virtualDOM](./public/image/5weeks/5%EC%A3%BC%EC%B0%A8VirtualDOM.png)

### Element 렌더링
render 함수를 통해 virtual DOM 구조를 DOM 구조로 다시 바꾸는 과정을 말함

### Component
* 컴포넌트 기반의 구조
* 컴포넌트 재사용이 가능 => 전체 코드 양 감소 => 개발 시간 및 유지 보수 비용 감소
* 입력 Porps 출력 React Element
* 이름은 항상 대문자로 ( 리액트는 소문자로 시작하는 태그를 html tag (DOM) 으로 인식하기 때문 )
* 컴포넌트 합성 (컴포넌트 안에 또 다른 컴포넌트 사용 가능)
```javascript
function Component(props) {
  return <h1>Hello {props.name}</h1>
}

function App(props) {
  return (
    <div>
      <Component name="준성" />
      <Component name="인호" />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
```
*최근에는 클래스형 컴포넌트보다 함수형 컴포넌트 사용 ( 생명주기의 유무, Hook 개념 발생 )

### Props 
* 컴포넌트의 속성
* Props 에 따라 컴포넌트에서 다른 element 가 나옴
![props](./public/image/5weeks/5%EC%A3%BC%EC%B0%A8Props.png)
* JSX 에서 key-value 로 구성
*Pure 함수 ( props 를 바꾸지 않음 ) 형태를 가짐
```javascript
function App (props) {
  return (
    <Layout
      name="준성",
      age={25}
      width={2560},
      height={1440},
      header={
        <Header head="준성's github">
      }
      footer={
        <Footer/>
      }
    />
  )
}
```
* JSX 없이 사용시
```javascript
React.createElement(
  name="준성",
  age={25}
)
```

## 4주차 3/23
## React 와 JSX
아래와 같은 변수 선언이 가능한 것은 React 뿐이며 이러한 표현식을 포함하는 확장자가 JSX 이다
```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```
```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
이러한 표현식들을 사용한 JSX 표현식이 javascript 함수 호출이 되고 javascript 객체로 인식
=> Babel 엔진이 JSX 를 React.createElement() 호출로 컴파일
```javascript
JSX 표현식
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
====================================================
javascript 로 컴파일된 표현식
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

### JSX 의 장점
1. 코드 간결해짐
2. 가독성 향상
3. Injection Attack 이라 불리는 해킹 방법을 방어
***
## 3주차 3/16
## 1. README 작성요령
# 이름 : 박준성 (h1)
## 강의 날짜 : 3/16 (h2)
## 학습 내용 (필수) : h2 이하 사이즈 자유 사용 (h2)
```
작성 코드 (선택)
최근 내용이 위에 오도록 작성
날짜 별 구분이 잘 가도록 작성
```
## 2. node.js
### node.js lts 설치 후
```
<!-- 노드 버전 확인 -->
node -v
node --version
npm -v
npx -v
```
## 3. React
<b>자바스크립트로 이루어진 랜더링 라이브러리</b>
### 리엑트의 장점
1. 빠른 업데이트와 렌더링 속도
    + Virtual DOM 구조
    + 비동기식 구조 (asynchronization)
2. 컴포넌트 ( components ) 기반 구조
    + 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성 가능
    + 재사용성 증가 ( 재사용성은 모듈의 의존성과 반비례)
3. Meta(facebook) 에서 오픈소스 프로젝트로 관리
    + 대기업의 관리하에 발전
    + 활발한 지식 공유 및 커뮤니티

### 리엑트의 단점
1. 방대한 학습량
    + 자바스크립트 지식이 받쳐줄 경우 해당 X
2. 높은 상태 관리 복잡도
    + state, component life cycle 등 개발 환경 내에서는 복잡하지만 개념 자체는 어렵지 않음
## 4. React 실행하기

1. 터미널 생성
2. 원하는 디렉토리 위치로 이동
3. npx create-react-app [project name] 입력
4. 설치 과정이 다 끝나면 해당 app 디렉토리로 이동
5. npm start 입력

### 종료 시
1. 터미널에 관리자 권한으로 접속
2. netstat -ano 입력
3. ctrl + f 누르고 3000 검색
4. 해당 포트 번호의 pid 를 확인
5. taskkill /f /pid [포트 번호의 pid] 입력

***
## 2주차 3/9
## React 강의
h3 SPA(Single page Application)
-자바스크립트
1.E56 (ECMAScript6) - 표준 ECMA-262

2.자바스크립트의 자료형
var : 중복 선언 가능, 재할당 가능
let : 중복 선언 불가능, 재할당 가능
const : 중복 선언 불가능, 재할당 불가능

config를 확인방법 
우선 순위는 Local>global>System순이며 Local 이 설정권한이 가장 높음


### 예시
사용자 등록 : git config --global user.name
이메일 등록 : git config --global user.email
사용자 초기화 : git config --global --unset-all user.name
설정 파일 확인 : git config --system --list
Global 설정 파일 확인 : git config --global --list
Local 설정 파일 확인 : git config --local --list
모든 설정 확인 : git config --list