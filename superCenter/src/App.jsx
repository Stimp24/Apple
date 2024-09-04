import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AppSidebar from "./pages/global/AppSidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Team from "./pages/team/team";
import Invoices from "./pages/invoices/invoices";
import Contacts from "./pages/contacts/contacts";
import Bar from "./pages/bar/bar";
import Form from "./pages/form/form";
import Line from "./pages/line/line";
import Pie from "./pages/pie/pie";
import FAQ from "./pages/faq/faq";
import Calendar from "./pages/calendar/calendar";
import Geography from "./pages/geography/geography";
import Topbar from "./pages/global/TopBar";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <AppSidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
