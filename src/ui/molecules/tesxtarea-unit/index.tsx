import { Input } from "@ui/atoms/input";
import classes from "./styles.module.scss";
import { Textarea } from "@ui/atoms/textarea";

export const TextareaUnit = ({
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
    <div className={classes.textarea_unit}>
      <div className={classes.textarea_label}>{label}</div>
      {isRequired && <div className={classes.textarea_description}>※ 必須</div>}
      <Textarea value={value} setValue={setValue} placeholder={placeholder} />
    </div>
  );
};
