import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NumberBtn } from "../common/Helper";

const Time = () => {
  return (
    <>
      <section className="py-4">
        <Container>
          <Row>
            <Col>
              <p className="ff_Dm_sans fs_sm fw-normal clr_gray_500 mb-2">
                Period
              </p>
              <h4 className="ff_Dm_sans fs_lg fw-semibold text-black">
                20230907216
              </h4>
            </Col>
            <Col className="text-end">
              <p className="ff_Dm_sans fs_sm fw-normal clr_gray_500 mb-2">
                Time Remaining
              </p>
              <h4 className="ff_Dm_sans fs_lg fw-semibold text-black mb-0">
                01:00
              </h4>
            </Col>
          </Row>
          <div className="d-flex justify-content-between py-3 gap-2">
            <button className="ff_Dm_sans fw-medium fs_md clr_white bg-danger py-1 rounded-1 border-0 clr_btn btn_hvoer">
              Red
            </button>
            <button className="ff_Dm_sans fw-medium fs_md clr_white bg_violet py-1 rounded-1 clr_btn border-0 btn_hvoer">
              Violet
            </button>
            <button className="ff_Dm_sans fw-medium fs_md clr_white bg_green py-1 rounded-1 clr_btn border-0 btn_hvoer">
              Green
            </button>
          </div>
          <Row className="justify-content-between py-3 gap-1">
            {NumberBtn.map((data, index) => {
              return (
                <Col key={index} xs={2} className="px-0">
                  <button className="ff_Dm_sans fw-medium fs_md clr_white bg_blue py-1 rounded-1 border-0 w-100 btn_hvoer">
                    {data.num}
                  </button>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Time;
