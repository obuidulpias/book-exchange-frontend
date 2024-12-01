function Login(){
    return(
        <>
        <section className="page-banner services-banner">
            <div className="container">
                <div className="banner-header">
                    <h2>Signin</h2>
                    <span className="underline center"></span>
                    <p className="lead">Proin ac eros pellentesque dolor pharetra tempo.</p>
                </div>
                <div className="breadcrumb">
                    <ul>
                        <li><a href="index-2.html">Home</a></li>
                        <li>Signin</li>
                    </ul>
                </div>
            </div>
        </section>
        <div id="content" className="site-content">
            <div id="primary" className="content-area">
                <main id="main" className="site-main">
                    <div className="signin-main">
                        <div className="container">
                            <div className="woocommerce">
                                <div className="woocommerce-login">
                                    <div className="company-info signin-register">
                                        <div className="col-md-5 col-md-offset-1 border-dark-left">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="company-detail bg-dark margin-left">
                                                        <div className="signin-head">
                                                            <h2>Sign in</h2>
                                                            <span className="underline left"></span>
                                                        </div>
                                                        <form className="login" method="post">
                                                            <p className="form-row form-row-first input-required">
                                                                <label>
                                                                    <span className="first-letter">Barcode or Username</span>  
                                                                    <span className="second-letter">*</span>
                                                                </label>
                                                                <input type="text"  id="username" name="username" className="input-text"/>
                                                             </p>
                                                            <p className="form-row form-row-last input-required">
                                                                <label>
                                                                    <span className="first-letter">Pin</span>  
                                                                    <span className="second-letter">*</span>
                                                                </label>
                                                                <input type="password" id="password" name="password" className="input-text"/>
                                                            </p>
                                                            <div className="clear"></div>
                                                            <div className="password-form-row">
                                                                <p className="form-row input-checkbox">
                                                                    <input type="checkbox" value="forever" id="rememberme" name="rememberme"/>
                                                                    <label className="inline" >Remember me</label>
                                                                </p>
                                                                <p className="lost_password">
                                                                    <a href="#">Lost your Pin?</a>
                                                                </p>
                                                            </div>
                                                            <input type="submit" value="Login" name="login" className="button btn btn-default"/>
                                                            <div className="clear"></div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 border-dark new-user">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="company-detail new-account bg-light margin-right">
                                                        <div className="new-user-head">
                                                            <h2>Create New Account</h2>
                                                            <span className="underline left"></span>
                                                            <p>If no barcode has been assigned for your account, please contact the library.</p>
                                                        </div>
                                                        <form className="login" method="post">
                                                            <p className="form-row form-row-first input-required">
                                                                <label>
                                                                    <span className="first-letter">Barcode</span>  
                                                                    <span className="second-letter">*</span>
                                                                </label>
                                                                <input type="text" id="username1" name="username" className="input-text"/>
                                                            </p>
                                                            <p className="form-row input-required">
                                                                <label>
                                                                    <span className="first-letter">Password</span>  
                                                                    <span className="second-letter">*</span>
                                                                </label>
                                                                <input type="password" id="password1" name="password" className="input-text"/>
                                                            </p>                                                                                
                                                            <div className="clear"></div>
                                                            <input type="submit" value="Signup" name="signup" className="button btn btn-default"/>
                                                            <div className="clear"></div>
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
                </main>
            </div>
        </div>
        </>
    )
}
export default Login