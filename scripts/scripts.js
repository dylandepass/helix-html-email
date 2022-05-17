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

import { HelixApp, decorateSections } from 'https://cdn.skypack.dev/@dylandepass/helix-web-library@v1.5.2/dist/helix-web-library.esm.js';
import { convertToTable } from './utils.js';

HelixApp.init({
  lcpBlocks: [],
  makeLinksRelative: false,
  autoAppear: false,
})
  .withDecorateSections((main) => {
    decorateSections(main);
    main.querySelectorAll(':scope > div > div').forEach((section) => {
      if (section.classList.length === 1) {
        const table = convertToTable(section);
        section.insertAdjacentHTML('beforebegin', table);
        section.remove();
      }
    });
  })
  .withLoadLazy(() => {
    const main = document.querySelector('main');

    main.querySelectorAll('p, h1, h2').forEach((paragraph) => {
      paragraph.style.paddingLeft = "20px";
      paragraph.style.paddingRight = "20px";
      paragraph.style.margin = "0px";
      paragraph.style.webkitTextSizeAdjust = "none";
      paragraph.style.msTextSizeAdjust = "none";
      paragraph.style.msoLineHeightRule = "exactly";
      paragraph.style.fontFamily = "arial, 'helvetica neue', helvetica, sans-serif";
      if (!paragraph.style.fontSize) {
        paragraph.style.fontSize = "14px";
      }
      if (!paragraph.style.lineHeight) {
        paragraph.style.lineHeight = "21px";
      }
    });

    main.querySelectorAll('table').forEach((table) => {
      table.setAttribute('border', '0');
      table.setAttribute('cellpadding', '0');
      table.setAttribute('cellspacing', '0');
      table.setAttribute('role', 'presentation');
      table.style['mso-table-lspace'] = "0pt";
      table.style['mso-table-rspace'] = "0pt";
      table.style['border-collapse'] = "collapse";
      table.style['border-spacing'] = "0px";
    });

    main.querySelectorAll('h1').forEach((heading) => {
      heading.style.lineHeight = "30px";
      heading.style.color = "#333333";
      heading.style.fontSize = "24px";
    });

    main.querySelectorAll('h2').forEach((heading) => {
      heading.style.lineHeight = "30px";
      heading.style.color = "#333333";
      heading.style.fontSize = "20px";
    });

    const templateWrapper = document.createElement('div');
    templateWrapper.style.backgroundColor = '#F6F6F6';

    const emailTemplate = document.createElement('div');
    emailTemplate.classList.add('email-template');
    emailTemplate.innerHTML = main.innerHTML;
    emailTemplate.style.margin = '0px auto';
    emailTemplate.style.maxWidth = '600px';
    emailTemplate.style.backgroundColor = '#ffffff';
    templateWrapper.appendChild(emailTemplate);
    document.body.appendChild(templateWrapper);

    const header = document.querySelector('header');
    emailTemplate.prepend(header);

    const footer = document.querySelector('footer');
    emailTemplate.append(footer);
    main.remove();

    setTimeout(() => {
      document.querySelector('body').classList.add('appear');
    }, 400);
  })
  .decorate();