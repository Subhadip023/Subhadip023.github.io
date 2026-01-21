const refreshBtn = document.getElementById('refreshBtn');
const activeUsers = document.getElementById('activeUsers');
if (refreshBtn && activeUsers) {
  refreshBtn.addEventListener('click', () => {
    refreshBtn.textContent = 'Refreshing...';
    refreshBtn.disabled = true;
    setTimeout(() => {
      const base = 12000;
      const delta = Math.floor(Math.random() * 600);
      activeUsers.textContent = (base + delta).toLocaleString();
      refreshBtn.textContent = 'Refresh';
      refreshBtn.disabled = false;
    }, 600);
  });
}

const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('bg-slate-50');
    document.body.classList.toggle('text-slate-900');
    document.querySelectorAll('.bg-white\\/5').forEach((el) => el.classList.toggle('bg-white'));
    document.querySelectorAll('.border-white\\/10').forEach((el) => el.classList.toggle('border-slate-200'));
    document.querySelectorAll('.text-slate-300').forEach((el) => el.classList.toggle('text-slate-600'));
    document.querySelectorAll('.text-slate-200').forEach((el) => el.classList.toggle('text-slate-700'));
  });
}

const activity = document.getElementById('activity');
if (activity) {
  setInterval(() => {
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    const messages = ['New signup — NL', 'Downgrade — Starter', 'Upgrade — Team', 'New ticket — Billing'];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const item = document.createElement('div');
    item.className = 'flex items-center justify-between bg-white/5 px-3 py-2 rounded-lg';
    item.innerHTML = `<span>${msg}</span><span class="text-slate-400">${time}</span>`;
    activity.prepend(item);
    if (activity.children.length > 6) activity.lastElementChild?.remove();
  }, 4000);
}

