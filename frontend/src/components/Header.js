import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import ProductCarousel from "./ProductCarousel";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header style={{ position: "flex", top: 0, width: "100%", zIndex: 1000 }}>
      <Navbar
        //bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{
          alignItems: "flex-start",
          backgroundColor: "#607274",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
        className="flex-column justify-content-between "
      >
        <div className="top-section w-100">
          <div className="d-flex justify-content-between w-100">
            <LinkContainer to="/">
              <Navbar.Brand className="d-flex flex-row align-items-center ">
                {/* <img
                  src="./images/car.png"
                  className="header_pic"
                  alt="car pic"
                /> */}
                <img
                  src="./images/Guido.png"
                  className="header_pic"
                  alt="car pic"
                  style={{width:"8rem"}}
                />
                <h3 style={{ color: "#e5f0ff" }}>گیدولند</h3>
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0" }}>
              <SearchBox />
              <Nav className="ml-auto">
                {/* <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>سبد خرید
                </Nav.Link>
              </LinkContainer> */}

                {/* {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>ورود
                  </Nav.Link>
                </LinkContainer>
              )} */}

                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title="ادمین" id="adminmenue">
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>کاربران</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>محصولات</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>سفارشات</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
        <div className="button-section-wrapper w-100">
          <div className="descriptions d-flex flex-row justify-content-between align-items-center w-75 mx-auto">
            <div className="text-wrapper">
              <p className="header__text">
                با مراجعه به سایت ما، آخرین محصولات ارائه شده در فروشگاه‌های
                مختلف را به راحتی کشف کنید و با اطمینان از بین آن‌ها انتخاب
                کنید. اینجا جایی است که شما می‌توانید با آرامش خاطر از خرید خود
                لذت ببرید
              </p>
            </div>
            <div className="picture-wrapper">
              <img
                src="./images/car.png"
                alt="car pic"
                style={{ width: "25rem" }}
              />
            </div>
          </div>
          <div className="buttom-section d-flex flex-row">
            <LinkContainer to="/cart">
              <Nav.Link className="text-white text-lg">
                <i className="fas fa-shopping-cart"></i>سبد خرید
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown
                title={<span style={{ color: "white" }}>{userInfo.name}</span>}
                id="username"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>حساب کاربری</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link className="text-white">
                  <i className="fas fa-user"></i>ورود
                </Nav.Link>
              </LinkContainer>
            )}
          </div>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
