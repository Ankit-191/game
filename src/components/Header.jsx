import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="bg_white position-fixed start-0 bottom-0 w-100">
        <Container>
          <div className="py-3">
            <ul className="p-0 m-0 d-flex justify-content-md-evenly justify-content-between">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "d-flex flex-column align-items-center icon_active"
                      : "d-flex flex-column align-items-center icon_hover "
                  }
                >
                  <svg
                    fill="#acacac"
                    width="22px"
                    height="22px"
                    viewBox="0 0 495.398 495.398"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"
                          />
                          <path
                            d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="ff_Dm_sans fw-semibold fs_sm clr_gray_500 d-block">
                    Home
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    isActive
                      ? "d-flex flex-column align-items-center icon_active"
                      : "d-flex flex-column align-items-center icon_hover "
                  }
                >
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 512.000000 512.000000"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#acacac"
                      stroke="none"
                    >
                      <path
                        d="M2420 5114 c-322 -40 -591 -171 -815 -398 -199 -201 -313 -415 -372
-696 -24 -118 -24 -382 0 -500 59 -281 174 -496 372 -696 201 -203 421 -322
705 -381 117 -24 380 -24 502 0 270 54 494 174 694 372 202 199 322 421 381
705 24 118 24 382 0 500 -39 185 -110 356 -212 510 -63 95 -258 291 -351 352
-161 107 -335 180 -506 213 -81 16 -328 28 -398 19z"
                      />
                      <path
                        d="M2023 2104 c-560 -68 -1065 -385 -1390 -874 -191 -286 -300 -624
-319 -985 -6 -111 -5 -124 15 -163 14 -28 34 -48 61 -62 39 -20 54 -20 2170
-20 2116 0 2131 0 2170 20 27 14 47 34 61 62 20 39 21 52 15 163 -26 493 -214
925 -556 1279 -324 335 -742 539 -1199 586 -151 15 -889 11 -1028 -6z"
                      />
                    </g>
                  </svg>
                  <span className="ff_Dm_sans fw-semibold fs_sm clr_gray_500 d-block">
                    Account
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
