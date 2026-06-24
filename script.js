let noCount = 0;

const message = `Lovey,

I know I hurt you, and I'm deeply sorry for that. Even though it wasn't my intention, it doesn't change the fact that I did — and I own that completely.

I know it looks like I lied to you. And I understand why it feels that way. But I want you to know the truth — I got too comfortable. Comfortable enough to think that because there was nothing going on, it was okay not to mention it. I forgot to tell you, or I just didn't think to bring it up anymore. And that was wrong. That's the only reason, Lovey. Nothing more, nothing hidden.

I will never cheat on you. I will never lie to you. You deserve to know everything, and I failed at that — not because I wanted to hide something, but because I was careless with something that mattered to you. And that matters to me now more than ever.

Through all of this, I love you. With everything I have. That has never changed, and it never will.

I'm sorry, Lovey. I really am.`;

function openLetter() {
  const overlay = document.getElementById('overlay');
  const mainPage = document.getElementById('mainPage');

  overlay.classList.add('hide');

  setTimeout(() => {
    overlay.style.display = 'none';
    mainPage.classList.add('visible');
    window.scrollTo(0, 0);
    spawnPetals();

    const music = document.getElementById('bgMusic');
    music.volume = 0.5;
    music.play().catch(() => {});

    setTimeout(() => {
      document.getElementById('nowPlaying').classList.add('show');
    }, 800);

    const el = document.getElementById('typewriter-text');
    const cursor = document.getElementById('cursor');
    let i = 0;
    const speed = 22;

    function type() {
      if (i < message.length) {
        el.textContent += message[i];
        i++;
        setTimeout(type, speed);
      } else {
        cursor.classList.add('done');
      }
    }

    setTimeout(type, 500);
  }, 900);
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');

  if (music.paused) {
    music.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    music.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
}

function runAway() {
  noCount++;
  const noBtn = document.getElementById('noBtn');
  const caption = document.getElementById('shrinkCaption');

  noBtn.classList.remove('shake');
  void noBtn.offsetWidth;

  if (noCount === 1) {
    noBtn.classList.add('shake');
    noBtn.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    noBtn.style.transform = 'scale(0.85)';
    noBtn.style.opacity = '0.7';
  }

  if (noCount === 2) {
    noBtn.classList.add('shake');
    noBtn.style.transform = 'scale(0.6)';
    noBtn.style.opacity = '0.45';
  }

  if (noCount === 3) {
    noBtn.style.transform = 'scale(0.35)';
    noBtn.style.opacity = '0.25';
  }

  if (noCount === 4) {
    caption.textContent = '';
    noBtn.style.transform = 'scale(0)';
    noBtn.style.opacity = '0';
    noBtn.style.pointerEvents = 'none';
    setTimeout(() => { noBtn.style.display = 'none'; }, 400);
  }
}

function spawnPetals() {
  const container = document.getElementById('petals');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('petal');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (Math.random() * 5 + 4) + 's';
    p.style.animationDelay = (Math.random() * 6) + 's';
    container.appendChild(p);
  }
}
