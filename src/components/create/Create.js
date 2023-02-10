import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import "./Create.css";
import Display from "../display/Display";
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
  const handleKey = (e) => {
      e.key =='Enter'? addData(): console.log(e.key);
  }
  // const removeItem = (i) => {
  //   console.log(data);
  //   data.splice(i, 1);
  //   console.log(data);
  //   setData([...data]);
  // };
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
          onKeyPress={(e)=> handleKey(e)}
        />
        <TextField
          type="email"
          value={form.email}
          onChange={(event) => setForm({...form,email: event.target.value })}
          className="field"
          id="standard-basic"
          label="Email"
          variant="standard"
          onKeyPress={(e)=> handleKey(e)}
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
            <Display {...element} key={index} index={index} data={data} setData={setData} />
              )
        })
        }
      </div>
    </div>
  );
};

export default Create;
