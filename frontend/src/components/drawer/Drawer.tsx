import { DrawerProps } from "../../interfaces/DrawerProps";
import css from "./Drawer.module.css";

function Drawer({
  isOpen,
  onClose,
  children,
}: DrawerProps): JSX.Element | null {
  if (!isOpen) return null;
  return (
    <div className={css.drawerOverlay}>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Drawer;
