import { Modal } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  children: React.ReactNode;
};
const MUIModal = (props: Props) => {
  const { open, children } = props;
  return (
    <Modal open={open}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm">
        {children}
      </div>
    </Modal>
  );
};

export default MUIModal;
