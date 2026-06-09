let noCount = 0;

function openGift() {
  const overlay = document.getElementById('overlay');
  const mainPage = document.getElementById('mainPage');

  overlay.classList.add('hide');

  setTimeout(() => {
    overlay.style.display = 'none';
    mainPage.classList.add('visible');
    spawnPetals();

    const music = document.getElementById('bgMusic');
    music.play();
    setTimeout(() => {
    document.getElementById('nowPlaying').classList.add('show');
    }, 800);

    // Bloom the bouquet
    document.getElementById('bouquetSvg').classList.add('bloom');

    // Typewriter effect
    const message = `Lovey,\n\nSorry sa mga awayan natin. I know, minsan nagiging sobrang sakit talaga ako ng ulo mo — 'yung tipong hindi mo na maintindihan kung bakit ganito o ganyan ako. 'Yung tipong naiisip mo na 'yung mga bagay na hindi mo naman talaga gustong pag-isipan.\n\nNakikita ko kung gaano kadalas kita napapagod, and even if hindi ko lagi nasasabi out loud, nararamdaman ko rin 'yun.\n\nI know na marami na akong beses na nangako na magbabago, na babawi — and I get it if it sounds the same every time. I know na nakakabawi ako sa mga ibang bagay kung saan ako nagkulang pero hindi ko rin titigilan. Every time na nagkakamali ako, babalik pa rin ako at aayusin, kahit gaano katagal 'yun.\n\nI know may mga bagay pa akong kailangan ayusin sa sarili ko, and I'm not saying it's always going to be easy. But you know na ginagawa ko ang lahat para mapatunayan sayo na bumabawi ako sa'yo. Alam kong nakikita mo 'yun — and I hope you never stop seeing it.\n\nAyun lang, Lovey. Sorry ulit lovey ko.\n\n— Karl`;

    const el = document.getElementById('typewriter-text');
    let i = 0;
    const speed = 28;

    function type() {
      if (i < message.length) {
        el.textContent += message[i];
        i++;
        setTimeout(type, speed);
      }
    }

    setTimeout(type, 600);
  }, 800);
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('playPauseBtn');
  if (music.paused) {
    music.play();
    btn.textContent = '⏸';
  } else {
    music.pause();
    btn.textContent = '▶';
  }
}

function runAway() {
  noCount++;
  const noBtn = document.getElementById('noBtn');
  const memeOverlay = document.getElementById('memeOverlay');
  const memeImg = document.getElementById('memeImg');
  const shrinkCaption = document.getElementById('shrinkCaption');

  if (noCount <= 3) {
    const memes = ['crying1.jpg', 'crying2.jpg', 'crying3.jpg'];
    memeImg.src = memes[noCount - 1];
    memeOverlay.classList.remove('show');
    void memeOverlay.offsetWidth;
    memeOverlay.classList.add('show');

    noBtn.classList.remove('shake');
    void noBtn.offsetWidth;
    noBtn.classList.add('shake');

    setTimeout(() => {
      memeOverlay.classList.remove('show');
    }, 2000);
  }

  if (noCount === 4) {
    shrinkCaption.textContent = 'i-open mo na kasi!';
    noBtn.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    noBtn.style.transform = 'scale(0.5)';
    noBtn.style.opacity = '0.5';
  }

  if (noCount === 5) {
    shrinkCaption.textContent = 'na para bang akala mo naman may magagawa ka pag nag no ka 🙄';
    noBtn.style.transform = 'scale(0.2)';
    noBtn.style.opacity = '0.2';
  }

  if (noCount === 6) {
    shrinkCaption.textContent = 'aray mo, PAKAK! mag yes na kasi!';
    noBtn.style.transform = 'scale(0)';
    noBtn.style.opacity = '0';
    noBtn.style.pointerEvents = 'none';
    setTimeout(() => {
      noBtn.style.display = 'none';
    }, 400);
  }
}

function spawnPetals() {
  const container = document.getElementById('petals');
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.classList.add('petal');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (Math.random() * 4 + 3) + 's';
    p.style.animationDelay = (Math.random() * 5) + 's';
    container.appendChild(p);
  }
}