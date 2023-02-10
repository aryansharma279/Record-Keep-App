import "./Display.css";
import Button from "@mui/material/Button";
import RemoveIcon  from '@mui/icons-material/Remove';

const Display = ({ name, email,data, setData, index }) => {
  const removeItem = (i) => {
      data.splice(i,1);
      setData([...data]);
  }
  return (
    <div className="outputs"  draggable >
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Button variant="contained" color="error" onClick={()=> removeItem(index)}>
      <RemoveIcon />
      </Button>
    </div>
  );
};

export default Display;
