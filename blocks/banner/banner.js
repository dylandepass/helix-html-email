export default function decorate(block) {
  const textContent = block.textContent;
  const table = /*html*/`
    <table width="100%" style="margin-top:20px"> 
      <tbody>
        <tr> 
          <td align="left" style="background-color:#eb1000;padding: 5px;"><p style="font-size:20px;color:#ffffff;line-height:30px;"><strong>${textContent}</strong></p></td> 
        </tr> 
      </tbody>
    </table>
  `;
  block.innerHTML = table;
}