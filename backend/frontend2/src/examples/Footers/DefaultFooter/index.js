/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/


// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import team100Logo from "assets/images/team100.png";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer" style={{padding:"0px", margin:"0px"}}>
      <div style={{textAlign:"right", marginTop:"1rem", marginBottom:"1rem"}}>
        <img src= {team100Logo} style={{height:"80px", paddingRight:"1rem"}} />
        </div>
    </MKBox>
  );
}

export default DefaultFooter;
