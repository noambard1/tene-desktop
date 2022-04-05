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

import { Row, Col, Container } from "reactstrap";
// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// // Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Information from "pages/Presentation/sections/Information";

// // Routes
// import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import backgroundSite from "assets/images/backgroundSite.png";
import teneDesktopText from "assets/images/tenedesktoptext.png";
import tafkidipediaLogo from "assets/images/tafkidipediashortlogo.png";
import tene9Logo from "assets/images/tene9Logo.png"
import logotene1 from "assets/images/logo-tene1.png";
import logotene2 from "assets/images/logo-tene2.png";

function Presentation() {
  return (
    <>
      {/* header */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          background:`url(${backgroundSite})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img src={logotene1} style={{ height:"10%", width: "auto", position:"absolute", top:"3rem", right:"2rem"}} xs={12} lg={4}></img>
        <img src={logotene2} style={{ height:"18%", width: "auto", position:"absolute", top:"0px", left:"2rem"}} xs={12} lg={4}></img>
          <Row style = {{display:"flex"}} >
            <Col xs={12} lg={4} style={{textAlign:"center", paddingRight:"4rem"}}>
            <img src={teneDesktopText} xs={12} lg={4} style={{height:"10rem"}}></img>
            </Col>
            </Row>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
        style={{alignItems:"center"}}
      >
        <div style={{width: "95%"}}>
        <Row style={{display: "flex", marginBottom:"1rem" }}>
            <Col xs={12} lg={3}>
            <Information  backgroundImage={tafkidipediaLogo} title= {'מערכת דש"ב'} description={'עכשיו אני כותב הרבה דברים לראות אם זה באמת עובד או לא כי יש לי הרבה על מה לכתוב'} link={''} />
            </Col>
            <Col xs={12} lg={3} >
            <Information backgroundImage={tene9Logo} title= {'טנ"ה 9'} description={'עכשיו אני כותב הרבה דברים לראות אם זה באמת עובד או לא כי יש לי הרבה על מה לכתוב'} link={''}/>
            </Col>
            <Col xs={12} lg={3}>
            <Information backgroundImage={logotene2} title= {'מערכת כש"מ'} description={'עכשיו אני כותב הרבה דברים לראות אם זה באמת עובד או לא כי יש לי הרבה על מה לכתוב'} link={''}/>
            </Col>
            <Col xs={12} lg={3}>
            <Information backgroundImage={logotene2} title= {'אתר החיל'} description={'עכשיו אני כותב הרבה דברים לראות אם זה באמת עובד או לא כי יש לי הרבה על מה לכתוב'} link={''}/>
            </Col>
        </Row>
        {/* <Row style={{display: "flex"}}>
            <Col xs={12} lg={3}>
            <Information  />
            </Col>
            <Col xs={12} lg={3}>
            <Information />
            </Col>
            <Col xs={12} lg={3}>
            <Information />
            </Col>
            <Col xs={12} lg={3}>
            <Information />
            </Col>
        </Row> */}
        </div>
      </Card>
      
        <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default Presentation;
