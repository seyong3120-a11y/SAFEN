// SVG에는 질문만 제공되어 있습니다. answer의  을 확정된 답변 문자열로 교체하세요.
const faqData = [
  {
    id: 1,
    category: "account",
    question: "비밀번호는 얼마나 자주 변경하는 게 좋나요?",
    answer: "주기적인 변경보다 다른 서비스와 비밀번호를 겹치지 않게 사용하는 것이 더 중요합니다. 유출이 의심되거나 이상한 로그인 기록이 있다면 즉시 변경하세요.",
  },
  {
    id: 2,
    category: "account",
    question: "안전한 비밀번호는 어떻게 만들어야 하나요?",
    answer: "이름, 생일처럼 쉽게 추측할 수 잇는 정보는 피하세요. 영문, 숫자, 특수문자를 조합하고 서비스마다 서로 다른 비밀번호를 사용하는 것이 좋습니다.",
  },
  {
    id: 3,
    category: "account",
    question: "비밀번호를 잊어버렸을 때 어떻게 해야 하나요?",
    answer: "해당 서비스의 공식 비밀번호 재설정 기능을 이용하세요. 문자나 이메일로 받은 재설정 링크가 맞는 주소인지도 꼭 확인해야 합니다.",
  },
  {
    id: 4,
    category: "account",
    question: "제가 로그인하지 않았는데 로그인 알림이 왔어요.",
    answer: "즉시 비밀번호를 변경하고 로그인된 기기 목록을 확인하세요. 가능하다면 모든 기기에서 로그아웃한 뒤 2단계 인증도 설정하는 것이 좋습니다.",
  },
  {
    id: 5,
    category: "account",
    question: "사용하지 않는 계정은 그대로 두어도 괜찮나요?",
    answer: "오랫동안 사용하지 않는 계정도 개인정보가 남아 있을 수 있습니다. 더 이상 이용하지 않는 서비스라면 필요한 정보를 확인한 뒤 계정 삭제를 권장합니다.",
  },
  {
    id: 6,
    category: "sns",
    question: "SNS를 비공개로 설정하면 완전히 안전한가요?",
    answer: "비공개 계정도 팔로워를 통해 게시물이 저장되거나 공유될 수 있습니다. 공개 범위와 관계없이 민감한 개인정보는 게시하지 않는 것이 안전합니다.",
  },
  {
    id: 7,
    category: "sns",
    question: "사진을 올리면 위치 정보도 함께 공개될 수 있나요?",
    answer: "사진 파일에 촬영 위치 정보가 저장되는 경우가 있습니다. 업로드 전 위치 정보 설정을 확인하고 필요하면사진의 위치 정보를 삭제하세요.",
  },
  {
    id: 8,
    category: "sns",
    question: "다른 사람이 나온 사진을 올려도 되나요?",
    answer: "함께 찍힌 사람이 있다면 게시 전 공개 여부를 먼저 학인하는 것이 좋습니다. 특히 얼굴, 이름, 학교, 직장 등이 드러나는 사진은 더욱 주의하세요.",
  },
  {
    id: 9,
    category: "sns",
    question: "SNS 프로필에 공개하지 않는 것이 좋은 정보는 무엇인가요?",
    answer: "휴대전화 번호, 집 주소, 상세 생년월일, 학교, 직장 정보처럼 개인을 쉽게 특정할 수 있는 정보는 최소한으로 공개하는 것이 좋습니다.",
  },
  {
    id: 10,
    category: "sns",
    question: "이벤트 참여 게시물도 개인정보 유출 위험이 있나요?",
    answer: "오래된 게시물에도 현재까지 유효한 개인정보가 남아있을 수 있습니다. 예전 게시물을 주기적으로 확인하고 불필요한 정보는 삭제하거나 공개 범위를 변경하세요.",
  },
  {
    id: 11,
    category: "device",
    question: "앱 설치 전에 어떤 권한을 확인해야 하나요?",
    answer: "앱의 기능과 관련 없는 카메라, 연락처, 위치 권한을 가지고 있을 수 있습니다. 오랫동안 사용하지 않는 앱은 삭제하고 연결된 계정도 함께 확인하세요.",
  },
  {
    id: 12,
    category: "device",
    question: "사용하지 않는 앱은 삭제하는 것이 좋나요?",
    answer: "사용하지 않는 앱도 저장된 개인정보나 권한을 가지고 있을 수 있습니다. 오랫동안 사용하지 않는 앱은 삭제하고 연결된 계정도 함께 확인하세요.",
  },
  {
    id: 13,
    category: "device",
    question: "공용 와이파이에서 개인정보를 입력해도 괜찮나요?",
    answer: "보안이 확인되지 않은 공용 와이파이에서는 로그인이나 금융정보 입력을 피하는 것이 좋습니다. 중요한 작업은 모바일 데이터나 신뢰할 수 있는 네트워크에서 진행하세요.",
  },
  {
    id: 14,
    category: "device",
    question: "스마트폰을 잃어버렸다면 가장 먼저 무엇을 해야 하나요?",
    answer: "기기 찾기 기능으로 위치를 확인하고 원격 잠금을 설정하세요. 필요하다면 주요 계정의 비밀번호를 변경하고 통신사에도 분실 신고를 진행하세요.",
  },
  {
    id: 15,
    category: "device",
    question: "운영체제나 앱 업데이트는 꼭 해야 하나요?",
    answer: "업데이트에는 새로운 기능뿐 아니라 보안 취약점 수정도 포함됩니다. 가능한 한 최신 버전을 유지하고 자동 업데이트를 설정하는 것이 좋습니다.",
  },
  {
    id: 16,
    category: "phishing",
    question: "택배 문자의 링크를 눌러도 되는지 어떻게 확인하나요?",
    answer: "문자 속 링크를 바로 누르기보다 택배사 공식 앱이나 홈페이지에서 배송 정보를 직접 확인하세요. 짧은 주소나 낯선 도메인은 특히 주의해야 합니다.",
  },
  {
    id: 17,
    category: "phishing",
    question: "가족이나 지인을 사칭한 문자를 받으면 어떻게 해야 하나요?",
    answer: "문자 내용만 믿지 말고 기존에 알고 있는 전화번호로 직접 연락해 사실을 확인하세요. 송금이나 개인정보를 요구한다면 즉시 대화를 중단하는 것이 좋습니다.",
  },
  {
    id: 18,
    category: "phishing",
    question: "피싱 사이트에 개인정보를 입력한 것 같아요. 어떻게 해야 하나요?",
    answer: "즉시 관련 계정의 비밀번호를 변경하고 금융정보를 입력했다면 해당 금융기관에도 알리세요. 추가 피해가 의심된다면 관련 기관에 상담이나 신고를 진행해야 합니다.",
  },
  {
    id: 19,
    category: "phishing",
    question: "모르는 번호에서 온 문자에 답장해도 괜찮나요?",
    answer: "출처가 불분명한 문자에는 답장하지 않는 것이 좋습니다. 답장을 통해 사용 중인 번호라는 사실을 확인될 수 있으므로 차단하거나 삭제하세요.",
  },
  {
    id: 20,
    category: "phishing",
    question: "기관이나 은행에서 개인정보를 문자로 요구하기도 하나요?",
    answer: "정상적인 기관이나 금융회사는 문자로 비밀번호나 인증번호 전체를 요구하지 않습니다. 의심된다면 문자에 적힌 번호가 아닌 공식 대표번호로 직접 확인하세요.",
  },

  // TODO: 앱·기기, 문자·피싱 질문과 답변은 제공받은 후 추가하세요.
];
const filters = [...document.querySelectorAll("[data-category]")];
const requestedCategory = new URLSearchParams(location.search).get("category");
let currentCategory = filters.some(
  (button) => button.dataset.category === requestedCategory,
)
  ? requestedCategory
  : "all";
