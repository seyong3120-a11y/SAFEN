SAFEN 보호가이드 수정본

압축을 풀고 아래 세 파일을 기존 프로젝트의 같은 위치에 덮어쓰세요.
- guide.html
- css/guide.css
- js/guide.js

기존 파일 내용에 추가하지 말고 파일 전체를 교체하세요.
기존 css/reset.css, css/common.css, js/common.js 및 img 폴더는 그대로 필요합니다.
guide.html을 Live Server로 열고 Ctrl+Shift+R로 새로고침하세요.

수정 내용
- privacy, fraud의 중복 ID 및 이중 hidden 영역 제거
- HTML/CSS에서 복사 시 들어간 마크다운 강조·이스케이프 기호 제거
- DOM 준비 후 탭 초기화, 클릭·키보드·주소 해시 전환 연결
- 비활성 패널의 hidden 스타일 보장

새 사진과 아이콘은 포함하지 않았습니다.
HTML의 img src 및 CSS의 배너 url에 지정된 파일명으로 이미지를 넣거나 경로를 변경하세요.

검증: HTML 구조·ID·탭 연결 확인, 모의 DOM에서 클릭·키보드·해시 전환 확인.
실제 브라우저 렌더링 검증은 실행 환경에 브라우저가 없어 수행하지 못했습니다.
