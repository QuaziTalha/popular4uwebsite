function Footer() {
  return (
    <div>
      <footer id="tt-footer">
        <div className="footer-wrapper">
          <div className="container container-lg-fluid container-lg__no-gutters">
            <form
              id="subscribeform"
              method="post"
              noValidate="noValidate"
              action="#"
            >
              <div className="f-form">
                <div className="f-form__label">Subscribe to Our Newsletter</div>
                <div className="f-form__input">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Your e-mail address"
                  />
                </div>
                <div className="f-form__btn">
                  <button className="tt-btn btn__color02" type="submit">
                    <span className="icon-482948 tt-icon-left"></span> Subscribe
                    &nbsp;<span className="tt-short-text">now</span>
                  </button>
                </div>
                <div className="tt-modal-message">Form sent successfully</div>
              </div>
            </form>
          </div>
          <div className="container container-lg-fluid container-lg__no-gutters">
            <div className="f-holder row no-gutters">
              <div className="col-xl-7">
                <div className="additional-strut">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="f-logo">
                        <img
                          src="./template/images/logo.png"
                          width="80%"
                          alt="popular_Logo"
                        />
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <div className="f-info-text">
                        Welcome to Popular Electrical & Security Services
                        <br />
                        With over 15 years of experience, Popular Electrical &
                        Security Services is your trusted partner for all your
                        electrical and security needs.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-5">
                    <nav className="f-nav" id="f-nav">
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Contacts</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-sm-6 col-md-7">
                    <ul className="f-info-icon">
                      <li>
                        <span className="icon-map-marker"></span> Vaishali
                        Nagar, Jaswantsingpura, CIDCO N-8, Azad Chowk to TV
                        Center Road
                      </li>

                      <li>
                        <a href="tel:+917972144809">
                          <span className="icon-telephone"></span>+91 7972 144
                          809
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="f-copyright row no-gutters">
              <div className="col-sm-auto">
                Website by{" "}
                <a href="https://www.graphicon.in/"> Graphicon Design Studio</a>
              </div>
              <div className="col-sm-auto ml-sm-auto">
                <ul className="f-social">
                  <li>
                    <a href="#" className="icon-twitter-logo-button"></a>
                  </li>
                  <li>
                    <a href="#" className="icon-facebook-logo-button"></a>
                  </li>
                  <li>
                    <a href="#" className="icon-instagram-logo"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="modal fade"
        id="modalMakeAppointment"
        tabIndex={-1}
        role="dialog"
        aria-label="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-body form-default modal-layout-dafault">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                <span className="icon-860796" />
              </button>
              <div className="modal-titleblock">
                <div className="modal-title">Make an Appointment</div>
              </div>
              <form
                className="form-modal"
                id="jsFormMakeAppointment"
                method="post"
                noValidate="noValidate"
                action="#"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="modalName01"
                    placeholder="Your Name *"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="modalEmail01"
                        placeholder="Your e-mail address *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="modalPhone01"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="modalAddress"
                    className="form-control"
                    id="modalAddress"
                    placeholder="Address *"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-select">
                    <select name="typeofservice" className="tt-select">
                      <option value="Service">Service</option>
                      <option value="Service 02">Service 02</option>
                      <option value="Service 03">Service 03</option>
                      <option value="Service 04">Service 04</option>
                      <option value="Service 05">Service 05</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="date"
                    placeholder="Date of visit"
                    autoComplete="off"
                    data-timepicker="true"
                    className="js_datepicker-1 form-control"
                    type="text"
                  />
                  <div className="form-group__icon icon-747993" />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your comment"
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="tt-btn btn__color01">
                  <span className="icon-lightning" />
                  Explore services
                </button>
                <div className="tt-modal-message">Form sent successfully</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <a href="#" id="js-backtotop" className="tt-back-to-top">
        <i className="icon-lightning" />
      </a>
    </div>
  );
}

export default Footer;
