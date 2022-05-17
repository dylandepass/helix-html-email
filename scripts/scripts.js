import { HelixApp, decorateSections, readBlockConfig, toClassName } from 'https://cdn.skypack.dev/@dylandepass/helix-web-library@v1.4.2/dist/helix-web-library.esm.js';

function wrapTable(table) {
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

function css(e, styles) {
  for (const property in styles) {
    e.style[property] = styles[property];
  }
}

function wrapElementInTableRow(element) {
  return /*html*/` 
    <tr>
      <td align="left" style="padding-top:10px;padding-bottom:10px;">
        ${element.outerHTML}
      </td>
    </tr>`;
}

export function convertToTable(block) {
  const paragraphs = block.querySelectorAll(':scope > p, :scope > h1, :scope > h2, :scope > div');
  const table = /*html*/`
    <table style="vertical-align:top;" width="100%">
      <tbody>
        ${[...paragraphs].map(element => wrapElementInTableRow(element)).join('')}
      </tbody >
    </table > `;

  return wrapTable(table);
}

HelixApp.init({
  lcpBlocks: [],
  makeLinksRelative: false
})
  .withLoadEager((doc) => {

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
  }).withLoadLazy(() => {
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
  })
  .decorate();