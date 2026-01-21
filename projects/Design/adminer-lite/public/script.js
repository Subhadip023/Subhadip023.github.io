const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const themeBtn = document.getElementById('themeBtn');
const STORAGE_KEY = 'adminer-lite-theme';
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
  document.querySelectorAll('.border-white\\/10, .border-slate-200').forEach((el) => {
    if (light) el.classList.add('border-slate-200');
    else el.classList.remove('border-slate-200');
  });
  document.querySelectorAll('.border-white\\/5, .border-slate-200').forEach((el) => {
    if (light) el.classList.add('border-slate-200');
    else el.classList.remove('border-slate-200');
  });
  document.querySelectorAll('.text-slate-300, .text-slate-600').forEach((el) => {
    if (light) el.classList.add('text-slate-600');
    else el.classList.remove('text-slate-600');
  });
  document.querySelectorAll('.text-slate-200, .text-slate-700').forEach((el) => {
    if (light) el.classList.add('text-slate-700');
    else el.classList.remove('text-slate-700');
  });
  document.querySelectorAll('.text-slate-400, .text-slate-500').forEach((el) => {
    if (light) el.classList.add('text-slate-500');
    else el.classList.remove('text-slate-500');
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

const refreshConn = document.getElementById('refreshConn');
const connCount = document.getElementById('connCount');
if (refreshConn && connCount) {
  refreshConn.addEventListener('click', () => {
    refreshConn.textContent = 'Refreshing...';
    refreshConn.disabled = true;
    setTimeout(() => {
      const updated = 40 + Math.floor(Math.random() * 15);
      connCount.textContent = updated.toString();
      refreshConn.textContent = 'Refresh';
      refreshConn.disabled = false;
    }, 500);
  });
}

const activity = document.getElementById('activity');
if (activity) {
  setInterval(() => {
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    const messages = [
      'SELECT id, email FROM users LIMIT 20',
      'ALTER TABLE orders ADD COLUMN meta jsonb',
      'CREATE INDEX idx_users_email',
      'DELETE FROM sessions WHERE last_seen < now() - interval \'30 days\''
    ];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const item = document.createElement('div');
    item.className = 'flex items-center justify-between bg-white/5 px-3 py-2 rounded-lg';
    item.innerHTML = `<span>${msg}</span><span class="text-slate-400">${time}</span>`;
    activity.prepend(item);
    if (activity.children.length > 6) activity.lastElementChild?.remove();
  }, 4000);
}

const refreshRows = document.getElementById('refreshRows');
const rowsTable = document.getElementById('rowsTable');
if (refreshRows && rowsTable) {
  refreshRows.addEventListener('click', () => {
    rowsTable.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const tr = document.createElement('tr');
      const id = Math.random().toString(36).slice(2, 6) + '…' + Math.random().toString(36).slice(2, 4);
      tr.innerHTML = `<td class="py-2">${id}</td><td>user${i}@example.com</td><td>${['free', 'pro', 'team'][i % 3]}</td><td>2026-01-0${i + 1}</td>`;
      rowsTable.appendChild(tr);
    }
  });
}

const runBtn = document.getElementById('runBtn');
const sqlInput = document.getElementById('sqlInput');
const runStatus = document.getElementById('runStatus');
const resultsTable = document.getElementById('resultsTable');
if (runBtn && sqlInput && runStatus && resultsTable) {
  runBtn.addEventListener('click', () => {
    const sql = sqlInput.value.trim();
    runStatus.textContent = 'Running (simulated)...';
    setTimeout(() => {
      runStatus.textContent = sql ? 'OK (demo)' : 'Ready';
      const body = resultsTable.querySelector('tbody');
      if (body) body.innerHTML = `
        <tr><td class="py-2">x1…aa</td><td>demo@example.com</td><td>pro</td></tr>
        <tr><td class="py-2">x2…bb</td><td>analyst@example.com</td><td>team</td></tr>
        <tr><td class="py-2">x3…cc</td><td>reader@example.com</td><td>free</td></tr>
      `;
    }, 400);
  });
}

const formatBtn = document.getElementById('formatBtn');
if (formatBtn && sqlInput) {
  formatBtn.addEventListener('click', () => {
    const sql = sqlInput.value.trim();
    if (!sql) return;
    const formatted = sql.replace(/\s+/g, ' ').replace(/(select|from|where|limit)/gi, (m) => m.toUpperCase());
    sqlInput.value = formatted + (formatted.endsWith(';') ? '' : ';');
  });
}

