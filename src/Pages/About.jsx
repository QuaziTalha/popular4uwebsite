import { Component } from "react";

class About extends Component {
  componentDidMount() {
    const cards = document.querySelectorAll(".tt-layout02", "tt-wrapper");
    let maxHeight = 0;
    cards.forEach((card) => {
      const cardHeight = card.clientHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });
    cards.forEach((card) => {
      card.style.height = maxHeight + "px";
    });
  }
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
                <div
                  className="layout01__content  "
                  style={{ marginRight: "40px" }}
                >
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
                            <div className="tt-title">15+</div>
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
            <div className="container">
              <div className="section-title max-width-01">
                <div className="section-title__01">
                  Save on the Service You Need
                </div>
                <div className="section-title__02">Core Values</div>
              </div>
              <div className="tt-block-marker">
                <img
                  className="bg-marker01 block-marker__obj lazyload"
                  src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                  data-src="./template/images/bg_marker02.png"
                  alt
                />
                <div
                  className="tt-layout02-wrapper slick-type01 row"
                  data-slick='{
						"slidesToShow": 3,
						"slidesToScroll": 2,
						"autoplaySpeed": 5000,
						"responsive": [
							{
								"breakpoint": 1230,
								"settings": {
									"slidesToShow": 2,
									"slidesToScroll": 2
								}
							},
							{
								"breakpoint": 767,
								"settings": {
									"slidesToShow": 1,
									"slidesToScroll": 1
								}
							}
						]
					}'
                >
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-867257" />
                      </div>
                      <div className="tt-layout02__title">Excellence</div>
                      <p>
                        We strive for excellence in everything we do, delivering
                        top-quality workmanship and service that surpasses
                        expectations.
                      </p>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__link"></div>
                    </div>
                  </div>
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-867257" />
                      </div>
                      <div className="tt-layout02__title">Integrity</div>
                      <p>
                        We uphold the highest standards of integrity and honesty
                        in our interactions with clients, partners, and team
                        members.
                      </p>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__link"></div>
                    </div>
                  </div>
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-867257" />
                      </div>
                      <div className="tt-layout02__title">Reliability</div>
                      <p>
                        We uphold the highest standards of integrity and honesty
                        in our interactions with clients, partners, and team
                        members.
                      </p>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__link"></div>
                    </div>
                  </div>
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-867257" />
                      </div>
                      <div className="tt-layout02__title">Innovation</div>
                      <p>
                        We embrace innovation and stay at the forefront of
                        technological advancements to provide cutting-edge
                        solutions.
                      </p>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__link"></div>
                    </div>
                  </div>
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-867257" />
                      </div>
                      <div className="tt-layout02__title">Customer Focus</div>
                      <p>
                        We prioritize our customers' needs and work
                        collaboratively to deliver customized solutions that
                        address their unique requirements.
                      </p>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__link"></div>
                    </div>
                  </div>
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-867257" />
                      </div>
                      <div className="tt-layout02__title">Safety</div>
                      <p>
                        We prioritize safety in all aspects of our work,
                        implementing best practices to protect our employees,
                        clients, and communities.
                      </p>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__link"></div>
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
                      <div className="section-title__01">Mission</div>
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
                  </div>
                  {/* Add inline style for space */}
                  <div style={{ marginTop: "20px" }}></div>
                  <div className="layout01__content-wrapper">
                    <div className="section-title text-left">
                      <div className="section-title__01">Vision</div>
                      <div className="section-title__02">
                        Lighting the Way, Safeguarding Tomorrow
                      </div>
                    </div>
                    <p>
                      Our vision is to be a leading provider of electrical and
                      security services, recognized for our exceptional quality,
                      reliability, and professionalism. We aim to expand our
                      presence, cultivate long-term partnerships, and continue
                      setting industry standards through continuous improvement
                      and customer-centric practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div className="container container-lg-fluid">
              <div className="section-title max-width-01">
                <div className="section-title__01">Our Advantages</div>
                <div className="section-title__02">Why Choose Us?</div>
                <div className="section-title__03">
                  Electrician is your single source for a complete range of
                  high-quality electrical services, including design/build,
                  engineering and maintenance.
                </div>
              </div>
              <div className="row tt-services-promo__list justify-content-center">
                <div className="col-sm-6 col-lg-4 tt-item">
                  <div className="tt-services-promo">
                    <div
                      className="tt-value tt-value__indent "
                      style={{ color: "#002244" }}
                    >
                      1
                    </div>
                    <div className="tt-wrapper">
                      <div className="tt-col-icon icon-hours" />
                      <div className="tt-col-layout">
                        <div className="tt-title">Experienced Team</div>
                        <p className="tt-para">
                          Our team of 20+ skilled electricians, technicians, and
                          helpers is committed to delivering excellence on every
                          project.
                        </p>
                      </div>
                    </div>
                    <div className="tt-bg-marker" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 tt-item">
                  <div className="tt-services-promo">
                    <div className="tt-value" style={{ color: "#002244" }}>
                      2
                    </div>
                    <div className="tt-wrapper">
                      <div className="tt-col-icon icon-tool2" />
                      <div className="tt-col-layout">
                        <div className="tt-title">Quality Assurance</div>
                        <p className="tt-para">
                          {" "}
                          We adhere to strict quality standards and use premium
                          materials to ensure reliable and durable
                          installations.
                        </p>
                      </div>
                    </div>
                    <div className="tt-bg-marker" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 tt-item">
                  <div className="tt-services-promo">
                    <div className="tt-value" style={{ color: "#002244" }}>
                      3
                    </div>
                    <div className="tt-wrapper">
                      <div className="tt-col-icon icon-price-tag" />
                      <div className="tt-col-layout">
                        <div className="tt-title">
                          Customer-Centric Approach:{" "}
                        </div>
                        <p className="tt-para">
                          We prioritize customer satisfaction, offering tailored
                          solutions that meet specific needs and budgets.
                        </p>
                      </div>
                    </div>
                    <div className="tt-bg-marker" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 tt-item">
                  <div className="tt-services-promo">
                    <div className="tt-value" style={{ color: "#002244" }}>
                      4
                    </div>
                    <div className="tt-wrapper">
                      <div className="tt-col-icon icon-price-tag" />
                      <div className="tt-col-layout">
                        <div className="tt-title">Safety First</div>
                        <p className="tt-para">
                          Safety is our top priority, and we implement best
                          practices to protect our team and clients throughout
                          every project.
                        </p>
                      </div>
                    </div>
                    <div className="tt-bg-marker" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 tt-item">
                  <div className="tt-services-promo">
                    <div className="tt-value" style={{ color: "#002244" }}>
                      5
                    </div>
                    <div className="tt-wrapper">
                      <div className="tt-col-icon icon-price-tag" />
                      <div className="tt-col-layout">
                        <div className="tt-title">Innovation</div>
                        <p className="tt-para">
                          We stay updated with the latest industry trends and
                          technologies to provide innovative solutions that
                          enhance efficiency and security.
                        </p>
                      </div>
                    </div>
                    <div className="tt-bg-marker" />
                  </div>
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