const searchInput = document.querySelector("#faq-search");
const faqList = document.querySelector("#faq-list");
function renderFaq() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const results = faqData.filter(
    (item) =>
      (currentCategory === "all" || item.category === currentCategory) &&
      (item.question + " " + (item.answer || ""))
        .toLocaleLowerCase()
        .includes(query),
  );
  filters.forEach((button) =>
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.category === currentCategory),
    ),
  );
  faqList.replaceChildren();
  results.forEach((item) => {
    const article = document.createElement("article");
    article.className = "faq-item";
    const heading = document.createElement("h2");
    const button = document.createElement("button");
    button.className = "faq-question";
    button.id = `question-${item.id}`;
    button.textContent = item.question;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `answer-${item.id}`);
    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.id = `answer-${item.id}`;
    answer.setAttribute("role", "region");
    answer.setAttribute("aria-labelledby", button.id);
    answer.setAttribute("aria-hidden", "true");
    answer.inert = true;

    // 답변이 부드럽게 펼쳐지도록 안쪽 영역 생성
    const answerInner = document.createElement("div");
    answerInner.className = "faq-answer-inner";

    const answerText = document.createElement("p");
    answerText.textContent = item.answer || "답변 준비 중입니다.";

    answerInner.append(answerText);
    answer.append(answerInner);

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      const nextOpen = !isOpen;

      button.setAttribute("aria-expanded", String(nextOpen));
      answer.setAttribute("aria-hidden", String(!nextOpen));
      answer.inert = !nextOpen;

      // 이 클래스가 붙으면 펼쳐지고, 빠지면 접힙니다.
      answer.classList.toggle("is-open", nextOpen);
    });
    heading.append(button);
    article.append(heading, answer);
    faqList.append(article);
  });
  document.querySelector(".faq-empty").hidden = results.length > 0;
  document.querySelector("#faq-result-count").textContent =
    `질문 ${results.length}개`;
}
filters.forEach((button) =>
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    renderFaq();
  }),
);
searchInput.addEventListener("input", renderFaq);
document.querySelector(".faq-search").addEventListener("submit", (event) => {
  event.preventDefault();
  renderFaq();
});
renderFaq();
