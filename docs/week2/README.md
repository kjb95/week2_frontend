## 웹팩

1. 웹팩이란?

- 모듈 번들링: 웹 애플리케이션을 구성하는 많은 자원들을 하나의 파일로 병합 및 압축해주는 동작
- 모듈 번들러: 웹 애플리케이션을 구성하는 자원을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구
- 최신 프론트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러

2. 모듈

- 프로그래밍 관점에서 특정 기능을 갖는 작은 코드 단위
- 웹팩에서의 모듈: 웹 애플리케이션을 구성하는 모든 자원

3. 참고: https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html

## 웹팩의 주요 속성

1. Entry

- 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
- 웹 팩이 해당 파일을 가지고 웹 애플리케이션에서 사용되는 모듈들의 연관관계를 이해하고 분석
- 웹 어플리케이션의 전반적인 구조와 내용이 담겨져 있어야 함

2. Output: 웹팩을 돌리고 난 결과물의 파일 경로를 의미
3. Loader

- 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS 등)들을 변환할 수 있도록 도와주는 속성
- 웹 자원을 해석하고 변환하는 역할

4. Plugins

- 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성
- 로더에서 변환한 웹 자원을 원하는 형태로 바꾸는 역할

5. 참고

- https://joshua1988.github.io/webpack-guide/concepts/entry.html#entry
- https://joshua1988.github.io/webpack-guide/concepts/output.html#output
- https://joshua1988.github.io/webpack-guide/concepts/loader.html
- https://joshua1988.github.io/webpack-guide/concepts/plugin.html

## 실행 컨텍스트의　역할

- 식별자(변수, 함수, 클래스 등의 이름)를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 메커니즘
- 모든 코드는 실행 컨텍스트를 통해 실행되고 관리됨
- 식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리
- 코드 실행 순서는 실행 컨텍스트 스택으로 관리
