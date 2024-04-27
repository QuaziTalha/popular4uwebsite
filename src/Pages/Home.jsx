import { Component } from "react";

class Home extends Component {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.src = "./template/js/bundle.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   const script2 = document.createElement("script");
  //   script2.src = "./template/js/jquery.min.js";
  //   script2.async = true;
  //   document.body.appendChild(script2);
  // }

  render() {
    return (
      <>
        <main id="tt-pageContent">
          <div className="container-indent no-margin mainSlider-wrapper">
            <div id="js-mainSlider" className="mainSlider">
              <div className="slide">
                <picture className="img--holder">
                  <source
                    srcSet="./template/images/mainslide-01.jpg"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-01.jpg"
                    media="(max-width: 767px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="./template/images/mainslide-01.jpg"
                    media="(max-width: 1024px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-01.jpg"
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
                  <img src="./template/images/mainslide-01.jpg" alt="image" />
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
                    <br/>
                    <div className="tt-title-01">We specialize in a wide range of services, including commercial and residential work</div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <picture className="img--holder">
                  <source
                    srcSet="./template/images/mainslide-02.jpg"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-02.jpg"
                    media="(max-width: 767px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="./template/images/mainslide-02.jpg"
                    media="(max-width: 1024px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-02.jpg"
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
                  <img src="./template/images/mainslide-02.jpg" alt="image" />
                </picture>
                <div className="slide-content">
                  <div
                    className="container text-center js-rotation"
                    data-animation="fadeInUpSm"
                    data-animation-delay="0s"
                  >
                    <div className="tt-title-01">We Can Light up Everything</div>
                    <div className="tt-title-02">
                      Nothing is Impossible
                      <br />
                      for Us
                    </div>
                    <br/>
                    <div className="tt-title-01">Our dedicated team of 20+ skilled electricians, technicians, and helpers is committed to delivering exceptional service</div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <picture className="img--holder">
                  <source
                    srcSet="./template/images/mainslide-03.jpg"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-03.jpg"
                    media="(max-width: 767px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="./template/images/mainslide-03.jpg"
                    media="(max-width: 1024px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="./template/images/mainslide-03.jpg"
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
                  <img
                    src="./template/images/mainslide-03.jpg"
                    alt="gallery_img"
                  />
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
                    <br/>
                    <div className="tt-title-01">At Popular Electrical & Security Services, we prioritize quality, safety, and customer satisfaction</div>

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
                      <img
                        src="./template/images/layout01-img01.jpg"
                        alt="img"
                      />
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
                      <img
                        src="./template/images/layout01-img02.jpg"
                        alt="img"
                      />
                    </picture>
                  </div>
                </div>
                <div className="layout01__content">
                  <div className="layout01__content-wrapper">
                    <div className="section-title text-left">
                      <div className="section-title__01">About Us</div>
                      <div className="section-title__02">
                        Welcome to Popular Electrical & Security Services
                      </div>
                    </div>
                    <p>
                      All our services aim for 100% satisfaction. At Popular
                      Electrical & Security Services, we strive to deliver
                      top-notch electrical and security solutions, enhancing
                      safety, efficiency, and convenience. Committed to
                      excellence, we leverage expertise and innovation to exceed
                      customer expectations.
                    </p>
                    <ul className="tt-list01 tt-list-top">
                      <li>Cutting-Edge Automation Integration</li>
                      <li>Advanced Cable Laying Techniques:</li>
                      <li>Precision Meter Installations</li>
                      <li>Comprehensive CCTV Camera Installations</li>
                    </ul>
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
                        alt="img"
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
                        alt="img"
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
                        alt="img"
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
            </div>
          </div>
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
                      Empower your electrical systems with confidence. Reach out
                      to Popular Electrical & Security Services today for a
                      complimentary service estimate and discover the difference
                      in our repair and service options!
                    </p>
                    <div className="tt-row-btn">
                      <a
                        className="tt-btn btn__color01"
                        href="tel:+917972144809"
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
                        Get a Qoute
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
                  <a href="https://www.instagram.com/popular4u.in?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==" target="_blank">
                    @popular4u.in
                  </a>
                </div>
                <div className="section-title__02">Our Projects</div>
              </div>

              <div
                id="filter-layout"
                className="row justify-content-center gallery-innerlayout-wrapper js-wrapper-gallery"
              >
                <div className="col-4 col-md-3 col-custom-item5 residences show all">
                  <a
                    href="./template/images/Projects/proj1.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj1.jpg"
                      alt="gallery_img"
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 residences show all">
                  <a
                    href="./template/images/Projects/proj2.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj2.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 residences show all">
                  <a
                    href="./template/images/Projects/proj3.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj3.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 industrial_objects show all">
                  <a
                    href="./template/images/Projects/proj4.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj4.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 offices show all">
                  <a
                    href="./template/images/Projects/proj5.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj5.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 industrial_objects show all">
                  <a
                    href="./template/images/Projects/proj6.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj6.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 retail_objects show all">
                  <a
                    href="./template/images/Projects/proj7.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj7.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 offices show all">
                  <a
                    href="./template/images/Projects/proj8.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj8.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 retail_objects show all">
                  <a
                    href="./template/images/Projects/proj9.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj9.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="col-4 col-md-3 col-custom-item5 retail_objects show all">
                  <a
                    href="./template/images/Projects/proj10.jpg"
                    className="tt-gallery"
                  >
                    <div className="gallery__icon" />
                    <img
                      className="lazyload"
                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                      data-src="./template/images/Projects/proj10.jpg"
                      alt
                    />
                  </a>
                </div>
             
              </div>
            </div>
          </div>
       
          <div className="section-indent">
            <div className="container">
              <div className="section-title max-width-01">
          
                <div className="section-title__02">Our Servives</div>
                <div className="section-title__03">
                Welcome to Popular Electrical & Security Services, your trusted partner for comprehensive electrical and security solutions.
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
                       Residential Services:
                      </div>
                      <ul className="tt-layout02__list">
                        <li>Indoor/outdoor Lighting Installation</li>
                        <li>Appliance &amp; Fixture Installation</li>
                        <li>Cable Laying Service</li>
                        <li>New &amp; Replacement Wiring</li>
                        <li>Single Phase & 3 Phase Meter Works</li>
                      </ul>
                      
                    </div>
                  </div>
                  <div className="item col-md-4">
                    <div className="tt-layout02">
                      <div className="tt-layout02__icon">
                        <span className="icon-plug-1" />
                      </div>
                      <div className="tt-layout02__title">
                        Security Service
                      </div>
                      <ul className="tt-layout02__list">
                        <li>CCTV Camera Installation </li>
                        <li>CCTV Camera Services </li>
                        <li>Security Alarm Systems</li>
                        <li>Home Security Automation</li>
                        <li>Business Automation</li>
                      </ul>
                      
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
                        <li>Industrial Wiring & Fitting</li>
                        <li>Annual electrical inspection</li>
                        <li>Retrofits and Upgrades</li>
                        <li>Cable Laying Service</li>
                        <li>Critical Installations</li>
                      </ul>
                      
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
                      </ul>
                      
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
                        <a href="#">
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
                        <a href="#">
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
                            alt="image"
                          />
                        </div>
                        <div className="tt-news-obj__wrapper">
                          <div className="tt-news-obj__data">6 May, 2020</div>
                          <div className="tt-news-obj__title">
                            <a href="#">
                              How to Get Electricity to a Kitchen Island
                            </a>
                          </div>
                          <p>
                            Do you need an expert solution to get electricity to
                            a kitchen island? You may be feeling overwhelmed...
                          </p>
                          <div className="row-btn">
                            <a href="#" className="tt-link">
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
                            alt="image"
                          />
                        </div>
                        <div className="tt-news-obj__wrapper">
                          <div className="tt-news-obj__data">8 May, 2020</div>
                          <div className="tt-news-obj__title">
                            <a href="#">
                              The Best Way to Clean Light Fixtures
                            </a>
                          </div>
                          <p>
                            While cleaning light fixtures may not be at the top
                            of your to-do list, it’s one of those simple
                            tasks...
                          </p>
                          <div className="row-btn">
                            <a href="#" className="tt-link">
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
         
        </main>
      </>
    );
  }
}

export default Home;
