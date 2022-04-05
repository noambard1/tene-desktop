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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";


function Information({ backgroundImage, title ,description,link}) {
  return (
            <RotatingCard>
              <RotatingCardFront
                image={backgroundImage}
                title={
                  <>
                  {title}
                  </>
                }
              />
              <RotatingCardBack
                description={description}
                action={{
                  type: "internal",
                  route: {link},
                  label: 'לאתר',
                }}
              />
            </RotatingCard>
  );
}

export default Information;
