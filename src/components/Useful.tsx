import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccButton,
  BccTabs,
  BccTab,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#fff",
      },
      innerContainer: {
        maxWidth: "100%",
        margin: "0 auto",
        width: "100%",
        padding: "40px 20px",
        boxSizing: "border-box",
      },
      title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414",
        marginBottom: 40,
      },
      tabs: {
        marginTop: 40,
        fontSize: 16,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "contain",
        "& > span": {
          color: "#27AE60",
        },
        "& > div": {
          flexWrap: "wrap",
          "& > div:first-child": {
            order: 2,
            marginBottom: 0,
          },
          "& > div": {
            width: "100%",
            order: 1,
            marginBottom: 12,
            "& > img": {
              width: "100%",
              maxHeight: 250,
            },
          },
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "& > button": {
            maxWidth: "100%",
            "& > span": {
              whiteSpace: "nowrap",
            },
          },
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#fff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "40px 100px 60px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 40,
        textAlign: "center",
      },
      tabs: {
        marginTop: 40,
        minHeight: 350,
        fontSize: 16,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "contain",
        "& > span": {
          color: "#27AE60",
        },
        "& > div > div": {
          width: "calc(50% - 15px)",
          "& > img": {
            width: "100%",
            maxHeight: 250,
          },
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "& > button": {
            maxWidth: "none",
            "& > span": {
              whiteSpace: "nowrap",
            },
          },
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      link: {
        textDecoration: "none",
      },
    },
  })
);

const items = [
  {
    img: "/u1.svg",
    content: [1, 2, 3, 4, 5, 6],
    url: "https://www.bcc.kz/product/currency-control/",
  },
  {
    img: "/u2.svg",
    content: [1, 2, 3, 4],
    url: "https://www.bcc.kz/product/system-internet-banking_yur/",
  },
  {
    img: "/u3.svg",
    content: [[0, 1, 2], 2, 3, 4, 5, 6],
    url: "https://www.bcc.kz/product/overdraft/",
  },
  {
    img: "/u4.svg",
    content: [1, 2, 3, 4, 5, 6],
    url: "https://www.bcc.kz/product/tender-guarantees/",
  },
  {
    img: "/u5.svg",
    content: [1, 2, 3, 4],
    url: "https://www.bcc.kz/product/salary-project/",
  },
];

const Useful = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block className={classes.title}>
          {t("useful.title")}
        </BccTypography>

        <BccTabs
          value={index}
          onChange={(e: any, i: number) => setIndex(i)}
          className={classes.tab}
        >
          {items &&
            items.map((item: any, i: number) => {
              return <BccTab label={t(`useful.${i + 1}`)} />;
            })}
        </BccTabs>
        <div className={classes.tabs}>
          <Grid container justify="space-between" wrap="nowrap">
            <Grid item>
              {items[index].content.map((c: any, ind: number) => {
                return c.length > 1 ? (
                  c.map((cc: any, ii: number) => {
                    t(`useful.${index + 1}text${c}${ii}`);
                  })
                ) : (
                  <>
                    <span>•</span> {t(`useful.${index + 1}text${c}`)}
                    <br />
                    <br />
                  </>
                );
              })}
              <BccLink
                href={items[index].url}
                target="_blank"
                className={classes.link}
              >
                <BccButton
                  style={{
                    textTransform: "capitalize",
                    padding: 0,
                  }}
                  variant="text"
                >
                  {t("useful.more")}
                </BccButton>
              </BccLink>
            </Grid>
            <Grid item>
              <img src={`${process.env.PUBLIC_URL + items[index].img}`} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Useful;
