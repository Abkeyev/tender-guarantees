import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccButton,
  BccStepLabel,
  BccStepper,
  BccStep,
  BccToggleButton,
  BccToggleButtonGroup,
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
      qr: {
        "& > img": {
          height: "100%",
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
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 140px",
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
    },
  })
);

const Banner = (props: any) => {
  const steps1 = [1, 2, 3, 4, 5];
  const steps2 = [1, 2, 3, 4, 5, 6];
  const classes = useStyles({});
  const [activeStep, setActiveStep] = React.useState(1);
  const [steps, setActiveSteps] = React.useState(steps1);
  const [toggle, setToggle] = React.useState("ip");
  const { t } = useTranslation();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  function getStepContent(stepIndex: number) {
    if (toggle === "ip") {
      switch (stepIndex) {
        case 1:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img
                  src={process.env.PUBLIC_URL + "/step11.png"}
                  alt="StarBusiness"
                />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="h4" block className={classes.starBusiness}>
                  StarBusiness
                </BccTypography>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step1text1")}
                </BccTypography>
                <BccTypography
                  type="p2"
                  block
                  className={`${classes.starSteps} ${classes.lastSetp}`}
                >
                  <span>•</span> {t("online.step1text2")}
                </BccTypography>

                <Grid
                  container
                  justify="flex-start"
                  direction="row"
                  wrap="nowrap"
                >
                  <Grid item className={classes.mobileLinks}>
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
                  <Grid item className={classes.qr}>
                    <img src={process.env.PUBLIC_URL + "/qr.svg"} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        case 2:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/step2.png"} alt="Step2" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="h4" block className={classes.starBusiness}>
                  {t("online.step2title")}
                </BccTypography>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step2text1")}{" "}
                  <BccLink target="_blank" href="#">
                    {t("online.step2text1_2")}
                  </BccLink>
                </BccTypography>
                <BccTypography
                  type="p2"
                  block
                  className={`${classes.starSteps}`}
                >
                  <span>•</span> {t("online.step2text2")}
                </BccTypography>
                <BccTypography
                  type="p2"
                  block
                  className={`${classes.starSteps} ${classes.lastSetp}`}
                >
                  <span>•</span> {t("online.step2text3")}
                </BccTypography>
              </Grid>
            </Grid>
          );
        case 3:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/step3.png"} alt="Step3" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step3text1")}
                </BccTypography>
              </Grid>
            </Grid>
          );
        case 4:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/ip.gif"} alt="Step5" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step4text1")}
                </BccTypography>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step4text2")}
                </BccTypography>
              </Grid>
            </Grid>
          );
        case 5:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/step5.png"} alt="Step5" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step5text1")}
                </BccTypography>
              </Grid>
            </Grid>
          );
        default:
          return "Ошибка";
      }
    } else {
      switch (stepIndex) {
        case 1:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/step11.png"} alt="step1" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="h4" block className={classes.starBusiness}>
                  StarBusiness
                </BccTypography>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step1text1")}
                </BccTypography>
                <BccTypography
                  type="p2"
                  block
                  className={`${classes.starSteps} ${classes.lastSetp}`}
                >
                  <span>•</span> {t("online.step1text2")}
                </BccTypography>

                <Grid
                  container
                  justify="flex-start"
                  direction="row"
                  wrap="nowrap"
                >
                  <Grid item className={classes.mobileLinks}>
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
                  <Grid item className={classes.qr}>
                    <img src={process.env.PUBLIC_URL + "/qr.svg"} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        case 2:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/step2.png"} alt="Step2" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="h4" block className={classes.starBusiness}>
                  {t("online.step2title")}
                </BccTypography>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step2text1")}{" "}
                  <BccLink target="_blank" href="#">
                    {t("online.step2text1_2")}
                  </BccLink>
                </BccTypography>
                <BccTypography
                  type="p2"
                  block
                  className={`${classes.starSteps}`}
                >
                  <span>•</span> {t("online.step2text2")}
                </BccTypography>
                <BccTypography
                  type="p2"
                  block
                  className={`${classes.starSteps} ${classes.lastSetp}`}
                >
                  <span>•</span> {t("online.step2text3")}
                </BccTypography>
              </Grid>
            </Grid>
          );
        case 3:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/step3.png"} alt="Step3" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step3text1")}
                </BccTypography>
              </Grid>
            </Grid>
          );
        case 4:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/ul.gif"} alt="Step5" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step4text1")}
                </BccTypography>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step4text2")}
                </BccTypography>
              </Grid>
            </Grid>
          );
        case 5:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/step5.png"} alt="Step5" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step5text1")}
                </BccTypography>
              </Grid>
            </Grid>
          );
        case 6:
          return (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.star}
            >
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/step6.png"} alt="Step6" />
              </Grid>
              <Grid item className={classes.starBlock2}>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step6text1")}
                </BccTypography>
                <BccTypography type="p2" block className={classes.starSteps}>
                  <span>•</span> {t("online.step6text2")}
                </BccTypography>
              </Grid>
            </Grid>
          );
        default:
          return "Ошибка";
      }
    }
  }

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
      <BccTypography type="h2" block className={classes.title}>
        {t("online.title")}
      </BccTypography>
      <BccTypography
        type="h6"
        weight="normal"
        block
        className={classes.subitle}
      >
        {t("online.subtitle")}
      </BccTypography>
      <BccToggleButtonGroup
        value={toggle}
        exclusive
        onChange={(e: any, next: any) => {
          setActiveSteps(steps.length === steps1.length ? steps2 : steps1);
          setActiveStep(1);
          next && setToggle(next);
        }}
        className={classes.toggleGroup}
      >
        <BccToggleButton value="ip">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("online.toggleOne")}
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="ul">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("online.toggleTwo")}
          </BccTypography>
        </BccToggleButton>
      </BccToggleButtonGroup>
      <BccStepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <BccStep key={`step${label}`}>
            <BccStepLabel>
              <BccTypography type="p4">
                {t("online.step")} {label}
              </BccTypography>
            </BccStepLabel>
          </BccStep>
        ))}
      </BccStepper>
      <div>
        <div>
          <div className={classes.anim}>{getStepContent(activeStep)}</div>
          {activeStep === steps.length ? (
            <div>
              <BccTypography type="p2" className={classes.instructions}>
                {t("online.finish")}
              </BccTypography>
              <BccButton
                variant="contained"
                color="secondary"
                onClick={handleReset}
                className={classes.nextBtn}
              >
                {t("online.repeat")}
              </BccButton>
            </div>
          ) : (
            <div>
              <BccButton
                variant="text"
                disabled={activeStep === 1}
                onClick={handleBack}
                className={classes.backButton}
              >
                {t("online.back")}
              </BccButton>
              <BccButton
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.nextBtn}
              >
                {activeStep === steps.length
                  ? t("online.finish")
                  : t("online.next")}
              </BccButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
