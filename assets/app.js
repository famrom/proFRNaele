// ---- Global state ----
let tomoIndex = 0;
let activeTab = "comic"; // "characters" | "comic" | "grammar"
let current = 0; // panel index within flattened comic panels
let charIndex = 0; // which character selected
let charPanel = 0; // panel index within that character
let noteOpen = false;
let audioCtx = null;

function getTomo() { return TOMOS[tomoIndex]; }
function getComicPanels() {
  const tomo = getTomo();
  const panels = [];
  tomo.comic.pages.forEach(p => p.panels.forEach(panel => panels.push(panel)));
  return panels;
}

// ---- Audio: synthesized SFX (no external files) ----
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function noiseBuffer(ctx, duration) {
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}
function playEngine() {
  const ctx = getAudioCtx(); const now = ctx.currentTime;
  const osc = ctx.createOscillator(); const osc2 = ctx.createOscillator(); const gain = ctx.createGain();
  osc.type = "sawtooth"; osc2.type = "square";
  osc.frequency.setValueAtTime(70, now); osc.frequency.exponentialRampToValueAtTime(260, now + 1.3);
  osc2.frequency.setValueAtTime(90, now); osc2.frequency.exponentialRampToValueAtTime(300, now + 1.3);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.25, now + 0.15);
  gain.gain.exponentialRampToValueAtTime(0.15, now + 1.0);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
  const filter = ctx.createBiquadFilter(); filter.type = "lowpass"; filter.frequency.setValueAtTime(1200, now);
  osc.connect(filter); osc2.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  osc.start(now); osc2.start(now); osc.stop(now + 1.6); osc2.stop(now + 1.6);
}
function playThunder() {
  const ctx = getAudioCtx(); const now = ctx.currentTime;
  const crackSrc = ctx.createBufferSource(); crackSrc.buffer = noiseBuffer(ctx, 0.2);
  const crackFilter = ctx.createBiquadFilter(); crackFilter.type = "highpass"; crackFilter.frequency.value = 1500;
  const crackGain = ctx.createGain();
  crackGain.gain.setValueAtTime(0.5, now); crackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
  crackSrc.connect(crackFilter); crackFilter.connect(crackGain); crackGain.connect(ctx.destination);
  crackSrc.start(now); crackSrc.stop(now + 0.2);

  const boomOsc = ctx.createOscillator(); boomOsc.type = "sine";
  boomOsc.frequency.setValueAtTime(120, now + 0.1); boomOsc.frequency.exponentialRampToValueAtTime(35, now + 1.4);
  const boomGain = ctx.createGain();
  boomGain.gain.setValueAtTime(0.0001, now + 0.1);
  boomGain.gain.exponentialRampToValueAtTime(0.6, now + 0.25);
  boomGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
  boomOsc.connect(boomGain); boomGain.connect(ctx.destination);
  boomOsc.start(now + 0.1); boomOsc.stop(now + 1.8);

  const rumbleSrc = ctx.createBufferSource(); rumbleSrc.buffer = noiseBuffer(ctx, 1.6);
  const rumbleFilter = ctx.createBiquadFilter(); rumbleFilter.type = "lowpass"; rumbleFilter.frequency.value = 200;
  const rumbleGain = ctx.createGain();
  rumbleGain.gain.setValueAtTime(0.0001, now + 0.1);
  rumbleGain.gain.exponentialRampToValueAtTime(0.3, now + 0.3);
  rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.7);
  rumbleSrc.connect(rumbleFilter); rumbleFilter.connect(rumbleGain); rumbleGain.connect(ctx.destination);
  rumbleSrc.start(now + 0.1); rumbleSrc.stop(now + 1.7);
}
function playScreech() {
  const ctx = getAudioCtx(); const now = ctx.currentTime;
  const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx, 1.0);
  const filter = ctx.createBiquadFilter(); filter.type = "bandpass"; filter.Q.value = 8;
  filter.frequency.setValueAtTime(3200, now); filter.frequency.exponentialRampToValueAtTime(900, now + 0.9);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.35, now + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);
  src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  src.start(now); src.stop(now + 1.0);
}
function playBeep() {
  const ctx = getAudioCtx(); const now = ctx.currentTime;
  [0, 0.18, 0.42].forEach((offset, i) => {
    const osc = ctx.createOscillator();
    osc.type = "square";
    osc.frequency.value = i < 2 ? 1400 : 300;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now + offset);
    gain.gain.exponentialRampToValueAtTime(0.18, now + offset + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + (i < 2 ? 0.12 : 0.3));
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now + offset); osc.stop(now + offset + 0.35);
  });
}
function playRustle() {
  const ctx = getAudioCtx(); const now = ctx.currentTime;
  const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx, 0.5);
  const filter = ctx.createBiquadFilter(); filter.type = "highpass"; filter.frequency.value = 2500;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.2, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.05, now + 0.25);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
  src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  src.start(now); src.stop(now + 0.5);
}
function playWhoosh() {
  const ctx = getAudioCtx(); const now = ctx.currentTime;
  const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx, 0.6);
  const filter = ctx.createBiquadFilter(); filter.type = "bandpass"; filter.Q.value = 1.2;
  filter.frequency.setValueAtTime(400, now); filter.frequency.exponentialRampToValueAtTime(1800, now + 0.3);
  filter.frequency.exponentialRampToValueAtTime(300, now + 0.6);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.3, now + 0.15);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
  src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  src.start(now); src.stop(now + 0.6);
}
function playSip() {
  const ctx = getAudioCtx(); const now = ctx.currentTime;
  [0, 0.22].forEach((offset) => {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(420, now + offset);
    osc.frequency.exponentialRampToValueAtTime(180, now + offset + 0.15);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now + offset);
    gain.gain.exponentialRampToValueAtTime(0.22, now + offset + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.18);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now + offset); osc.stop(now + offset + 0.2);
  });
}
function playClack() {
  const ctx = getAudioCtx(); const now = ctx.currentTime;
  const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx, 0.12);
  const filter = ctx.createBiquadFilter(); filter.type = "bandpass"; filter.Q.value = 3; filter.frequency.value = 1800;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.4, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
  src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  src.start(now); src.stop(now + 0.12);

  const thump = ctx.createOscillator(); thump.type = "sine";
  thump.frequency.setValueAtTime(150, now); thump.frequency.exponentialRampToValueAtTime(60, now + 0.1);
  const thumpGain = ctx.createGain();
  thumpGain.gain.setValueAtTime(0.3, now);
  thumpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
  thump.connect(thumpGain); thumpGain.connect(ctx.destination);
  thump.start(now); thump.stop(now + 0.13);
}
function playRingtone() {
  const ctx = getAudioCtx(); const now = ctx.currentTime;
  [0, 0.55, 1.1].forEach((offset) => {
    const osc = ctx.createOscillator(); osc.type = "sine";
    osc.frequency.value = 440;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now + offset);
    gain.gain.exponentialRampToValueAtTime(0.2, now + offset + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.2, now + offset + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.38);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now + offset); osc.stop(now + offset + 0.4);
  });
}
function playSfx(type) {
  if (type === "engine") playEngine();
  else if (type === "thunder") playThunder();
  else if (type === "screech") playScreech();
  else if (type === "beep") playBeep();
  else if (type === "rustle") playRustle();
  else if (type === "whoosh") playWhoosh();
  else if (type === "sip") playSip();
  else if (type === "clack") playClack();
  else if (type === "ringtone") playRingtone();
}

