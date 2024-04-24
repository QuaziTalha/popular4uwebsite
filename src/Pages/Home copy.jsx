import { Component } from "react";

class Home extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./template/js/bundle.js";
    script.async = true;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "./template/js/jquery.min.js";
    script2.async = true;
    document.body.appendChild(script2);
  }

  render() {
    return (
      <>
        <main id="tt-pageContent">
          <div className="container-indent no-margin mainSlider-wrapper">
            <div id="js-mainSlider" className="mainSlider">
              <div className="slide">
                <picture className="img--holder">
                  <source
                    srcSet="./template/images/mainslide-01-sm.jpg"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-01-sm.jpg"
                    media="(max-width: 767px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="./template/images/mainslide-01-md.jpg"
                    media="(max-width: 1024px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-01-md.jpg"
                    media="(max-width: 1024px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="./template/images/mainslide-01.jpg"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-01.jpg"
                    type="image/jpg"
                  />
                  <img src="./template/images/mainslide-01.jpg" alt />
                </picture>
                <div className="slide-content">
                  <div
                    className="container text-center js-rotation"
                    data-animation="fadeInUpSm"
                    data-animation-delay="0s"
                  >
                    <div className="tt-title-01">Keeping You Wired</div>
                    <div className="tt-title-02">
                      We’re the Current
                      <br />
                      Specialist!
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <picture className="img--holder">
                  <source
                    srcSet="./template/images/mainslide-02-sm.jpg"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-02-sm.jpg"
                    media="(max-width: 767px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="./template/images/mainslide-02-md.jpg"
                    media="(max-width: 1024px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-02-md.jpg"
                    media="(max-width: 1024px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="./template/images/mainslide-02.jpg"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-02.jpg"
                    type="image/jpg"
                  />
                  <img src="./template/images/mainslide-02.jpg" alt />
                </picture>
                <div className="slide-content">
                  <div
                    className="container text-center js-rotation"
                    data-animation="fadeInUpSm"
                    data-animation-delay="0s"
                  >
                    <div className="tt-title-01">
                      Making Our Clients Happier
                    </div>
                    <div className="tt-title-02">
                      Best Services
                      <br />
                      for Your Family
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <picture className="img--holder">
                  <source
                    srcSet="./template/images/mainslide-03-sm.jpg"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-03-sm.jpg"
                    media="(max-width: 767px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="./template/images/mainslide-03-md.jpg"
                    media="(max-width: 1024px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-03-md.jpg"
                    media="(max-width: 1024px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="./template/images/mainslide-03.jpg"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-03.jpg"
                    type="image/jpg"
                  />
                  <img src="./template/images/mainslide-03.jpg" alt />
                </picture>
                <div className="slide-content">
                  <div
                    className="container text-center js-rotation"
                    data-animation="fadeInUpSm"
                    data-animation-delay="0s"
                  >
                    <div className="tt-title-01">We Can Light Everything</div>
                    <div className="tt-title-02">
                      Nothing is Impossible
                      <br />
                      for Us
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container order-form-wrapper container-lg-fluid container-lg__no-gutters">
            <div className="order-form">
              <div className="order-form__title" id="js-toggle-orderform">
                <i className="tt-arrow down" /> Request Service Today
              </div>
              <div className="order-form__content form-order">
                <form
                  id="orderform"
                  method="post"
                  noValidate="novalidate"
                  action="#"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Your e-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phonenumber"
                      className="form-control"
                      placeholder="Your phone"
                    />
                  </div>
                  <div className="form-group">
                    <span className="icon icon-747993" />
                    <input
                      name="date"
                      className="datepicker-1 form-control"
                      autoComplete="off"
                      placeholder="Date"
                      type="text"
                    />
                    <div className="form-group__icon icon-calendar" />
                  </div>
                  <div className="form-group">
                    <button className="tt-btn btn__color01" type="submit">
                      <span className="icon-lightning" />
                      Get Service
                    </button>
                  </div>
                </form>
                <div className="tt-modal-message">Form sent successfully</div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div className="container container-lg-fluid">
              <div className="layout01 layout01__img-more">
                <div className="layout01__img">
                  <div className="tt-img-main">
                    <picture>
                      <source
                        srcSet="./template/images/layout01-img01.jpg"
                        type="image/webp"
                      />
                      <source
                        srcSet="./template/images/layout01-img01.jpg"
                        type="image/jpg"
                      />
                      <img src="./template/images/layout01-img01.jpg" alt />
                    </picture>
                  </div>
                  <div className="tt-img-more left-bottom">
                    <picture>
                      <source
                        srcSet="./template/images/layout01-img02.jpg"
                        type="image/webp"
                      />
                      <source
                        srcSet="./template/images/layout01-img02.jpg"
                        type="image/jpg"
                      />
                      <img src="./template/images/layout01-img02.jpg" alt />
                    </picture>
                  </div>
                </div>
                <div className="layout01__content">
                  <div className="layout01__content-wrapper">
                    <div className="section-title text-left">
                      <div className="section-title__01">About Us</div>
                      <div className="section-title__02">
                        Outstanding Residential &amp; Commercial Services
                      </div>
                    </div>
                    <p>
                      All of our services are backed by our 100% satisfaction
                      guarantee. Our electricians can install anything from new
                      security lighting for your outdoors to a whole home
                      generator that will keep your appliances working during a
                      power outage.
                    </p>
                    <ul className="tt-list01 tt-list-top">
                      <li>Full-service electrical layout, design</li>
                      <li>Wiring and installation/upgrades</li>
                      <li>Emergency power solutions (generators)</li>
                      <li>
                        Virtually any electrical needs you have – just ask!
                      </li>
                    </ul>
                    <div className="tt-data-info">
                      <div className="tt-item">
                        <div className="personal-box">
                          <div className="personal-box__img">
                            <img
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="./template/images/img-02.jpg"
                              className="lazyload"
                              alt
                            />
                          </div>
                          <div className="personal-box__content">
                            <div className="personal-box__title">
                              Mark Smith
                            </div>
                            Your own electrician
                          </div>
                        </div>
                      </div>
                      <div className="tt-item">
                        <img
                          src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                          data-src="./template/images/img-01.png"
                          className="lazyload"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div className="tt-slideinfo-wrapper slick-type01">
              <div className="tt-slideinfo">
                <div className="tt-item__bg">
                  <div
                    data-bg="./template/images/slideinfo-01.jpg"
                    className="lazyload tt-item__bg-img"
                  />
                  <div className="tt-item__bg-top" />
                </div>
                <div className="tt-item__content">
                  <div className="tt-item__title">
                    <span className="tt-icon">
                      <img
                        src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                        className="lazyload"
                        data-src="./template/images/slideinfo-marker.png"
                        alt
                      />
                    </span>
                    <span className="tt-text">Commercial</span>
                  </div>
                  <div className="tt-item__description">
                    We offer the highest level of responsiveness and
                    reliability, including on-line job management and reporting.
                    Our highly experienced contractors across the nation ensure
                    that your premises are always maintained and compliant.
                  </div>
                  <div className="tt-item__btn">
                    <a href="#">+</a>
                  </div>
                </div>
              </div>
              <div className="tt-slideinfo">
                <div className="tt-item__bg">
                  <div
                    data-bg="./template/images/slideinfo-02.jpg"
                    className="lazyload tt-item__bg-img"
                  />
                  <div className="tt-item__bg-top" />
                </div>
                <div className="tt-item__content">
                  <div className="tt-item__title">
                    <span className="tt-icon">
                      <img
                        src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                        className="lazyload"
                        data-src="./template/images/slideinfo-marker.png"
                        alt
                      />
                    </span>
                    <span className="tt-text">Industrial</span>
                  </div>
                  <div className="tt-item__description">
                    We offer the highest level of responsiveness and
                    reliability, including on-line job management and reporting.
                    Our highly experienced contractors across the nation ensure
                    that your premises are always maintained and compliant.
                  </div>
                  <div className="tt-item__btn">
                    <a href="#">+</a>
                  </div>
                </div>
              </div>
              <div className="tt-slideinfo">
                <div className="tt-item__bg">
                  <div
                    data-bg="./template/images/slideinfo-03.jpg"
                    className="lazyload tt-item__bg-img"
                  />
                  <div className="tt-item__bg-top" />
                </div>
                <div className="tt-item__content">
                  <div className="tt-item__title">
                    <span className="tt-icon">
                      <img
                        src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                        className="lazyload"
                        data-src="./template/images/slideinfo-marker.png"
                        alt
                      />
                    </span>
                    <span className="tt-text">Residential</span>
                  </div>
                  <div className="tt-item__description">
                    We offer the highest level of responsiveness and
                    reliability, including on-line job management and reporting.
                    Our highly experienced contractors across the nation ensure
                    that your premises are always maintained and compliant.
                  </div>
                  <div className="tt-item__btn">
                    <a href="#">+</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent"></div>
          <div className="section-indent">
            <div
              className="tt-box01 js-init-bg lazyload"
              data-bg="./template/images/box01-bg-desktop.jpg"
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
            <div className="container container-md-fluid">
              <div className="section-title max-width-01">
                <div className="section-title__01">
                  <a href="https://www.instagram.com/" target="_blank">
                    @electricians
                  </a>
                </div>
                <div className="section-title__02">Our Projects</div>
              </div>
              <div id="filter-nav">
                <ul>
                  <li className="active">
                    <a className="gallery-navitem" href="all.html">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="gallery-navitem" href="residences.html">
                      Residences
                    </a>
                  </li>
                  <li>
                    <a
                      className="gallery-navitem"
                      href="industrial_objects.html"
                    >
                      Industrial_Objects
                    </a>
                  </li>
                  <li>
                    <a className="gallery-navitem" href="offices.html">
                      Offices
                    </a>
                  </li>
                  <li>
                    <a className="gallery-navitem" href="retail_objects.html">
                      Retail_Objects
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="filter-layout"
                className="row justify-content-center gallery-innerlayout-wrapper js-wrapper-gallery"
              >
                <div className="col-4 col-md-3 col-custom-item5 residences show all">
                  <a
                    href="./template/images/gallery01-01.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-01.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 residences show all">
                  <a
                    href="./template/images/gallery01-02.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-02.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 residences show all">
                  <a
                    href="./template/images/gallery01-03.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-03.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 industrial_objects show all">
                  <a
                    href="./template/images/gallery01-04.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-04.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 offices show all">
                  <a
                    href="./template/images/gallery01-05.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-05.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 industrial_objects show all">
                  <a
                    href="./template/images/gallery01-06.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-06.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 retail_objects show all">
                  <a
                    href="./template/images/gallery01-07.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-07.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 offices show all">
                  <a
                    href="./template/images/gallery01-08.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-08.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 retail_objects show all">
                  <a
                    href="./template/images/gallery01-09.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-09.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 retail_objects show all">
                  <a
                    href="./template/images/gallery01-10.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/gallery01-10.jpg"
                      alt
                    />
                  </a>
                </div>
                <div
                  className="col-12 text-center tt-top-more"
                  id="js-more-include"
                  data-include="ajax-content/more-gallery-innerlayout.html"
                >
                  <a href="#" className="tt-link tt-link__lg">
                    View all projects
                    <span className="icon-arrowhead-pointing-to-the-right-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div className="section__wrapper">
              <div className="container container-md-fluid">
                <div className="tt-info-value row">
                  <div className="tt-col-title col-md-4">
                    <div className="tt-title">
                      <img
                        className="bg-marker lazyload"
                        src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                        data-src="./template/images/bg_marker.png"
                        alt
                      />
                      <div className="tt-title__01">Our Statistics</div>
                      <div className="tt-title__02">Some Important Facts</div>
                    </div>
                  </div>
                  <div className="col-auto ml-auto">
                    <div className="tt-item">
                      <div className="tt-value">5000+</div>
                      Residential Projects
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="tt-item">
                      <div className="tt-value">1500+</div>
                      Commercial Projects
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="tt-item">
                      <div className="tt-value">1000+</div>
                      Industrial Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tt-box03 tt-box03__extraindent">
            <div className="container container-md-fluid">
              <div className="row no-gutters">
                <div className="col-md-7">
                  <div className="tt-box03__content">
                    <div
                      className="slick-type01 slick-dots-left"
                      data-slick='{
								"slidesToShow": 1,
								"slidesToScroll": 1,
								"autoplaySpeed": 4500
							}'
                    >
                      <div className="item">
                        <div className="item__row">
                          <div className="tt-item__img">
                            <img
                              className="lazyload"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="./template/images/box03_img02.jpg"
                              alt
                            />
                          </div>
                          <div className="tt-item__title">
                            <div className="section-title text-left">
                              <div className="section-title__01">
                                What Our Clients Say
                              </div>
                              <div className="section-title__02">
                                Professional, Reliable &amp; Cost Effective
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tt-item__content">
                          <blockquote>
                            We've been using your company and from the very
                            beginning found him and his team to be extremely
                            professional and knowledgeable. We wouldn't have any
                            hesitation in recommending their services.
                            <cite>- Teresa and Kevin K.</cite>
                          </blockquote>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item__row">
                          <div className="tt-item__img">
                            <img
                              className="lazyload"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="./template/images/box03_img02.jpg"
                              alt
                            />
                          </div>
                          <div className="tt-item__title">
                            <div className="section-title text-left">
                              <div className="section-title__01">
                                What Our Clients Say
                              </div>
                              <div className="section-title__02">
                                Professional, Reliable &amp; Cost Effective
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tt-item__content">
                          <blockquote>
                            We've been using your company and from the very
                            beginning found him and his team to be extremely
                            professional and knowledgeable. We wouldn't have any
                            hesitation in recommending their services.
                            <cite>- Teresa and Kevin K.</cite>
                          </blockquote>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item__row">
                          <div className="tt-item__img">
                            <img
                              className="lazyload"
                              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                              data-src="./template/images/box03_img02.jpg"
                              alt
                            />
                          </div>
                          <div className="tt-item__title">
                            <div className="section-title text-left">
                              <div className="section-title__01">
                                What Our Clients Say
                              </div>
                              <div className="section-title__02">
                                Professional, Reliable &amp; Cost Effective
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tt-item__content">
                          <blockquote>
                            We've been using your company and from the very
                            beginning found him and his team to be extremely
                            professional and knowledgeable. We wouldn't have any
                            hesitation in recommending their services.
                            <cite>- Teresa and Kevin K.</cite>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tt-box03__img tt-visible-mobile lazyload"
                    data-bg="./template/images/box03_img01.jpg"
                  />
                  <div className="tt-box03__extra">
                    <div className="tt-title">Emergency Service</div>
                    <p>
                      If this is an emergency outside of normal business hours,
                      call us
                    </p>
                    <address>
                      <a href="tel:1(800)7654321">
                        <i className="icon-telephone" /> 1 (800) 765-43-21
                      </a>
                    </address>
                  </div>
                </div>
                <div
                  className="tt-box03__img tt-visible-desktop lazyload"
                  data-bg="./template/images/box03_img01.jpg"
                />
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div className="container">
              <div className="section-title max-width-01">
                <div className="section-title__01">
                  Save on the Service You Need
                </div>
                <div className="section-title__02">Maintenance Plans</div>
                <div className="section-title__03">
                  With an electrical maintenance plan, you won’t find yourself
                  in a panic wondering who to call when you’re having problems
                  with your electrical system.
                </div>
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
                      <div className="tt-layout02__title">
                        Commercial Service
                      </div>
                      <ul className="tt-layout02__list">
                        <li>Indoor/outdoor Lighting Installation</li>
                        <li>Appliance &amp; Fixture Installation</li>
                        <li>Annual Electrical Inspection</li>
                        <li>Ceiling Fan Installation</li>
                        <li>New &amp; Replacement Wiring</li>
                        <li>Surge Protection Maintenance</li>
                        <li>24-hour Response</li>
                      </ul>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__price">$89.00</div>
                      <div className="tt-layout02__link">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#modalMakeAppointment"
                          className="tt-link"
                        >
                          Order now
                          <span className="icon-arrowhead-pointing-to-the-right-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-621023" />
                      </div>
                      <div className="tt-layout02__title">
                        Industrial Service
                      </div>
                      <ul className="tt-layout02__list">
                        <li>Annual A/C inspection</li>
                        <li>Annual electrical inspection</li>
                        <li>Install new double power</li>
                        <li>Retrofits and Upgrades</li>
                        <li>Install double power outside</li>
                        <li>Switchboard Upgrade</li>
                        <li>Critical Installations</li>
                      </ul>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__price">$130.00</div>
                      <div className="tt-layout02__link">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#modalMakeAppointment"
                          className="tt-link"
                        >
                          Order now
                          <span className="icon-arrowhead-pointing-to-the-right-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-plug-1" />
                      </div>
                      <div className="tt-layout02__title">
                        Residential Service
                      </div>
                      <ul className="tt-layout02__list">
                        <li>Annual A/C inspection</li>
                        <li>Annual electrical inspection</li>
                        <li>Design-Build Services</li>
                        <li>Supply and install Sensor light</li>
                        <li>Lighting Fixtures</li>
                        <li>Replace hot plates</li>
                        <li>Switchboard Upgrade</li>
                      </ul>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__price">$12.00</div>
                      <div className="tt-layout02__link">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#modalMakeAppointment"
                          className="tt-link"
                        >
                          Order now
                          <span className="icon-arrowhead-pointing-to-the-right-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-867257" />
                      </div>
                      <div className="tt-layout02__title">
                        Commercial Service
                      </div>
                      <ul className="tt-layout02__list">
                        <li>Indoor/outdoor Lighting Installation</li>
                        <li>Appliance &amp; Fixture Installation</li>
                        <li>Annual Electrical Inspection</li>
                        <li>Ceiling Fan Installation</li>
                        <li>New &amp; Replacement Wiring</li>
                        <li>Surge Protection Maintenance</li>
                        <li>24-hour Response</li>
                      </ul>
                      <hr className="tt-layout02__hr" />
                      <div className="tt-layout02__price">$89.00</div>
                      <div className="tt-layout02__link">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#modalMakeAppointment"
                          className="tt-link"
                        >
                          Order now
                          <span className="icon-arrowhead-pointing-to-the-right-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div
              className="tt-box01 lazyload"
              data-bg="./template/images/box01-bg02-desktop.jpg"
            >
              <div className="container">
                <div className="tt-box01__holder">
                  <div className="tt-box01__video">
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="tt-video js-video-popup"
                    >
                      <i className="icon-arrowhead-pointing-to-the-right-1" />
                    </a>
                  </div>
                  <div className="tt-box01__description">
                    <h4 className="tt-box01__title">
                      Your <span className="tt-base-color">Best Option</span>
                      <br />
                      in Electrical
                      <br />
                      Contractors 24/7
                    </h4>
                    <p>
                      Our experienced electricians are highly trained in all
                      aspects of electrical service, from office lighting and
                      security systems to emergency repair.
                    </p>
                    <div className="tt-row-btn">
                      <a
                        className="tt-btn btn__color01"
                        data-toggle="modal"
                        data-target="#modalMakeAppointment"
                        href="#"
                      >
                        <span className="icon-lightning" />
                        Explore services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent">
            <div className="container container-md-fluid">
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="section-title text-left section-title_indent-01">
                    <div className="section-title__01">Latest News</div>
                    <h4 className="section-title__02">News &amp; Update</h4>
                    <img
                      className="bg-marker01 lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/bg_marker02.png"
                      alt
                    />
                  </div>
                  <div className="tt-news-list">
                    <div className="tt-item">
                      <div className="tt-item_data">2 May, 2020</div>
                      <h4 className="tt-item__title">
                        <a href="blog-item.html">
                          The Best Small Kitchen Appliances
                        </a>
                      </h4>
                      <p>
                        If you notice an electrical outlet smoking, it’s a
                        serious issue that requires immediate action.
                      </p>
                    </div>
                    <div className="tt-item">
                      <div className="tt-item_data">5 May, 2020</div>
                      <h4 className="tt-item__title">
                        <a href="blog-item.html">
                          How to Fix a Smoking Electrical Outlet
                        </a>
                      </h4>
                      <p>
                        Although the kitchen has been referred to as the heart
                        of the home, it can also be...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divider d-block d-sm-none" />
                <div className="col-sm-6 col-lg-8">
                  <div className="tt-news-col row js-init-carusel-04 slick-type01">
                    <div className="col-md-12 col-lg-6">
                      <div className="tt-news-obj">
                        <div className="tt-news-obj__img">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAEYAQMAAAB7he92AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACRJREFUaN7twYEAAAAAw6D7U59gBtUAAAAAAAAAAAAAAAAAwgE0gAABfVm7PgAAAABJRU5ErkJggg=="
                            className="lazyload"
                            data-src="./template/images/news-obj-img01.jpg"
                            alt
                          />
                        </div>
                        <div className="tt-news-obj__wrapper">
                          <div className="tt-news-obj__data">6 May, 2020</div>
                          <div className="tt-news-obj__title">
                            <a href="blog-item.html">
                              How to Get Electricity to a Kitchen Island
                            </a>
                          </div>
                          <p>
                            Do you need an expert solution to get electricity to
                            a kitchen island? You may be feeling overwhelmed...
                          </p>
                          <div className="row-btn">
                            <a href="blog-item.html" className="tt-link">
                              Read more
                              <span className="icon-arrowhead-pointing-to-the-right-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="tt-news-obj">
                        <div className="tt-news-obj__img">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAEYAQMAAAB7he92AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACRJREFUaN7twYEAAAAAw6D7U59gBtUAAAAAAAAAAAAAAAAAwgE0gAABfVm7PgAAAABJRU5ErkJggg=="
                            className="lazyload"
                            data-src="./template/images/news-obj-img02.jpg"
                            alt
                          />
                        </div>
                        <div className="tt-news-obj__wrapper">
                          <div className="tt-news-obj__data">8 May, 2020</div>
                          <div className="tt-news-obj__title">
                            <a href="blog-item.html">
                              The Best Way to Clean Light Fixtures
                            </a>
                          </div>
                          <p>
                            While cleaning light fixtures may not be at the top
                            of your to-do list, it’s one of those simple
                            tasks...
                          </p>
                          <div className="row-btn">
                            <a href="blog-item.html" className="tt-link">
                              Read more
                              <span className="icon-arrowhead-pointing-to-the-right-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-indent section_hr">
            <div className="container container-md-fluid">
              <div className="tt-logo-list slick-type01 js-init-carusel-05">
                <div className="tt-item">
                  <a href="#">
                    <img
                      className="lazyload"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyAQMAAADP6mO0AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABFJREFUOMtjGAWjYBSMgiECAASwAAFkNt7mAAAAAElFTkSuQmCC"
                      data-src="./template/images/logo-01.png"
                      alt
                    />
                  </a>
                </div>
                <div className="tt-item">
                  <a href="#">
                    <img
                      className="lazyload"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyAQMAAADP6mO0AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABFJREFUOMtjGAWjYBSMgiECAASwAAFkNt7mAAAAAElFTkSuQmCC"
                      data-src="./template/images/logo-02.png"
                      alt
                    />
                  </a>
                </div>
                <div className="tt-item">
                  <a href="#">
                    <img
                      className="lazyload"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyAQMAAADP6mO0AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABFJREFUOMtjGAWjYBSMgiECAASwAAFkNt7mAAAAAElFTkSuQmCC"
                      data-src="./template/images/logo-03.png"
                      alt
                    />
                  </a>
                </div>
                <div className="tt-item">
                  <a href="#">
                    <img
                      className="lazyload"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyAQMAAADP6mO0AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABFJREFUOMtjGAWjYBSMgiECAASwAAFkNt7mAAAAAElFTkSuQmCC"
                      data-src="./template/images/logo-04.png"
                      alt
                    />
                  </a>
                </div>
                <div className="tt-item">
                  <a href="#">
                    <img
                      className="lazyload"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyAQMAAADP6mO0AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABFJREFUOMtjGAWjYBSMgiECAASwAAFkNt7mAAAAAElFTkSuQmCC"
                      data-src="./template/images/logo-05.png"
                      alt
                    />
                  </a>
                </div>
                <div className="tt-item">
                  <a href="#">
                    <img
                      className="lazyload"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyAQMAAADP6mO0AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABFJREFUOMtjGAWjYBSMgiECAASwAAFkNt7mAAAAAElFTkSuQmCC"
                      data-src="./template/images/logo-06.png"
                      alt
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
