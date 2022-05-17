import { convertToTable } from '../../scripts/scripts.js';

export default function decorate(block) {
  const button = block.querySelector('a');
  button.style.color = '#FFFFFF';
  button.style.fontSize = '16px';
  button.style.borderStyle = 'solid';
  button.style.borderColor = '#1473e6';
  button.style.borderWidth = '10px 20px';
  button.style.display = 'inline-block';
  button.style.background = '#1473e6';
  button.style.borderRadius = '30px';
  button.style.fontFamily = 'arial, \'helvetica neue\', helvetica, sans-serif';
  button.style.fontWeight = 'bold';
  button.style.fontStyle = 'normal';
  button.style.lineHeight = '19px';
  button.style.width = 'auto';
  button.style.textAlign = 'center';
  button.style['mso-style-priority'] = '100 !important';
  button.style['text-decoration'] = 'none';
  button.style['-webkit-text-size-adjust'] = 'none';
  button.style['-ms-text-size-adjust'] = 'none';
  button.style['mso-line-height-rule'] = 'exactly';

  button.parentNode.style.textAlign = 'center';
  button.parentNode.style.paddingTop = '30px';
  button.parentNode.style.paddingBottom = '30px';

  const table = convertToTable(block);
  block.innerHTML = table;
  const firstRow = block.querySelector('td');
  firstRow.style.paddingTop = '15px';
}