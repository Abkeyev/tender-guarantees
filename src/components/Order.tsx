import React from "react";
import { Grid, MenuItem, Snackbar } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccButton,
} from "./BccComponents";
import api from "../api/Api";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MaskedInput from "react-maskedinput";
import { Alert as MuiAlert } from "@material-ui/lab";
import { useTranslation } from "react-i18next";
import BlockUi from "react-block-ui";
const webConfigEnv = (window as any).env;
const data = require("../data.json");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 20px",
      },
      title: {
        marginBottom: 40,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        lineHeight: "33px",
        color: "#141414",
      },

      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "100%",
        marginBottom: 30,
      },

      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "100%",
        textAlign: "left",
        background: "#FFFFFF",
        border: "1px solid #B9B9B9",
        borderRadius: 8,
      },
      innerOrderForm: {
        padding: "30px 20px",
      },
      titleForm: {
        marginBottom: 20,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "19px",
        color: "#141414",
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
        "& p": {
          fontSize: 14,
          marginTop: 2,
          opacity: 0.7,
          padding: 0,
          margin: 0,
        },
      },
      checkboxText: {
        alignItems: "flex-start",
        marginBottom: 20,
        marginTop: 15,
      },
      btnWrap: {
        width: "100%",
        "& > button": { width: "100%", marginBottom: 15 },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left", marginBottom: 16 },
    },
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 100px",
      },
      title: {
        marginBottom: 40,
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "50%",
        maxWidth: "50%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 20,
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
        "& p": {
          fontSize: 14,
          marginTop: 2,
          opacity: 0.7,
          padding: 0,
          margin: 0,
        },
      },
      checkboxText: {
        marginBottom: 20,
        marginTop: 15,
        "& > div:last-child": {
          marginLeft: 20,
          textAlign: "left",
        },
      },
      btnWrap: {
        width: "calc(50% - 10px)",
        "& > button": { width: "100%" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left" },
      radio: {
        marginBottom: 30,
      },
    },
    timer: {
      fontSize: 16,
      color: "#4D565F",
    },
    menuBranch: {
      display: "block",
      "& > p": {
        fontSize: 14,
        marginTop: 2,
        opacity: 0.7,
        padding: 0,
        margin: 0,
      },
    },
    linkReSendSms: {
      color: "#3F0259",
      fontSize: 16,
      height: "auto",
      padding: 0,
      lineHeight: "initial",
      cursor: "pointer",
      textTransform: "none",
      "&:hover, &:active": {
        textDecoration: "underline",
        opacity: 0.8,
      },
    },
    code: {
      margin: 0,
      "& input": {
        height: 62,
        boxSizing: "border-box",
      },
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}
const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="7(111) 111 11 11"
      placeholder={"7(707) 707 77 77"}
    />
  );
};

const cities = [
  "Актау",
  "Актобе",
  "Алматы",
  "Атырау",
  "Жезказган",
  "Караганда",
  "Кокшетау",
  "Костанай",
  "Кызылорда",
  "Нур-Султан",
  "Павлодар",
  "Петропавловск",
  "Семей",
  "Талдыкорган",
  "Тараз",
  "Туркестанская область",
  "Уральск",
  "Усть-Каменогорск",
  "Шымкент",
];

