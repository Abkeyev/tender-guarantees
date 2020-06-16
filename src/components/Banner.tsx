import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        background: `url(${process.env.PUBLIC_URL + "/banner.svg"}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      innerContainer: {
        margin: "0 auto",
        width: "100%",
        padding: "60px 20px 40px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 15,
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontSize: 28,
        lineHeight: "33px",
        color: "#141414",
      },
      subTitle: {
        marginBottom: 30,
        opacity: 0.7,
        fontWeight: "normal",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: "19px",
        color: "#5B5B5B",
      },
      blockText: {
        marginBottom: 5,
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },

      firstBlock: {
        marginBottom: 15,
      },

      openBtn: {
        minWidth: 300,
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Roboto",
        lineHeight: "21px",
        color: "#ffffff",
        width: "100%",
        marginTop: 95,
      },
      select: {
        position: "absolute",
        opacity: 0.5,
        right: 20,
        top: 50,
        color: "#141414",
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        background: `url(${process.env.PUBLIC_URL + "/banner.svg"}) no-repeat`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundColor: "#f3f6f8",
      },
      innerContainer: {
        maxWidth: 1280,
        position: "relative",
        margin: "0 auto",
        width: "100%",
        padding: "90px 140px 115px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 15,
      },
      subTitle: {
        marginBottom: 30,
        opacity: 0.7,
      },
      block: {
        marginBottom: 30,
      },
      firstBlock: {
        marginRight: 70,
      },
      blockText: {
        marginBottom: 5,
      },
      openBtn: { minWidth: 300, fontSize: 18, fontWeight: "bold" },
      select: {
        position: "absolute",
        opacity: 0.5,
        right: 0,
        top: 10,
        color: "#141414",
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
    },
  })
);

const Banner = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const openBtn = () => {};

  const handleLangChange = (lang: any) => {
    props.changeLang(lang);
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Select
          className={classes.select}
          value={props.lang}
          onChange={(e: any) => handleLangChange(e.target.value)}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          <MenuItem value="ru">РУС</MenuItem>
          <MenuItem value="kz">КАЗ</MenuItem>
        </Select>
        <BccTypography type="h1" block className={classes.title}>
          {t("banner.title")}
        </BccTypography>
        <BccTypography
          type="h3"
          weight="normal"
          block
          className={classes.subTitle}
        >
          {t("banner.title_desc")}
        </BccTypography>
        <Grid container direction="row" className={classes.block}>
          <Grid item className={classes.firstBlock}>
            <BccTypography
              type="h4"
              weight="bold"
              block
              className={classes.blockText}
            >
              {t("banner.block1")}
            </BccTypography>
            <BccTypography type="p2" block>
              {t("banner.block1_1")}{" "}
              <BccLink href="https://www.bcc.kz/" target="_blank">
                {t("banner.block1_2")}
              </BccLink>
            </BccTypography>
          </Grid>
          <Grid item>
            <BccTypography
              type="h4"
              weight="bold"
              block
              className={classes.blockText}
            >
              {t("banner.block1")}
            </BccTypography>
            <BccTypography type="p2" block>
              {t("banner.block2_1")}{" "}
              <BccLink href="https://www.bcc.kz/" target="_blank">
                {t("banner.block2_2")}
              </BccLink>
            </BccTypography>
          </Grid>
        </Grid>
        <BccButton
          className={classes.openBtn}
          variant="contained"
          color="primary"
          onClick={() => openBtn()}
        >
          {t("banner.button")}
        </BccButton>
      </div>
    </div>
  );
};

export default Banner;
