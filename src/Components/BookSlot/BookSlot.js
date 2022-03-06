import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddNewData } from "../../Store/Action/index";
import { emailValid } from "../../Services/Services";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

function BookSlot() {
  const navigate = useNavigate();
  const list = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lawyer, setLaywer] = useState("");
  const [avalibilityArray, setAvalibilityArray] = useState([]);
  const [slot, setSlot] = useState("");

  const BookLawyer = (e) => {
    setLaywer(e.target.value);
    var array = list.filter((data) => {
      return data.name === e.target.value;
    });
    setAvalibilityArray(array[0].availability);
  };
  const Submit = () => {
    const obj = {
      name: name,
      email: email,
      slot: slot,
      lawyer: lawyer,
    };
    dispatch(AddNewData(obj));
    navigate("/");
  };
  return (
    <div>
      <h1> Book Account :- </h1>
      <TextField
        label="Name : "
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={name.length <= 1 && name.length > 0 && true}
        helperText={
          name.length <= 1 &&
          name.length > 0 &&
          "Length must be greater than or equal to 2."
        }
        style={{ width: "300px", marginBottom: "20px" }}
      />
      <br />
      <TextField
        label="Email :"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!emailValid.test(email) && email.length > 0 && true}
        helperText={
          !emailValid.test(email) &&
          email.length > 0 &&
          "This field contain email validation."
        }
        style={{ width: "300px", marginBottom: "20px" }}
      />
      <br />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Select Lawyer</InputLabel>
        <Select
          value={lawyer}
          style={{ width: "300px", marginBottom: "20px" }}
          label="Select Lawyer"
          onChange={BookLawyer}
        >
          {list.map((data) => {
            return <MenuItem value={data.name}>{data.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <br />
      {lawyer && (
        <FormControl>
          {avalibilityArray.length > 0 ? (
            <FormLabel>Available slots :-</FormLabel>
          ) : (
            <FormLabel>
              Please select other Lawyer since every slot of this lawyer is
              already booked
            </FormLabel>
          )}
          <RadioGroup
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => setSlot(e.target.value)}
          >
            {avalibilityArray.map((data) => {
              return (
                <FormControlLabel
                  value={data}
                  control={<Radio />}
                  label={data}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      )}

      <br />
      {name.length > 0 &&
      slot.length > 0 &&
      lawyer.length > 0 &&
      emailValid.test(email) ? (
        <Button
          variant="contained"
          onClick={Submit}
          size="large"
          style={{ marginRight: "15px" }}
        >
          Save
        </Button>
      ) : (
        <Button
          variant="contained"
          style={{ background: "grey", color: "black", marginRight: "15px" }}
          size="large"
        >
          Save
        </Button>
      )}

      <Button
        variant="contained"
        size="large"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home page
      </Button>
    </div>
  );
}

export default BookSlot;
