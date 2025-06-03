function showWhoAmI() {
  document.getElementById('hero-content').style.display = 'none';
  document.getElementById('whoami-content').style.display = 'block';
  // Set underline for WHO AM I button
  var btns = document.querySelectorAll('.intro-btn');
  btns.forEach(btn => btn.classList.remove('active'));
  btns[0].classList.add('active'); // WHO AM I is the first button
  // Do not hide .intro-btn-group, so buttons remain visible
}

