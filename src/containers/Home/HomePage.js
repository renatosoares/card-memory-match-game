import React from "react";

import { Dashboard, DashboardMenu, DashboardButton } from "../../components";

const HomePage = () => (
  <Dashboard>
    <DashboardMenu title="Card Memory Match Game">
      <DashboardButton>start game</DashboardButton>
    </DashboardMenu>
  </Dashboard>
);

export default HomePage;
