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
      <Tab id="4" name="Fourth">
        Fourth
      </Tab>
      <Tab id="5" name="Fifth">
        Fifth
      </Tab>
      <Tab id="6" name="Sixth">
        Sixth
      </Tab>
      <Tab id="7" name="Seventh">
        Seventh
      </Tab>
      <Tab id="8" name="Eighth">
        Eighth
      </Tab>
      <Tab id="9" name="Ninth">
        Ninth
      </Tab>
      <Tab id="10" name="Tenth">
        Tenth
      </Tab>
      <Tab id="11" name="Eleventh">
        Eleventh
      </Tab>
      <Tab id="12" name="Twelfth">
        Twelfth
      </Tab>
      <Tab id="13" name="Thirteenth">
        Thirteenth
      </Tab>
    </Tabs>
  );
};
