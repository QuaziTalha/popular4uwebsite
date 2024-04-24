export default function Product() {
  return (
    <div className="product">
      <main id="tt-pageContent">
        <div className="section-indent">
          <div className="container container-lg-fluid">
            <div className="row">
              <div
                className="col-md-4 col-lg-3 col-xl-3 leftColumn tt-aside"
                id="aside-js"
              >
                <div className="tt-block-aside tt-block-aside__shadow">
                  <h3 className="tt-aside-title">Categories</h3>
                  <div className="tt-aside-content">
                    <nav className="nav-categories">
                      <ul>
                        <li>
                          <a href="#">Generators</a>
                        </li>
                        <li>
                          <a href="#">Electronics</a>
                        </li>
                        <li>
                          <a href="#">Extension Cords</a>
                        </li>
                        <li>
                          <a href="#">Batteries &amp; Chargers</a>
                        </li>
                        <li>
                          <a href="#">Electrical Tape &amp; Tools</a>
                        </li>
                        <li>
                          <a href="#">Dimmers &amp; Receptacles</a>
                        </li>
                        <li>
                          <a href="#">Wall Plates</a>
                        </li>
                        <li>
                          <a href="#">Adapters &amp; Timers</a>
                        </li>
                        <li>
                          <a href="#">Door Chimes &amp; Buttons</a>
                        </li>
                        <li>
                          <a href="#">Plugs &amp; Connectors</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="tt-block-aside tt-block-aside__shadow">
                  <h3 className="tt-aside-title">Search</h3>
                  <div className="tt-aside-content">
                    <form className="form-default">
                      <div className="tt-aside-search">
                        <input type="text" placeholder="Product search" />
                        <a href="#" className="tt-btn-icon icon-search" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="tt-block-aside tt-block-aside__shadow">
                  <h3 className="tt-aside-title">Price</h3>
                  <div className="tt-aside-content">
                    <div className="tt-slider-price">
                      <div id="slider-snap" />
                      <div className="slider-value-row">
                        <div className="tt-title">Price:</div>$
                        <div
                          id="slider-snap-value-lower"
                          className="slider-value"
                        />
                        $
                        <div
                          id="slider-snap-value-upper"
                          className="slider-value"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tt-block-aside tt-block-aside__shadow">
                  <h3 className="tt-aside-title">Popular</h3>
                  <div className="tt-aside-content">
                    <div className="tt-popular">
                      <div className="tt-item">
                        <div className="tt-item__img">
                          <img
                            src="./template/images/product/product-01.jpg"
                            alt="true"
                          />
                        </div>
                        <div className="tt-item__layout">
                          <div className="tt-title">
                            <a href="#">
                              Woods WiOn 15 amps Receptacle and USB Charger
                            </a>
                          </div>
                          <div className="tt-value">
                            <a href="#" className="tt-icon-btn">
                              <i className="icon-808584" />
                            </a>
                            <div className="tt-price">$41.99</div>
                          </div>
                        </div>
                      </div>
                      <div className="tt-item">
                        <div className="tt-item__img">
                          <img
                            src="./template/images/product/product-02.jpg"
                            alt="true"
                          />
                        </div>
                        <div className="tt-item__layout">
                          <div className="tt-title">
                            <a href="#">
                              Powerboss 3500 watts Gasoline Portable Generator
                            </a>
                          </div>
                          <div className="tt-value">
                            <a href="#" className="tt-icon-btn">
                              <i className="icon-808584" />
                            </a>
                            <div className="tt-price">$329.99</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-9 col-xl-9">
                <div className="section-title text-left">
                  <div className="section-title__01">Best Quality Parts</div>
                  <div className="section-title__02">Electrical Products</div>
                  <div className="section-title__03">
                    We offer complete lines of Professional Manufacturer
                    Lighting &amp; Electrical products at Wholesale Prices. We
                    make it our job to provide the best price and most
                    gratifying shopping experience.
                  </div>
                </div>
                <div className="tt-filters-options">
                  <div className="row justify-content-between">
                    <div className="col-auto ml-right">
                      <div
                        className="tt-filters-toggle icon-icon-filter"
                        id="js-filters-toggle"
                      />
                      <div className="tt-title">Showing 1–9 of 18 results</div>
                      <div className="tt-filters-select">
                        <div className="custom-select">
                          <select>
                            <option>Default Sorting</option>
                            <option>Default Sorting 02</option>
                            <option>Default Sorting 03</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="tt-pagination-filter">
                        <div className="tt-pagination-filter__title">
                          Pages:
                        </div>
                        <ul className="tt-pagination-filter__list">
                          <li className="active">
                            <a href="#">1</a>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                        </ul>
                        <a href="#" className="tt-pagination-filter__btn">
                          <i className="icon-arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tt-product-listing" className="tt-product-listing row">
                  <div className="col-6 col-md-4 tt-col-item">
                    <div className="tt-product">
                      <div className="tt-product__img">
                        <a href="shop-item.html">
                          <img
                            src="./template/images/product/product-01.jpg"
                            alt="true"
                          />
                        </a>
                      </div>
                      <div className="tt-product__description">
                        <h2 className="tt-product__title">
                          <a href="shop-item.html">
                            Woods WiOn 15 amps Receptacle and USB Charger
                          </a>
                        </h2>
                        <div className="tt-price">$41.99</div>
                        <div className="tt-row-btn">
                          <a href="#" className="tt-btn-addtocart">
                            <i className="tt-icon icon-808584" /> Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 tt-col-item">
                    <div className="tt-product">
                      <div className="tt-product__img">
                        <a href="shop-item.html">
                          <img
                            src="./template/images/product/product-02.jpg"
                            alt="true"
                          />
                        </a>
                      </div>
                      <div className="tt-product__description">
                        <h2 className="tt-product__title">
                          <a href="shop-item.html">
                            Powerboss 3500 watts Gasoline Portable Generator
                          </a>
                        </h2>
                        <div className="tt-price">
                          <span className="new-price">$329.99</span>
                          <span className="old-price">$342.32</span>
                        </div>
                        <div className="tt-row-btn">
                          <a href="#" className="tt-btn-addtocart">
                            <i className="tt-icon icon-808584" /> Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 tt-col-item">
                    <div className="tt-product">
                      <div className="tt-product__img">
                        <a href="shop-item.html">
                          <img
                            src="./template/images/product/product-03.jpg"
                            alt="true"
                          />
                        </a>
                      </div>
                      <div className="tt-product__description">
                        <h2 className="tt-product__title">
                          <a href="shop-item.html">
                            Eveready® AAA Super Battery
                          </a>
                        </h2>
                        <div className="tt-rating">
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                        </div>
                        <div className="tt-price">$86.16</div>
                        <div className="tt-row-btn">
                          <a href="#" className="tt-btn-addtocart">
                            <i className="tt-icon icon-808584" /> Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 tt-col-item">
                    <div className="tt-product">
                      <div className="tt-product__img">
                        <a href="shop-item.html">
                          <img
                            src="./template/images/product/product-04.jpg"
                            alt="true"
                          />
                        </a>
                      </div>
                      <div className="tt-product__description">
                        <h2 className="tt-product__title">
                          <a href="shop-item.html">Combination Toggle Switch</a>
                        </h2>
                        <div className="tt-rating">
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                        </div>
                        <div className="tt-price">$15.99</div>
                        <div className="tt-row-btn">
                          <a href="#" className="tt-btn-addtocart">
                            <i className="tt-icon icon-808584" /> Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 tt-col-item">
                    <div className="tt-product">
                      <div className="tt-product__img">
                        <a href="shop-item.html">
                          <img
                            src="./template/images/product/product-05.jpg"
                            alt="true"
                          />
                        </a>
                      </div>
                      <div className="tt-product__description">
                        <h2 className="tt-product__title">
                          <a href="shop-item.html">
                            GE Bluetooth Outdoor Smart Switch Timer
                          </a>
                        </h2>
                        <div className="tt-price">$49.99</div>
                        <div className="tt-row-btn">
                          <a href="#" className="tt-btn-addtocart">
                            <i className="tt-icon icon-808584" /> Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 tt-col-item">
                    <div className="tt-product">
                      <div className="tt-product__img">
                        <a href="shop-item.html">
                          <img
                            src="./template/images/product/product-06.jpg"
                            alt="true"
                          />
                        </a>
                      </div>
                      <div className="tt-product__description">
                        <h2 className="tt-product__title">
                          <a href="shop-item.html">Rotary Fan Speed Control</a>
                        </h2>
                        <div className="tt-rating">
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                          <i className="icon-favorite" />
                        </div>
                        <div className="tt-price">$23.99</div>
                        <div className="tt-row-btn">
                          <a href="#" className="tt-btn-addtocart">
                            <i className="tt-icon icon-808584" /> Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 tt-col-item">
                    <div className="tt-product">
                      <div className="tt-product__img">
                        <a href="shop-item.html">
                          <img
                            src="./template/images/product/product-07.jpg"
                            alt="true"
                          />
                        </a>
                      </div>
                      <div className="tt-product__description">
                        <h2 className="tt-product__title">
                          <a href="shop-item.html">
                            Intermatic Outdoor Portable Timer
                          </a>
                        </h2>
                        <div className="tt-price">
                          <span className="new-price">$30.99</span>
                          <span className="old-price">$32.32</span>
                        </div>
                        <div className="tt-row-btn">
                          <a href="#" className="tt-btn-addtocart">
                            <i className="tt-icon icon-808584" /> Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 tt-col-item">
                    <div className="tt-product">
                      <div className="tt-product__img">
                        <a href="shop-item.html">
                          <img
                            src="./template/images/product/product-08.jpg"
                            alt="true"
                          />
                        </a>
                      </div>
                      <div className="tt-product__description">
                        <h2 className="tt-product__title">
                          <a href="shop-item.html">
                            Ace® 12/3 SPT-3 9ft Major Appliance Cord
                          </a>
                        </h2>
                        <div className="tt-price">$16.99</div>
                        <div className="tt-row-btn">
                          <a href="#" className="tt-btn-addtocart">
                            <i className="tt-icon icon-808584" /> Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 tt-col-item">
                    <div className="tt-product">
                      <div className="tt-product__img">
                        <a href="shop-item.html">
                          <img
                            src="./template/images/product/product-09.jpg"
                            alt="true"
                          />
                        </a>
                      </div>
                      <div className="tt-product__description">
                        <h2 className="tt-product__title">
                          <a href="shop-item.html">
                            General Purpose Indoor Extension Cord in Various
                            Sizes
                          </a>
                        </h2>
                        <div className="tt-price">$34.99</div>
                        <div className="tt-row-btn">
                          <a href="#" className="tt-btn-addtocart">
                            <i className="tt-icon icon-808584" /> Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tt-pagination">
                  <ul>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">8</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
