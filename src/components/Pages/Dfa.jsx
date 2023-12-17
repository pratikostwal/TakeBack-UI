import React from "react";
import { Grid, Card, Typography, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const cardsData = [
  {
    id: 1,
    text: "Goal Contribution",
    percentage: "6%",
    label: "FY24 YTD",
  },
  {
    id: 2,
    text: "Leades Units",
    percentage: "21.6M",
    // label: "Metric Tons",
  },
  {
    id: 3,
    text: "Returned Ubits",
    percentage: "2.7M",
    // label: "Metric Tons",
  },
  {
    id: 4,
    text: "Leased Weight",
    percentage: "172,977",
    label: "MT",
  },
  {
    id: 5,
    text: "Returned Weight",
    percentage: "9,689",
    label: "MT",
  },
  {
    id: 6,
    text: "Open Leases",
    percentage: "57235",
    // label: "Metric Tons",
  },
  {
    id: 7,
    text: "Remarketing Revenue",
    percentage: "$95M",
    label: "FY24 YTD",
  },
];

const CardStyled = styled(Card)({
  marginTop: "1rem",
  marginLeft:".5rem"
});

const Dfa = () => {
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

export default Dfa;
