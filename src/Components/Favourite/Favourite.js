import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Favourite() {
  const navigate = useNavigate();
  const list = useSelector((state) => state.DataReducer);
  const newList = list.filter((x) => {
    return x.fav == true;
  });

  return (
    <div>
      {newList.length != 0 ? (
        <div>
          <h1>List of Favourite Accounts :- </h1>
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email id</th>
              </tr>
            </thead>
            <tbody>
              {newList.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>{data.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Add favourite item first from the homeScreen :)</h1>
      )}
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
        style={{ marginTop: "21px" }}
        size="large"
      >
        Back to home page
      </Button>
    </div>
  );
}

export default Favourite;
