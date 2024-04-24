export default function Contactus() {
  return (
    <div>
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
        <div className="map-contact" id="map-contact" />
        <div className="section-indent-extra">
          <div className="container container-lg-fluid">
            <div className="section__wrapper02 tt-contact-wrapper">
              <div className="row justify-content-center">
                <div className="col-sm-6 col-md-4">
                  <div className="tt-contact">
                    <div className="tt-icon">
                      <i className="icon-map-marker" />
                    </div>
                    <div className="tt-content">
                      <div className="tt-title">Address:</div>
                      <address>
                        Electrician Company
                        <br />
                        8494 Signal Hill Road Manassas,
                        <br />
                        VA, 20110
                      </address>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="tt-contact">
                    <div className="tt-icon">
                      <i className="icon-clock-circular-outline-1" />
                    </div>
                    <div className="tt-content">
                      <div className="tt-title">Work Hours:</div>
                      Mon-Fri 08:00 AM - 05:00 PM
                      <br />
                      Sat-Sun: Emergency only
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
                        <a href="tel:1(800)7654321">
                          1 (800) 765-43-21 (Appointments)
                        </a>
                      </address>
                      <address>
                        <a href="tel:1(800)7654322">
                          1 (800) 765-43-22 (Office)
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
