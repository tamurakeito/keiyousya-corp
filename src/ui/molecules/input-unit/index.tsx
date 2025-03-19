import { Input } from "@ui/atoms/input";
import classes from "./styles.module.scss";

export const InputUnit = ({
  label,
  isRequired = false,
  value,
  setValue,
  placeholder,
}: {
  label: string;
  isRequired?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}) => {
  return (
    <div className={classes.input_unit}>
      <div className={classes.input_label}>{label}</div>
      {isRequired && <div className={classes.input_description}>※ 必須</div>}
      <Input value={value} setValue={setValue} placeholder={placeholder} />
    </div>
  );
};
