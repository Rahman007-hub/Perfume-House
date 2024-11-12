import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { CartContext } from "../Context";
import { TbCurrencyNaira } from "react-icons/tb";

const ConfirmOrderModal = ({ showModal, setShowModal }) => {
  const { cart, totalPrice, startNewOrder } = useContext(CartContext);

  return (
    <div>
      <Modal centered show={showModal}>
        <Modal.Body>
          <div className="d-flex justify-content-between">
            <IoCheckmarkCircle />
            <IoClose />
          </div>
          <h1>confirm order</h1>
          <p>We hope you enjoy your order</p>
          <div className="p-3">
            {cart.map((cartItem) => {
              return (
                <div key={cartItem.id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2 align-items-center">
                      <img
                        src={cartItem.image}
                        alt="img"
                        style={{ width: "77.58px", height: "76.76px" }}
                        className="mb-3"
                      />
                      <div>
                        <h1 className="fs-6 fw-bold">{cartItem.title}</h1>
                        <div className="d-flex">
                          <p className="maincolor fw-bold">
                            {" "}
                            {cartItem.quantity}x
                          </p>
                          <p className="ms-2 f"> N{cartItem.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="fw-bold">
                      {cartItem.price * cartItem.quantity}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="d-flex justify-content-between mt-2 ">
              <p>Order Total</p>
              <h5>{totalPrice}</h5>
            </div>

            <button
              className="rounded-3 w-100 main-color-bg p-2 border-0 text-white"
              onClick={startNewOrder}
            >
              Start New Order
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConfirmOrderModal;