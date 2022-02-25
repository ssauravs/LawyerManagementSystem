import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddNewData, EditData, EditList } from "../../Store/Action/index";
import { emailValid, phoneValid } from "../../Services/Services";

function AddDetails() {
  const navigate = useNavigate();
  const list = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch(EditData());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    const newList = list.filter((data) => {
      return data.edit == true;
    });
    setFlag(newList.length);
    if (newList.length != 0) {
      setName(newList[0].name);
      setEmail(newList[0].email);
      setPhone(newList[0].phone);
    }
  }, []);
  const Submit = () => {
    if (flag == 0) {
      const obj = {
        name: name,
        email: email,
        phone: phone,
        fav: false,
        edit: false,
      };
      dispatch(AddNewData(obj));
      navigate("/");
    } else {
      const obj = {
        name: name,
        email: email,
        phone: phone,
      };
      dispatch(EditList(obj));
      navigate("/");
    }
  };
  return (
    <div>
      {flag == 0 ? <h1> Add New Account :- </h1> : <h1> Edit Account :-</h1>}
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
      <TextField
        label="Phone :"
        variant="outlined"
        type="number"
        value={phone}
        onChange={(e) => {
          if (e.target.value.length <= 10) {
            return setPhone(e.target.value);
          }
        }}
        error={!phoneValid.test(phone) && phone.length > 0 && true}
        helperText={
          !phoneValid.test(phone) &&
          phone.length > 0 &&
          "This field contain phone number validation."
        }
        style={{ width: "300px", marginBottom: "20px" }}
      />
      <br />
      {name.length > 0 && phoneValid.test(phone) && emailValid.test(email) ? (
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

export default AddDetails;
