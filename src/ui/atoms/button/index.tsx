import classes from "./styles.module.scss";

export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {label}
    </button>
  );
};
