import { useEffect } from "react";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("persist:root");
    window.location = "/";
  }, []);

  return null;
}

export default Logout;
