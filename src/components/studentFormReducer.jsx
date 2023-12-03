export const initialState = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    value: "",
    isMissing: false,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    value: "",
    isMissing: false,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    value: "",
    isMissing: false,
  },
];

export const studentFormReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return state.map((field) =>
        field.name === action.fieldName
          ? { ...field, value: action.value, isMissing: false }
          : field
      );
    case "SUBMIT":
      return state.map((field) => ({
        ...field,
        isMissing: field.value?.trim() === "",
      }));
    default:
      return state;
  }
};
