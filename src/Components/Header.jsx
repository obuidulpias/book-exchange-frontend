function Header() {
  return (
    <>
      <header id="header-v1" className="navbar-wrapper sticky">
        <div className="container">
          <div className="row ">
            <nav className="navbar navbar-default ">
              <div className="row">
                <div className="col-md-3">
                  <div className="navbar-header">
                    <div className="navbar-brand">
                      <h1>
                        <a href="/">
                          <img
                            src="images/libraria-logo-v1.png"
                            alt="BOOK EXCHANGE"
                          />
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="header-topbar hidden-sm hidden-xs">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="topbar-info">
                          <a href="tel:+88 01935-723484">
                            <i className="fa fa-phone"></i>+88 01935-723484
                          </a>
                          <span>/</span>
                          <a href="mailto:support@bookexchange.com">
                            <i className="fa fa-envelope"></i>
                            support@bookexchange.com
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="topbar-links">
                          <a href="/login">
                            <i className="fa fa-lock"></i>Login / Register
                          </a>
                          <span>|</span>
                          <a href="/profile">
                            <i className="fa fa-user"></i>Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-collapse hidden-sm hidden-xs sticky">
                    <ul className="nav navbar-nav">
                      <li className="dropdown active">
                        <a
                          data-toggle="dropdown"
                          className="dropdown-toggle disabled"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          data-toggle="dropdown"
                          className="dropdown-toggle disabled"
                        >
                          Book Exchange
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="books-media-list-view.html">
                              Book Register
                            </a>
                          </li>
                          <li>
                            <a href="books-media-gird-view-v1.html">
                              Offer Post
                            </a>
                          </li>
                          <li>
                            <a href="books-media-gird-view-v2.html">
                              Send Request
                            </a>
                          </li>
                          <li>
                            <a href="books-media-detail-v1.html">
                              Received Request
                            </a>
                          </li>
                          <li>
                            <a href="books-media-detail-v2.html">
                              Exchanged Books
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          data-toggle="dropdown"
                          className="dropdown-toggle disabled"
                          href="news-events-list-view.html"
                        >
                          News &amp; Events
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="news-events-list-view.html">
                              News &amp; Events List View
                            </a>
                          </li>
                          <li>
                            <a href="news-events-detail.html">
                              News &amp; Events Detail
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a
                          data-toggle="dropdown"
                          className="dropdown-toggle disabled"
                        >
                          Users
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/login">Login / Register</a>
                          </li>
                          <li>
                            <a href="/profile">Profile</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mobile-menu hidden-lg hidden-md">
                <a href="#mobile-menu">
                  <i className="fa fa-navicon"></i>
                </a>
                <div id="mobile-menu">
                  <ul>
                    <li className="mobile-title">
                      <h4>Navigation</h4>
                      <a href="#" className="close"></a>
                    </li>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="books-media-list-view.html">Book Exchange</a>
                      <ul>
                        <li>
                          <a href="books-media-list-view.html">Book Register</a>
                        </li>
                        <li>
                          <a href="books-media-gird-view-v1.html">Offer Post</a>
                        </li>
                        <li>
                          <a href="books-media-gird-view-v2.html">
                            Send Request
                          </a>
                        </li>
                        <li>
                          <a href="books-media-detail-v1.html">
                            Received Request
                          </a>
                        </li>
                        <li>
                          <a href="books-media-detail-v2.html">
                            Exchanged Books
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="news-events-list-view.html">News &amp; Events</a>
                      <ul>
                        <li>
                          <a href="news-events-list-view.html">
                            News &amp; Events List View
                          </a>
                        </li>
                        <li>
                          <a href="news-events-detail.html">
                            News &amp; Events Detail
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a>Users</a>
                      <ul>
                        <li>
                          <a href="/login">Login / Register</a>
                        </li>
                        <li>
                          <a href="/profile">Profile</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
