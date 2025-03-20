import { ChevronDown } from "react-feather";
import classes from "./styles.module.scss";
import Logo from "@assets/images/logo.svg";

export const Header = ({
  homePageRef,
  aboutSectionRef,
  serviceSectionRef,
  contactSectionRef,
}: {
  homePageRef: React.RefObject<HTMLDivElement | null>;
  aboutSectionRef: React.RefObject<HTMLDivElement | null>;
  serviceSectionRef: React.RefObject<HTMLDivElement | null>;
  contactSectionRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={classes.header_container}>
      <div className={classes.header}>
        <button
          onClick={() => {
            homePageRef?.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Logo />
        </button>
        <div className={classes.navigation}>
          <NavigationTab label={"ABOUT"} sectionRef={aboutSectionRef} />
          <NavigationTab label={"SERVICE"} sectionRef={serviceSectionRef} />
          <NavigationTab label={"CONTACT"} sectionRef={contactSectionRef} />
        </div>
      </div>
    </div>
  );
};

const NavigationTab = ({
  label,
  sectionRef,
}: {
  label: string;
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      className={classes.navigation_tab}
      onClick={() => {
        sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div className={classes.label}>{label}</div>
      <ChevronDown size={20} />
    </div>
  );
};
