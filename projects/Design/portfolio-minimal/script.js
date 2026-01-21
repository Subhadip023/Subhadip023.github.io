const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('header nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.contains('flex');
    nav.classList.toggle('flex', !open);
    nav.classList.toggle('hidden', open);
    nav.classList.toggle('flex-col', !open);
    nav.classList.toggle('bg-ink', !open);
    nav.classList.toggle('border', !open);
    nav.classList.toggle('border-white/10', !open);
    nav.classList.toggle('rounded-xl', !open);
    nav.classList.toggle('absolute', !open);
    nav.classList.toggle('right-5', !open);
    nav.classList.toggle('top-16', !open);
    menuBtn.setAttribute('aria-expanded', String(!open));
  });
}

const themeBtn = document.getElementById('themeBtn');
function setTheme(mode) {
  if (mode === 'light') {
    document.body.classList.remove('bg-ink', 'text-slate-50');
    document.body.classList.add('bg-slate-50', 'text-slate-900');
    document.querySelectorAll('.bg-white\\/5').forEach((el) => {
      el.classList.remove('bg-white/5');
      el.classList.add('bg-white');
    });
    document.querySelectorAll('.bg-white\\/10').forEach((el) => {
      el.classList.remove('bg-white/10');
      el.classList.add('bg-slate-100');
    });
    document.querySelectorAll('.text-slate-300').forEach((el) => el.classList.add('text-slate-600'));
    document.querySelectorAll('.text-slate-200').forEach((el) => el.classList.add('text-slate-700'));
    document.querySelectorAll('.text-slate-400').forEach((el) => el.classList.add('text-slate-500'));
    document.querySelectorAll('.border-white\\/10').forEach((el) => el.classList.add('border-slate-200'));
    document.querySelectorAll('.border-white\\/5').forEach((el) => el.classList.add('border-slate-200'));
    localStorage.setItem('aster-theme', 'light');
  } else {
    document.body.classList.add('bg-ink', 'text-slate-50');
    document.body.classList.remove('bg-slate-50', 'text-slate-900');
    document.querySelectorAll('.bg-slate-100').forEach((el) => {
      el.classList.remove('bg-slate-100');
      el.classList.add('bg-white/10');
    });
    document.querySelectorAll('.bg-white').forEach((el) => {
      if (el.classList.contains('bg-white')) {
        el.classList.remove('bg-white');
        el.classList.add('bg-white/5');
      }
    });
    document.querySelectorAll('.text-slate-600').forEach((el) => el.classList.remove('text-slate-600'));
    document.querySelectorAll('.text-slate-700').forEach((el) => el.classList.remove('text-slate-700'));
    document.querySelectorAll('.text-slate-500').forEach((el) => el.classList.remove('text-slate-500'));
    document.querySelectorAll('.border-slate-200').forEach((el) => el.classList.remove('border-slate-200'));
    localStorage.setItem('aster-theme', 'dark');
  }
}

if (themeBtn) {
  const saved = localStorage.getItem('aster-theme');
  if (saved === 'light') setTheme('light');
  themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('bg-slate-50');
    setTheme(isLight ? 'dark' : 'light');
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const input = contactForm.querySelector('input');
    if (!btn || !input) return;
    const prev = btn.textContent;
    btn.textContent = 'Sent!';
    btn.classList.add('bg-emerald-400');
    input.value = '';
    setTimeout(() => {
      btn.textContent = prev;
      btn.classList.remove('bg-emerald-400');
    }, 1200);
  });
}

