import { Box, useTheme } from "@mui/material";
import numberFormatter from "../util/numberFormatter";
import { tokens } from "../theme";
const ListData = ({ dataList = [], title = "" }) => {
  console.log({ dataList }, { title });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        bgcolor: colors.grey[700],
        boxShadow: 1,
        borderRadius: 2,
        pl: 3,
        pt: 5,
        "&:hover": {
          bgcolor: "primary.dark",
        },
      }}
    >
      <Box
        sx={{
          color: "text.primary",
          fontSize: 20,
          fontWeight: "high",
        }}
      >
        {title}
      </Box>
      {dataList.map(({ data, description }, index) => (
        <>
          <Box
            sx={{
              height: "20vh",
            }}
          >
            <Box
              key={index}
              sx={{
                color: "text.primary",
                fontSize: 34,
                fontWeight: "medium",
              }}
            >
              ${numberFormatter(data, 1)}
            </Box>
            <Box
              sx={{
                color: "success.dark",
                display: "inline",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}
            >
              {description}
            </Box>
          </Box>
        </>
      ))}
    </Box>
  );
};

export default ListData;
