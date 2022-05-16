import { HelixApp, readBlockConfig, toClassName } from 'https://cdn.skypack.dev/@dylandepass/helix-web-library@v1.4.2/dist/helix-web-library.esm.js';

HelixApp.init({
  blocksSelector: 'section > div',
  lcpBlocks: [],
  makeLinksRelative: false
})
  .withLoadEager(() => {
  })
  .withDecorateSections((main) => {
    main.querySelectorAll(':scope > div').forEach((section) => {
      const sectionMeta = section.querySelector('div.section-metadata');
      if (sectionMeta) {
        const meta = readBlockConfig(sectionMeta);
        const keys = Object.keys(meta);
        keys.forEach((key) => {
          if (key === 'style') section.classList.add(toClassName(meta.style));
          else if (key === 'notes') {
            const notes = document.createElement('aside');
            notes.classList.add('notes');
            notes.innerHTML = meta[key];
            section.appendChild(notes);
          }
          else section.setAttribute(key, meta[key]);
        });
        sectionMeta.remove();
      }

      replaceTag(section, 'section');
    });
  })
  .withLoadHeader(() => {
    // noop
  }).withLoadFooter(() => {
    // noop
  })
  .decorate();