// app/dashboard/page.js
import React from "react";
import { withAuth } from "@clerk/nextjs";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}

export default Dashboard;
