import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Phone Number" {...a11yProps(0)} />
        <Tab label="Address" {...a11yProps(1)} />
        <Tab label="Email Address" {...a11yProps(2)} />
        <Tab label="Operating hours" {...a11yProps(3)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <h1>(617) 353-2000</h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h1>Boston, MA 02215</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h1>imnotlatte@gmail.com</h1>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h3>Mon to Fri: 11am-5pm</h3>
      <h3>Sat to Sun: 11am-3pm</h3>
      </TabPanel>
    
    </Box>
  );
}
