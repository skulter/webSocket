import React, { useContext, useEffect } from "react";
import { SocketContext } from "../service/socket";
import { TbRotateClockwise, TbCheckbox } from "react-icons/tb";

import "./Test.css";
const Test = (data) => {
  const socket = useContext(SocketContext);

  const handleClick = () => {
    socket.emit("UPDATE_STATE");
  };
  return (
    <>
      <button type="button" onClick={() => handleClick()}>
        나한테 다시 리턴
      </button>
      <div>
        {data.data === "ready" ? (
          <TbRotateClockwise className="rotate" />
        ) : (
          <TbCheckbox />
        )}
      </div>
    </>
  );
};

export default Test;
