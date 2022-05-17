export default async function decorate(block) {
  const resp = await fetch(`header.plain.html`);
  const header = document.createElement('div');
  header.innerHTML = await resp.text();
  const image = header.querySelector('img');

  image.style.cssText = "display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;font-size:12px";
  image.style.width = "100%";

  block.innerHTML = /*html*/`
    <table width="100%"> 
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