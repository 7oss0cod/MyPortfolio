const $ = s => document.querySelector(s); const $$ = s => [...document.querySelectorAll(s)];
const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Intro Splash Screen
const intro = $('#intro');
if (intro) {
  setTimeout(() => intro.classList.add('h'), rm ? 0 : 1300);
}

// Interactive Typewriter Terminal in About section
const L = [
  ['m', '# bug report template'],
  ['k', '$ report-defect'],
  ['y', '  title:     <what went wrong>'],
  ['y', '  expected:  <expected result>'],
  ['y', '  actual:    <actual result>'],
  ['y', '  severity:  <impact>'],
  ['y', '  priority:  <urgency>']
];

const tp = $('#tp');
let li = 0, ci = 0, out = '';

function esc(s) {
  return s.replace(/</g, '&lt;');
}

function tick() {
  if (!tp) return;
  if (li >= L.length) {
    tp.innerHTML = out + '<span class="cur"></span>';
    return;
  }
  const [c, t] = L[li];
  ci++;
  tp.innerHTML = out + '<span class="' + c + '">' + esc(t.slice(0, ci)) + '</span><span class="cur"></span>';
  if (ci >= t.length) {
    out += '<span class="' + c + '">' + esc(t) + '</span>\n';
    li++;
    ci = 0;
    setTimeout(tick, 220);
  } else {
    setTimeout(tick, 22);
  }
}

if (tp) {
  if (rm) {
    out = L.map(([c, t]) => '<span class="' + c + '">' + esc(t) + '</span>').join('\n');
    tp.innerHTML = out;
  } else {
    setTimeout(tick, 1500);
  }
}

// Navigation, Progress Bar, Back-To-Top
const nav = $('#nav');
const topBtn = $('#top');
const pr = $('#prog');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (nav) nav.classList.toggle('s', y > 30);
  if (topBtn) topBtn.classList.toggle('v', y > 500);
  if (pr) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    pr.style.width = max > 0 ? (y / max * 100) + '%' : '0%';
  }
}, { passive: true });

if (topBtn) {
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
const bg = $('#bg');
const lk = $('#lk');
if (bg && lk) {
  bg.onclick = () => {
    const o = lk.classList.toggle('o');
    bg.setAttribute('aria-expanded', o);
  };
  $$('.links a').forEach(a => a.onclick = () => {     lk.classList.remove('o');     bg.setAttribute('aria-expanded', 'false');   }); }  // Reveal on Scroll Animations const io = new IntersectionObserver(es => es.forEach(e => {   if (e.isIntersecting) {     e.target.classList.add('in');     io.unobserve(e.target);   } }), { threshold: 0.15 });  $$
('.rv').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 90 + 'ms';
  io.observe(el);
});

// Scrollspy for Nav Links
const so = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    $$('.links a').forEach(a => {       a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id);     });   } }), { rootMargin: '-40\% 0px -50\% 0px' });  $$
('header.hero, section').forEach(s => so.observe(s));

// Glowing Mouse Cursor Follower
const glow = $('#glow');
if (glow && !rm && matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', e => {
    glow.style.transform = `translate(${e.clientX - 210}px, ${e.clientY - 210}px)`;
    glow.style.left = '0px';
    glow.style.top = '0px';
  });
}

// Project Details Modal Dialog
const D = [
  {
    t: 'E-Commerce Website Testing',
    m: '09/2026 · Software Tester – Part 2: Products & Search',
    b: '<p>Worked within a 4-member team to test an e-commerce website, responsible for Part 2: Products &amp; Search.</p><ul class="ls"><li>Tested product categories, search functionality, brand filtering, and product details.</li><li>Designed and executed test cases and documented expected versus actual results.</li><li>Reported defects with severity and priority classifications.</li></ul><div class="chips"><span class="chip">Test cases</span><span class="chip">Defect reporting</span><span class="chip">Manual testing</span></div><div style="margin-top:22px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn p" href="https://github.com/7oss0cod/software-testing-project" target="_blank" rel="noopener"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px;margin-right:6px"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 14.42 22 12A10 10 0 0 0 12 2z"/></svg>View on GitHub</a></div>'
  },
  {
    t: 'Dental Clinic Management System',
    m: '07/2026 – 08/2026 · Automated Patient and Invoicing System for Dental Practices',
    b: '<p>Developed a comprehensive desktop database application using Microsoft Access to automate and streamline operations for a dental clinic.</p><ul class="ls"><li><b>Relational database design:</b> normalized structure with tables for Patients, Appointments, Services, and Invoices, with enforced integrity and foreign key relationships.</li><li><b>Interactive forms:</b> user-friendly forms for patient registration, appointment tracking, and billing management with quick navigation.</li><li><b>Advanced SQL &amp; automation:</b> parameter, action, and aggregate queries for multi-criteria searching (name, address, date, age) and conditional data updates.</li><li><b>Dynamic reporting:</b> reports to track payment statuses, patient histories, and specific dental treatments.</li></ul><div class="chips"><span class="chip">Microsoft Access</span><span class="chip">SQL</span><span class="chip">Relational database modeling</span><span class="chip">UI forms design</span></div><div style="margin-top:22px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn p" href="https://github.com/7oss0cod/dental-clinic-database" target="_blank" rel="noopener"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px;margin-right:6px"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 14.42 22 12A10 10 0 0 0 12 2z"/></svg>View on GitHub</a></div>'
  }
];

const dg = $('#dg');
const db = $('#db');
const dx = $('#dx');  if (dg && db) {   $$('[data-d]').forEach(b => {
    b.onclick = () => {
      const p = D[b.dataset.d];
      if (p) {
        db.innerHTML = '<div class="meta">' + p.m + '</div><h3 id="dt" style="margin-bottom:14px;font-size:1.6rem">' + p.t + '</h3>' + p.b;
        dg.showModal();
      }
    };
  });

  if (dx) dx.onclick = () => dg.close();
  dg.addEventListener('click', e => {
    if (e.target === dg) dg.close();
  });
}

// Copy Email Button with Animated Feedback
const cp = $('#cp');
const cpt = $('#cpt');
if (cp && cpt) {
  cp.onclick = async () => {
    try {
      await navigator.clipboard.writeText('kemoelshaheny@gmail.com');
      cpt.textContent = 'Copied!';
      cpt.style.color = 'var(--c2)';
    } catch (e) {
      cpt.textContent = 'Select manually';
    }
    setTimeout(() => {
      cpt.textContent = 'Copy';
      cpt.style.color = '';
    }, 1800);
  };
}
