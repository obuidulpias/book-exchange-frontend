function Contact() {
  return (
    <>
      <section className="page-banner services-banner">
        <div className="container">
          <div className="banner-header">
            <h2>Contact Us</h2>
            <span className="underline center"></span>
            <p className="lead">Books lover</p>
          </div>
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
      <div id="content" className="site-content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <div className="contact-main">
              <div className="contact-us">
                <div className="container">
                  <div className="contact-location">
                    <div className="flipcard">
                      <div className="front">
                        <div className="top-info">
                          <span>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>{" "}
                            Office Address
                          </span>
                        </div>
                        <div className="bottom-info">
                          <span className="top-arrow"></span>
                          <ul>
                            <li>Bashundhara R/A, Dhaka. </li>
                            <li>Bangladesh</li>
                            <li>PO Box 16122</li>
                          </ul>
                        </div>
                      </div>
                      <div className="back">
                        <div className="bottom-info orange-bg">
                          <span className="bottom-arrow"></span>
                          <ul>
                            <li>Bashundhara R/A, Dhaka. </li>
                            <li>Bangladesh</li>
                            <li>PO Box 16122</li>
                          </ul>
                        </div>
                        <div className="top-info dark-bg">
                          <span>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>{" "}
                            Office Address
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flipcard">
                      <div className="front">
                        <div className="top-info">
                          <span>
                            <i className="fa fa-fax" aria-hidden="true"></i>{" "}
                            Phone and Fax
                          </span>
                        </div>
                        <div className="bottom-info">
                          <span className="top-arrow"></span>
                          <ul>
                            <li>
                              <a href="tel:01935-723484">
                                Local: +88 01935-723484
                              </a>
                            </li>
                            <li>
                              <a href="tel:01935-723484">
                                Local: +88 01935-723484
                              </a>
                            </li>
                            <li>
                              <a href="fax:(001)-254-7359">
                                Fax: (001)-254-7359
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="back">
                        <div className="bottom-info orange-bg">
                          <span className="bottom-arrow"></span>
                          <ul>
                            <li>
                              <a href="tel:+123-456-7890">
                                Local: +88 01935-723484
                              </a>
                            </li>
                            <li>
                              <a href="tel:+123-456-7890">
                                Local: +88 01935-723484
                              </a>
                            </li>
                            <li>
                              <a href="fax:(001)-254-7359">
                                Fax: (001)-254-7359
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="top-info dark-bg">
                          <span>
                            <i className="fa fa-fax" aria-hidden="true"></i>{" "}
                            Phone and Fax
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flipcard">
                      <div className="front">
                        <div className="top-info">
                          <span>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>{" "}
                            Email Address
                          </span>
                        </div>
                        <div className="bottom-info">
                          <span className="top-arrow"></span>
                          <ul>
                            <li>www.bookexchange.com</li>
                            <li>support@bookexchange.com</li>
                            <li>info@bookexchange.com</li>
                          </ul>
                        </div>
                      </div>
                      <div className="back">
                        <div className="bottom-info orange-bg">
                          <span className="bottom-arrow"></span>
                          <ul>
                            <li>
                              <a href="http://www.bookexchange.com/">
                                www.libraria.com{" "}
                              </a>
                            </li>
                            <li>
                              <a href="mailto:support@bookexchange.com">
                                support@bookexchange.com
                              </a>
                            </li>
                            <li>
                              <a href="mailto:info@bookexchange.com">
                                info@bookexchange.com
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="top-info dark-bg">
                          <span>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>{" "}
                            Email Address
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="row">
                    <div className="contact-area">
                      <div className="container">
                        <div className="col-md-5 col-md-offset-1 border-gray-left">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="contact-map bg-light margin-left">
                                <div className="company-map" id="map"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5 border-gray-right">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="contact-form bg-light margin-right">
                                <h2>Send us a message</h2>
                                <span className="underline left"></span>
                                <div className="contact-fields">
                                  <form
                                    id="contact"
                                    name="contact"
                                    action="http://libraria.demo.presstigers.com/contact.html"
                                    method="post"
                                  >
                                    <div className="row">
                                      <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="First Name"
                                            name="first-name"
                                            id="first-name"
                                            size="30"
                                            value=""
                                            aria-required="true"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Last Name"
                                            name="last-name"
                                            id="last-name"
                                            size="30"
                                            value=""
                                            aria-required="true"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            type="email"
                                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                            placeholder="Email"
                                            name="email"
                                            id="email"
                                            size="30"
                                            value=""
                                            aria-required="true"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Phone Number"
                                            name="phone"
                                            id="phone"
                                            size="30"
                                            value=""
                                            aria-required="true"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-sm-12">
                                        <div className="form-group">
                                          <textarea
                                            className="form-control"
                                            placeholder="Your message"
                                            id="message"
                                            aria-required="true"
                                          ></textarea>
                                          <div className="clearfix"></div>
                                        </div>
                                      </div>
                                      <div className="col-sm-12">
                                        <div className="form-group form-submit">
                                          <input
                                            className="btn btn-default"
                                            id="submit-contact-form"
                                            type="button"
                                            name="submit"
                                            value="Send Message"
                                          />
                                        </div>
                                      </div>
                                      <div id="success">
                                        <span>
                                          Your message was sent successfully!
                                          Our team will contact you soon.
                                        </span>
                                      </div>

                                      <div id="error">
                                        <span>
                                          Something went wrong, try refreshing
                                          and submitting the form again.
                                        </span>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
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
        </div>
      </div>
    </>
  );
}
export default Contact;
