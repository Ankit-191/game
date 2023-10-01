import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GameData } from "../common/Helper";

const GameHistroy = () => {
  return (
    <>
      <section className="mb-5 pb-5">
        <Container>
          <h4 className="text-center ff_Dm_sans fw-semibold text-black fs_lg">
            Game History
          </h4>
          <Row className="bg_blue py-3 rounded-1 mb-1">
            <Col className="text-center">
              <p className="ff_Dm_sans fs_sm clr_white fw-medium mb-0">
                Peroid
              </p>
            </Col>
            <Col className="text-center">
              <p className="ff_Dm_sans fs_sm clr_white fw-medium mb-0">
                Number
              </p>
            </Col>
            <Col className="text-center">
              <p className="ff_Dm_sans fs_sm clr_white fw-medium mb-0">Color</p>
            </Col>
          </Row>
          <ul className="px-0">
            {GameData.map((data, index) => {
              return (
                <li key={index} className="py-2 border-bottom border-bottom-1">
                  <Row>
                    <Col className="text-center">
                      <p className="ff_Dm_sans fs_sm fw-normal text-black mb-0">
                        {data.peroid}
                      </p>
                    </Col>
                    <Col className="text-center">
                      <p className="ff_Dm_sans fs_sm fw-normal text-black mb-0">
                        {data.numbers}
                      </p>
                    </Col>
                    <Col>
                      <p className={`mb-0 m-auto colors ${data.colors}`}></p>
                    </Col>
                  </Row>
                </li>
              );
            })}
          </ul>
          <Row className="bg_blue py-3 rounded-1">
            <Col className="text-center">
              <button className="ff_Dm_sans fw-medium fs_sm text-black bg_white py-1 rounded-1 px-2 border-0 btn_hvoer">
                Prev
              </button>
            </Col>
            <Col className="text-center">
              <p className="mb-0 ff_Dm_sans fs_sm clr_white fw-medium">
                1/1600
              </p>
            </Col>
            <Col className="text-center">
              <button className="ff_Dm_sans fw-medium fs_sm text-black bg_white py-1 rounded-1 px-2 border-0 btn_hvoer">
                Next
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GameHistroy;
