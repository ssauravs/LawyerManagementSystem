let initialData = [
  {
    name: "Saurav",
    speciality: ["divorce", "criminal", "property"],
    cost: 1000,
    availability: ["3-4pm", "4-5pm", "6-7pm"],
    booked: [],
  },
  {
    name: "Neha",
    speciality: ["Tax", "Criminal", "Civil", "Rights", "Family"],
    cost: 2000,
    availability: ["3-4pm", "4-5pm", "6-7pm", "7-8pm"],
    booked: [],
  },
  {
    name: "Manminder",
    speciality: ["Corporate", "Immigration"],
    cost: 700,
    availability: ["1-2pm", "2-3pm"],
    booked: [],
  },
  {
    name: "Rahul",
    speciality: ["divorce", "property"],
    cost: 2000,
    availability: ["11-12am", "12-1pm", "1-2pm"],
    booked: [
      {
        name: "Tarun",
        email: "tarun@gmail.com",
        slot: "4-5pm",
        lawyer: "Rahul",
      },
    ],
  },
  {
    name: "Akash",
    speciality: ["Intellectual Property", "Public Interest"],
    cost: 4000,
    availability: ["8-9am", "9-10am", "10-11am", "11-12am"],
    booked: [],
  },
];
const DataReducer = (state = initialData, action) => {
  switch (action.type) {
    case "AddNewData": {
      var index = state.map((data, index) => {
        if (data.name === action.payload.lawyer) {
          return index;
        }
      });
      var indexs = index.filter((x) => x !== undefined);

      var temp = state[indexs[0]].availability.map((data, index) => {
        if (data === action.payload.slot) {
          return index;
        }
      });
      var temps = temp.filter((x) => x !== undefined);
      state[indexs[0]].booked.push(action.payload);
      state[indexs[0]].availability.splice(temps[0], 1);

      return state;
    }
    default:
      return state;
  }
};
export default DataReducer;
