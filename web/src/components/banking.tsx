import React, { useState } from "react";
import { isEnvBrowser } from "../utils/misc";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { useExitListener } from "../hooks/useExitListener";
import { useAppSelector } from "../store";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePanel from './pages/HomePanel';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/accounts";
import Invoices from "./pages/Invoices";

interface OverviewData {
  day: string;
  income: number;
  expenses: number;
}

const BankingComponent: React.FC = () => {
  const [visible, setVisible] = useState(isEnvBrowser());
  useNuiEvent<boolean>("setVisible", setVisible);
  useExitListener(setVisible);

  const data = {
    overview: [
      { day: "Mon", income: Math.floor(Math.random() * 5000) + 1000, expenses: Math.floor(Math.random() * 5000) + 1000 },
      { day: "Tue", income: Math.floor(Math.random() * 5000) + 1000, expenses: Math.floor(Math.random() * 5000) + 1000 },
      { day: "Wed", income: Math.floor(Math.random() * 5000) + 1000, expenses: Math.floor(Math.random() * 5000) + 1000 },
      { day: "Thu", income: Math.floor(Math.random() * 5000) + 1000, expenses: Math.floor(Math.random() * 5000) + 1000 },
      { day: "Fri", income: Math.floor(Math.random() * 5000) + 1000, expenses: Math.floor(Math.random() * 5000) + 1000 },
      { day: "Sat", income: Math.floor(Math.random() * 5000) + 1000, expenses: Math.floor(Math.random() * 5000) + 1000 },
      { day: "Sun", income: Math.floor(Math.random() * 5000) + 1000, expenses: Math.floor(Math.random() * 5000) + 1000 },
    ] as OverviewData[],
  };

  return (
    <>
      {visible && (
        <Router>
          <Routes>
            <Route path="/" element={<HomePanel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/accounts/invoices/:accountId" element={<Invoices />} />

          </Routes>
        </Router>
      )}
    </>
  );
};

export default BankingComponent;
