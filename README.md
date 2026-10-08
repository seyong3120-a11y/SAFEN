# SAFEN — 개인정보 보호 캠페인

## 실행
1. ZIP 압축을 풀고 VS Code에서 SAFEN 폴더를 엽니다.
2. Live Server 확장 기능을 설치합니다.
3. index.html을 우클릭해 Open with Live Server를 선택합니다.
별도 npm 설치나 빌드가 필요하지 않습니다. HTML 파일은 모두 프로젝트 루트에 있습니다.

## 파일
- index.html / css/main.css: 캠페인
- guide.html / css/guide.css / js/guide.js: 보호 가이드
- faq.html / css/faq.css / js/faq.js: FAQ
- css/reset.css, css/common.css, js/common.js: 공통
- img/: 원본 SVG에서 개별 추출한 이미지 18개
- video/: 영상 추가 위치

## 교체할 부분
- video/campaign.mp4: 미제공 영상. 파일 추가 후 새로고침하면 실제 controls가 활성화됩니다. 원본 시안의 가짜 타임라인은 재현하지 않았습니다.
- js/faq.js: faqData 배열 answer의 null을 답변 문자열로 교체합니다. 질문 7개는 원본 그대로 사용했습니다. 앱·기기와 문자·피싱은 질문이 없어 빈 결과를 표시합니다.
- guide.html: panel-privacy, panel-fraud에 제공받은 상세 시안을 구현합니다. 현재 준비 중 표시입니다.
- 원본 폰트는 Pretendard / Noto Sans KR, 로고는 HANAMDAUM입니다. 본문용 Pretendard 가변 웹폰트와 OFL 라이선스를 포함했습니다. 원본의 일부 Noto Sans KR 텍스트도 Pretendard로 통일했습니다. 로고 폰트 HANAMDAUM은 파일이 제공되지 않아 설치된 경우에만 사용하고, 없으면 Pretendard로 대체합니다. 로고까지 정확하게 맞추려면 해당 폰트를 설치하거나 웹폰트를 연결하세요.

## 디자인 기준
원본 디자인 보드 6160×4028 안에 캠페인(x=100), 보호가이드(x=2120), FAQ(x=4140)가 각각 1920px 너비로 배치되어 있습니다. 보드의 공백은 실제 페이지에 넣지 않았습니다.
공통 콘텐츠 최대 1440px, 가이드·FAQ 최대 1592px. 네이비 #213140, 아이보리 #F8F4EE, 하늘색 #D3E1EE. 데스크톱 시안을 기준으로 구현하고 모바일은 700px 이하에서 재배치했습니다. 모바일 원본은 미제공이므로 PC의 계층과 순서를 유지했습니다.
본문은 HTML, 그림만 PNG이며 SVG 전체를 화면에 넣지 않습니다. 네비게이션과 푸터는 각 HTML에 있어 JavaScript를 끄더라도 표시됩니다.

## 확인 결과
Chromium에서 1920px·393px·320px 기준 3개 페이지의 가로 넘침과 이미지 누락 없음 확인. 모바일 메뉴, 페이지 이동, Escape 닫기, 가이드 탭 방향키, 해시 링크, FAQ 아코디언과 Enter 키, 카테고리·검색 동시 적용, 검색 결과 없음, TOP 이동을 확인했습니다. 실행 중 JavaScript 오류는 없었습니다. 실제 영상은 미제공이라 재생 검증 대상에서 제외했습니다.
