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

export default async function decorate(block) {
  const resp = await fetch(`header.plain.html`);
  const header = document.createElement('div');
  header.innerHTML = await resp.text();
  const image = header.querySelector('img');

  image.style.cssText = "display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;";
  image.style.width = "100%";

  block.innerHTML = /*html*/`
    <table width="100%" style="border: 0px;border-collapse: collapse;border-spacing: 0px;"> 
      <tbody>
        <tr> 
        <td valign="top" align="center" style="padding:0;Margin:0;width:590px"> 
          <table width="100%"> 
            <tbody>
              <tr> 
                <td align="center" style="padding:0;Margin:0;font-size:0px">${image.outerHTML}</td> 
              </tr> 
            </tbody>
          </table>
          </td> 
        </tr> 
      </tbody>
    </table>
`;
}