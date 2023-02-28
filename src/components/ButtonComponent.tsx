import { Button } from "@mui/material";
interface Props {
  children: string;
  onClick?: () => void;
}
export const ButtonComponent = ({ children, onClick }: Props) => {
  return (
    <Button
      color="primary"
      variant="contained"
      disabled={false}
      size="medium"
      sx={{ borderRadius: "64px" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
