import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from './context/AuthContext';
import UserProvider from './context/UserContext';
import ProjectsProvider from './context/ProjectContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import FinancialProvider from "./context/FinancialContext.jsx";
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <ProjectsProvider>
              <FinancialProvider>
                <App />
              </FinancialProvider>
            </ProjectsProvider>
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
