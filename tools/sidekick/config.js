window.hlx.initSidekick({
  project: 'Helix Campaign',
  hlx3: true,
  host: 'main--helix-html-email--dylandepass.hlx.live',
  pushDownSelector: 'header',
  plugins: [
    {
      id: 'generate-email-template',
      button: {
        text: 'Generate Email Template',
        isDropdown: false,
      },
    }
  ],
});