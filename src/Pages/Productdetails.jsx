import { Link } from "react-router-dom";
export default function Productdetails() {
  return (
    <main id="tt-pageContent">
      <div className="section-indent">
        {/* mobile product slider  */}
        <div className="tt-mobile-product-layout d-block d-sm-none">
          <div
            className="tt-mobile-product-slider slick-type01"
            id="mobile-product"
          >
            <div>
              <img src="./template/images/product/product-10.jpg" alt="true" />
            </div>
            <div>
              <img
                src="./template/images/product/product-10-02.jpg"
                alt="true"
              />
            </div>
            <div>
              <img
                src="./template/images/product/product-10-03.jpg"
                alt="true"
              />
            </div>
            <div>
              <img
                src="./template/images/product/product-10-04.jpg"
                alt="true"
              />
            </div>
            <div>
              <img
                src="./template/images/product/product-10-05.jpg"
                alt="true"
              />
            </div>
          </div>
        </div>
        {/* /mobile product slider  */}
        <div className="container container-lg-fluid">
          <div className="row">
            <div className="col-5 col-lg-5 d-none d-sm-block">
              <div className="tt-product-single-img">
                <div>
                  <img
                    className="zoom-product"
                    src="./template/images/product/product-10.jpg"
                    data-zoom-image="./template/images/product/product-10.jpg"
                    alt="true"
                  />
                </div>
              </div>
              <div className="product-images-carousel">
                <ul id="smallGallery" className="arrow-location-02">
                  <li>
                    <Link
                      className="zoomGalleryActive"
                      href="#"
                      data-image="./template/images/product/product-10.jpg"
                      data-zoom-image="./template/images/product/product-10.jpg"
                    >
                      <img
                        src="./template/images/product/product-10.jpg"
                        alt="true"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      data-image="./template/images/product/product-10-02.jpg"
                      data-zoom-image="./template/images/product/product-10-02.jpg"
                    >
                      <img
                        src="./template/images/product/product-10-02.jpg"
                        alt="true"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      data-image="./template/images/product/product-10-03.jpg"
                      data-zoom-image="./template/images/product/product-10-03.jpg"
                    >
                      <img
                        src="./template/images/product/product-10-03.jpg"
                        alt="true"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      data-image="./template/images/product/product-10-04.jpg"
                      data-zoom-image="./template/images/product/product-10-04.jpg"
                    >
                      <img
                        src="./template/images/product/product-10-04.jpg"
                        alt="true"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      data-image="./template/images/product/product-10-05.jpg"
                      data-zoom-image="./template/images/product/product-10-05.jpg"
                    >
                      <img
                        src="./template/images/product/product-10-05.jpg"
                        alt="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-7 col-lg-7">
              <div className="product-single-info">
                <div className="tt-tag">Electrical Tape &amp; Tools</div>
                <h1 className="tt-title">
                  Blackt Electrotech: 230 Volt Digital Programmable Timer
                  Electronic Timer (24x7): Energy Saving Socket
                </h1>
                <div className="tt-add-info">
                  <ul>
                    <li>
                      Availability: <span>In Stock</span>
                    </li>
                  </ul>
                </div>
                <div className="tt-price">$329.99</div>
                <div className="tt-data">
                  <div className="tt-item">
                    <div className="tt-rating">
                      <i className="icon-favorite" />
                      <i className="icon-favorite" />
                      <i className="icon-favorite" />
                      <i className="icon-favorite" />
                      <i className="icon-favorite" />
                    </div>
                  </div>
                  <div className="tt-item">
                    <Link className="tt-link-simple" href="#">
                      2 customer reviews
                    </Link>
                  </div>
                </div>
                <div className="tt-description">
                  We offer complete lines of Professional Manufacturer Lighting
                  &amp; Electrical products at Wholesale Prices. We make it our
                  job to provide the best price and most gratifying shopping
                  experience.
                </div>
                <div className="tt-row">
                  <div className="tt-col">
                    <div className="tt-input-counter style-01">
                      <span className="minus-btn">-</span>
                      <input type="text" defaultValue={1} size={5} />
                      <span className="plus-btn">+</span>
                    </div>
                  </div>
                  <div className="tt-col">
                    <Link href="#" className="tt-btn tt-btn__wide btn__color01">
                      <span className="icon-808584" />
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-indent">
        <div className="container container-lg-fluid">
          <div className="tt-tab-wrapper">
            <ul className="nav nav-tabs tt-tabs-default" role="tablist">
              <li className="nav-item">
                <Link
                  className="nav-link show active"
                  data-toggle="tab"
                  href="#tt-tab-01"
                  role="tab"
                >
                  {" "}
                  Description
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  href="#tt-tab-02"
                  role="tab"
                >
                  {" "}
                  Reviews (2)
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane active fade"
                id="tt-tab-01"
                role="tabpanel"
              >
                We offer complete lines of Professional Manufacturer Lighting
                &amp; Electrical products at Wholesale Prices. We make it our
                job to provide the best price and most gratifying shopping
                experience.
                <ul className="tt-list01 tt-list-top">
                  <li>1000 Watt / 10 Amps 240 V AC</li>
                  <li>Min Setting time: 1 Min</li>
                  <li>Operating Temperature: -10 to + 40 Deg C</li>
                  <li>Accourancy: +/-1 Min per month</li>
                  <li>24 hours / 7 days a week programmable</li>
                  <li>Built-in battery for backup when power failure</li>
                  <li>
                    Repeat programs with 16 on/off settings, and setting on/off
                    manually
                  </li>
                  <li>Battery Backup: Ni-Mh 1.2V 80mAH</li>
                  <li>Current Cunsumption: 0.015MA</li>
                  <li>Socket Type: Indian Standard</li>
                </ul>
              </div>
              <div className="tab-pane" id="tt-tab-02" role="tabpanel">
                <div className="tt-tabs-reviews">
                  <h5 className="tt-title">Customer Reviews</h5>
                  <form className="form-default">
                    <div className="tt-rating">
                      <i className="icon-favorite" />
                      <i className="icon-favorite" />
                      <i className="icon-favorite" />
                      <i className="icon-favorite" />
                      <i className="icon-favorite" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="review-name" className="control-label">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="review-name"
                        placeholder="Your Name *"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="review-email" className="control-label">
                        Your e-mail address *
                      </label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="review-email"
                        placeholder="Your e-mail address *"
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Rating</label>
                      <div className="tt-rating">
                        <i className="icon-favorite" />
                        <i className="icon-favorite" />
                        <i className="icon-favorite" />
                        <i className="icon-favorite" />
                        <i className="icon-favorite" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label">Review Title</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="review-email02"
                        placeholder="Give your review a title"
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Body of Review</label>
                      <textarea
                        className="form-control"
                        name="textarea"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <button className="tt-btn btn__color01" type="submit">
                        <span className="icon-lightning" />
                        Send Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-indent">
        <div className="container container-lg-fluid">
          <div className="section-title">
            <div className="section-title__02">Similar Products</div>
          </div>
          <div
            className="carusel-product js-carusel-product slick-type01"
            data-slick='{
  "slidesToShow": 4,
  "slidesToScroll": 1,
  "autoplaySpeed": 3500,
  "responsive": [
    {
      "breakpoint": 767,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 1
      }
    },
    {
      "breakpoint": 576,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1
      }
    }
  ]
    }'
          >
            <div className="item">
              <div className="tt-product">
                <div className="tt-product__img">
                  <Link href="shop-item.html">
                    <img
                      src="./template/images/product/product-01.jpg"
                      alt="true"
                    />
                  </Link>
                </div>
                <div className="tt-product__description">
                  <h2 className="tt-product__title">
                    <Link href="shop-item.html">
                      Woods WiOn 15 amps Receptacle and USB Charger
                    </Link>
                  </h2>
                  <div className="tt-price">$41.99</div>
                  <div className="tt-row-btn">
                    <Link href="#" className="tt-btn-addtocart">
                      <i className="tt-icon icon-808584" /> Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="tt-product">
                <div className="tt-product__img">
                  <Link href="shop-item.html">
                    <img
                      src="./template/images/product/product-02.jpg"
                      alt="true"
                    />
                  </Link>
                </div>
                <div className="tt-product__description">
                  <h2 className="tt-product__title">
                    <Link href="shop-item.html">
                      Powerboss 3500 watts Gasoline Portable Generator
                    </Link>
                  </h2>
                  <div className="tt-price">
                    <span className="new-price">$329.99</span>
                    <span className="old-price">$342.32</span>
                  </div>
                  <div className="tt-row-btn">
                    <Link href="#" className="tt-btn-addtocart">
                      <i className="tt-icon icon-808584" /> Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="tt-product">
                <div className="tt-product__img">
                  <Link href="shop-item.html">
                    <img
                      src="./template/images/product/product-03.jpg"
                      alt="true"
                    />
                  </Link>
                </div>
                <div className="tt-product__description">
                  <h2 className="tt-product__title">
                    <Link href="shop-item.html">
                      Eveready® AAA Super Battery
                    </Link>
                  </h2>
                  <div className="tt-rating">
                    <i className="icon-favorite" />{" "}
                    <i className="icon-favorite" />
                    <i className="icon-favorite" />{" "}
                    <i className="icon-favorite" />
                    <i className="icon-favorite" />
                  </div>
                  <div className="tt-price">$86.16</div>
                  <div className="tt-row-btn">
                    <Link href="#" className="tt-btn-addtocart">
                      <i className="tt-icon icon-808584" /> Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="tt-product">
                <div className="tt-product__img">
                  <Link href="shop-item.html">
                    <img
                      src="./template/images/product/product-05.jpg"
                      alt="true"
                    />
                  </Link>
                </div>
                <div className="tt-product__description">
                  <h2 className="tt-product__title">
                    <Link href="shop-item.html">
                      GE Bluetooth Outdoor Smart Switch Timer
                    </Link>
                  </h2>
                  <div className="tt-price">$49.99</div>
                  <div className="tt-row-btn">
                    <Link href="#" className="tt-btn-addtocart">
                      <i className="tt-icon icon-808584" /> Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="tt-product">
                <div className="tt-product__img">
                  <Link href="shop-item.html">
                    <img
                      src="./template/images/product/product-06.jpg"
                      alt="true"
                    />
                  </Link>
                </div>
                <div className="tt-product__description">
                  <h2 className="tt-product__title">
                    <Link href="shop-item.html">Rotary Fan Speed Control</Link>
                  </h2>
                  <div className="tt-rating">
                    <i className="icon-favorite" />{" "}
                    <i className="icon-favorite" />
                    <i className="icon-favorite" />{" "}
                    <i className="icon-favorite" />
                    <i className="icon-favorite" />
                  </div>
                  <div className="tt-price">$23.99</div>
                  <div className="tt-row-btn">
                    <Link href="#" className="tt-btn-addtocart">
                      <i className="tt-icon icon-808584" /> Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
