import { Menu } from "react-feather";
import classes from "./styles.module.scss";
import Logo from "@assets/images/logo.svg";
import { NavigationTab } from "@ui/molecules/navigation-tab";

export const Header = ({
  homePageRef,
  aboutSectionRef,
  serviceSectionRef,
  contactSectionRef,
  setIsOpen,
}: {
  homePageRef?: React.RefObject<HTMLDivElement | null>;
  aboutSectionRef?: React.RefObject<HTMLDivElement | null>;
  serviceSectionRef?: React.RefObject<HTMLDivElement | null>;
  contactSectionRef?: React.RefObject<HTMLDivElement | null>;
  setIsOpen?: (value: boolean) => void;
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
          {aboutSectionRef && (
            <NavigationTab label={"ABOUT"} sectionRef={aboutSectionRef} />
          )}
          {serviceSectionRef && (
            <NavigationTab label={"SERVICE"} sectionRef={serviceSectionRef} />
          )}
          {contactSectionRef && (
            <NavigationTab label={"CONTACT"} sectionRef={contactSectionRef} />
          )}
        </div>
        {setIsOpen && (
          <div className={classes.hamburger} onClick={() => setIsOpen(true)}>
            <Menu size={20} />
          </div>
        )}
      </div>
    </div>
  );
};
