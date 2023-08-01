import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const usePortal = (): React.ReactPortal | null => {
  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalDiv = document.createElement("div");
    portalRef.current = portalDiv;
    document.body.appendChild(portalDiv);

    // Cleanup function to remove the portal container from the DOM when the component unmounts
    return () => {
      if (portalDiv.parentNode) {
        portalDiv.parentNode.removeChild(portalDiv);
      }
    };
  }, []);

  return portalRef.current
    ? ReactDOM.createPortal(null, portalRef.current)
    : null;
};

export default usePortal;
