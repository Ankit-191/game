import React from "react";
import { Container } from "react-bootstrap";

const Blance = () => {
  return (
    <>
      <section>
        <Container>
          <div className="balance_card p-3 my-2">
            <p className="ff_Dm_sans fw-semibold clr_white fs_lg">
              Available balance: 100
            </p>
            <div className="d-flex gap-4">
              <button className="ff_Dm_sans fw-medium fs_md clr_blue_500 bg_white px-4 py-2 rounded-1 border-0 btn_hvoer">
                Recharge
              </button>
              <button className="ff_Dm_sans fw-medium fs_md clr_blue_500 bg_white px-4 py-2 rounded-1 border-0 btn_hvoer">
                Deposit
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blance;
