import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Personal from './Personal';
import Shared from './Shared';

const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h1>Home Page</h1>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Personal</Tab>
          <Tab>Shared</Tab>
        </TabList>

        <TabPanel>
          <Personal />
        </TabPanel>
        <TabPanel>
          <Shared />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomePage;
