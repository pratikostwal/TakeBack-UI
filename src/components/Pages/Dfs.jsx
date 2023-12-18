import React from "react";
import { Grid, Card, Typography, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import DsfFilterButton from "../GroupButton/DsfFilterbutton"
import TypesofLeaseChart from "../Charts/TypesofLeaseChart";
import UnitsLeasedChart from "../Charts/UnitsLeasedChart"
import AssetReturnedChart from "../Charts/AssetReturnedChart"
import DispositionDecisionChart from "../Charts/DispositionDecisionChart"
import RemarketingChannelChart from "../Charts/RemarketingChannelChart"
import RevinuePotentialChart from "../Charts/RevinuePotentialChart"
import PotentialToReturnYOYChart from "../Charts/PotentialToReturnYOYChart"


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
  marginLeft: ".5rem"
});

const Dfa = () => {
  return (
    <>
      <DsfFilterButton />
      <Grid container spacing={1} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
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
      <Grid container spacing={2} style={{paddingTop:"30px" ,paddingLeft:"20px", paddingRight:"20px"}}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
           <TypesofLeaseChart/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
          <UnitsLeasedChart/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
          <AssetReturnedChart/>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{paddingTop:"30px" ,paddingLeft:"20px", paddingRight:"20px"}}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <DispositionDecisionChart/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
          <RemarketingChannelChart/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
          <RevinuePotentialChart/>
          </Card>
        </Grid>
      </Grid>

      <Grid style={{paddingTop:"30px" ,paddingLeft:"10px", paddingRight:"10px"}}>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <PotentialToReturnYOYChart/>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dfa;
