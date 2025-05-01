let currentSlide = 0;

function navigateSlide(direction) {
  const pages = document.querySelectorAll('.page');
  let next = currentSlide + direction;
  if (next < 0) next = 0;
  if (next >= pages.length) next = pages.length - 1;
  pages.forEach((page, i) => {
    page.style.display = i === next ? 'block' : 'none';
  });
  currentSlide = next;
}

document.addEventListener("DOMContentLoaded", () => {
  navigateSlide(0);
});

function addTask(section) {
  const input = document.getElementById(`${section}-task`);
  const list = document.getElementById(`${section}-list`);
  if (input && list && input.value.trim() !== '') {
    const item = document.createElement('li');
    item.textContent = input.value;
    list.appendChild(item);
    input.value = '';
  }
}

function selectBubble(el) {
  const all = document.querySelectorAll('.game-bubble');
  all.forEach(b => {
    b.style.opacity = '0.3';
    b.style.pointerEvents = 'none';
  });

  el.style.opacity = '1';
  el.style.transform = 'scale(1.2)';
  el.style.backgroundColor = '#7da87b';

  document.getElementById('final-note').textContent =
    `You chose: “${el.textContent}” — Now, you decide your destiny.`;
  document.getElementById('final-note').classList.remove('hidden');
}
