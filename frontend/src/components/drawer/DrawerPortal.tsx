import ReactDOM from "react-dom";
import usePortal from "../../utils/usePortal";
import Drawer from "./Drawer";
import { DrawerPortalProps } from "../../interfaces/DrawerPortalProps";

function DrawerPortal({
  isOpen,
  onClose,
  children,
}: DrawerPortalProps): JSX.Element | null {
  const portalContainer = usePortal();

  if (!portalContainer) return null;

  return ReactDOM.createPortal(
    <Drawer isOpen={isOpen} onClose={onClose}>
      {children}
    </Drawer>,
    portalContainer
  );
}

export default DrawerPortal;
