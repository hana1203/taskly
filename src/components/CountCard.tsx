import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
interface Props {
  lenOfTaskList: number;
}
export const CountCard = ({ lenOfTaskList }: Props) => {
  return (
    <Card sx={{ maxWidth: 84, maxHeight: 84, boxShadow: 1, mt: 2, mb: 2 }}>
      <CardContent sx={{ p: 1 }}>
        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
          Total tasks
        </Typography>
        <Typography variant="h6" component="div" textAlign={"center"}>
          {lenOfTaskList}
        </Typography>
      </CardContent>
    </Card>
  );
};
