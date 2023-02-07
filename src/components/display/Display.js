import "./Display.css";
import Button from "@mui/material/Button";
import RemoveIcon  from '@mui/icons-material/Remove';

const Display = ({ name, email }) => {
  return (
    <div className="outputs">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Button variant="contained" color="error" >
      <RemoveIcon />
      </Button>
    </div>
  );
};

export default Display;
