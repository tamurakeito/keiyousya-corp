import classes from "./styles.module.scss";
import Logo from "@assets/images/logo.svg";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.logo_and_navigation}>
        <Logo />
        <div className={classes.navigation}>
          <div className={classes.navigation_tab}>TOP</div>
          <div className={classes.navigation_tab}>ABOUT</div>
          <div className={classes.navigation_tab}>SERVICE</div>
          <div className={classes.navigation_tab}>CONTACT</div>
        </div>
      </div>
      <div className={classes.copyright}>©️2025 株式会社慧陽社</div>
    </div>
  );
};
