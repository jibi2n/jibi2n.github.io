const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

if (contactBtn) {
  contactBtn.addEventListener('click', () => modal.classList.remove('hidden'));
}
if (closeBtn) {
  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
}

modal?.addEventListener('click', (ev) => {
  if (ev.target === modal) modal.classList.add('hidden');
});