// ---- Speech (dialogue / narration) with punctuation-based prosody ----
function speakerVoice(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % 1000;
  return { pitch: 0.85 + (hash % 40) / 100, rate: 0.82 + (hash % 15) / 100 };
}
function pickFrenchVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  return voices.find(v => v.lang && v.lang.startsWith("fr")) || null;
}
function splitSentences(text) {
  const matches = text.match(/[^.!?…]+[.!?…]*/g);
  return matches ? matches.map(s => s.trim()).filter(Boolean) : [text];
}
function queueSentence(text, basePitch, baseRate, voice) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  let pitch = basePitch, rate = baseRate;
  if (/\?\s*$/.test(text)) { pitch = Math.min(2, basePitch + 0.35); }
  else if (/!\s*$/.test(text)) { rate = Math.min(1.3, baseRate + 0.12); pitch = Math.min(2, basePitch + 0.15); }
  u.pitch = pitch; u.rate = rate;
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}
function speak(text, speaker) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const { pitch, rate } = speakerVoice(speaker);
  const voice = pickFrenchVoice();
  splitSentences(text).forEach(s => queueSentence(s, pitch, rate, voice));
}
function speakSequence(lines) {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  const voice = pickFrenchVoice();
  lines.forEach(line => {
    if (line.type === "sfx") { playSfx(line.sfxType); return; }
    const { pitch, rate } = speakerVoice(line.speaker);
    splitSentences(line.text).forEach(s => queueSentence(s, pitch, rate, voice));
  });
}

