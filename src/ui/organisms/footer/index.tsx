import classes from "./styles.module.scss";
import Logo from "@assets/images/logo.svg";

export const Footer = ({
  homePageRef,
  aboutSectionRef,
  serviceSectionRef,
  contactSectionRef,
}: {
  homePageRef?: React.RefObject<HTMLDivElement | null>;
  aboutSectionRef?: React.RefObject<HTMLDivElement | null>;
  serviceSectionRef?: React.RefObject<HTMLDivElement | null>;
  contactSectionRef?: React.RefObject<HTMLDivElement | null>;
}) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={classes.footer}>
      {homePageRef && (
        <div className={classes.logo_and_navigation}>
          <button
            onClick={() => {
              scrollToSection(homePageRef);
            }}
          >
            <Logo />
          </button>
          <div className={classes.navigation}>
            {homePageRef && (
              <div
                className={classes.navigation_tab}
                onClick={() => {
                  scrollToSection(homePageRef);
                }}
              >
                TOP
              </div>
            )}
            {aboutSectionRef && (
              <div
                className={classes.navigation_tab}
                onClick={() => {
                  scrollToSection(aboutSectionRef);
                }}
              >
                ABOUT
              </div>
            )}
            {serviceSectionRef && (
              <div
                className={classes.navigation_tab}
                onClick={() => {
                  scrollToSection(serviceSectionRef);
                }}
              >
                SERVICE
              </div>
            )}
            {contactSectionRef && (
              <div
                className={classes.navigation_tab}
                onClick={() => {
                  scrollToSection(contactSectionRef);
                }}
              >
                CONTACT
              </div>
            )}
          </div>
        </div>
      )}
      <div className={classes.copyright}>©️2025 株式会社慧陽社</div>
    </div>
  );
};
