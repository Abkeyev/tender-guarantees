import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccLink,
  BccSelect,
  BccButton,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MaskedInput from "react-maskedinput";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
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
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 140px",
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
      },
      checkboxText: {
        alignItems: "center",
        marginBottom: 20,
        marginTop: 15,
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
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

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

const Order = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();
  const [fio, setFio] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [iin, setIin] = React.useState("");

  return (
    <div className={classes.container}>
      <div className={classes.orderForm}>
        <Grid direction="column" container className={classes.innerOrderForm}>
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
              label={t("order.fio")}
              variant="filled"
              id="fio"
              name="fio"
              value={fio}
              onChange={(e: any) => setFio(e.target.value)}
            />
          </Grid>
          <Grid item>
            <BccInput
              variant="filled"
              fullWidth
              label={t("order.phone")}
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
              className={classes.inputStyle}
              fullWidth
              label={t("order.email")}
              variant="filled"
            />
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              className={classes.checkboxText}
            >
              <Grid item>
                <BccCheckbox />
              </Grid>
              <Grid item>
                <BccTypography type="p3">
                  {t("order.agree")}{" "}
                  <BccLink href="https://www.bcc.kz/" target="_blank">
                    {t("order.agree1")}
                  </BccLink>
                </BccTypography>
              </Grid>
            </Grid>
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
                  <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                    <BccTypography type="p3" className={classes.garant}>
                      {t("order.safety")}
                    </BccTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.btnWrap}>
                <BccButton variant="contained" color="primary">
                  Отправить заявку
                </BccButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Order;
