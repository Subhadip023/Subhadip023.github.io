const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.contains('flex');
    nav.classList.toggle('hidden', open);
    nav.classList.toggle('flex', !open);
    nav.classList.toggle('flex-col', !open);
    nav.classList.toggle('gap-4', !open);
    nav.classList.toggle('bg-slate-950', !open);
    nav.classList.toggle('border', !open);
    nav.classList.toggle('border-white/10', !open);
    nav.classList.toggle('absolute', !open);
    nav.classList.toggle('right-4', !open);
    nav.classList.toggle('top-16', !open);
    nav.classList.toggle('px-4', !open);
    nav.classList.toggle('py-3', !open);
    nav.classList.toggle('rounded-xl', !open);
    menuBtn.setAttribute('aria-expanded', String(!open));
  });
}

const themeBtn = document.getElementById('themeBtn');
const STORAGE_KEY = 'newsly-theme';
function setTheme(mode) {
  const light = mode === 'light';
  document.body.classList.toggle('bg-slate-50', light);
  document.body.classList.toggle('text-slate-900', light);
  document.body.classList.toggle('bg-slate-950', !light);
  document.body.classList.toggle('text-slate-50', !light);

  document.querySelectorAll('.bg-white\\/5, .bg-slate-100').forEach((el) => {
    if (light) {
      el.classList.remove('bg-white/5');
      el.classList.add('bg-slate-100');
    } else {
      el.classList.remove('bg-slate-100');
      el.classList.add('bg-white/5');
    }
  });

  document.querySelectorAll('.bg-white\\/10, .bg-slate-200').forEach((el) => {
    if (light) {
      el.classList.remove('bg-white/10');
      el.classList.add('bg-slate-200');
    } else {
      el.classList.remove('bg-slate-200');
      el.classList.add('bg-white/10');
    }
  });

  document.querySelectorAll('.bg-slate-950\\/90, .bg-white\\/90').forEach((el) => {
    if (light) {
      el.classList.remove('bg-slate-950/90');
      el.classList.add('bg-white/90');
    } else {
      el.classList.remove('bg-white/90');
      el.classList.add('bg-slate-950/90');
    }
  });

  document.querySelectorAll('.border-white\\/10, .border-slate-200').forEach((el) => {
    if (light) {
      el.classList.add('border-slate-200');
    } else {
      el.classList.remove('border-slate-200');
    }
  });

  document.querySelectorAll('.border-white\\/5, .border-slate-200').forEach((el) => {
    if (light) {
      el.classList.add('border-slate-200');
    } else {
      el.classList.remove('border-slate-200');
    }
  });

  document.querySelectorAll('.text-slate-300, .text-slate-600').forEach((el) => {
    if (light) {
      el.classList.add('text-slate-600');
    } else {
      el.classList.remove('text-slate-600');
    }
  });

  document.querySelectorAll('.text-slate-200, .text-slate-700').forEach((el) => {
    if (light) {
      el.classList.add('text-slate-700');
    } else {
      el.classList.remove('text-slate-700');
    }
  });

  document.querySelectorAll('.text-slate-400, .text-slate-500').forEach((el) => {
    if (light) {
      el.classList.add('text-slate-500');
    } else {
      el.classList.remove('text-slate-500');
    }
  });

  localStorage.setItem(STORAGE_KEY, light ? 'light' : 'dark');
}

if (themeBtn) {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light') setTheme('light');
  themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('bg-slate-50');
    setTheme(isLight ? 'dark' : 'light');
  });
}

const signupForm = document.getElementById('signupForm');
const signupHint = document.getElementById('signupHint');
if (signupForm && signupHint) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    signupHint.textContent = 'Subscribed — demo only.';
    signupForm.reset();
  });
}

const categorySignup = document.getElementById('categorySignup');
const categoryHint = document.getElementById('categoryHint');
if (categorySignup && categoryHint) {
  categorySignup.addEventListener('submit', (e) => {
    e.preventDefault();
    categoryHint.textContent = 'Saved! Expect daily briefs (demo).';
    categorySignup.reset();
  });
}

const newArticleForm = document.getElementById('newArticleForm');
const newArticleHint = document.getElementById('newArticleHint');
if (newArticleForm && newArticleHint) {
  newArticleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newArticleHint.textContent = 'Draft saved locally (demo).';
    newArticleForm.reset();
  });
}

