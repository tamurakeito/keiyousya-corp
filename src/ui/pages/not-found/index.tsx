import { Header } from "@ui/organisms/header";
import classes from "./styles.module.scss";
import { Button } from "@ui/atoms/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found｜株式会社慧陽社";
  }, []);
  const navigation = useNavigate();
  return (
    <div className={classes.not_found}>
      <Header />
      <div className={classes.not_found_content}>
        <div className={classes.title}>404｜Not Found</div>
        <div className={classes.description}>
          お探しのページは見つかりませんでした
        </div>
        <Button
          className={classes.button}
          label={"トップページへ"}
          onClick={() => navigation("/")}
        />
      </div>
    </div>
  );
};
