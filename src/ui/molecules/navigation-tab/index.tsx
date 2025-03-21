import { ChevronDown } from "react-feather";
import classes from "./styles.module.scss";
import classNames from "classnames";

export const NavigationTab = ({
  className,
  label,
  sectionRef,
  onClick,
}: {
  className?: string;
  label: string;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  onClick?: () => void;
}) => {
  return (
    <div
      className={classNames([classes.navigation_tab, className])}
      onClick={() => {
        sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
        onClick && onClick();
      }}
    >
      <div className={classes.label}>{label}</div>
      <ChevronDown size={20} />
    </div>
  );
};
