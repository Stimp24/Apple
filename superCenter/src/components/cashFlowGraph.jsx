import { useTheme, Box } from "@mui/material";
import { tokens } from "../theme";
import numberFormatter from "../util/numberFormatter";

const CashFlowGraph = ({
  isDashboard = false,
  title = "",
  subtitle,
  duration,
  num,
  children,
  timePeriod,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        sx={{
          color: "text.primary",
          pl: 7,
          fontSize: 16,
          fontWeight: "medium",
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          color: "text.primary",
          fontSize: 40,
          fontWeight: "medium",
          display: "inline",
          pl: 7,
        }}
      >
        {num && "$" + numberFormatter(num, 2)}
      </Box>
      <Box
        sx={{
          color: "text.primary",
          pl: 2,
          fontSize: 16,
          fontWeight: "medium",
          display: "inline",
        }}
      >
        {timePeriod && timePeriod}
      </Box>
      <Box
        sx={{
          color: "text.primary",
          pl: 7,
          fontSize: 14,
          fontWeight: "medium",
        }}
      >
        {duration && duration}
      </Box>
      {children}
    </>
  );
};

export default CashFlowGraph;
