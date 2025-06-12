// Corações flutuando
function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(criarCoracao, 500);

const musicaFundo = document.getElementById('musicaFundo');
const audioMensagem = document.getElementById('audioMensagem');

// Começa com volume 0 (autoplay é permitido)
musicaFundo.volume = 0;
musicaFundo.play().then(() => {
  // Aumenta suavemente após carregar
  aumentarVolumeGradualmente(musicaFundo, 0.6, 8000);
}).catch((err) => {
  console.warn("Autoplay bloqueado:", err);
});

// Reduz o volume suavemente
function reduzirVolumeGradualmente(audio, volumeFinal, duracao) {
  const passos = 10;
  const intervalo = duracao / passos;
  const volumeInicial = audio.volume;
  const diferenca = volumeInicial - volumeFinal;
  let passoAtual = 0;

  const fadeOut = setInterval(() => {
    passoAtual++;
    audio.volume = volumeInicial - (diferenca * (passoAtual / passos));
    if (passoAtual >= passos) clearInterval(fadeOut);
  }, intervalo);
}

// Aumenta o volume suavemente
function aumentarVolumeGradualmente(audio, volumeFinal, duracao) {
  const passos = 10;
  const intervalo = duracao / passos;
  const volumeInicial = audio.volume;
  const diferenca = volumeFinal - volumeInicial;
  let passoAtual = 0;

  const fadeIn = setInterval(() => {
    passoAtual++;
    audio.volume = volumeInicial + (diferenca * (passoAtual / passos));
    if (passoAtual >= passos) clearInterval(fadeIn);
  }, intervalo);
}

// Ao dar play no áudio da mensagem
audioMensagem.addEventListener('play', () => {
  reduzirVolumeGradualmente(musicaFundo, 0.1, 1000); // de 1.0 para 0.1 em 1s
});

// Quando o áudio terminar
audioMensagem.addEventListener('ended', () => {
  aumentarVolumeGradualmente(musicaFundo, 1.0, 1000); // volta ao volume cheio
});

