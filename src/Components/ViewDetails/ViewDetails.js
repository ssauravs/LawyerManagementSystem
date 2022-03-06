import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ViewDetails() {
  const navigator = useNavigate();
  const data = useLocation();
  const list = useSelector((state) => state.DataReducer);
  return (
    <div>
      <h2>Free Slot :-</h2>
      {list[data.state - 1].availability.length ? (
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Available Slot</th>
            </tr>
          </thead>
          <tbody>
            {list[data.state - 1].availability.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <tr>
                      <td className="borderIgnore">{"*"}</td>
                      <td className="borderIgnore">{data}</td>
                    </tr>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2 style={{ color: "red" }}>
          All Slot are booked kindly go to the homepage
        </h2>
      )}

      <h2>Booked Slot : -</h2>
      {list[data.state - 1].booked.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Booked Slot</th>
              <th>Booked By</th>
            </tr>
          </thead>
          <tbody>
            {list[data.state - 1].booked.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <tr>
                      <td className="borderIgnore">{"*"}</td>
                      <td className="borderIgnore">{data.slot}</td>
                    </tr>
                  </td>
                  <td>{data.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2 style={{ color: "red" }}>All slots are Available Now </h2>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigator("/")}
        size="large"
        style={{ marginTop: "20px" }}
      >
        Back to home page
      </Button>
    </div>
  );
}
export default ViewDetails;
