import "./App.css";
import DashboardMain from "./components/DashBoardMain";
import Layout from "./components/Layout";
import AppProvider from "./components/AppProvider";
function App() {
  return (
    <AppProvider>
      <Layout>
        <DashboardMain />
      </Layout>
    </AppProvider>
  );
}

export default App;
