function Footer() {
  return (
    <>
      <section className="social-network section-padding">
        <div className="container">
          <div className="center-content">
            <h2 className="section-title">Follow Us</h2>
            <span className="underline center"></span>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <ul>
            <li>
              <a className="facebook" href="#" target="_blank">
                <span>
                  <i className="fa fa-facebook-f"></i>
                </span>
              </a>
            </li>
            <li>
              <a className="twitter" href="#" target="_blank">
                <span>
                  <i className="fa fa-twitter"></i>
                </span>
              </a>
            </li>
            <li>
              <a className="google" href="#" target="_blank">
                <span>
                  <i className="fa fa-google-plus"></i>
                </span>
              </a>
            </li>
            <li>
              <a className="rss" href="#" target="_blank">
                <span>
                  <i className="fa fa-rss"></i>
                </span>
              </a>
            </li>
            <li>
              <a className="linkedin" href="#" target="_blank">
                <span>
                  <i className="fa fa-linkedin"></i>
                </span>
              </a>
            </li>
            <li>
              <a className="youtube" href="#" target="_blank">
                <span>
                  <i className="fa fa-youtube"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          <div id="footer-widgets">
            <div className="row">
              <div className="col-md-4 col-sm-6 widget-container">
                <div id="text-2" className="widget widget_text">
                  <h3 className="footer-widget-title">About Book Exchange</h3>
                  <span className="underline left"></span>
                  <div className="textwidget">Books lover community.</div>
                  <address>
                    <div className="info">
                      <i className="fa fa-location-arrow"></i>
                      <span>Bashundhara r/a, Dhaka.</span>
                    </div>
                    <div className="info">
                      <i className="fa fa-envelope"></i>
                      <span>
                        <a href="mailto:support@bookexchange.com">
                          support@bookexchange.com
                        </a>
                      </span>
                    </div>
                    <div className="info">
                      <i className="fa fa-phone"></i>
                      <span>
                        <a href="tel:01935-723484">+88 01935-723484</a>
                      </span>
                    </div>
                  </address>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 widget-container">
                <div id="nav_menu-2" className="widget widget_nav_menu">
                  <h3 className="footer-widget-title">Quick Links</h3>
                  <span className="underline left"></span>
                  <div className="menu-quick-links-container">
                    <ul id="menu-quick-links" className="menu">
                      <li>
                        <a href="#">Library News</a>
                      </li>
                      <li>
                        <a href="#">History</a>
                      </li>
                      <li>
                        <a href="#">Meet Our Staff</a>
                      </li>
                      <li>
                        <a href="#">Board of Trustees</a>
                      </li>
                      <li>
                        <a href="#">Budget</a>
                      </li>
                      <li>
                        <a href="#">Annual Report</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="clearfix hidden-lg hidden-md hidden-xs tablet-margin-bottom"></div>
              <div className="col-md-2 col-sm-6 widget-container">
                <div id="text-4" className="widget widget_text">
                  <h3 className="footer-widget-title">Timing</h3>
                  <span className="underline left"></span>
                  <div className="timming-text-widget">
                    <time>Mon - Thu: 9 am - 9 pm</time>
                    <time>Fri: 9 am - 6 pm</time>
                    <time>Sat: 9 am - 5 pm</time>
                    <time>Sun: 1 pm - 6 pm</time>
                    <ul>
                      <li>
                        <a href="#">Closings</a>
                      </li>
                      <li>
                        <a href="#">Branches</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 widget-container">
                <div className="widget twitter-widget">
                  <h3 className="footer-widget-title">Latest Tweets</h3>
                  <span className="underline left"></span>
                  <div id="twitter-feed">
                    <ul>
                      <li>
                        <p>
                          <a href="#">@TemplateLibraria</a> Sed ut perspiciatis
                          unde omnis iste natus error sit voluptatem.{" "}
                          <a href="#">template-libraria.com</a>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">@TemplateLibraria</a> Sed ut perspiciatis
                          unde omnis iste natus error sit voluptatem.{" "}
                          <a href="#">template-libraria.com</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <div className="container">
            <div className="row">
              <div className="footer-text col-md-3">
                <p>
                  <a target="_blank" href="https://www.templateshub.net">
                    Templates Hub
                  </a>
                </p>
              </div>
              <div className="col-md-9 pull-right">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="books-media-list-view.html">Book Exchange</a>
                  </li>
                  <li>
                    <a href="news-events-list-view.html">News &amp; Events</a>
                  </li>
                  <li>
                    <a href="#">Kids &amp; Teens</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
