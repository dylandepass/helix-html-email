/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { convertToTable } from '../../scripts/utils.js';

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
}