import Link from "next/link";
import MobileMenu from "../MobileMenu";
import Topbar from "../Topbar";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header className="tg-header__style-three">
        <Topbar scroll={scroll} />
        <div
          id="sticky-header"
          className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="tg-flaticon-menu-1" />
                </div>
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link href="/" className="d-flex align-items-center ">
                        {/* <img
                          src="/assets/img/logo/logo.jpg"
                          alt="Logo"
                          className="me-3"
                        /> */}
                        <h3>The Digital Coaching</h3>
                      </Link>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li className="active">
                          <Link href="/">Home</Link>
                          {/* <ul className="sub-menu">
                            <li className="active">
                              <Link href="/">Home One</Link>
                            </li>
                            <li>
                              <Link href="/index-2">Home Two</Link>
                            </li>
                            <li>
                              <Link href="/index-3">Home Three</Link>
                            </li>
                          </ul> */}
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">IGCSE Tutors</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/">Mathematics</Link>
                            </li>
                            <li>
                              <Link href="/">Physics</Link>
                            </li>
                            <li>
                              <Link href="/">Chemistry</Link>
                            </li>
                            <li>
                              <Link href="/">Computer Science</Link>
                            </li>
                            <li>
                              <Link href="/">Accounting</Link>
                            </li>
                            <li>
                              <Link href="/">Others...</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">A Level Tutors</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/">Mathematics</Link>
                            </li>
                            <li>
                              <Link href="/">Physics</Link>
                            </li>
                            <li>
                              <Link href="/">Chemistry</Link>
                            </li>
                            <li>
                              <Link href="/">Computer Science</Link>
                            </li>
                            <li>
                              <Link href="/">Accounting</Link>
                            </li>
                            <li>
                              <Link href="/">Others...</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="active">
                          <Link href="/pricing">Pricing</Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="tgmenu__search d-none d-md-block">
                      <form action="#" className="tgmenu__search-form">
                        <div className="select-grp">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 12H6.85714V6.85714H12V12ZM5.14286 12H0V6.85714H5.14286V12ZM12 5.14286H6.85714V0H12V5.14286ZM5.14286 5.14286H0V0H5.14286V5.14286Z"
                              fill="currentcolor"
                            />
                          </svg>
                          <select
                            className="form-select"
                            id="course-cat"
                            aria-label="Default select example"
                            style={{ width: 150 }}
                          >
                            <option disabled>Categories</option>
                            <option>Business</option>
                            <option value={2}>Data Science</option>
                            <option value={3}>Art Design</option>
                            <option value={4}>Marketing</option>
                            <option value={5}>Finance</option>
                          </select>
                        </div>
                        <div className="input-grp">
                          <input
                            type="text"
                            placeholder="Search For Course . . ."
                          />
                          <button type="submit">
                            <i className="flaticon-searching" />
                          </button>
                        </div>
                      </form>
                    </div> */}
                    {/* <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="mini-cart-icon">
                          <Link href="/shop" className="cart-count">
                            <img src="/assets/img/icons/cart.svg" alt="cart" />
                            <span className="mini-cart-count">0</span>
                          </Link>
                        </li>
                        <li className="header-btn login-btn">
                          <Link href="/contact" className="btn">
                            Log in
                          </Link>
                        </li>
                        <li className="header-btn free-btn">
                          <Link href="/contact" className="btn">
                            Book A Free Demo
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        {/* <li className="mini-cart-icon">
                          <Link href="/shop" className="cart-count">
                            <img src="/assets/img/icons/cart.svg" alt="cart" />
                            <span className="mini-cart-count">0</span>
                          </Link>
                        </li> */}
                        <li className="header-phone d-none d-lg-block d-xl-none d-xxl-block">
                          <Link href="/tel:+92 314 553 0845">
                            <i className="flaticon-phone-call" />
                            +92 314 553 0845
                          </Link>
                        </li>
                        <li className="header-btn">
                          <Link href="/" className="btn">
                            Book A Free Demo
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="tgmobile__menu">
                  <nav className="tgmobile__menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="tg-flaticon-close-1" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        {/* <img src="/assets/img/logo/logo.jpg" alt="Logo" /> */}
                        <h3>The Digital Coaching</h3>
                      </Link>
                    </div>
                    <div className="tgmobile__search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <Link href="/contact" className="btn">
                            Book A Free Demo
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="social-links">
                      <ul className="list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div
                  className="tgmobile__menu-backdrop"
                  onClick={handleMobileMenu}
                />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
