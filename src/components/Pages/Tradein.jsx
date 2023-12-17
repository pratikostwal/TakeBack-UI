import React from "react";
import { Grid, Card, Typography, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const cardsData = [
  {
    id: 1,
    text: "% of Goal Met YTD",
    percentage: "2%",
    label: "FY24 YTD",
  },
  {
    id: 2,
    text: "Quotes Requested",
    percentage: "130,000",
    // label: "MT",
  },
  {
    id: 3,
    text: "Quotes Converted",
    percentage: "32,292",
    // label: "MT",
  },
  {
    id: 4,
    text: "Returned Weight",
    percentage: "775",
    label: "MT",
  },
  {
    id: 5,
    text: "Raturned Unit",
    percentage: "96,875",
    // label: "MT",
  },
  {
    id: 6,
    text: "Avg. Disposition Duration",
    percentage: "45 Days",
    // label: "FY24 YTD",
  },
  {
    id: 7,
    text: "Revenue Share",
    percentage: "$1.79M",
    label: "FY24 YTD",
  },
];

const CardStyled = styled(Card)({
  marginTop: "1rem",
  marginLeft: ".5rem",
});

const Tradein = () => {
  return (
    <Grid container spacing={1}>
      {cardsData.map((card) => (
        <Grid item xs={12} sm={3} md={3} lg={1.7} xl={1.7} key={card.id}>
          <CardStyled>
            <CardContent>
              <Typography
                component="div"
                style={{
                  color: "#0076CE",
                  fontSize: "10px",
                  marginBottom: "10px",
                }}
              >
                {card.text}
              </Typography>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "#272727",
                    marginRight: "2px",
                    marginBottom: "-3%",
                  }}
                >
                  {card.percentage}
                </Typography>
                <Typography
                  style={{
                    fontSize: "12px",
                    color: "#525462",
                  }}
                >
                  ({card.label})
                </Typography>
              </div>
            </CardContent>
          </CardStyled>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tradein;
