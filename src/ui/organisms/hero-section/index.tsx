import classes from "./styles.module.scss";

export const HeroSection = () => {
  return (
    <div className={classes.hero_section}>
      <div className={classes.hero_contents}>
        <div className={classes.hero_captions}>
          <div className={classes.hero_caption}>
            <span>テクノロジーで診療を</span>
            <span>もっとスマートに。</span>
          </div>
          <div className={classes.hero_caption}>
            <span>慧陽社は電子カルテで</span>
            <span>医療の未来を切り拓きます。</span>
          </div>
        </div>
      </div>
    </div>
  );
};
