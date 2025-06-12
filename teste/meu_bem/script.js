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

document.addEventListener('DOMContentLoaded', () => {
  const musicaFundo = document.getElementById('musicaFundo');
  const audioMensagem = document.getElementById('audioMensagem');

  // Começa com volume 0 (autoplay é permitido)
  if (musicaFundo) {
    musicaFundo.volume = 0;
    musicaFundo.play().then(() => {
      // Aumenta suavemente após carregar
      aumentarVolumeGradualmente(musicaFundo, 0.6, 8000);
    }).catch((err) => {
      console.warn("Autoplay bloqueado:", err);
    });
  }

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
  if (audioMensagem) {
    audioMensagem.addEventListener('play', () => {
      reduzirVolumeGradualmente(musicaFundo, 0.1, 1000); // de 1.0 para 0.1 em 1s
    });

    // Quando o áudio terminar
    audioMensagem.addEventListener('ended', () => {
      aumentarVolumeGradualmente(musicaFundo, 1.0, 1000); // volta ao volume cheio
    });
  }

  const btnEntrar = document.getElementById('entrar');
  const telaInicial = document.getElementById('tela-inicial');
  const conteudo = document.getElementById('conteudo');
  const player = document.getElementById('youtube-player');

  btnEntrar.addEventListener('click', () => {
    const videoID = "vSsUDOpzYOs"; // Leonardo - É Por Você Que Canto
    const src = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}&controls=0&mute=1&showinfo=0&modestbranding=1`;

    player.src = src;

    telaInicial.style.display = 'none';
    conteudo.style.display = 'block';
  });
  document.getElementById('entrar').addEventListener('click', () => {
  const musica = document.getElementById('musicaFundo');
  musica.play();
});

});
