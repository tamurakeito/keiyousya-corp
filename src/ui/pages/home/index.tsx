import { HeroSection } from "@ui/organisms/hero-section";
import classes from "./styles.module.scss";
import { Header } from "@ui/organisms/header";
import { Section, sectionColors } from "@ui/organisms/section";
import { Footer } from "@ui/organisms/footer";
import Product01 from "@assets/images/product01.png";
import Product02 from "@assets/images/product02.png";
import classNames from "classnames";
import { Button } from "@ui/atoms/button";
import { useState } from "react";
import { InputUnit } from "@ui/molecules/input-unit";
import { SelectUnit } from "@ui/molecules/select-unit";
import { TextareaUnit } from "@ui/molecules/tesxtarea-unit";

export const Home = () => {
  const [formName, setFormName] = useState("");
  const [formMail, setFormMail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formOccupation, setFormOccupation] = useState("");
  const [formWorkplace, setFormWorkplace] = useState("");
  const [inquiryDetails, setInquiryDetails] = useState("");
  return (
    <div className={classes.home}>
      <Header />
      <HeroSection />
      <Section
        title={"ABOUT"}
        discription={"会社情報"}
        color={sectionColors.gray}
      >
        <div className={classes.about_table}>
          <AboutTableRow type={"商号"} value={"株式会社慧陽社"} />
          <AboutTableRow type={"代表取締役"} value={"田村　慧人"} />
          <AboutTableRow
            type={"所在地"}
            value={"宮城県仙台市青葉区中央 2 - 2 - 30"}
          />
          <AboutTableRow type={"設立年月日"} value={"2025年 3月 12日"} />
          <AboutTableRow type={"資本金"} value={"99万円"} />
          <AboutTableRow
            type={"事業内容"}
            value={
              "医療機関向けの電子カルテ等診療システムの開発・提供及び運用管理"
            }
          />
        </div>
      </Section>
      <Section title={"SERVICE"} discription={"サービス紹介"}>
        <div className={classes.product}>
          <div className={classes.name_and_image}>
            <div className={classes.name}>
              <div className={classes.product_name}>
                統合診療システム｜Model 01
              </div>
              <div className={classes.description}>
                （2025年8月頃 販売開始予定）
              </div>
            </div>
            <div className={classes.image}>
              <div
                className={classNames([
                  classes.product_image,
                  classes.product_image_01,
                ])}
              >
                <img src={Product01} alt="product image 01" />
              </div>
              <div
                className={classNames([
                  classes.product_image,
                  classes.product_image_02,
                ])}
              >
                <img src={Product02} alt="product image 02" />
              </div>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.paragraph}>
              慧陽社が提供する統合診療システムModel01は、医療現場の効率化と患者様へのより質の高い医療提供を支援するために開発された、クラウド型システムです。
              電子カルテを中核とし、部門システムとの連携を強化することで、医療情報の統合管理を実現。医療従事者の業務負担を軽減し、患者様の安全性を向上させるための強力なツールとなります。
            </div>
            <div className={classes.paragraph}>
              Model01は大規模病院向け電子カルテとの親和性を重視したデザインで、新規開業の先生方にも直感的に操作いただける使いやすさが特徴的です。日医標準レセプトソフト
              WebORCA
              連携の標準搭載に加え、厚生労働省指針遵守のビデオチャット機能によるオンライン診療も実現。クラウド型を基本としつつ、オンプレミスサーバー併用にも対応でき、柔軟な運用が可能です。また、機能拡張やカスタマイズにも相談・対応し、医療機関ごとのニーズに合わせた最適なシステム構築を支援します。
            </div>
          </div>
        </div>
      </Section>
      <Section
        title={"CONTACT"}
        discription={"お問い合わせ"}
        color={sectionColors.gray}
      >
        <div className={classes.explanation}>
          当社事業へのお問い合わせは、下記フォームにて承っております。
        </div>
        <div className={classes.notes}>
          <div className={classes.note}>
            通常、1~3営業日程度で担当者よりご連絡させていただきます。
          </div>
          <div className={classes.note}>
            ※ お問い合わせ内容によっては、お時間がかかる場合がございます。
          </div>
        </div>
        <div className={classes.form_area}>
          <div className={classes.form}>
            <div className={classes.form_parameter}>
              <InputUnit
                label={"名前"}
                isRequired={true}
                value={formName}
                setValue={setFormName}
                placeholder={"慧陽　太郎"}
              />
              <InputUnit
                label={"連絡先メールアドレス"}
                isRequired={true}
                value={formMail}
                setValue={setFormMail}
                placeholder={"メールアドレス"}
              />
              <InputUnit
                label={"連絡先電話番号"}
                value={formPhone}
                setValue={setFormPhone}
                placeholder={"080-XXXX-XXXX"}
              />
              <SelectUnit
                label={"職業"}
                isRequired={true}
                value={formOccupation}
                setValue={setFormOccupation}
              />
              <InputUnit
                label={"勤務先"}
                value={formWorkplace}
                setValue={setFormWorkplace}
                placeholder={"医療法人XX病院"}
              />
            </div>
            <TextareaUnit
              value={inquiryDetails}
              setValue={setInquiryDetails}
              placeholder={"例：電子カルテの資料請求"}
              label={"問い合わせ内容"}
            />
          </div>
          <div className={classes.send_button}>
            <Button label={"送信"} onClick={() => {}} />
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

const AboutTableRow = ({ type, value }: { type: string; value: string }) => {
  return (
    <div className={classes.about_row}>
      <div className={classes.about_row_type}>{type}</div>
      <div className={classes.about_row_value}>{value}</div>
    </div>
  );
};
