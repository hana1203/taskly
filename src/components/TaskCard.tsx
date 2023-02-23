import { Box, Checkbox, Paper } from "@mui/material";

export const TaskCard = () => {
  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 1,
        p: 2,
        m: 2,
        maxWidth: 400,
        // width: [300, 400],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Checkbox></Checkbox>
      <Paper elevation={0} sx={{ p: 1, width: [] }}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its
      </Paper>
    </Box>
  );
};
