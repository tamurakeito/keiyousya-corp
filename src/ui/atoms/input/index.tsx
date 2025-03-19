import classes from "./styles.module.scss";

export const Input = ({
  value,
  setValue,
  placeholder,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}) => {
  return (
    <input
      className={classes.input}
      type={"text"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};
