import { ReactNode } from "react";
import classes from "./styles.module.scss";

export const Button = ({
  label,
  onClick,
}: {
  label: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {label}
    </button>
  );
};
