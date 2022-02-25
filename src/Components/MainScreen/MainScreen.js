import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteData,
  ChangeFavourite,
  EditData,
} from "../../Store/Action/index";
import { useNavigate } from "react-router-dom";
function MainScreen() {
  const list = useSelector((state) => state.DataReducer);
  list.filter((data) => {
    data.edit = false;
    return data;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Edit = (index) => {
    navigate("/AddDetails");
    dispatch(EditData(index));
  };
  return (
    <div>
      <div>
        <Button
          className="buttonAddAccont"
          variant="contained"
          onClick={() => {
            navigate("/AddDetails");
          }}
          size="large"
          style={{ marginRight: "10px" }}
        >
          Add New Account
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate("/Favourite");
          }}
          size="large"
        >
          View Favourite
        </Button>
      </div>
      {list.length != 0 && (
        <div>
          <h1>Contact List :-</h1>
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email id</th>
                <th>Activities</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>{data.email}</td>
                    <td>
                      {" "}
                      <Button
                        startIcon={<DeleteIcon />}
                        onClick={() => dispatch(DeleteData(index))}
                      />
                      <Button
                        onClick={() => Edit(index)}
                        startIcon={<EditIcon />}
                      />
                      <Checkbox
                        color="primary"
                        onClick={() => dispatch(ChangeFavourite(index))}
                        icon={
                          data.fav == true ? <StarIcon /> : <StarBorderIcon />
                        }
                        checkedIcon={
                          data.fav == true ? <StarBorderIcon /> : <StarIcon />
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MainScreen;
