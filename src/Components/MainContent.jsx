function MainContent(){
    return (
        <>
        <div data-ride="carousel" className="carousel slide" id="home-v1-header-carousel">
            
            <div className="carousel-inner">
                <div className="item active">
                    <figure>
                        <img alt="Home Slide" src="images/header-slider/home-v1/header-slide.jpg" />
                    </figure>
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Online Learning Anytime, Anywhere!</h3>
                            <h2>Discover Your Roots</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words.</p>
                            <div className="slide-buttons hidden-sm hidden-xs">    
                                <a href="#" className="btn btn-primary">Read More</a>
                                <a href="#" className="btn btn-default">Purchase</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <figure>
                        <img alt="Home Slide" src="images/header-slider/home-v1/header-slide.jpg" />
                    </figure>
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Online Learning Anytime, Anywhere!</h3>
                            <h2>Discover Your Roots</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words.</p>
                            <div className="slide-buttons hidden-sm hidden-xs">    
                                <a href="#" className="btn btn-primary">Read More</a>
                                <a href="#" className="btn btn-default">Purchase</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <figure>
                        <img alt="Home Slide" src="images/header-slider/home-v1/header-slide.jpg" />
                    </figure>
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Online Learning Anytime, Anywhere!</h3>
                            <h2>Discover Your Roots</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words.</p>
                            <div className="slide-buttons hidden-sm hidden-xs">    
                                <a href="#" className="btn btn-primary">Read More</a>
                                <a href="#" className="btn btn-default">Purchase</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <a className="left carousel-control" href="#home-v1-header-carousel" data-slide="prev"></a>
            <a className="right carousel-control" href="#home-v1-header-carousel" data-slide="next"></a>
        </div>
        <section className="search-filters">
            <div className="container">
                <div className="filter-box">
                    <h3>What are you looking for at the library?</h3>
                    <form action="http://libraria.demo.presstigers.com/index.html" method="get">
                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label className="sr-only" >Search by Keyword</label>
                                <input className="form-control" placeholder="Search by Keyword" id="keywords" name="keywords" type="text"/>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="form-group">
                                <select name="catalog" id="catalog" className="form-control">
                                    <option>Search the Catalog</option>
                                    <option>Catalog 01</option>
                                    <option>Catalog 02</option>
                                    <option>Catalog 03</option>
                                    <option>Catalog 04</option>
                                    <option>Catalog 05</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="form-group">
                                <select name="category" id="category" className="form-control">
                                    <option>All Categories</option>
                                    <option>Category 01</option>
                                    <option>Category 02</option>
                                    <option>Category 03</option>
                                    <option>Category 04</option>
                                    <option>Category 05</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="form-group">
                                <input className="form-control" type="submit" value="Search"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section className="welcome-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="welcome-wrap">
                            <div className="welcome-text">
                                <h2 className="section-title">Welcome to the libraria</h2>
                                <span className="underline left"></span>
                                <p className="lead">The standard chunk of Lorem Ipsum used since</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words etc.</p>
                                <a className="btn btn-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="facts-counter">
                            <ul>
                                <li className="bg-light-green">
                                    <div className="fact-item">
                                        <div className="fact-icon">
                                            <i className="ebook"></i>
                                        </div>
                                        <span>eBooks<strong className="fact-counter">45780</strong></span>
                                    </div>
                                </li>
                                <li className="bg-green">
                                    <div className="fact-item">
                                        <div className="fact-icon">
                                            <i className="eaudio"></i>
                                        </div>
                                        <span>eAudio<strong className="fact-counter">32450</strong></span>
                                    </div>
                                </li>
                                <li className="bg-red">
                                    <div className="fact-item">
                                        <div className="fact-icon">
                                            <i className="magazine"></i>
                                        </div>
                                        <span>Magazine<strong className="fact-counter">14450</strong></span>
                                    </div>
                                </li>
                                <li className="bg-blue">
                                    <div className="fact-item">
                                        <div className="fact-icon">
                                            <i className="videos"></i>
                                        </div>
                                        <span>Videos<strong className="fact-counter">32450</strong></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="welcome-image"></div>
        </section>
        
        </>
    )
}

export default MainContent;