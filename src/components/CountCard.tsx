import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const CountCard = () => {
  return (
    <Card sx={{ maxWidth: 84, maxHeight: 84, boxShadow: 1 }}>
      <CardContent sx={{ p: 1 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Total tasks
        </Typography>
        <Typography variant="h6" component="div">
          3
        </Typography>
      </CardContent>
    </Card>
  );
};
