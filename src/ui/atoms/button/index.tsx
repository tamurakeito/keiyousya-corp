import { ReactNode } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

export const Button = ({
  className,
  label,
  onClick,
}: {
  className?: string;
  label: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className={classNames([classes.button, className])}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
