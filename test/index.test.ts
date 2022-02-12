import {domApp} from '../src/domSettings';
import {quizembed} from '../src/index';

test('idがあるとappが格納される', () => {
  document.body.innerHTML = '<div id="quizembed"><div>';

  quizembed();
  const app = document.getElementById(domApp.id);
  expect(app).toBeTruthy();
});
