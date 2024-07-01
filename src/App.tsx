import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/common/Layout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Guarantors from "./pages/Guarantors";
import Loans from "./pages/Loans";
import DecisionModels from "./pages/DecisionModels";
import Savings from "./pages/Savings";
import LoanRequests from "./pages/LoanRequests";
import Whitelist from "./pages/Whitelist";
import Karma from "./pages/Karma";
import Organization from "./pages/Organization";
import LoanProducts from "./pages/LoanProducts";
import SavingsProduct from "./pages/SavingsProduct";
import FeesCharges from "./pages/FeesCharges";
import Transactions from "./pages/Transactions";
import Services from "./pages/Services";
import ServiceAccount from "./pages/ServiceAccount";
import Settlements from "./pages/Settlements";
import Reports from "./pages/Reports";
import Preferences from "./pages/Preferences";
import FeesPricing from "./pages/FeesPricing";
import AuditLogs from "./pages/AuditLogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="guarantors" element={<Guarantors />} />
            <Route path="loans" element={<Loans />} />
            <Route path="decision-models" element={<DecisionModels />} />
            <Route path="savings" element={<Savings />} />
            <Route path="loan-requests" element={<LoanRequests />} />
            <Route path="whitelist" element={<Whitelist />} />
            <Route path="karma" element={<Karma />} />
            <Route path="organization" element={<Organization />} />
            <Route path="loan-products" element={<LoanProducts />} />
            <Route path="savings-products" element={<SavingsProduct />} />
            <Route path="fees-and-charges" element={<FeesCharges />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="services" element={<Services />} />
            <Route path="service-account" element={<ServiceAccount />} />
            <Route path="settlements" element={<Settlements />} />
            <Route path="reports" element={<Reports />} />
            <Route path="preferences" element={<Preferences />} />
            <Route path="fees-and-pricing" element={<FeesPricing />} />
            <Route path="audit-logs" element={<AuditLogs />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
