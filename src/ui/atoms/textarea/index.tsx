import classes from "./styles.module.scss";

export const Textarea = ({
  value,
  setValue,
  placeholder,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}) => {
  return (
    <textarea
      className={classes.textarea}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    ></textarea>
  );
};
