import { Link } from "react-router-dom";
import Contactus from "../Pages/Contact";

function Header() {
  return (
    <div>
      <div>
        <nav className="panel-menu" id="mobile-menu">
          <ul />
          <div className="mm-navbtn-names">
            <div className="mm-closebtn">Close</div>
            <div className="mm-backbtn">Back</div>
          </div>
        </nav>
        <header id="tt-header">
          {/* holder-top (mobile) */}
          <div className="holder-top-mobile d-block d-md-none" />
          {/* /holder-top (mobile) */}
          {/* holder-top (desktop) */}
          <div className="holder-top-desktop d-none d-md-block">
            <div className="container container-lg-fluid">
              <div className="row no-gutters">
                <div className="col-auto">
                  <div className="h-info01">
                    <div className="tt-item">
                      <address>
                        <span className="icon-map-marker" />Maaz Complex, Juna Bazar, Beside B.M.C Bank, Aurangabad - 431001
                      </address>
                    </div>
                  </div>
                </div>
                <div className="col-auto ml-auto">
                  <div className="tt-obj">
                    <div className="h-info02">
                      <div className="tt-item">
                        <address>
                          <a href="tel:+91797244809">
                            <span className="icon-telephone" />
                            +91 7972 144 809
                          </a>
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /holder-top (desktop) */}
          {/* holder- */}
          <div id="js-init-sticky">
            <div className="tt-holder-wrapper">
              <div className="container container-lg-fluid">
                <div className="tt-holder">
                  <div className="tt-col-logo">
                    {/* logo */}
                    <a href="./">
                    <img
                      src="./template/images/logo.png"
                      style={{ width: "50%" }}
                      alt="popular_logo"
                    /></a>
                  </div>
                  <div className="tt-col-objects tt-col-wide text-center">
                    {/* desktop-nav */}
                    <nav id="tt-nav">
                      <ul>
                        <li>
                          <a href="/">
                            <div className="electric-btn">
                              <span className="text">Home</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="about">
                            <div className="electric-btn">
                              <span className="text">About Us</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="services">
                            <div className="electric-btn">
                              <span className="text">Services</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="blog">
                            <div className="electric-btn">
                              <span className="text">Blog</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="contact">
                            <div className="electric-btn">
                              <span className="text">Contacts</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    {/* /desktop-nav */}
                  </div>
                  <div className="tt-col-objects">
                    <div className="tt-col__item d-block d-lg-none">
                      <a href="#" id="tt-menu-toggle" className="icon-545705" />
                    </div>
                    <div className="tt-col__item d-none d-lg-block">
                      <a
                        href="https://api.whatsapp.com/send?phone=917972144809&text=I%20would%20like%20a%20Quotation%20for%20...."
                        className="tt-btn btn__color01"
                       
                      >
                    
                        Get a Qoute
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
