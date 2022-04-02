import React from "react";
import {Table} from "reactstrap";

export default function Header(){
    return(
 <div
 className='p-5 text-center bg-image'
 style={{height: 200 }}
>
   <div className='d-flex justify-content-center align-items-center h-100'>
     <div className='text-white'>
     <Table width={"100%"} height= {"200"}>
  <tr>
    <th>tene image</th>
    <th>שולחן הטנ"א</th>
    <th>tene image</th>
  </tr>
  </Table>
     </div>
   </div>
 </div>
    )
}