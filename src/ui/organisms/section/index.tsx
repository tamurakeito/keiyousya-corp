import { ReactNode } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

export const Section = ({
  ref,
  children,
  title,
  description,
  color = sectionColors.white,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  children: ReactNode;
  title: string;
  description: string;
  color?: SectionColors;
}) => {
  const clazz = classNames([classes.section, color]);
  return (
    <div ref={ref} className={clazz}>
      <div className={classes.title_and_discription}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
      {children}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const sectionColors = {
  white: classes.white,
  gray: classes.gray,
} as const;
export type SectionColors = (typeof sectionColors)[keyof typeof sectionColors];
