import React from "react";
import { Grid, Card, Typography, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const cardsData = [
  {
    id: 1,
    text: "Goal Contribution",
    percentage: "8%",
    label: "FY24 YTD",
  },
  {
    id: 2,
    text: "Sold Weight YTD",
    percentage: "65300",
    label: "MT",
  },
  {
    id: 3,
    text: "Returned Weight YTD",
    percentage: "4,824",
    label: "MT",
  },
  {
    id: 4,
    text: "Attach Rate (Servers) YTD",
    percentage: "15%",
    // label: "MT",
  },
  {
    id: 5,
    text: "Attach Rate (Storages) YTD",
    percentage: "22%",
    // label: "MT",
  },
  {
    id: 6,
    text: "Remarketing Revenue YTD",
    percentage: "$10.9M",
    label: "FY24 YTD",
  },
];

const CardStyled = styled(Card)({
  marginTop: "1rem",
  marginLeft: ".5rem",
});

const Techrefresh = () => {
  return (
    <Grid container spacing={1}>
      {cardsData.map((card) => (
        <Grid item xs={12} sm={4} md={4} lg={2} xl={2} key={card.id}>
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

export default Techrefresh;
