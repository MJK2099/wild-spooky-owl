/* =====================================================================
   A Little World for Thirandee — all game logic in one small file.
   ✏️  Edit the CONFIG block below to change any message or photo caption.
   ===================================================================== */
(() => {
'use strict';

/* ---------------------------------------------------------------
   CONFIG — YOUR MESSAGES LIVE HERE (change anything between quotes)
   --------------------------------------------------------------- */
const CONFIG = {

  /* 📷 PHOTOS: put pictures in assets/images/ and list them here.
     She can also add more herself with the "Add our photos" button. */
  photos: [
    { src: 'assets/images/memory3.jpg', caption: 'Us. My favourite place to be.' },
    { src: 'assets/images/memory1.jpg', caption: 'That little smile that gets me every time' },
    { src: 'assets/images/memory2.jpg', caption: 'My silly girl 😜' },
    { src: 'assets/images/memory4.jpg', caption: 'Me, thinking about you (as always)' }
    // { src: 'assets/images/memory5.jpg', caption: 'PLACEHOLDER: add your own caption' },
  ],

  /* 🃏 Message shown when she finishes the memory game */
  memoryWin: 'Every pair you matched is a little like us: two things that were always meant to end up together. I love you, Thirandee. 💜',

  /* ❓ QUIZ: ans = index of the "right" answer (starts at 0). yes/no = reactions. */
  quiz: [
    { q: 'Who is more romantic?', opts: ['Janaka', 'Thirandee'], ans: 0,
      yes: 'Correct. I literally made you a whole world. Case closed.', no: 'Wrong! Look around you. I built you a whole game.' },
    { q: 'Who misses the other more?', opts: ['Janaka', 'Thirandee', 'Impossible to measure'], ans: 2,
      yes: 'Exactly. We would both lose this contest, and I am fine with that.', no: 'Nope. It is impossible to measure. We both miss each other loudly.' },
    { q: 'Who is more stubborn?', opts: ['Janaka', 'Thirandee', 'Both of us'], ans: 2,
      yes: 'Both. A very stubborn little team.', no: 'Careful... the real answer is both of us. 😅' },
    { q: 'Who apologises first?', opts: ['Janaka', 'Thirandee'], ans: 0,
      yes: 'Usually me. I am learning that being close matters more than being right.', no: 'Nice try! It is usually me. My pride is still in training.' },
    { q: 'What is our favourite colour?', opts: ['Purple', 'Pink', 'Blue', 'Green'], ans: 0,
      yes: 'Purple, obviously. It is basically our official colour.', no: 'Not even close. It is purple. It will always be purple.' },
    { q: 'Who wants more hugs?', opts: ['Janaka', 'Thirandee', 'Both, a LOT'], ans: 2,
      yes: 'Both. We are officially behind on hugs, and I plan to fix that.', no: 'The answer is both of us. Hugs owed: too many to count.' }
  ],
  quizResults: [
    'We need more dates, clearly. But I will teach you everything, slowly. 😄',
    'Not bad at all! You know me better than I know my own phone password.',
    'Perfect knowledge. You know us inside out. I am not surprised, you know me too well. 💜'
  ],

  /* 🎁 MYSTERY GIFTS (6 boxes) */
  gifts: [
    { icon: '🍬', title: 'A sweet message', text: 'You are the sweetest thing in my life, and I say that knowing how much you love sweets. No dessert can compete with you.' },
    { icon: '🤗', title: 'A virtual hug', text: 'Hold still... squeezing... okay, that was a long one. Stay in it as long as you like. I am saving the real one for when I see you.' },
    { icon: '😘', title: 'A kiss', text: 'One kiss, delivered from Kandy to Kalutara. Express shipping. No delivery fee. Please accept it with a smile.' },
    { icon: '🙈', title: 'A funny confession', text: 'Confession: sometimes I pretend to be busy just so I can check if you texted. You are not allowed to tell anyone. 🤫' },
    { icon: '✨', title: 'A compliment', text: 'Your smile fixes my whole day. Even when I am tired, one smile from you and I am fully charged again.' },
    { icon: '💌', title: 'A tiny letter', text: 'Thirandee, thank you for choosing me every day, even from far away. I am not going anywhere. Not now, not later.' }
  ],

  /* 💌 SECRET LETTERS */
  letters: [
    { tag: 'Sweet', title: 'Dear Thirandee,',
      text: 'I was trying to think of the best way to say this, and the truth is it is simple.\n\nYou make my days softer. Even the loud, busy ones. Somewhere in the middle of everything, I think of you, and everything slows down.\n\nThank you for being you.\n\nYours,\nJanaka' },
    { tag: 'Funny', title: 'Official Notice 📋',
      text: 'From: The Department of Missing Thirandee\nTo: Thirandee Piyara\n\nThis is a formal notice that you are required to:\n1. Smile today.\n2. Eat something sweet.\n3. Remember that a very silly boy in Kandy is thinking about you.\n\nFailure to comply will result in extra hugs.\n\nSigned,\nJanaka' },
    { tag: 'Emotional', title: 'On the hard days',
      text: 'Some nights the distance feels heavier than I admit.\n\nI will never say it out loud as much as I should, but the only reason I can handle it is that you are worth every kilometre.\n\nI do not just miss your voice. I miss being near you in the quiet moments, when nothing special is happening.\n\nWith all my heart,\nJanaka' },
    { tag: 'Reassuring', title: 'In case you ever doubt',
      text: 'If you ever wonder whether I am still choosing you, read this again.\n\nI am. Today, tomorrow, and on the days when we are both tired or cranky or stubborn.\n\nWe will figure out the hard parts together. You are never alone in this, Thirandee.\n\nAlways,\nJanaka' },
    { tag: 'Goodnight', title: 'Open when you cannot sleep',
      text: 'Close your eyes. Take a slow breath.\n\nWherever you are tonight, I am a phone call away and a thought away.\n\nRest, my love. Tomorrow I will be here, still yours.\n\nGoodnight, Thirandee. 🌙💜' }
  ],

  /* 🌸 DAILY SURPRISES (she gets a random one each tap) */
  daily: [
    'Good morning, beautiful. Go be amazing. I am cheering for you from Kandy.',
    'Reminder: you are loved. Properly, deeply, ridiculously loved.',
    'Whatever happens today, I am proud of you.',
    'I thought of you five minutes ago, and I am thinking of you now.',
    'Have you had something sweet today? That is an order, from your boyfriend.',
    'You are my favourite hello and my hardest goodbye.',
    'Drink water, take a breath, and smile a little. That one is for me.',
    'Your laugh is my favourite sound in the whole world.',
    'I love how kind you are, and how gentle you are with the world.',
    'Every call with you is my favourite part of the day.',
    'One day we will not need a phone to say goodnight. I am working towards it.',
    'You are more than enough, exactly as you are.'
  ],

  /* 🗺️ DISTANCE message */
  distance: 'Kandy to Kalutara looks far on a map. But I do not measure us in kilometres. Every call, every goodnight, every silly voice message makes the road shorter. Far apart on the outside, right next to each other where it matters.',

  /* 💜 THE FINAL LETTER (unlocks after she has explored a bit) */
  finalLetter:
    'My Thirandee,\n\nIf you are reading this, it means you explored the whole little world I made for you. That alone makes me smile.\n\nI am not perfect, and I do not always find the right words. So I tried to build them instead.\n\nThank you for your patience, your kindness, and your heart. Thank you for loving me from far away and making it feel close.\n\nI cannot promise every day will be easy. But I promise to keep choosing you, to keep showing up, and to keep working towards the day when we are never far apart again.\n\nThis little world belongs to you. Come back whenever you miss me.\n\nForever yours,\nJanaka ❤️'
};

/* ---------------------------------------------------------------
   Helpers + saved progress (localStorage)
   --------------------------------------------------------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rand = (a, b) => Math.random() * (b - a) + a;
const KEY = 'thirandee_world_v1';
let S = { done: {}, letters: [], gifts: [], best: 0, photos: [], finalRead: false };
try { Object.assign(S, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

/* The 9 activities. Each one grows a flower in the garden when completed. */
const ACTS = [
  { id: 'memory',   ic: '🃏', name: 'Love Memory',     sub: 'Match the pairs', flower: '🌸' },
  { id: 'quiz',     ic: '💭', name: 'Know Us?',        sub: 'A little quiz',   flower: '🌷' },
  { id: 'gifts',    ic: '🎁', name: 'Mystery Gifts',   sub: 'Six boxes',       flower: '🌹' },
  { id: 'hearts',   ic: '💜', name: 'Catch Hearts',    sub: 'Quick fingers',   flower: '🪻' },
  { id: 'letters',  ic: '💌', name: 'Secret Letters',  sub: 'From me to you',  flower: '💐' },
  { id: 'hug',      ic: '🤗', name: 'Virtual Hug',     sub: 'Tap for one',     flower: '🌼' },
  { id: 'distance', ic: '🗺️', name: 'Our Distance',    sub: 'Kandy to Kalutara', flower: '🌺' },
  { id: 'photos',   ic: '📷', name: 'Our Memories',    sub: 'Add your photos', flower: '🌻' },
  { id: 'daily',    ic: '🌸', name: 'Daily Surprise',  sub: 'Every visit',     flower: '🪷' }
];
const doneCount = () => ACTS.filter(a => S.done[a.id]).length;
const UNLOCK_AT = 6; // activities needed to open the final letter

function complete(id) {
  if (S.done[id]) return;
  S.done[id] = true; save();
  const a = ACTS.find(x => x.id === id);
  toast(`A new flower ${a.flower} grew in your garden`);
}

/* Little toast message at the bottom */
function toast(t) {
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = t;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

/* Popup (used for letters, gifts, results) */
const modal = $('#modal'), mBody = $('#modalBody');
function openModal(html) { mBody.innerHTML = html; modal.classList.add('show'); }
function closeModal() { modal.classList.remove('show'); }
$('#modalClose').onclick = closeModal;
modal.onclick = e => { if (e.target === modal) closeModal(); };

/* Sparkle burst at a point */
function sparks(x, y, n = 14, set = ['✨', '💜', '🌸', '⭐']) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.className = 'spark'; s.textContent = set[i % set.length];
    s.style.left = x + 'px'; s.style.top = y + 'px';
    const ang = rand(0, 6.28), d = rand(50, 140);
    s.style.setProperty('--dx', Math.cos(ang) * d + 'px');
    s.style.setProperty('--dy', Math.sin(ang) * d + 'px');
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
}

/* ---------------------------------------------------------------
   Background: stars + a few slow floating hearts (kept light)
   --------------------------------------------------------------- */
(function ambience() {
  const sky = $('#sky'), fx = $('#fx');
  for (let i = 0; i < 40; i++) {
    const s = document.createElement('i');
    s.style.left = rand(0, 100) + '%'; s.style.top = rand(0, 100) + '%';
    s.style.animationDelay = rand(0, 3) + 's';
    sky.appendChild(s);
  }
  const set = ['💜', '✨', '🌸', '💗', '⭐'];
  for (let i = 0; i < 11; i++) {
    const s = document.createElement('span');
    s.textContent = set[i % set.length];
    s.style.left = rand(2, 94) + '%';
    s.style.fontSize = rand(12, 24) + 'px';
    s.style.animationDuration = rand(11, 20) + 's';
    s.style.animationDelay = rand(0, 14) + 's';
    fx.appendChild(s);
  }
})();

/* ---------------------------------------------------------------
   Navigation
   --------------------------------------------------------------- */
const onShow = {}; // screen id -> function run when opened
function show(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $('#' + id).classList.add('active');
  $('#' + id).scrollTop = 0;
  if (onShow[id]) onShow[id]();
}
$$('.back').forEach(b => b.onclick = () => show('home'));

$('#enter').onclick = e => {
  sparks(e.clientX, e.clientY, 20);
  setTimeout(() => show('home'), 500);
};

/* ---------------------------------------------------------------
   Home screen
   --------------------------------------------------------------- */
onShow.home = () => {
  const n = doneCount();
  $('#progress').textContent = `${n} of ${ACTS.length} little wonders explored`;
  const box = $('#tiles'); box.innerHTML = '';
  const mk = (a, cls, onClick) => {
    const b = document.createElement('button');
    b.className = `tile glass ${cls || ''}`;
    b.innerHTML = `<span class="ic">${a.ic}</span>${a.name}<small>${a.sub}</small>`;
    b.onclick = onClick; box.appendChild(b); return b;
  };
  ACTS.forEach(a => mk(a, S.done[a.id] ? 'done' : '', () => show(a.id)));
  mk({ ic: '🌿', name: 'Our Little Garden', sub: 'See what you have grown' }, '', () => show('garden'));
  const locked = n < UNLOCK_AT;
  mk({ ic: locked ? '🔒' : '💜', name: 'The Last Letter',
       sub: locked ? `Opens after ${UNLOCK_AT} activities` : 'Waiting for you' },
     'final ' + (locked ? 'locked' : ''), () => {
       if (locked) return toast(`Explore ${UNLOCK_AT - n} more ✨`);
       S.finalRead = true; save();
       openModal(`<div class="big-emoji">💜</div><div class="letter">${CONFIG.finalLetter.replace(/</g, '&lt;')}</div>`);
     });
};

/* ---------------------------------------------------------------
   A. Love Memory Challenge (card matching)
   --------------------------------------------------------------- */
onShow.memory = () => {
  const syms = ['💜', '🌸', '🍬', '⭐', '🌷', '🦋', '🍰', '🌙'];
  const deck = [...syms, ...syms].sort(() => Math.random() - .5);
  const board = $('#memBoard'); board.innerHTML = '';
  let first = null, lock = false, moves = 0, matched = 0;
  $('#memMoves').textContent = '0 moves';
  deck.forEach(sym => {
    const c = document.createElement('button');
    c.className = 'mcard'; c.dataset.s = sym;
    c.innerHTML = `<div class="in"><div class="f">♡</div><div class="b">${sym}</div></div>`;
    c.onclick = () => {
      if (lock || c.classList.contains('flip')) return;
      c.classList.add('flip');
      if (!first) { first = c; return; }
      moves++; $('#memMoves').textContent = moves + ' moves';
      if (first.dataset.s === c.dataset.s) {
        first.classList.add('match'); c.classList.add('match'); first = null; matched++;
        if (matched === syms.length) setTimeout(() => {
          complete('memory');
          openModal(`<div class="big-emoji">💜</div><h3>You did it!</h3><p>${CONFIG.memoryWin}</p>`);
        }, 600);
      } else {
        lock = true; const a = first; first = null;
        setTimeout(() => { a.classList.remove('flip'); c.classList.remove('flip'); lock = false; }, 800);
      }
    };
    board.appendChild(c);
  });
};

/* ---------------------------------------------------------------
   B. How Well Do You Know Us? (quiz)
   --------------------------------------------------------------- */
onShow.quiz = () => {
  const Q = CONFIG.quiz, box = $('#quizBox');
  let i = 0, score = 0;
  const ask = () => {
    const q = Q[i];
    box.innerHTML = `<p class="qdots">Question ${i + 1} of ${Q.length}</p><p class="quiz-q">${q.q}</p>` +
      q.opts.map((o, k) => `<button class="opt" data-k="${k}">${o}</button>`).join('');
    $$('.opt', box).forEach(b => b.onclick = () => {
      const right = +b.dataset.k === q.ans; if (right) score++;
      box.innerHTML = `<p class="quiz-q">${right ? '💜 Yes!' : '🙈 Oops!'}</p><p class="react">${right ? q.yes : q.no}</p>` +
        `<button class="btn" id="qNext">${i + 1 < Q.length ? 'Next' : 'See result'}</button>`;
      $('#qNext').onclick = () => { i++; i < Q.length ? ask() : finish(); };
    });
  };
  const finish = () => {
    const tier = score >= Q.length - 1 ? 2 : score >= Q.length / 2 ? 1 : 0;
    box.innerHTML = `<div class="big-emoji" style="text-align:center">${['🙈', '😊', '🏆'][tier]}</div>` +
      `<p class="quiz-q" style="text-align:center">${score} / ${Q.length}</p><p class="react" style="text-align:center">${CONFIG.quizResults[tier]}</p>` +
      `<button class="btn" id="qAgain">Play again</button>`;
    $('#qAgain').onclick = () => { i = 0; score = 0; ask(); };
    complete('quiz');
  };
  ask();
};

/* ---------------------------------------------------------------
   C. The Mystery Gift
   --------------------------------------------------------------- */
onShow.gifts = () => {
  const grid = $('#giftGrid'); grid.innerHTML = '';
  const count = () => $('#giftCount').textContent = `${S.gifts.length} / ${CONFIG.gifts.length}`;
  CONFIG.gifts.forEach((g, idx) => {
    const b = document.createElement('button');
    const opened = S.gifts.includes(idx);
    b.className = 'gift' + (opened ? ' open' : '');
    b.textContent = opened ? g.icon : '🎁';
    b.onclick = e => {
      sparks(e.clientX, e.clientY, 10);
      openModal(`<div class="big-emoji">${g.icon}</div><h3>${g.title}</h3><p>${g.text}</p>`);
      if (!S.gifts.includes(idx)) S.gifts.push(idx);
      b.classList.add('open'); b.textContent = g.icon; save(); count();
      if (S.gifts.length === CONFIG.gifts.length) complete('gifts');
    };
    grid.appendChild(b);
  });
  count();
};

/* ---------------------------------------------------------------
   D. Catch the Hearts
   --------------------------------------------------------------- */
(function heartGame() {
  const arena = $('#arena'), msg = $('#arenaMsg');
  let score = 0, time = 20, spawn, clock;
  const types = [ // different hearts: emoji, points, fall speed (s)
    { e: '💜', p: 1, d: [3.4, 4.6] },
    { e: '💗', p: 2, d: [2.5, 3.4] },
    { e: '💖', p: 3, d: [1.8, 2.4] }
  ];
  $('#hBest').textContent = S.best;

  function drop() {
    const t = types[Math.random() < .55 ? 0 : Math.random() < .65 ? 1 : 2];
    const h = document.createElement('div');
    h.className = 'h' + (Math.random() < .4 ? ' sway' : '');
    h.textContent = t.e;
    h.style.left = rand(4, Math.max(10, arena.clientWidth - 50)) + 'px';
    h.style.animationDuration = rand(...t.d) + 's';
    h.addEventListener('animationend', ev => { if (ev.animationName === 'fall') h.remove(); });
    h.addEventListener('pointerdown', ev => {
      ev.preventDefault();
      if (h.classList.contains('pop')) return;
      score += t.p; $('#hScore').textContent = score;
      const r = arena.getBoundingClientRect();
      const plus = document.createElement('div');
      plus.className = 'plus'; plus.textContent = '+' + t.p;
      plus.style.left = (ev.clientX - r.left) + 'px'; plus.style.top = (ev.clientY - r.top) + 'px';
      arena.appendChild(plus); setTimeout(() => plus.remove(), 800);
      h.classList.add('pop'); setTimeout(() => h.remove(), 350);
    });
    arena.appendChild(h);
  }
  function end() {
    clearInterval(spawn); clearInterval(clock);
    $$('.h', arena).forEach(h => h.remove());
    if (score > S.best) { S.best = score; save(); $('#hBest').textContent = score; }
    const won = score >= 15;
    if (won) complete('hearts');
    msg.innerHTML = `<div class="big-emoji">${won ? '💖' : '💜'}</div><p>You caught <b>${score}</b>!<br><span class="muted">${won ? 'A flower grew for you.' : 'Catch 15 to win a flower.'}</span></p><button class="btn" id="hStart">Play again</button>`;
    msg.style.display = 'flex'; $('#hStart').onclick = start;
  }
  function start() {
    score = 0; time = 20;
    $('#hScore').textContent = 0; $('#hTime').textContent = time;
    msg.style.display = 'none';
    spawn = setInterval(drop, 520);
    clock = setInterval(() => { $('#hTime').textContent = --time; if (time <= 0) end(); }, 1000);
  }
  $('#hStart').onclick = start;
  onShow.hearts = () => { clearInterval(spawn); clearInterval(clock); $$('.h', arena).forEach(h => h.remove()); msg.style.display = 'flex'; };
  // stop the game if she leaves the screen
  $('#hearts .back').addEventListener('click', () => { clearInterval(spawn); clearInterval(clock); });
})();

/* ---------------------------------------------------------------
   E. Our Little Garden — grows as she completes activities
   --------------------------------------------------------------- */
onShow.garden = () => {
  const box = $('#gardenBox'); box.innerHTML = '';
  const add = (cls, txt, x, y, delay = 0) => {
    const d = document.createElement('div');
    d.className = cls; d.textContent = txt;
    d.style.left = x + '%'; d.style.top = y + '%'; d.style.animationDelay = delay + 's';
    box.appendChild(d);
  };
  add('cloud', '☁️', 5, 6); add('cloud', '☁️', 50, 16, -9);
  // one flower per completed activity, in fixed spots so the garden stays tidy
  const spots = [[8, 62], [30, 72], [52, 60], [74, 70], [18, 84], [42, 86], [64, 84], [84, 58], [88, 82]];
  ACTS.forEach((a, k) => { if (S.done[a.id]) add('plant', a.flower, spots[k][0], spots[k][1], k * .15); });
  const n = doneCount();
  if (n >= 3) add('bf', '🦋', 10, 30);
  if (n >= 6) add('bf', '🦋', 55, 40, -3);
  if (n >= 9) add('bf', '🦋', 30, 20, -6);
  if (n >= 4) add('plant', '⛲', 40, 36);
  if (n >= 7) add('plant', '🌈', 62, 8);
  if (S.finalRead) add('plant', '🏡', 74, 34);
  $('#gardenNote').textContent = n === 0
    ? 'Your garden is empty. Play something and watch it bloom. 🌱'
    : `${n} flower${n > 1 ? 's' : ''} grown. ${n < ACTS.length ? 'Keep exploring for butterflies and surprises.' : 'Every flower is bloomed. Just like us. 💜'}`;
};

/* ---------------------------------------------------------------
   Secret Letters
   --------------------------------------------------------------- */
onShow.letters = () => {
  const grid = $('#envGrid'); grid.innerHTML = '';
  CONFIG.letters.forEach((l, idx) => {
    const e = document.createElement('button');
    e.className = 'env' + (S.letters.includes(idx) ? ' read' : '');
    e.innerHTML = `<i>💜</i><span>${l.tag}</span>`;
    e.onclick = () => {
      openModal(`<div class="letter"><h4>${l.title}</h4>${l.text.replace(/</g, '&lt;')}</div>`);
      if (!S.letters.includes(idx)) S.letters.push(idx);
      e.classList.add('read'); save();
      if (S.letters.length === CONFIG.letters.length) complete('letters');
    };
    grid.appendChild(e);
  });
};

/* ---------------------------------------------------------------
   Virtual Hug
   --------------------------------------------------------------- */
$('#hugBtn').onclick = () => {
  const st = $('#hugStage'), m = $('#hugMsg');
  st.classList.remove('hugging'); void st.offsetWidth; st.classList.add('hugging');
  m.textContent = 'Coming closer...';
  setTimeout(() => {
    m.textContent = 'There you are. I have got you, Thirandee. Stay as long as you like. 💜';
    complete('hug');
  }, 2000);
};

/* ---------------------------------------------------------------
   Distance Doesn't Matter
   --------------------------------------------------------------- */
$('#mapHeart').onclick = e => {
  $('#distMsg').textContent = CONFIG.distance;
  sparks(e.clientX, e.clientY, 12);
  complete('distance');
};

/* ---------------------------------------------------------------
   Our Memories (preset photos + her own uploads, saved on her phone)
   --------------------------------------------------------------- */
function renderPhotos() {
  const grid = $('#photoGrid'); grid.innerHTML = '';
  const all = [...CONFIG.photos, ...S.photos.map(src => ({ src, caption: 'Added by you 💜' }))];
  all.forEach(p => {
    const d = document.createElement('button');
    d.className = 'ph';
    d.innerHTML = `<img src="${p.src}" alt="" loading="lazy"><em>${p.caption}</em>`;
    // hide any placeholder image that has not been added yet
    d.querySelector('img').onerror = () => d.remove();
    d.onclick = () => openModal(`<img class="full-img" src="${p.src}" alt=""><p>${p.caption}</p>`);
    grid.appendChild(d);
  });
}
onShow.photos = () => { renderPhotos(); complete('photos'); };

$('#upload').onchange = e => {
  [...e.target.files].forEach(f => {
    const img = new Image();
    img.onload = () => { // shrink first so it fits in localStorage
      const c = document.createElement('canvas'), r = Math.min(1, 700 / Math.max(img.width, img.height));
      c.width = img.width * r; c.height = img.height * r;
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      S.photos.push(c.toDataURL('image/jpeg', .72)); save(); renderPhotos();
      URL.revokeObjectURL(img.src);
    };
    img.src = URL.createObjectURL(f);
  });
  e.target.value = '';
};

/* ---------------------------------------------------------------
   Daily Surprise
   --------------------------------------------------------------- */
let lastDaily = -1;
$('#dailyBtn').onclick = e => {
  let k; do { k = Math.floor(Math.random() * CONFIG.daily.length); } while (k === lastDaily && CONFIG.daily.length > 1);
  lastDaily = k;
  $('#dailyText').textContent = CONFIG.daily[k];
  sparks(e.clientX, e.clientY, 8);
  $('#dailyBtn').textContent = 'Another one 💜';
  complete('daily');
};

})();
