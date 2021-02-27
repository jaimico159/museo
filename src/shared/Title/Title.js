import Typography from "@material-ui/core/Typography";

function Title({ text }) {
  return (
    <Typography variant="h4" gutterBottom style={{ marginBottom: 30 }}>
      {text}
    </Typography>
  );
}

export default Title;
