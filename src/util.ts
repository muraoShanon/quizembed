export function createDiv(className: string, textContent?: string) {
  const div = document.createElement('div');
  div.className = className;

  if (textContent) {
    div.textContent = textContent;
  }

  return div;
}
