import React from "react";
import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import AppContent from "./components/layout/AppContent";
import AppFooter from "./components/layout/AppFooter";

const App : React.FC = () => {
  return (
    <Layout>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Layout>
  );
};

export default App;