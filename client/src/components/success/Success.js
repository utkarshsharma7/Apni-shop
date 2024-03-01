import React from 'react'
import success from "./success.gif"
import "./success.scss"

const Success = () => {
  return (
    <div className="container">
      <center>
        <img className="success" src={success} alt="successful" />
        <br />
        <br />
        <br />
        <span className="text">
          Congratulations! <br />
          <br/>
          Your Order is Placed successfully
        </span>
      </center>
    </div>
  );
}

export default Success