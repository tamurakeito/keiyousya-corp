import { ChevronDown } from "react-feather";
import classes from "./styles.module.scss";
import Logo from "@assets/images/logo.svg";

export const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <div className={classes.navigation}>
        <NavigationTab label={"ABOUT"} />
        <NavigationTab label={"SERVICE"} />
        <NavigationTab label={"CONTACT"} />
      </div>
    </div>
  );
};

const NavigationTab = ({ label }: { label: string }) => {
  return (
    <div className={classes.navigation_tab}>
      <div className={classes.label}>{label}</div>
      <ChevronDown size={20} />
    </div>
  );
};
