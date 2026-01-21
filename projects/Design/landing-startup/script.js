const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const themeBtn = document.getElementById('themeBtn');
function setTheme(mode) {
  if (mode === 'light') {
    document.body.classList.remove('bg-slate-950', 'text-slate-50');
    document.body.classList.add('bg-slate-50', 'text-slate-900');
    document.querySelectorAll('.bg-slate-900\\/60').forEach((el) => {
      el.classList.remove('bg-slate-900/60');
      el.classList.add('bg-white');
    });
    document.querySelectorAll('.bg-slate-950\\/80').forEach((el) => {
      el.classList.remove('bg-slate-950/80');
      el.classList.add('bg-white/90');
    });
    document.querySelectorAll('.bg-white\\/5').forEach((el) => {
      el.classList.remove('bg-white/5');
      el.classList.add('bg-slate-100');
    });
    document.querySelectorAll('.text-slate-300').forEach((el) => el.classList.add('text-slate-600'));
    document.querySelectorAll('.text-slate-200').forEach((el) => el.classList.add('text-slate-700'));
    document.querySelectorAll('.border-white\\/10').forEach((el) => el.classList.add('border-slate-200'));
    document.querySelectorAll('.border-white\\/5').forEach((el) => el.classList.add('border-slate-200'));
    localStorage.setItem('nova-theme', 'light');
  } else {
    document.body.classList.add('bg-slate-950', 'text-slate-50');
    document.body.classList.remove('bg-slate-50', 'text-slate-900');
    document.querySelectorAll('.bg-white').forEach((el) => {
      if (el.closest('#pricing') || el.closest('#contact')) {
        el.classList.remove('bg-white');
        el.classList.add('bg-slate-900/60');
      }
    });
    document.querySelectorAll('.bg-white\\/90').forEach((el) => {
      el.classList.remove('bg-white/90');
      el.classList.add('bg-slate-950/80');
    });
    document.querySelectorAll('.bg-slate-100').forEach((el) => {
      el.classList.remove('bg-slate-100');
      el.classList.add('bg-white/5');
    });
    document.querySelectorAll('.text-slate-600').forEach((el) => el.classList.remove('text-slate-600'));
    document.querySelectorAll('.text-slate-700').forEach((el) => el.classList.remove('text-slate-700'));
    document.querySelectorAll('.border-slate-200').forEach((el) => el.classList.remove('border-slate-200'));
    localStorage.setItem('nova-theme', 'dark');
  }
}

if (themeBtn) {
  const saved = localStorage.getItem('nova-theme');
  if (saved === 'light') setTheme('light');
  themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('bg-slate-50');
    setTheme(isLight ? 'dark' : 'light');
  });
}

const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
if (nav && menuBtn) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    nav.classList.toggle('flex-col', !expanded);
    nav.classList.toggle('gap-4', !expanded);
    nav.classList.toggle('bg-slate-900/95', !expanded);
    nav.classList.toggle('absolute', !expanded);
    nav.classList.toggle('right-4', !expanded);
    nav.classList.toggle('top-16', !expanded);
    nav.classList.toggle('px-4', !expanded);
    nav.classList.toggle('py-3', !expanded);
    nav.classList.toggle('rounded-xl', !expanded);
    nav.classList.toggle('border', !expanded);
    nav.classList.toggle('border-white/10', !expanded);
  });
}

const demoBtn = document.getElementById('demoBtn');
const demoHint = document.getElementById('demoHint');
const mauValue = document.getElementById('mauValue');
if (demoBtn && demoHint && mauValue) {
  demoBtn.addEventListener('click', () => {
    demoHint.textContent = 'Running performance simulation...';
    demoBtn.disabled = true;
    demoBtn.classList.add('opacity-80');
    setTimeout(() => {
      const delta = Math.floor(Math.random() * 900 + 100);
      const updated = Number(mauValue.textContent.replace(/[, ]/g, '')) + delta;
      mauValue.textContent = updated.toLocaleString();
      demoHint.textContent = `Traffic spike handled — +${delta.toLocaleString()} MAU simulated.`;
      demoBtn.disabled = false;
      demoBtn.classList.remove('opacity-80');
    }, 800);
  });
}

const billingBtn = document.getElementById('billingBtn');
const billingLabel = document.getElementById('billingLabel');
const priceMap = { starter: [9, 90], pro: [19, 190], team: [39, 390] };
if (billingBtn) {
  billingBtn.addEventListener('click', () => {
    const yearly = billingBtn.getAttribute('aria-pressed') === 'true' ? false : true;
    billingBtn.setAttribute('aria-pressed', String(yearly));
    if (billingLabel) billingLabel.textContent = yearly ? 'Yearly' : 'Monthly';
    document.querySelectorAll('[data-price]').forEach((el) => {
      const key = el.getAttribute('data-price');
      const prices = priceMap[key];
      if (!prices) return;
      el.textContent = yearly ? prices[1] : prices[0];
      const per = el.nextElementSibling;
      if (per) per.textContent = yearly ? '/yr' : '/mo';
    });
  });
}

const contactForm = document.getElementById('contactForm');
const formHint = document.getElementById('formHint');
if (contactForm && formHint) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formHint.textContent = 'Sending...';
    setTimeout(() => {
      formHint.textContent = 'Got it! This demo form has no backend, but your UI is ready.';
      contactForm.reset();
    }, 600);
  });
}

