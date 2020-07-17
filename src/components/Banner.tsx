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
        background: `url(${process.env.PUBLIC_URL +
          "/bannerMob.png"}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      },
      containerOut: {
        background: "#ffffff",
      },
      innerContainer: {
        margin: "0 auto",
        width: "100%",
        padding: "12px 20px 40px",
        boxSizing: "border-box",
      },
      title: {
        marginTop: 50,
        marginBottom: 30,
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontSize: 28,
        lineHeight: "33px",
        color: "#141414",
      },
      subTitle: {
        marginBottom: 90,
        opacity: 0.7,
        fontWeight: "normal",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: "19px",
        color: "inherit",
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
        background: `url(${process.env.PUBLIC_URL + "/banner.png"}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "right top",
      },
      containerOut: {
        background: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        position: "relative",
        margin: "0 auto",
        width: "100%",
        padding: "30px 100px 150px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 30,
        marginTop: 90,
      },
      subTitle: {
        marginBottom: 180,
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
        color: "#141414",
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
    },
    link: {
      color: "#249052",
      textDecoration: "underline",
      cursor: "pointer",
    },
  })
);

const Banner = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const handleLangChange = (lang: any) => {
    props.changeLang(lang);
  };

  // const onClickAppStore = (e: any) => {
  //   e.preventDefault();
  //   ReactGA.event({
  //     category: "1button_starbusiness_calltoaction",
  //     action: "starbusiness_calltoaction",
  //   });
  //   window.open("http://onelink.to/q9jhwj", "_blank");
  // };

  const goToOnline = (e: any) => {
    e.preventDefault();
    // ReactGA.event({
    //   category: "1button_open_account_online_calltoaction",
    //   action: "Open_account_online_calltoaction",
    // });
    props.scrollToOrder();
  };

  // const onClickIB = (e: any) => {
  //   e.preventDefault();
  //   ReactGA.event({
  //     category: "1button_internetbanking_calltoaction",
  //     action: "interbanking_calltoaction",
  //   });
  //   window.open(
  //     "https://www.bcc.kz/product/system-internet-banking_yur/",
  //     "_blank"
  //   );
  // };

  return (
    <div className={classes.containerOut}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <a href="https://www.bcc.kz/">
                <img className={classes.logo} src="logo.svg" alt="BCC logo" />
              </a>
            </Grid>
            <Grid item>
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
            </Grid>
          </Grid>
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
          <BccButton
            className={classes.openBtn}
            variant="contained"
            color="primary"
            onClick={(e: any) => goToOnline(e)}
          >
            {t("banner.button")}
          </BccButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
