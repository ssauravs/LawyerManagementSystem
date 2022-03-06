import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function MainScreen() {
  const list = useSelector((state) => state.DataReducer);
  list.filter((data) => {
    data.edit = false;
    return data;
  });
  const navigate = useNavigate();
  const ViewDetails = (index) => {
    navigate("/ViewDetails", { state: index });
  };
  return (
    <div>
      <div>
        <Button
          className="buttonAddAccont"
          variant="contained"
          onClick={() => {
            navigate("/BookSlot");
          }}
          size="large"
          color="secondary"
        >
          Click here to book the slot
        </Button>
      </div>
      {list.length !== 0 && (
        <div>
          <h1>Lawyer List :-</h1>
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Lawyer Name</th>
                <th>Speciality</th>
                <th>Cost per hour</th>
                <th>Availability slots</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>
                      {data.speciality.map((data) => {
                        return (
                          <tr>
                            <td className="borderIgnore">{"*"}</td>
                            <td className="borderIgnore">{data}</td>
                          </tr>
                        );
                      })}
                    </td>
                    <td>{data.cost}</td>
                    <td>
                      {data.availability.length > 0 ? (
                        data.availability.map((data) => {
                          return (
                            <tr>
                              <td className="borderIgnore">{"*"}</td>
                              <td className="borderIgnore">{data}</td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td className="borderIgnore">No slot left</td>
                        </tr>
                      )}
                    </td>
                    <td>
                      {" "}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => ViewDetails(index + 1)}
                        size="large"
                      >
                        View Details
                      </Button>
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
