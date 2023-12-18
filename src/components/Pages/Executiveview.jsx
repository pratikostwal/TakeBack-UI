import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import DonutChart from "../Charts/DonutChart";
import StackedColumnChart from "../Charts/StackedColumnChart";
import PieChart from "../Charts/PieChart";
import Map from "../Maps/Map";

const cardsData = [
  {
    id: 1,
    text: "% of Goal Met",
    percentage: "26%",
    label: "FY24 YTD",
  },
  {
    id: 2,
    text: "Product Returned YTD",
    percentage: "62,400",
    label: "Metric Tons",
  },
  {
    id: 3,
    text: "Product Sold YTD",
    percentage: "240,000",
    label: "Metric Tons",
  },
  {
    id: 4,
    text: "FY31 Target",
    percentage: "400.000",
    label: "Metric Tons",
  },
];

const CardStyled = styled(Card)({
  margin: "10px",
  position: "relative",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, .2)",
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "5px",
  },
});

const Executiveview = () => {
  return (
    <>
      <Grid container spacing={0.5} style={{paddingTop:"30px" ,paddingLeft:"10px", paddingRight:"10px"}}>
        {cardsData.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.id}>
            <CardStyled style={{ backgroundColor: card.color }}>
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
                      fontSize: "8px",
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

      <Grid container spacing={2} style={{paddingTop:"30px" ,paddingLeft:"20px", paddingRight:"20px"}}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <DonutChart />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <StackedColumnChart />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <PieChart />
          </Card>
        </Grid>
      </Grid>

      <Grid style={{paddingTop:"30px" ,paddingLeft:"10px", paddingRight:"10px"}}>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <Map />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Executiveview;
