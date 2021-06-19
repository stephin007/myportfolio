import React, { Component } from "react";
import SocialButton from "../../library/components/SocialButton";

import SocialLinks from "../../data/SocialLinks";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-content">
          <section className="home section">
            <div className="container">
              <div className="intro">
                <img
                  src="https://res.cloudinary.com/stephin/image/upload/v1609764633/portfolio/WhatsApp_Image_2021-01-04_at_18.19.09_gxp5cg.jpg"
                  alt="Profile Img"
                  className="shadow-img"
                />
                <h1>Stephin T Reji</h1>
                <p>
                  I am a technically savvy Customer Success Analyst who is
                  constantly striving for change and betterment
                </p>
                <div className="social-links">
                  {SocialLinks.map((Sociallink, index) => {
                    const { link, classes } = Sociallink;
                    return (
                      <>
                        <SocialButton
                          socialLink={link}
                          iconClass={classes}
                          key={index}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
