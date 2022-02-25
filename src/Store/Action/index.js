export const AddNewData = (obj) => {
  return {
    type: "AddNewData",
    payload: obj,
  };
};

export const EditList = (obj) => {
  return {
    type: "EditList",
    payload: obj,
  };
};

export const ChangeFavourite = (index) => {
  return {
    type: "ChangeFavourite",
    payload: index,
  };
};

export const EditData = (index) => {
  return {
    type: "EditData",
    payload: index,
  };
};

export const DeleteData = (index) => {
  return {
    type: "DeleteData",
    payload: index,
  };
};
