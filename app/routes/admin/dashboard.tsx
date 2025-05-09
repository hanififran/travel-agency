import React from "react";
import { Header } from "../components";

const dashboard = () => {
  const user = { name: "Fumus" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destination in real time"
      />
      Dashboard Page Contents
    </main>
  );
};

export default dashboard;
