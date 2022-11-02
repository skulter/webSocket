import { useEffect, useState } from "react";

import { socket, SocketContext } from "../src/src/service/socket";
import Test from "../src/src/component/Test";

function App() {
  const [data, setData] = useState("add");
  useEffect(() => {
    socket.on("RECEIVE_MESSAGE", (data) => {
      console.log("받은 메세지", data);
      setData(data.state);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <div>
        <Test data={data} />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
