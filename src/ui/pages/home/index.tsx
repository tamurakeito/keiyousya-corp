import { NavigationTab } from "@ui/molecules/navigation-tab";
import { Footer } from "@ui/organisms/footer";
import { Header } from "@ui/organisms/header";
import { HeroSection } from "@ui/organisms/hero-section";
import { Overlay } from "@ui/organisms/overlay";
import { Section, sectionColors } from "@ui/organisms/section";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.scss";
import Product01 from "@assets/images/product01.png";
import Product02 from "@assets/images/product02.png";
import { ExternalLink } from "react-feather";

export const Home = () => {
  useEffect(() => {
    document.title = "株式会社慧陽社｜電子カルテ・診療システムの開発販売";
  }, []);

  const homePageRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const serviceSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  // const [formName, setFormName] = useState("");
  // const [formMail, setFormMail] = useState("");
  // const [formPhone, setFormPhone] = useState("");
  // const [formOccupation, setFormOccupation] = useState("");
  // const [formWorkplace, setFormWorkplace] = useState("");
  // const [inquiryDetails, setInquiryDetails] = useState("");

  // const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const validation = (
  //   name: string,
  //   mail: string,
  //   occupation: string,
  //   details: string
  // ) => {
  //   if (!name.trim()) {
  //     toast.error("名前を入力してください。", { duration: 1000 });
  //     return false;
  //   } else if (!mail.trim()) {
  //     toast.error("メールアドレスを入力してください。", { duration: 1000 });
  //     return false;
  //   } else if (!occupation.trim()) {
  //     toast.error("ご職業を入力してください。", { duration: 1000 });
  //     return false;
  //   } else if (!details.trim()) {
  //     toast.error("お問い合わせ内容を入力してください。", { duration: 1000 });
  //     return false;
  //   }
  //   return true;
  // };

  const email = "info@keiyousya.com";
  const subject = "株式会社慧陽社HP｜事業内容に関する問い合わせ";
  const body = "";

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject || ""
  )}&body=${encodeURIComponent(body || "")}`;

  return (
    <>
      {<div ref={homePageRef} className={classes.home}>
        <Header
          homePageRef={homePageRef}
          aboutSectionRef={aboutSectionRef}
          serviceSectionRef={serviceSectionRef}
          contactSectionRef={contactSectionRef}
          setIsOpen={setIsOpen}
        />
        <HeroSection />
        <Section
          ref={aboutSectionRef}
          title={"ABOUT"}
          description={"会社情報"}
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
        <Section
          ref={serviceSectionRef}
          title={"SERVICE"}
          description={"サービス紹介"}
        >
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
          ref={contactSectionRef}
          title={"CONTACT"}
          description={"お問い合わせ"}
          color={sectionColors.gray}
        >
          <div className={classes.explanation}>
            {/* 当社事業へのお問い合わせは、下記フォームにて承っております。 */}
            当社事業へのお問い合わせは、下記メールアドレスよりお願いいたします。
          </div>
          <a className={classes.mail_address} href={mailtoUrl}>
            {email}
            <ExternalLink size={16} />
          </a>
          <div className={classes.notes}>
            <div className={classes.note}>
              通常、1~3営業日程度で担当者よりご連絡させていただきます。
            </div>
            <div className={classes.note}>
              ※ お問い合わせ内容によっては、お時間がかかる場合がございます。
            </div>
          </div>
          {/* <div className={classes.form_area}>
            <div className={classes.form}>
              <div className={classes.form_parameter}>
                <InputUnit
                  label={"名前"}
                  isRequired={true}
                  value={formName}
                  setValue={setFormName}
                  placeholder={"慧陽 太郎"}
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
                label={"お問い合わせ内容"}
              />
            </div>
            <div className={classes.send_button}>
              <Button
                label={
                  !isLoading ? (
                    "送信"
                  ) : (
                    <Icon size={16} type={iconTypes.loading} />
                  )
                }
                onClick={async () => {
                  if (
                    validation(
                      formName,
                      formMail,
                      formOccupation,
                      inquiryDetails
                    ) &&
                    !isLoading
                  ) {
                    setIsLoading(true);
                    setTimeout(() => {
                      toast.error(
                        "サーバーで予期せぬエラーが発生しました。時間を置いて再度実行してください。",
                        { duration: 1500 }
                      );
                      setIsLoading(false);
                    }, 3600);
                  }
                }}
              />
            </div>
          </div> */}
        </Section>
        <Footer
          homePageRef={homePageRef}
          aboutSectionRef={aboutSectionRef}
          serviceSectionRef={serviceSectionRef}
          contactSectionRef={contactSectionRef}
        />
      </div>}
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen}>
        <NavigationTab
          className={classes.tab}
          label={"ABOUT"}
          sectionRef={aboutSectionRef}
          onClick={() => setIsOpen(false)}
        />
        <NavigationTab
          className={classes.tab}
          label={"SERVICE"}
          sectionRef={serviceSectionRef}
          onClick={() => setIsOpen(false)}
        />
        <NavigationTab
          className={classes.tab}
          label={"CONTACT"}
          sectionRef={contactSectionRef}
          onClick={() => setIsOpen(false)}
        />
      </Overlay>
    </>
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
