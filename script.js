document.getElementById('year').textContent = new Date().getFullYear();

const audioO = document.getElementById('audioO');

document.getElementById('btnO').addEventListener('click', () => {
  alert('당신 뭘좀 아시는군요? 😊');
  audioO.play();
});

document.getElementById('btnX').addEventListener('click', () => {
  alert('거짓말은 나빠요 😤');
});