const Order = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();
  const [fio, setFio] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [iin, setIin] = React.useState("");
  const [city, setCity] = React.useState("");
  const [branch, setBranch] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [openError, setOpenError] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer]);

  const formatPhoneNumber = () => {
    let res = phone;
    if (phone.slice(0, 1) === "8") res = "7" + phone.slice(1);
    return res.replace(/\(|\)| /g, "");
  };

  const isValid = () => {
    return (
      fio.length > 1 &&
      city &&
      Object.keys(branch).length > 0 &&
      iin.length === 12 &&
      phone.replace("_", "").length === 16
    );
  };

  const handleClose = () => {
    setOpenError(false);
  };

  function getUrlParameter(name: string) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  const startProcess = () => {
    api.camunda
      .start({
        env: {
          production: webConfigEnv.PRODUCTION === "1",
        },
        client: {
          ...branch,
          fio: fio,
          iin: iin,
          phone: formatPhoneNumber(),
          utm_source: getUrlParameter("utm_source"),
          utm_medium: getUrlParameter("utm_medium"),
          utm_campaign: getUrlParameter("utm_campaign"),
          utm_term: getUrlParameter("utm_term"),
          utm_content: getUrlParameter("utm_content"),
        },
      })
      .then((res: any) => {
        setStep(2);
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const getOtp = () => {
    if (phone.substr(2, 1) !== "7") {
      setPhoneError(true);
      return;
    } else setPhoneError(false);
    setStep(1);
    setLoading(true);
    setTimer(90);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        localStorage.removeItem("userContext");
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onSubmitOtp = () => {
    setLoading(true);
    api.authOtp
      .confirmOtp({
        iin: iin,
        phone: formatPhoneNumber(),
        otp: code,
      })
      .then((userContext) => {
        localStorage.setItem("userContext", JSON.stringify(userContext));
        startProcess();
      })
      .catch((e: any) => {
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onReSend = () => {
    setLoading(true);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        setTimer(90);
        setCode("");
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={openError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            Возникла непредвиденная ошибка!
          </Alert>
        </Snackbar>
        <div className={classes.orderForm}>
          <Grid direction="column" container className={classes.innerOrderForm}>
            <BlockUi tag="div" blocking={isLoading}>
              {step === 0 ? (
                <>
                  <Grid item>
                    <BccTypography
                      type="h2"
                      weight="medium"
                      block
                      className={classes.titleForm}
                    >
                      {t("order.title")}
                    </BccTypography>
                    <BccTypography
                      type="p1"
                      weight="medium"
                      block
                      className={classes.subTitleForm}
                    >
                      {t("order.subtitle")}
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label={t("order.fio") + "*"}
                      variant="filled"
                      id="fio"
                      name="fio"
                      value={fio}
                      onChange={(e: any) => setFio(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={t("order.iin") + "*"}
                      id="iin"
                      name="iin"
                      value={iin}
                      onChange={(e: any) =>
                        setIin(e.target.value.replace(/\D/g, "").substr(0, 12))
                      }
                      variant="filled"
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      variant="filled"
                      fullWidth
                      label={t("order.phone") + "*"}
                      onChange={(e: any) => setPhone(e.target.value)}
                      className={classes.inputStyle}
                      id="phone"
                      name="phone"
                      value={phone}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: BccMaskedInput as any,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={t("order.city") + "*"}
                      id="city"
                      name="city"
                      value={city}
                      onChange={(e: any) => setCity(e.target.value)}
                      variant="outlined"
                      select
                    >
                      {data
                        .filter(
                          (d: any, index: number, self: any) =>
                            index ===
                            self.findIndex((dd: any) => dd.city === d.city)
                        )
                        .map((c: any, i: number) => (
                          <MenuItem value={c.city} key={i}>
                            {c.city}
                          </MenuItem>
                        ))}
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={t("order.branch") + "*"}
                      id="branch"
                      name="branch"
                      value={Object.keys(branch).length === 0 ? "" : branch}
                      onChange={(e: any) => {
                        console.log(e.target.value);
                        setBranch(e.target.value);
                      }}
                      variant="outlined"
                      select
                    >
                      {data
                        .filter((d: any) => d.city === city)
                        .map((c: any, i: number) => (
                          <MenuItem
                            value={c}
                            key={i}
                            className={classes.menuBranch}
                          >
                            {c.branch}
                            <br />
                            <p>{c.address}</p>
                          </MenuItem>
                        ))}
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <Grid container justify="space-between">
                      <Grid item className={classes.btnWrap}>
                        <Grid container spacing={2}>
                          <Grid item>
                            <img
                              src={process.env.PUBLIC_URL + "/safety.svg"}
                              className={classes.icon}
                              alt="order_security"
                            />
                          </Grid>
                          <Grid
                            item
                            xl={true}
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                          >
                            <BccTypography type="p3" className={classes.garant}>
                              {t("order.safety")}
                            </BccTypography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.btnWrap}>
                        <BccButton
                          variant="contained"
                          disabled={!isValid()}
                          onClick={() => getOtp()}
                          color="primary"
                        >
                          {t("order.send")}
                        </BccButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : step === 1 ? (
                <>
                  <Grid item>
                    <BccTypography
                      type="h2"
                      weight="medium"
                      block
                      className={classes.titleForm}
                    >
                      Подтверждение номера телефона
                    </BccTypography>
                    <BccTypography
                      type="p1"
                      weight="medium"
                      block
                      className={classes.subTitleForm}
                    >
                      Введите полученный в SMS код для подтверждения контакта
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      style={{ marginTop: "15px", alignItems: "center" }}
                      spacing={4}
                    >
                      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <BccInput
                          variant="outlined"
                          className={classes.code}
                          margin="normal"
                          fullWidth
                          id="code"
                          name="code"
                          value={code}
                          onChange={(e: any) =>
                            setCode(
                              e.target.value.replace(/\D/g, "").substr(0, 6)
                            )
                          }
                          label={"Код подтверждения"}
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <BccButton
                          onClick={() => onSubmitOtp()}
                          variant="contained"
                          className={classes.submit}
                          disabled={!isValid()}
                        >
                          Отправить
                        </BccButton>
                      </Grid>
                      {timer !== 0 ? (
                        <Grid item>
                          <BccTypography type="p3" className={classes.timer}>
                            Отправить ещё через ({timer})
                          </BccTypography>
                        </Grid>
                      ) : (
                        <Grid item>
                          <BccButton
                            variant="text"
                            className={classes.linkReSendSms}
                            onClick={() => onReSend()}
                          >
                            Отправить повторно
                          </BccButton>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </>
              ) : (
                <Grid item>
                  <div className={classes.successForm}>
                    <img src="success.svg" alt="" />
                    <div>Ваша заявка успешно принята</div>
                    <span>Наш менеджер свяжется с вами в ближайшее время</span>
                  </div>
                </Grid>
              )}
            </BlockUi>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Order;
