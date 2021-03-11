import Typography from "@material-ui/core/Typography";

function Title({ text, color }) {
  return (
    <Typography
      variant="h4"
      gutterBottom
      style={{ marginBottom: 30 }}
      color={color}
    >
      {text}
    </Typography>
  );
}

export default Title;