function openTranslation(word) {
  const clean = word.replace(/[.,!?;:"'\u2019\u00ab\u00bb]/g, "");
  if (!clean) return;
  window.open("https://context.reverso.net/traduccion/frances-espanol/" + encodeURIComponent(clean), "_blank");
}
function loadNote(key) {
  try { return localStorage.getItem(key) || ""; } catch (e) { return ""; }
}
function saveNote(key, value) {
  try { localStorage.setItem(key, value); return true; } catch (e) { return false; }
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ---- Rendering ----
function render() {
  const app = document.getElementById("app");
  const tomo = getTomo();

  app.innerHTML = `
    <div class="header">
      <div class="brand">
        <span>NAELE — ${escapeHtml(tomo.title)}</span>
        <select class="tomo-select" id="tomoSelect">
          ${TOMOS.map((t, i) => `<option value="${i}" ${i === tomoIndex ? "selected" : ""}>${escapeHtml(t.title)}</option>`).join("")}
        </select>
      </div>
    </div>
    <div class="tabs">
      <button class="tab-btn ${activeTab === "characters" ? "active" : ""}" data-tab="characters">Personajes</button>
      <button class="tab-btn ${activeTab === "comic" ? "active" : ""}" data-tab="comic">Cómic</button>
      <button class="tab-btn ${activeTab === "grammar" ? "active" : ""}" data-tab="grammar">Gramática</button>
    </div>
    <div class="tab-panel" id="tabPanel"></div>
  `;

  document.getElementById("tomoSelect").addEventListener("change", (e) => {
    tomoIndex = parseInt(e.target.value); current = 0; render();
  });
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => { activeTab = btn.dataset.tab; current = 0; noteOpen = false; render(); });
  });

  if (activeTab === "comic") renderComic();
  else if (activeTab === "characters") renderCharacters();
  else if (activeTab === "grammar") renderGrammar();
}

function renderGrammar() {
  const tomo = getTomo();
  const grammarPages = tomo.grammar || [];
  const container = document.getElementById("tabPanel");
  if (grammarPages.length === 0) {
    container.innerHTML = `<div class="placeholder">Todavía no hay esquema gramatical en este tomo.</div>`;
    return;
  }
  const g = grammarPages[0];

  const sectionsHtml = g.sections.map((section) => {
    const itemsHtml = section.items.map((item, ii) => {
      const words = item.fr.split(" ").map((w) =>
        `<span class="word" data-word="${escapeHtml(w).replace(/"/g, '&quot;')}">${escapeHtml(w)} </span>`
      ).join("");
      return `
        <div class="gram-item">
          <div class="gram-item-text">${words}${item.note ? `<span class="gram-note">${escapeHtml(item.note)}</span>` : ""}</div>
          <button class="play-btn" data-gram-speak="${escapeHtml(item.fr).replace(/"/g, '&quot;')}">▶</button>
        </div>`;
    }).join("");
    return `
      <div class="gram-section">
        <div class="gram-section-title">${escapeHtml(section.title)}</div>
        ${itemsHtml}
      </div>`;
  }).join("");

  container.innerHTML = `
    <div class="content">
      <img src="${g.img}" alt="${escapeHtml(g.title)}" class="gram-poster">
      ${sectionsHtml}
    </div>
  `;

  document.querySelectorAll(".word").forEach(el => {
    el.addEventListener("click", () => openTranslation(el.dataset.word));
  });
  document.querySelectorAll("[data-gram-speak]").forEach(el => {
    el.addEventListener("click", () => speak(el.dataset.gramSpeak, "Naele"));
  });
}

