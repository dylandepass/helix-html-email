async function prepareEmailTemplate() {
  const resp = await fetch(`./export-template.html`);
  const template = document.createElement('html');
  template.innerHTML = await resp.text();

  const content = document.querySelector('body > div');
  template.querySelector('body').append(content);

  await navigator.clipboard.writeText(template.outerHTML);
}

window.hlx.initSidekick({
  project: 'Helix Campaign',
  hlx3: true,
  host: 'main--helix-html-email--dylandepass.hlx.live',
  plugins: [
    {
      id: 'generate-email-template',
      button: {
        text: 'Generate Email Template',
        isDropdown: false,
        action: async (_, sk) => prepareEmailTemplate(sk),
      },
    }
  ],
});