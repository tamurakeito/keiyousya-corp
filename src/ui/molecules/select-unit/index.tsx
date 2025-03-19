import classes from "./styles.module.scss";
import { Select } from "@ui/atoms/select";

export const SelectUnit = ({
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
    <div className={classes.select_unit}>
      <div className={classes.select_label}>{label}</div>
      {isRequired && <div className={classes.select_description}>※ 必須</div>}
      <Select value={value} setValue={setValue} placeholder={placeholder} />
    </div>
  );
};
