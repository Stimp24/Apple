import { Box, Typography, useTheme, Grid, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import ListData from "../../components/ListData";
const Finances = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  const mrrData = [
    {
      data: 984600,
      description: "Total MRR",
    },
    {
      data: 9875,
      description: "Paying Customers",
    },
    {
      data: 32500,
      description: "Free Plan Customers",
    },
    {
      data: 5840,
      description: "Signups this month",
    },
    {
      data: 7500,
      description: "Daily Active Users",
    },
    {
      data: 1000500,
      description: "Monthly Active Users",
    },
    {
      data: 1000500,
      description: "Monthly Active Users",
    },
  ];
  const Item = ({ title, description }) => {
    return (
      <Box
        sx={{
          bgcolor: colors.grey[700],
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 250,
          height: "10vh",
        }}
      >
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          ${title}
        </Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 16,
          }}
        >
          {description}
        </Box>
      </Box>
    );
  };
  return (
    <Box m="20px">
      <Header title="FINANCES" subtitle="Overview finances report" />
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
          <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid container xs={10}>
              <Grid item xs={3}>
                <Stack spacing={2}>
                  <Item title="3500" description="MRR this month" />
                  <Item title="3500" description="MRR today" />
                  <Item title="3500" description="MRR yesterday" />
                </Stack>
              </Grid>
              <Grid height="35vh" xs={9}>
                <LineChart />
              </Grid>
              <Grid height="45vh" xs={6}>
                <DataGrid
                  checkboxSelection
                  rows={mockDataInvoices}
                  columns={columns}
                />
              </Grid>
              <Grid height="45vh" xs={6}>
                <BarChart />
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <ListData dataList={mrrData} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Finances;
