export default function Contactus() {
  return (
    <div>
      <link rel="stylesheet" href="./template/css/page__contact.css" />
      <div>
        <div
          className="tt-breadcrumb"
          style={{
            backgroundImage: 'url("./template/images/breadcrumb_bg.jpg")',
          }}
        >
          <div className="container container-lg-fluid">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      </div>

      <main id="tt-pageContent">
        
        <div className="section-indent-extra" style={{marginTop: "0px"}}>
          <div className="container container-lg-fluid">
            <div className="section__wrapper02 tt-contact-wrapper" style={{marginTop: "0px"}}>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-md-4">
                  <div className="tt-contact">
                    <div className="tt-icon">
                      <i className="icon-map-marker" />
                    </div>
                    <div className="tt-content">
                      <div className="tt-title">Address:</div>
                      <address>
                      Maaz Complex, Juna Bazar, Beside B.M.C Bank, Aurangabad - 431001
                      </address>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="tt-contact">
                    <div className="tt-icon">
                      <i className="icon-email" />
                    </div>
                    <div className="tt-content">
                      <div className="tt-title">Email:</div>
                      popularelectricalsarvices@gmail.com
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="tt-contact">
                    <div className="tt-icon">
                      <i className="icon-telephone" />
                    </div>
                    <div className="tt-content">
                      <div className="tt-title">Phone Numbers:</div>
                      <address>
                        <a href="tel:+91 7972 144 809">
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
        <div className="section-indent">
          <div className="container container-md-fluid">
            <div className="section-title max-width-01">
              <div className="section-title__01">Contact Form</div>
              <div className="section-title__02">Get In Touch with Us</div>
              <div className="section-title__03">
                Are you stumped by a home wiring project or problem? Fill out
                the form with the details of your situation and we can come to
                your aid.
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form
                  id="feedbackform"
                  className="form-default"
                  method="post"
                  noValidate="novalidate"
                  action="#"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
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
                          placeholder="Your e-mail address *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phonenumber"
                          className="form-control"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      rows={4}
                      placeholder="Qustion In Detail *"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <div className="tt-notes text-center">
                      All Electrical work must be done by a qualified licensed
                      electrician.
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <button className="tt-btn btn__color01" type="submit">
                      <span className="icon-lightning" />
                      Contact us
                    </button>
                  </div>
                  <div className="tt-modal-message">Form sent successfully</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
