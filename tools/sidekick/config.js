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

async function prepareEmailTemplate(sk) {
  const resp = await fetch(`./export-template.html`);
  const template = document.createElement('html');
  template.innerHTML = await resp.text();

  // Make images relative.. Not sure why this works.. else it's relative
  document.querySelectorAll('img').forEach((img) => {
    img.src = `${img.src}`;
  });


  const content = document.querySelector('body > div').cloneNode(true);
  template.querySelector('body').append(content);

  navigator.clipboard.writeText(template.outerHTML).then(() => {
    sk.notify(`Copied to clipboard`);
  });
}

window.hlx.initSidekick({
  project: 'Helix Campaign',
  hlx3: true,
  host: 'main--helix-html-email--dylandepass.hlx.live',
  plugins: [
    {
      id: 'generate-email-template',
      condition: () => window.location.host.includes('hlx.live'),
      button: {
        text: 'Generate Email Template',
        isDropdown: false,
        action: async (_, sk) => prepareEmailTemplate(sk),
      },
    }
  ],
});