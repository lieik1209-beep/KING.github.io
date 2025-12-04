document.getElementById('year').textContent = new Date().getFullYear();

const audioO = document.getElementById('audioO');

document.getElementById('btnO').addEventListener('click', () => {
  alert('당신 뭘좀 아시는군요? 😊');
  
  const audioO = document.getElementById('audioO');
  audioO.play();

  const img = document.getElementById('showImg');
  img.src = "111.jpg";
  img.style.display = "block";
});


document.getElementById('btnX').addEventListener('click', () => {
  alert('너가 뭘알아 쌔꺄 😤');
});
