import { ReactNode } from "react";

export interface DrawerPortalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
