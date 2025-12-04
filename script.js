// 연도 자동 표시
document.getElementById('year').textContent = new Date().getFullYear();

// 버튼 참조
const btnO = document.getElementById('btnO');
const btnX = document.getElementById('btnX');

// 모달 요소 참조
const modal = document.getElementById('mediaModal');
const modalImage = document.getElementById('modalImage');
const modalAudio = document.getElementById('modalAudio');
const modalAudioSrc = document.getElementById('modalAudioSrc');
const closeModalBtn = document.getElementById('closeModal');
const modalBackdrop = document.getElementById('modalBackdrop');

// 모달 열기 함수
function showMedia({ imagePath, audioPath }) {
  modalImage.src = imagePath;
  modalAudioSrc.src = audioPath;
  modalAudio.load();

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');

  modalAudio.play().catch(() => {});
}

// 모달 닫기 함수
function hideMedia() {
  modalAudio.pause();
  modalAudio.currentTime = 0;
  modalImage.src = '';

  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

// O 버튼 클릭
btnO.addEventListener('click', () => {
  alert('당신 뭘좀 아시는군요? 😊');
  showMedia({
    imagePath: 'images/111.jpg',
    audioPath: 'sounds/123.m4a'
  });
});

// X 버튼 클릭 (필요 시 변경 가능)
btnX.addEventListener('click', () => {
  alert('너가 뭘 알아 썌꺄 😤');
});

// 닫기 버튼
closeModalBtn.addEventListener('click', hideMedia);

// 배경 클릭 닫기
modalBackdrop.addEventListener('click', hideMedia);

// ESC 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideMedia();
});
