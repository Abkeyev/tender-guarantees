import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px",
      },
      inner: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 40,
      },
      star: {
        width: "100%",
        margin: "0 auto",
        alignItems: "center",
        padding: 30,
        backgdoundColor: "#fffff",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);",
        borderRadius: 8,
        marginBottom: 50,
        flexDirection: "column",
        "& > div:first-child": {
          width: "100%",
          marginBottom: 12,
          "& > img": {
            width: "100%",
          },
        },
        "& > div:nth-child(2)": {
          width: "100%",
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starSteps: {
        "& > span": {},
      },
      link: {
        display: "block",
        marginTop: 10,
        color: "#27AE60",
        textDecoration: "none",
        "& > span": {
          color: "inherit",
        },
      },
      saleTitle: {
        marginBottom: 10,
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#FAFAFA",
      },
      inner: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "60px 140px",
      },
      title: {
        marginBottom: 40,
      },
      star: {
        width: "100%",
        margin: "0 auto",
        padding: 30,
        backgdoundColor: "#fffff",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);",
        borderRadius: 8,
        marginBottom: 50,
        "& > div:first-child": {
          width: "20%",
          "& > img": {
            width: "100%",
          },
        },
        "& > div:nth-child(2)": {
          width: "80%",
        },
      },
      starBlock2: {
        paddingLeft: 24,
        alignSelf: "center",
      },
      starSteps: {
        "& > span": {},
      },
      link: {
        display: "block",
        marginTop: 10,
        color: "#27AE60",
        textDecoration: "none",
        "& > span": {
          color: "inherit",
        },
      },
      saleTitle: {
        marginBottom: 10,
      },
    },
  })
);

const Sale = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const onClickAppStore = () => {
    ReactGA.event({
      category: "BccCard_AppStore_download",
      action: "AppStore_download",
    });

    window.open(
      "https://apps.apple.com/kz/app/starbusiness/id1452748006",
      "_blank"
    );
  };

  const onClickGooglePlay = () => {
    ReactGA.event({
      category: "BccCard_GooglePlay_download",
      action: "GooglePlay_download",
    });

    window.open(
      "https://play.google.com/store/apps/details?id=bcc.sapphire&hl=ru",
      "_blank"
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <BccTypography type="h2" block className={classes.title}>
          {t("sale.title")}
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.star}
        >
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/sale.svg"} alt="Sale" />
          </Grid>
          <Grid item className={classes.starBlock2}>
            <BccTypography type="h3" block className={classes.saleTitle}>
              {t("sale.saleTitle")}
            </BccTypography>
            <BccTypography type="p1" block className={classes.starSteps}>
              <span>1. </span>
              {t("sale.part1")} - <span>{t("sale.0tg")}</span>
            </BccTypography>
            <BccTypography type="p1" block className={classes.starSteps}>
              <span>2. </span>
              {t("sale.part2")} - <span>{t("sale.0tg")}</span>
            </BccTypography>
            <BccTypography type="p1" block className={classes.starSteps}>
              <span>3. </span>
              {t("sale.part3")} - <span>{t("sale.0tg")}</span>
            </BccTypography>
            <BccTypography type="p1" block className={classes.starSteps}>
              <span>4. </span>
              {t("sale.part4")} - <span>{t("sale.0tg")}</span>
            </BccTypography>
            <BccTypography type="p1" block className={classes.starSteps}>
              <span>5. </span>
              {t("sale.part5")} - <span>{t("sale.0tg")}</span>
            </BccTypography>
            <BccLink
              href={
                props.lang === "ru" || props.lang === "en"
                  ? "https://www.bcc.kz/aktsii/aktsiya-5-0-v-vashu-polzu-/"
                  : "https://www.bcc.kz/kz/aktsii/aktsiya-5-0-v-vashu-polzu-/"
              }
              target="_blank"
              className={classes.link}
            >
              <BccTypography type="p1" block>
                {t("sale.read_more")}
              </BccTypography>
            </BccLink>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Sale;
