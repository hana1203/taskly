import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

interface Props {
  placeholder: string;
}
export const CustomizedInputBase = ({ placeholder }: Props) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: [300, 400],
        //300px in mobile, 400px in desktop
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "input" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        {/* <SearchIcon /> */}
      </IconButton>
    </Paper>
  );
};
