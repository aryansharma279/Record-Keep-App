import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import "./Create.css";
// import Display from "../display/Display";
import RemoveIcon from "@mui/icons-material/Remove";

const Create = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const addData = () => {
    const emp = {
      name: '',
      email: ''
    }
    setData([...data, form ]);
    setForm(form);
    setForm(emp);
  };
  const removeItem = (i) => {
    console.log(data);
    data.splice(i, 1);
    console.log(data);
    setData([...data]);
  };
  return (
    <div className="inputs">
      <Stack direction="row" spacing={2}>
        <TextField
          value={form.name}
          onChange={(event) => setForm({...form, name: event.target.value })}
          className="field"
          id="standard-basic"
          label="Name "
          variant="standard"
        />
        <TextField
          type="email"
          value={form.email}
          onChange={(event) => setForm({...form,email: event.target.value })}
          className="field"
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <Button variant="contained" onClick={addData} color="success">
          <AddIcon />
        </Button>
      </Stack>
      <div className="output">
        <div className="outputs">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Action</h3>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="outputs">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button
                onClick={() => removeItem(index)}
                variant="contained"
                color="error"
              >
                <RemoveIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Create;
