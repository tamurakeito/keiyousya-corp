import { X } from "react-feather";
import classes from "./styles.module.scss";
import { ReactNode, useEffect, useState } from "react";
import classNames from "classnames";

export const Overlay = ({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const [overlayClasses, setOverlayClasses] = useState([classes.overlay]);

  const active = classes.active;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setOverlayClasses([...overlayClasses, active]);
      }, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClose = async () => {
    setOverlayClasses(overlayClasses.filter((item) => item !== active));
    setTimeout(() => setIsOpen(false), 200);
  };
  return (
    isOpen && (
      <div className={classNames(overlayClasses)}>
        <button className={classes.x_button} onClick={handleClose}>
          <X size={20} />
          {children}
        </button>
      </div>
    )
  );
};
