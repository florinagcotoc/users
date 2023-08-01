import { useEffect, useRef } from "react";

const usePortal = (): HTMLElement | null => {
  const portalRef = useRef<HTMLElement | null>(null);

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

  return portalRef.current;
};

export default usePortal;
