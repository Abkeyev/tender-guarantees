import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccToggleButton,
  BccToggleButtonGroup,
  BccLink,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
} from "./BccComponents";
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
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "100%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            width: "70%",
            margin: "0 auto",
          },
          "&  > video": {
            width: "70%",
            margin: "0 auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#249052",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#249052",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        "& > div": {
          width: "100%",
        },
      },
      qr: {
        "& > img": {
          width: "50%",
        },
      },
      mobileLinks: {
        marginRight: 6,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            display: "block",
            width: 120,
          },
        },
      },
      toggleGroup: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        border: "1px solid #27AE60",
        borderRadius: "100px",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          width: "50%",
          borderRadius: "100px!important",
          border: "none",
        },
      },
      toggleText: {
        textTransform: "initial",
        letterSpacing: "initial",
        color: "#80868C",
      },
      stepper: {
        padding: "40px 0 60px",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
      item3: {
        display: "flex",
        width: "100%",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        marginBottom: 50,
        "& > img": {
          marginBottom: 42,
          marginRight: 24,
          height: 60,
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 100px",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "80%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            height: 350,
          },
          "&  > video": {
            height: 350,
            width: "auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#249052",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#249052",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        "& > div": {
          width: "calc(50% - 18px)",
        },
      },
      qr: {
        "& > img": {
          height: "100%",
        },
      },
      mobileLinks: {
        marginRight: 36,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            width: 120,
            display: "block",
          },
        },
      },
      toggleGroup: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        border: "1px solid #27AE60",
        borderRadius: "100px",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          width: "50%",
          borderRadius: "100px!important",
          border: "none",
        },
      },
      toggleText: {
        textTransform: "initial",
        letterSpacing: "initial",
        color: "#80868C",
      },
      stepper: {
        padding: "40px 0 60px",
      },
      backButton: {
        minWidth: 250,
        textTransform: "capitalize!important",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
      item3: {
        display: "flex",
        width: "calc(33% - 20px)",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        marginBottom: 50,
        "& > img": {
          marginBottom: 42,
          marginRight: 24,
          height: 60,
        },
      },
    },
    link: {
      color: "#249052",
      textDecoration: "underline",
      cursor: "pointer",
    },
    calc: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      alignItems: "center",
      "& > div:first-child": {
        width: "calc(60% - 15px)",
      },
      "& > div:last-child": {
        width: "calc(40% - 15px)",
        background: "#FAFAFA",
        borderRadius: 8,
        padding: 24,
      },
    },
    paymentWrap: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      marginBottom: 60,
    },
    paymentWrapSec: {
      marginBottom: 0,
    },
    sliderWrap: {
      position: "relative",
      width: "100%",
      "& > div > div": {
        width: "100%",
      },
    },
    sliderRange: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -20,
      color: "#b3b6ba",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
    },
    tabsContent: {
      marginTop: 56,
    },
    input: {
      display: "block",
      width: "100%",
    },
    right: {
      float: "right",
    },
    sumTitle: {
      marginBottom: 16,
    },
    sumText: {
      marginBottom: 24,
    },
    docs: {
      marginTop: 24,
      "& > div": {
        width: "calc(33% - 20px)",
        marginBottom: 40,
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        "& > img": {
          marginRight: 24,
        },
      },
    },
    table: {
      "& > tr > td > tr": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      },
      "& > tr > td > tr td": {
        borderBottom: 0,
        padding: "16px 16px 0 0",
        "& tr:last-child > td": { padding: "0 16px 0 0" },
        "& td": {
          padding: "0 16px 16px 0",
        },
      },
    },
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const [toggle, setToggle] = React.useState("overview");
  const { t } = useTranslation();

  return (
    <div className={classes.container} ref={props.refProp}>
      <BccToggleButtonGroup
        value={toggle}
        exclusive
        onChange={(e: any, next: any) => {
          next && setToggle(next);
        }}
        className={classes.toggleGroup}
      >
        <BccToggleButton value="overview">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.1")}
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="types">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.2")}
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="rates">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.3")}
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="documents">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.4")}
          </BccTypography>
        </BccToggleButton>
      </BccToggleButtonGroup>
      <div className={classes.tabsContent}>
        {toggle === "overview" ? (
          <Grid container direction="row" justify="space-between">
            <Grid item className={classes.item3}>
              <img src={process.env.PUBLIC_URL + "/icons/currency.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.1_1")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item3}>
              <img src={process.env.PUBLIC_URL + "/icons/period.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.1_2")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item3}>
              <img src={process.env.PUBLIC_URL + "/icons/tengeu.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.1_3")}
              </BccTypography>
            </Grid>
          </Grid>
        ) : toggle === "types" ? (
          <Grid container direction="row" justify="space-between">
            <Grid item className={classes.item3}>
              <img src={process.env.PUBLIC_URL + "/icons/roundperd.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.2_1")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item3}>
              <img src={process.env.PUBLIC_URL + "/icons/periodt.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.2_2")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item3}>
              <img src={process.env.PUBLIC_URL + "/icons/givet.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.2_3")}
              </BccTypography>
            </Grid>
          </Grid>
        ) : toggle === "documents" ? (
          <Grid container justify="space-between" className={classes.docs}>
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/icons/docFile.svg"} />
              <BccLink
                target="_blank"
                href="https://www.bcc.kz/thelist_kaz.pdf"
              >
                {t("tabs.4_1")} [KZ]
              </BccLink>
            </Grid>
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/icons/docFile.svg"} />
              <BccLink
                target="_blank"
                href="https://www.bcc.kz/thelist_rus.pdf"
              >
                {t("tabs.4_1")} [RU]
              </BccLink>
            </Grid>
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/icons/docFile.svg"} />
              <BccLink
                target="_blank"
                href="https://www.bcc.kz/thelist_eng.pdf"
              >
                {t("tabs.4_1")} [EN]
              </BccLink>
            </Grid>
          </Grid>
        ) : toggle === "rates" ? (
          <BccTableContainer>
            <BccTable aria-label="simple table">
              <BccTableHead>
                <BccTableRow>
                  <BccTableCell>{t("tabs.3_1")}</BccTableCell>
                  <BccTableCell>{t("tabs.3_2")}</BccTableCell>
                </BccTableRow>
              </BccTableHead>
              <BccTableBody className={classes.table}>
                <BccTableRow>
                  <BccTableCell>{t("tabs.3_1_1")}</BccTableCell>
                  <BccTableCell>{t("tabs.2_1")}</BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>{t("tabs.3_1_2")}</BccTableCell>
                  <BccTableCell>{t("tabs.2_2")}</BccTableCell>
                </BccTableRow>
              </BccTableBody>
            </BccTable>
          </BccTableContainer>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tabs;
