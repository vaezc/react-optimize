import { useEffect, useState } from "react";
import GrayState from "./GrayState";

function useGray(key) {
  const [hit, setHit] = useState(false);

  useEffect(() => {
    const changeLocalStatus = (status) => {
      setHit(status[key]);
    };
    GrayState.attach(changeLocalStatus);
    return () => {
      GrayState.detach(changeLocalStatus);
    };
  }, [key]);
  return hit;
}

export default useGray;
