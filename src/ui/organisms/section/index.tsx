import { ReactNode } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

export const Section = ({
  children,
  title,
  discription,
  color = sectionColors.white,
}: {
  children: ReactNode;
  title: string;
  discription: string;
  color?: SectionColors;
}) => {
  const clazz = classNames([classes.section, color]);
  return (
    <div className={clazz}>
      <div className={classes.title_and_discription}>
        <div className={classes.title}>{title}</div>
        <div className={classes.discription}>{discription}</div>
      </div>
      {children}
    </div>
  );
};

export const sectionColors = {
  white: classes.white,
  gray: classes.gray,
} as const;
export type SectionColors = (typeof sectionColors)[keyof typeof sectionColors];
