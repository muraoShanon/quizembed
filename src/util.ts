export function createDiv(id: string, className: string, innerText?: string) {
  const div = document.createElement('div');
  div.id = id;
  div.className = className;

  if (innerText) {
    div.textContent = innerText;
  }

  return div;
}
