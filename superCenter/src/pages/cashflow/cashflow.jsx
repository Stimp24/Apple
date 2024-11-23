import React from "react";
import numberFormatter from "../../util/numberFormatter";
import { Box, Typography, useTheme, Grid, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import CashFlowGraph from "../../components/cashFlowGraph";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import ListData from "../../components/ListData";
const CashFlow = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const debtorsData = [
    {
      data: 345000,
      description: "Total",
    },
    {
      data: 125000,
      description: "Over 45 days",
    },
  ];
  return (
    <Box m="20px">
      <Header title="CASH FLOW" />
      <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Box>
          <Grid
            container
            sx={{ pb: 20, bgcolor: colors.primary[400] }}
            columnSpacing={{ xs: 1, sm: 1, md: 3 }}
          >
            <Grid xs={4} spacing={2} height="40vh">
              <CashFlowGraph
                title="Cash In Bank"
                num={865005}
                timePeriod="Current"
                duration="Past 6 months"
              >
                <BarChart />
              </CashFlowGraph>
            </Grid>
            <Grid xs={4} height="40vh">
              <CashFlowGraph
                title="Burn"
                num={63900}
                timePeriod="6 month avg"
                duration="Past 6 months"
              >
                <LineChart />
              </CashFlowGraph>
            </Grid>
            <Grid xs={4} height="40vh">
              <CashFlowGraph title="Expenses">
                <LineChart />
              </CashFlowGraph>
            </Grid>
          </Grid>
          <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid xs={4} height="40vh">
              <CashFlowGraph
                title="Solvency"
                num={865005}
                timePeriod="Current"
                duration="Past 6 months"
              >
                <BarChart />
              </CashFlowGraph>
            </Grid>
            <Grid xs={2} height="40vh">
              <ListData dataList={debtorsData} title="Debtors" />
            </Grid>
            <Grid xs={4} height="40vh">
              <CashFlowGraph title="Debtors (past 6 months)">
                <BarChart />
              </CashFlowGraph>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CashFlow;
