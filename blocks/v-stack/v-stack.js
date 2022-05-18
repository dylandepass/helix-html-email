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
  const table = convertToTable(block);
  block.innerHTML = table;

  block.querySelectorAll('a').forEach(element => {
    element.parentNode.style.paddingTop = '10px';
    element.parentNode.style.paddingBottom = '10px';
    element.style.color = '#1473e6';
  });;
}