function renderCharacters() {
  const tomo = getTomo();
  const chars = tomo.characters || [];
  const container = document.getElementById("tabPanel");
  if (chars.length === 0) {
    container.innerHTML = `<div class="placeholder">Todavía no hay personajes en este tomo.</div>`;
    return;
  }
  if (charIndex >= chars.length) charIndex = 0;
  const character = chars[charIndex];
  if (charPanel >= character.panels.length) charPanel = 0;
  const panel = character.panels[charPanel];

  const chips = chars.map((c, i) => `
    <button class="char-chip ${i === charIndex ? "active" : ""}" data-char="${i}" style="--chip-color:${c.color}">${escapeHtml(c.name)}</button>
  `).join("");

  const dots = character.panels.map((p, i) =>
    `<div class="dot ${i === charPanel ? "active" : ""}" data-charpanel="${i}"></div>`
  ).join("");

  const linesHtml = panel.lines.map((line, li) => {
    const words = line.text.split(" ").map((w) =>
      `<span class="word" data-word="${escapeHtml(w).replace(/"/g, '&quot;')}">${escapeHtml(w)} </span>`
    ).join("");
    return `
      <div class="line-card narration">
        <div class="line-head">
          <span class="speaker" style="color:${line.color}">${escapeHtml(line.speaker)}</span>
          <button class="play-btn" data-speak-char-line="${li}">▶</button>
        </div>
        <div class="line-text">${words}</div>
      </div>`;
  }).join("");

  container.innerHTML = `
    <div class="char-chips">${chips}</div>
    <div class="topbar">
      <div class="sub">Ficha ${charPanel + 1} / ${character.panels.length}</div>
      <div class="dots">${dots}</div>
    </div>
    <div class="panel-wrap" id="charPanelWrap">
      <div class="panel-img-holder">
        <img src="${panel.img}" alt="${escapeHtml(character.name)}" draggable="false">
      </div>
      <div class="nav-btn left ${charPanel === 0 ? "hidden" : ""}" id="charPrevBtn">‹</div>
      <div class="nav-btn right ${charPanel === character.panels.length - 1 ? "hidden" : ""}" id="charNextBtn">›</div>
    </div>
    <div class="content">
      ${linesHtml}
    </div>
  `;

  document.querySelectorAll("[data-char]").forEach(el => {
    el.addEventListener("click", () => { charIndex = parseInt(el.dataset.char); charPanel = 0; renderCharacters(); });
  });
  document.querySelectorAll("[data-charpanel]").forEach(el => {
    el.addEventListener("click", () => { charPanel = parseInt(el.dataset.charpanel); renderCharacters(); });
  });
  const prevBtn = document.getElementById("charPrevBtn");
  const nextBtn = document.getElementById("charNextBtn");
  if (prevBtn) prevBtn.addEventListener("click", () => { if (charPanel > 0) { charPanel--; renderCharacters(); } });
  if (nextBtn) nextBtn.addEventListener("click", () => { if (charPanel < character.panels.length - 1) { charPanel++; renderCharacters(); } });

  document.querySelectorAll(".word").forEach(el => {
    el.addEventListener("click", () => openTranslation(el.dataset.word));
  });
  document.querySelectorAll("[data-speak-char-line]").forEach(el => {
    el.addEventListener("click", () => {
      const li = parseInt(el.dataset.speakCharLine);
      speak(panel.lines[li].text, panel.lines[li].speaker);
    });
  });

  const wrap = document.getElementById("charPanelWrap");
  let touchStartX = null;
  wrap.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; });
  wrap.addEventListener("touchend", e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 60 && charPanel > 0) { charPanel--; renderCharacters(); }
    else if (dx < -60 && charPanel < character.panels.length - 1) { charPanel++; renderCharacters(); }
    touchStartX = null;
  });
}

function renderPlaceholderOrList(items, label) {
  const container = document.getElementById("tabPanel");
  if (!items || items.length === 0) {
    container.innerHTML = `<div class="placeholder">Todavía no hay contenido de ${label} en este tomo.<br>Vuelve pronto — se irá añadiendo.</div>`;
    return;
  }
  // Simple fallback list rendering (extend later as needed)
  container.innerHTML = `<div class="content">${items.map(it => `<div class="line-card">${escapeHtml(JSON.stringify(it))}</div>`).join("")}</div>`;
}

