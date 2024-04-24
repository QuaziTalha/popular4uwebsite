import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="./template/css/page__about.css" />
        <main id="tt-pageContent">
          <div className="section-indent">
            <div className="container container-lg-fluid">
              <div className="layout01 layout01__revers layout01__small-layout layout01__img-more">
                <div className="layout01__bg-marker">
                  <img src="./template/images/bg_marker02.png" alt />
                </div>
                <div className="layout01__img">
                  <div className="tt-img-main">
                    <img src="./template/images/layout01-img01.jpg" alt />
                  </div>
                  <div className="tt-img-more left-bottom">
                    <img src="./template/images/layout01-img03-02.jpg" alt />
                  </div>
                </div>
                <div className="layout01__content pl-50 ">
                  <div className="layout01__content-wrapper">
                    <div className="section-title text-left">
                      {/* <div className="section-title__01">
                        Over 25 Years Experience
                      </div> */}
                      <div className="section-title__02">
                        Experienced and Reliable Electrical Contractors
                      </div>
                    </div>
                    <p>
                      Welcome to Popular Electrical & Security Services, your
                      trusted partner for 15+ years. We specialize in commercial
                      and residential wiring, pole erection, CCTV installations,
                      security systems, and automation. Our dedicated team
                      ensures quality and safety from start to finish. Contact
                      us today for reliable solutions tailored to your needs.
                    </p>
                    <p>
                      At Popular Electrical & Security Services, we prioritize
                      quality, safety, and customer satisfaction. Our goal is to
                      provide reliable solutions tailored to your specific
                      requirements, ensuring the efficiency and security of your
                      electrical and security systems.
                    </p>
                    <div className="tt-box04-wrapper row">
                      <div className="col-6">
                        <div className="tt-box04">
                          <div className="tt-box04__figure">
                            <i className="icon-1716894" />
                          </div>
                          <div className="tt-box04__content">
                            <div className="tt-title">20+</div>
                            <p>Skilled &amp; Certified Electricians</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="tt-box04">
                          <div className="tt-box04__figure">
                            <i className="icon-1895474" />
                          </div>
                          <div className="tt-box04__content">
                            <div className="tt-title">15</div>
                            <p>Years of Experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div className="layout01-fluid">
              <div
                className="layout01__img"
                style={{
                  backgroundImage:
                    'url("./template/images/layout01-img04.jpg")',
                }}
              />
              <div className="container container-lg-fluid">
                <div className="layout01__content">
                  <div className="layout01__content-wrapper">
                    <div className="section-title text-left">
                      <div className="section-title__01">Mission:</div>
                      <div className="section-title__02">
                        We are a Qualified &amp; Certified Electrical Company
                      </div>
                    </div>
                    <p>
                      At Popular Electrical & Security Services, our mission is
                      to provide unparalleled electrical and security solutions
                      that enhance safety, efficiency, and convenience for our
                      clients. We are committed to delivering superior service,
                      leveraging our expertise, and embracing innovation to meet
                      the evolving needs of our customers and exceed their
                      expectations.
                    </p>
                    <ul className="js-wrapper-gallery gallery01 gallery01-top">
                      <li>
                        <a
                          className="tt-gallery"
                          href="./template/images/certificates-img01_large.jpg"
                        >
                          <img
                            src="./template/images/certificates-img01.jpg"
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className="tt-gallery"
                          href="./template/images/certificates-img02_large.jpg"
                        >
                          <img
                            src="./template/images/certificates-img02.jpg"
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className="tt-gallery"
                          href="./template/images/certificates-img03_large.jpg"
                        >
                          <img
                            src="./template/images/certificates-img03.jpg"
                            alt
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div className="container container-lg-fluid">
              <div className="section-title max-width-01">
                <div className="section-title__01">Our Advantages</div>
                <div className="section-title__02">
                  Reasons You Should Call Us
                </div>
                <div className="section-title__03">
                  Electrician is your single source for a complete range of
                  high-quality electrical services, including design/build,
                  engineering and maintenance.
                </div>
              </div>
              <div className="row tt-services-promo__list justify-content-center">
                <div className="col-sm-6 col-lg-4 tt-item">
                  <div className="tt-services-promo">
                    <div className="tt-value tt-value__indent">1</div>
                    <div className="tt-wrapper">
                      <div className="tt-col-icon icon-hours" />
                      <div className="tt-col-layout">
                        <div className="tt-title">24/7 Emergency Services</div>
                        <p>24/7 emergency electrician you can trust.</p>
                      </div>
                    </div>
                    <div className="tt-bg-marker" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 tt-item">
                  <div className="tt-services-promo">
                    <div className="tt-value">2</div>
                    <div className="tt-wrapper">
                      <div className="tt-col-icon icon-tool2" />
                      <div className="tt-col-layout">
                        <div className="tt-title">Free Estimates</div>
                        <p>
                          Yes, we offer free estimates for electrical additions
                          or replacements.
                        </p>
                      </div>
                    </div>
                    <div className="tt-bg-marker" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 tt-item">
                  <div className="tt-services-promo">
                    <div className="tt-value">3</div>
                    <div className="tt-wrapper">
                      <div className="tt-col-icon icon-price-tag" />
                      <div className="tt-col-layout">
                        <div className="tt-title">Low Price Guarantee</div>
                        <p>
                          We strive to offer the lowest price on the market.
                        </p>
                      </div>
                    </div>
                    <div className="tt-bg-marker" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div
              className="tt-box01 js-init-bg"
              style={{
                backgroundImage:
                  'url("./template/images/box01-bg-desktop.jpg")',
              }}
            >
              <div className="container">
                <div className="tt-box01__holder">
                  <div className="tt-box01__description">
                    <h4 className="tt-box01__title">
                      Do you <span className="tt-base-color">Need Help</span>
                      <br />
                      With Electrical
                      <br />
                      Maintenance?
                    </h4>
                    <p>
                      Our electrical repair and service options are proudly
                      offered to clients. Give us a call today to schedule a
                      free service estimate!
                    </p>
                    <div className="tt-row-btn">
                      <a
                        className="tt-btn btn__color01"
                        href="tel:1(800)7654321"
                      >
                        <span className="icon-telephone" />
                        Give Us a Call
                      </a>
                      <a
                        className="tt-btn btn__color02"
                        data-toggle="modal"
                        data-target="#modalMakeAppointment"
                        href="#"
                      >
                        <span className="icon-lightning" />
                        Free Estimate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div className="container container-lg-fluid">
              <div className="section-title max-width-01">
                <div className="section-title__01">Our Team</div>
                <div className="section-title__02">
                  Fully Qualified Electricians
                </div>
                <div className="section-title__03">
                  All our personnel operate within an Integrated Management
                  System to ensure the delivery of services that are at an
                  exception level of quality, reliability, and value
                </div>
              </div>
              <div
                className="tt-box05_wrapper row slick-type01 slick-type01"
                data-slick='{
					"slidesToShow": 3,
					"slidesToScroll": 2,
					"responsive": [
						{
							"breakpoint": 750,
							"settings": {
								"slidesToShow": 2
							}
						},
						{
							"breakpoint": 546,
							"settings": {
								"slidesToShow": 1,
								"slidesToScroll": 1
							}
						}
					]
				}'
              >
                <div className="col-md-4">
                  <a href="testimonials.html" className="tt-box05">
                    <div className="tt-box05__img">
                      <img
                        src="./template/images/box04-img01.jpg"
                        className="tt-img-main"
                        alt
                      />
                      <img
                        src="./template/images/mask-img02.png"
                        className="tt-img-mask"
                        alt
                      />
                    </div>
                    <div className="tt-box05__title">
                      <div className="tt-text-01">David Anthony</div>
                      <div className="tt-text-02">Master Electrician</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="testimonials.html" className="tt-box05">
                    <div className="tt-box05__img">
                      <img
                        src="./template/images/box04-img02.jpg"
                        className="tt-img-main"
                        alt
                      />
                      <img
                        src="./template/images/mask-img02.png"
                        className="tt-img-mask"
                        alt
                      />
                    </div>
                    <div className="tt-box05__title">
                      <div className="tt-text-01">James Campbell</div>
                      <div className="tt-text-02">Office Manager</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="testimonials.html" className="tt-box05">
                    <div className="tt-box05__img">
                      <img
                        src="./template/images/box04-img03.jpg"
                        className="tt-img-main"
                        alt
                      />
                      <img
                        src="./template/images/mask-img02.png"
                        className="tt-img-mask"
                        alt
                      />
                    </div>
                    <div className="tt-box05__title">
                      <div className="tt-text-01">Charles Shepard</div>
                      <div className="tt-text-02">Electrician</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="testimonials.html" className="tt-box05">
                    <div className="tt-box05__img">
                      <img
                        src="./template/images/box04-img01.jpg"
                        className="tt-img-main"
                        alt
                      />
                      <img
                        src="./template/images/mask-img02.png"
                        className="tt-img-mask"
                        alt
                      />
                    </div>
                    <div className="tt-box05__title">
                      <div className="tt-text-01">David Anthony</div>
                      <div className="tt-text-02">Master Electrician</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default About;
