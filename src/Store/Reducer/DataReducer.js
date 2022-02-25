let initialData = [
  {
    name: "Saurav",
    phone: "9872262189",
    email: "sauravshrm740@gmail.com",
    fav: true,
    edit: false,
  },
  {
    name: "Neha",
    phone: "7872262187",
    email: "neha@gmail.com",
    fav: false,
    edit: false,
  },
];
const DataReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ChangeFavourite": {
      state[action.payload].fav = !state[action.payload].fav;
      localStorage.setItem("ListOfObj", JSON.stringify(state));
      return state;
    }
    case "DeleteData": {
      const newObj = state.filter((data, index) => {
        return index != action.payload;
      });
      state = newObj;
      localStorage.setItem("ListOfObj", JSON.stringify(state));
      return state;
    }
    case "AddNewData": {
      state.push(action.payload);
      localStorage.setItem("ListOfObj", JSON.stringify(state));
      return state;
    }
    case "EditData": {
      state[action.payload].edit = !state[action.payload].edit;
      localStorage.setItem("ListOfObj", JSON.stringify(state));
      return state;
    }
    case "EditList": {
      const obj = state.filter((data) => {
        if (data.edit == true) {
          data.name = action.payload.name;
          data.email = action.payload.email;
          data.phone = action.payload.phone;
          data.edit = false;
        }
        return data;
      });
      localStorage.setItem("ListOfObj", JSON.stringify(obj));
      return obj;
    }
    default:
      localStorage.setItem("ListOfObj", JSON.stringify(state));
      return state;
  }
};
export default DataReducer;
