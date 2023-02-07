import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import "./Create.css";
import Display from "../display/Display";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  return (
    <div className="inputs">
      <Stack direction="row" spacing={2}>
        <TextField
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="field"
          id="standard-basic"
          label="Name "
          variant="standard"
        />
        <TextField
        type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="field"
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <Button
          variant="contained"
          onClick={addData}
          color="success"
        >
          <AddIcon />
        </Button>
      </Stack>
      <div className="output">
        <div className="outputs">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Action</h3>
          
        </div>
        {data.map((element,index)=> {
             return(
             <Display {...element} index={index} key={index} />
             )
        })}
       
        
      </div>
    </div>
  );
};

export default Create;
