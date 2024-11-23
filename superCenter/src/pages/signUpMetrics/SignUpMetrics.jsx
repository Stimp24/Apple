import { Box, Typography, useTheme, Grid, Stack, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";
import { mockContractorByCategoryData } from "../../data/contractorByCategory";
const SignUpMetrics = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const legend = ["contractors"];
  const Item = ({ title, total }) => {
    return (
      <Box
        sx={{
          bgcolor: colors.grey[600],
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 250,
          height: "10vh",
        }}
      >
        <Box sx={{ color: "text.primary", fontSize: 16, fontWeight: "medium" }}>
          {title}
        </Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 34,
          }}
        >
          {total}
        </Box>
      </Box>
    );
  };
  return (
    <Box m="20px">
      <Header
        title="Customer vs Contractor"
        subtitle="Overview signUp report"
      />
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
        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid container spacing={2}>
            <Grid item spacing={2}>
              <Item title="Total Contractors" total={25} />
            </Grid>
            <Grid item spacing={2}>
              <Item title="Total Contractors" total={100} />
            </Grid>
            <Grid item spacing={2}>
              <Item title="Contractors that need profiles" total={15} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid height="45vh" xs={6}>
              <BarChart data={mockContractorByCategoryData} legend={legend} />
            </Grid>
            <Grid item spacing={2}>
              <Item title="Total Contractors" total={100} />
            </Grid>
            <Grid item spacing={2}>
              <Item title="Contractors that need profiles" total={15} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default SignUpMetrics;
