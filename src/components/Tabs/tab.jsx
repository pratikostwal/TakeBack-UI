import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Executiveview from '../Pages/Executiveview';
import Dfa from '../Pages/Dfa';
import Ars from '../Pages/Ars';
import Techrefresh from '../Pages/Techrefresh';
import Tradein from '../Pages/Tradein';

const ResponsiveTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
      style={{background:"#F1F1F1"}}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="responsive tabs example"
      >
        <Tab label="Executive View" />
        <Tab label="DFS" />
        <Tab label="ARS" />
        <Tab label="Tech Refresh" />
        <Tab label="Trade In" />
        {/* <Tab label="Goal Projection" />
        <Tab label="Channel" />
        <Tab label="Partner" /> */}
        {/* Add more tabs as needed */}
      </Tabs>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== 0}
        id={`responsive-tabpanel-${0}`}
        aria-labelledby={`responsive-tab-${0}`}
      >
        <Executiveview />
      </Typography>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== 1}
        id={`responsive-tabpanel-${1}`}
        aria-labelledby={`responsive-tab-${1}`}
      >
        <Dfa />
      </Typography>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== 2}
        id={`responsive-tabpanel-${2}`}
        aria-labelledby={`responsive-tab-${2}`}
      >
        <Ars />
      </Typography>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== 3}
        id={`responsive-tabpanel-${3}`}
        aria-labelledby={`responsive-tab-${3}`}
      >
        <Techrefresh />
      </Typography>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== 4}
        id={`responsive-tabpanel-${4}`}
        aria-labelledby={`responsive-tab-${4}`}
      >
        <Tradein />
      </Typography>
      {/* Add more tab panels as needed */}
    </div>
  );
};

export default ResponsiveTabs;
