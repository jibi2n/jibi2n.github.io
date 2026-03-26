// copy-to-clipboard for contact cards with data-copy
document.addEventListener('click', (e) => {
  const card = e.target.closest('[data-copy]');
  if (!card) return;
  e.preventDefault();
  navigator.clipboard.writeText(card.dataset.copy).then(() => {
    const valueEl = card.querySelector('.contact-value');
    const original = valueEl.textContent;
    valueEl.textContent = 'Copied!';
    card.classList.add('copied');
    setTimeout(() => {
      valueEl.textContent = original;
      card.classList.remove('copied');
    }, 1500);
  });
});

// default open
document.getElementById('projectsBtn').classList.add('active');

const panels = {
  projectsBtn: 'work',
  contactBtn: 'contact-section',
  resumeBtn: 'resume-section',
};

document.querySelectorAll('.actions button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = panels[btn.id];
    const target = document.getElementById(targetId);
    const isActive = btn.classList.contains('active');

    // collapse all
    Object.values(panels).forEach((id) =>
      document.getElementById(id).classList.add('hidden')
    );
    document.querySelectorAll('.actions button').forEach((b) =>
      b.classList.remove('active')
    );

    // if it wasn't already open, open it
    if (!isActive) {
      target.classList.remove('hidden');
      btn.classList.add('active');
    }
  });
});
