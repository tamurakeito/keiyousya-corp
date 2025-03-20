import { ChevronDown } from "react-feather";
import classes from "./styles.module.scss";

export const Select = ({
  value,
  setValue,
  placeholder = "選択してください",
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}) => {
  return (
    <div className={classes.select}>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={value === "" ? classes.placeholder : ""}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        <option value="option1">医師</option>
        <option value="option2">歯科医師</option>
        <option value="option2">助産師</option>
        <option value="option3">その他</option>
      </select>
      <ChevronDown size={16} />
    </div>
  );
};
