import React from "react";
import { Tabs } from "./index";
import { Tab } from "./tab";

export default {
  title: "Tabs",
  component: Tabs,
};

export const FewTab = () => {
  return (
    <Tabs selectedTabIndex={2}>
      <Tab id="1" name="First">
        First
      </Tab>
      <Tab id="2" name="Second">
        Second
      </Tab>
      <Tab id="3" name="Third">
        Third
      </Tab>
      <Tab id="2" name="Second">
        Second
      </Tab>
      <Tab id="3" name="Third">
        Third
      </Tab>
      <Tab id="2" name="Second">
        Second
      </Tab>
      <Tab id="3" name="Third">
        Third
      </Tab>
      <Tab id="2" name="Second">
        Second
      </Tab>
      <Tab id="3" name="Third">
        Third
      </Tab>
      <Tab id="2" name="Second">
        Second
      </Tab>
      <Tab id="3" name="Third">
        Third
      </Tab>
      <Tab id="2" name="Second">
        Second
      </Tab>
      <Tab id="3" name="Third">
        Third
      </Tab>
    </Tabs>
  );
};
