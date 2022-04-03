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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// // Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// // Routes
// import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import logoBackground from "assets/images/logoBackground.png";
import logotene1 from "assets/images/logo-tene1.png";
import logotene2 from "assets/images/logo-tene2.png";

function Presentation() {
  return (
    <>
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      /> */}
      {/* header */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          background: "linear-gradient(47deg,#8c3cee 0%,#2f85f6 60%,#2daef7 100%)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Row style = {{display:"flex"}} >
              <Col xs={12} lg={4} style={{textAlign:"center", margin:"auto"}}>
               <img src={logotene1} style={{width:"75%"}}  ></img>
            </Col>
            <Col xs={12} lg={4} style={{textAlign:"center", margin:"auto", color:"white"}}>
            <p style={{fontSize:"75px"}} >שולחן הטנ"א</p>
            </Col>
            <Col xs={12} lg={4} style={{textAlign:"center", margin:"auto"}}>
              <img src={logotene2} style={{width:"75%"}}></img>
            </Col>
            </Row>

          {/* <Row style={{ display: "flex" }} >
            <Col xs={12} lg={6} style={{ textAlign: "center", margin: "auto" }}>

            </Col>
            <Col xs={12} lg={6} style={{ textAlign: "center", margin: "auto" }}>
              <img src={logoBackground} style={{ width: "75%" }}></img>
            </Col>
          </Row> */}
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
