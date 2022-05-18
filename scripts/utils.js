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

export function wrapTable(table) {
  return /*html*/`
    <table align="center">
      <tbody>
        <tr>
          <td>
            ${table}
          </td>
        </tr>
      </tbody>
    </table>`;
}

export function wrapElementInTableRow(element) {
  return /*html*/` 
    <tr>
      <td align="left" style="${element.style.paddingTop || element.style.paddingBottom ? '' : 'padding-top:10px;padding-bottom:10px;'}">
        ${element.outerHTML}
      </td>
    </tr>`;
}

export function convertToTable(block) {
  const paragraphs = block.querySelectorAll(':scope > p, :scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > div');
  const table = /*html*/`
    <table style="vertical-align:top;" width="100%">
      <tbody>
        ${[...paragraphs].map(element => wrapElementInTableRow(element)).join('')}
      </tbody >
    </table > `;

  return wrapTable(table);
}