export default function decorate(block) {
  block.innerHTML = /*html*/`
  <table width="100%"> 
    <tbody>
      <tr> 
        <td align="center" style="padding:20px;Margin:0;font-size:0"> 
          <table width="100%" height="100%"> 
            <tbody>
              <tr> 
                <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td> 
              </tr> 
            </tbody>
          </table>
        </td> 
      </tr> 
    </tbody>
  </table>
`;
}