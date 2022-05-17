import { convertToTable } from '../../scripts/scripts.js';

export default function decorate(block) {
  const table = convertToTable(block);
  block.innerHTML = table;

  block.querySelectorAll('a').forEach(element => {
    element.parentNode.style.paddingTop = '10px';
    element.style.color = '#1473e6';
  });;
}