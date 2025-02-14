const matrixContainer = document.createElement('div');
matrixContainer.className = 'matrix-effect';
document.body.appendChild(matrixContainer);

for (let i = 0; i < 100; i++) {
  const span = document.createElement('span');
  span.textContent = Math.random().toString(36).substring(2, 3);
  span.style.left = `${Math.random() * 100}%`;
  span.style.animationDelay = `${Math.random() * 5}s`;
  matrixContainer.appendChild(span);
}
