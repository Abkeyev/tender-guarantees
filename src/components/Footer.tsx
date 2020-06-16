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
        backgroundColor: "#1F7042",
      },
      innerContainer: {
        maxWidth: "100%",
        margin: "0 auto",
        width: "100%",
        padding: "40px 20px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 50,
      },
      footerOne: { width: "calc(50% - 20px)" },
      footerTwo: { width: "calc(50% - 20px)" },
      footIcon: {
        display: "block",
        height: 20,
        width: 20,
      },
      footIconSocial: {
        display: "block",
        height: 20,
        width: 20,
        marginRight: 15,
      },
      footLink: {
        marginLeft: 10,
        textDecoration: "none",
        color: "white",
        flexDirecton: "row",
        "&:hover": {
          textDecoration: "underline",
        },
        "& > span": {
          fontWeight: "bold",
        },
      },
      footItem: {
        marginBottom: 20,
      },
      footItemSocial: {
        marginTop: 30,
      },
      footBtn: {
        width: "100%",
        maxWidth: 250,
        color: "#1F7042",
        lineHeight: "auto",
        margin: "30px 0 20px",
      },
      mobileTitle: {
        color: "#CCCFD1",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
      },
      appLinks: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        width: "100%",
        "& > a": {
          disaply: "block",
          width: "calc(50% - 5px)",
          "& > img": { width: "100%", maxWidth: 150 },
        },
      },
      footLinks: {
        marginBottom: 20,
        "& > div": {
          display: "flex",
          flexDirection: "column",
          width: "calc(50% - 15px)",
          "& > a": {
            display: "inline-block",
            color: "white",
            textDecoration: "none",
            fontSize: 16,
            marginBottom: 24,
            "&:hover": {
              textDecoration: "underline",
            },
          },
          "& > a:last-child": { marginBottom: 0 },
        },
      },
      footLicen: {
        color: "#CCCFD1",
        lineHeight: "19px",
        fontSize: 16,
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#1F7042",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "40px 100px 80px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 50,
      },
      footerOne: { width: "35%" },
      footerTwo: { width: "calc(65% - 50px)" },
      footIcon: {
        display: "block",
        height: 20,
        width: 20,
      },
      footIconSocial: {
        display: "block",
        height: 20,
        width: 20,
        marginRight: 15,
      },
      footLink: {
        marginLeft: 10,
        textDecoration: "none",
        color: "white",
        "&:hover": {
          textDecoration: "underline",
        },
        "& > span": {
          fontWeight: "bold",
        },
      },
      footItem: {
        marginBottom: 20,
      },
      footItemSocial: {
        marginTop: 30,
      },
      footBtn: {
        width: "100%",
        color: "#1F7042",
        maxWidth: 250,
        lineHeight: "20px",
        margin: "30px 0 20px",
      },
      mobileTitle: {
        color: "#CCCFD1",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
      },
      appLinks: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        width: "100%",
        "& > a": {
          disaply: "block",
          width: "calc(50% - 15px)",
          "& > img": { width: "100%" },
        },
      },
      footLinks: {
        marginBottom: 20,
        "& > div": {
          display: "flex",
          flexDirection: "column",
          width: "calc(50% - 15px)",
          "& > a": {
            display: "inline-block",
            color: "white",
            textDecoration: "none",
            fontSize: 16,
            marginBottom: 24,
            "&:hover": {
              textDecoration: "underline",
            },
          },
          "& > a:last-child": { marginBottom: 0 },
        },
      },
      footLicen: {
        color: "#CCCFD1",
        lineHeight: "19px",
        fontSize: 16,
      },
    },
    [theme.breakpoints.down("xs")]: {
      foot: {
        flexDirection: "column",
      },
      foot2: {
        flexDirection: "column",
      },
      footerOne: { width: "100%" },
      footerTwo: { width: "100%" },
    },
  })
);

const Footer = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const openBtn = () => {};

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Grid
          container
          justify="space-between"
          direction="row"
          wrap="nowrap"
          className={classes.foot}
        >
          <Grid item className={classes.footerOne}>
            <Grid container direction="column">
              <Grid item className={classes.footItem}>
                <Grid container>
                  <Grid item>
                    <img
                      className={classes.footIcon}
                      src={process.env.PUBLIC_URL + "/f_phone.svg"}
                    />
                  </Grid>
                  <Grid item>
                    <a href="#" target="_blank" className={classes.footLink}>
                      <span>605</span> {t("footer.freemob")}
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.footItem}>
                <Grid container>
                  <Grid item>
                    <img
                      className={classes.footIcon}
                      src={process.env.PUBLIC_URL + "/f_call.svg"}
                    />
                  </Grid>
                  <Grid item>
                    <a href="#" target="_blank" className={classes.footLink}>
                      <span>8(727)244-30-44</span>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <img
                      className={classes.footIcon}
                      src={process.env.PUBLIC_URL + "/f_mail.svg"}
                    />
                  </Grid>
                  <Grid item>
                    <a href="#" target="_blank" className={classes.footLink}>
                      <span>info@bcc.kz</span>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.footItemSocial}>
                <Grid container>
                  <Grid item>
                    <a href="#" target="_blank">
                      <img
                        className={classes.footIconSocial}
                        src={process.env.PUBLIC_URL + "/ig.svg"}
                      />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="#" target="_blank">
                      <img
                        className={classes.footIconSocial}
                        src={process.env.PUBLIC_URL + "/fb.svg"}
                      />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="#" target="_blank">
                      <img
                        className={classes.footIconSocial}
                        src={process.env.PUBLIC_URL + "/vk.svg"}
                      />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <BccButton
                  className={classes.footBtn}
                  variant="outlined"
                  color="primary"
                >
                  {t("footer.sms")}
                </BccButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.footerTwo}>
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.footLinks}
            >
              <Grid item>
                <a href="#" target="_blank">
                  {t("footer.about")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.sale")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.tarif")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.vacancy")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.requisites")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.base")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.compilation")}
                </a>
              </Grid>
              <Grid item>
                <a href="#" target="_blank">
                  {t("footer.press")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.qa")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.center")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.control")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.invest")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.info")}
                </a>
                <a href="#" target="_blank">
                  {t("footer.right")}
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          direction="row"
          wrap="nowrap"
          className={classes.foot2}
        >
          <Grid item className={classes.footerOne}>
            <Grid container>
              <Grid item className={classes.mobileTitle}>
                {t("footer.mobile")}
              </Grid>
              <Grid item className={classes.appLinks}>
                <a
                  href="https://apps.apple.com/kz/app/starbusiness/id1452748006"
                  target="_blank"
                >
                  <img src={process.env.PUBLIC_URL + "/as.svg"} />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=bcc.sapphire&hl=ru"
                  target="_blank"
                >
                  <img src={process.env.PUBLIC_URL + "/gp.svg"} />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.footerTwo}>
            <div className={classes.footLicen}>{t("footer.lic")}</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