function renderComic() {
  const panels = getComicPanels();
  if (panels.length === 0) {
    document.getElementById("tabPanel").innerHTML = `<div class="placeholder">Todavía no hay páginas de cómic en este tomo.</div>`;
    return;
  }
  if (current >= panels.length) current = panels.length - 1;
  const panel = panels[current];
  const container = document.getElementById("tabPanel");

  const dots = panels.map((p, i) =>
    `<div class="dot ${i === current ? "active" : ""}" data-goto="${i}"></div>`
  ).join("");

  const linesHtml = panel.lines.map((line, li) => {
    const words = line.text.split(" ").map((w) =>
      `<span class="word" data-word="${escapeHtml(w).replace(/"/g, '&quot;')}">${escapeHtml(w)} </span>`
    ).join("");
    const cls = line.type === "narration" ? "narration" : (line.type === "sfx" ? "sfx" : "");
    const playIcon = line.type === "sfx" ? "🔉" : "▶";
    return `
      <div class="line-card ${cls}">
        <div class="line-head">
          <span class="speaker" style="color:${line.color}">${escapeHtml(line.speaker)}</span>
          <button class="play-btn" data-speak-line="${li}">${playIcon}</button>
        </div>
        <div class="line-text">${words}</div>
      </div>`;
  }).join("");

  const noteKey = "note:" + getTomo().id + ":panel:" + panel.id;
  const note = loadNote(noteKey);

  container.innerHTML = `
    <div class="topbar">
      <div class="sub">Vignette ${current + 1} / ${panels.length}</div>
      <div class="dots">${dots}</div>
    </div>
    <div class="panel-wrap" id="panelWrap">
      <div class="panel-img-holder">
        <img id="panelImg" src="${panel.img}" alt="Vignette ${panel.id}" draggable="false">
      </div>
      <div class="nav-btn left ${current === 0 ? "hidden" : ""}" id="prevBtn">‹</div>
      <div class="nav-btn right ${current === panels.length - 1 ? "hidden" : ""}" id="nextBtn">›</div>
    </div>
    <div class="content">
      <div class="hint-row">
        <div class="hint">Toca una palabra para traducirla</div>
        <button class="listen-all" id="listenAll">🔊 Escuchar todo</button>
      </div>
      ${linesHtml}
    </div>
    <div class="footer-pad">
      <button class="notes-toggle ${noteOpen ? "open" : ""}" id="notesToggle">
        <span>📝 Mi nota en esta viñeta</span>
        ${note && !noteOpen ? '<span class="note-dot">●</span>' : ""}
      </button>
      ${noteOpen ? `
        <div class="notes-area">
          <textarea id="noteText" placeholder="Escribe aquí lo que quieras recordar de esta viñeta...">${escapeHtml(note)}</textarea>
          <div class="save-status" id="saveStatus"></div>
        </div>` : ""}
    </div>
  `;

  document.querySelectorAll("[data-goto]").forEach(el => {
    el.addEventListener("click", () => { current = parseInt(el.dataset.goto); noteOpen = false; renderComic(); });
  });
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (prevBtn) prevBtn.addEventListener("click", () => { if (current > 0) { current--; noteOpen = false; renderComic(); } });
  if (nextBtn) nextBtn.addEventListener("click", () => { if (current < panels.length - 1) { current++; noteOpen = false; renderComic(); } });

  document.querySelectorAll(".word").forEach(el => {
    el.addEventListener("click", () => openTranslation(el.dataset.word));
  });
  document.querySelectorAll("[data-speak-line]").forEach(el => {
    el.addEventListener("click", () => {
      const li = parseInt(el.dataset.speakLine);
      const line = panel.lines[li];
      if (line.type === "sfx") playSfx(line.sfxType);
      else speak(line.text, line.speaker);
    });
  });
  const listenAllBtn = document.getElementById("listenAll");
  if (listenAllBtn) listenAllBtn.addEventListener("click", () => speakSequence(panel.lines));

  const notesToggle = document.getElementById("notesToggle");
  if (notesToggle) notesToggle.addEventListener("click", () => { noteOpen = !noteOpen; renderComic(); });

  const noteTextEl = document.getElementById("noteText");
  if (noteTextEl) {
    noteTextEl.addEventListener("input", () => {
      const ok = saveNote(noteKey, noteTextEl.value);
      const status = document.getElementById("saveStatus");
      if (status) status.textContent = ok ? "Guardado" : "Error al guardar";
      if (ok) setTimeout(() => { if (status) status.textContent = ""; }, 1200);
    });
  }

  const wrap = document.getElementById("panelWrap");
  let touchStartX = null;
  wrap.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; });
  wrap.addEventListener("touchend", e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 60 && current > 0) { current--; noteOpen = false; renderComic(); }
    else if (dx < -60 && current < panels.length - 1) { current++; noteOpen = false; renderComic(); }
    touchStartX = null;
  });
}

document.addEventListener("keydown", e => {
  if (activeTab !== "comic") return;
  const panels = getComicPanels();
  if (e.key === "ArrowRight" && current < panels.length - 1) { current++; renderComic(); }
  if (e.key === "ArrowLeft" && current > 0) { current--; renderComic(); }
});

if (window.speechSynthesis) { window.speechSynthesis.onvoiceschanged = () => {}; }

render();
