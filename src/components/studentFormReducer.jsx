export const initialState = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    value: "",
    error: false,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    value: "",
    error: false,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    value: "",
    error: false,
  },
];

export const studentFormReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return state.map((field) =>
        field.name === action.fieldName
          ? { ...field, value: action.value }
          : field
      );
    case "SUBMIT":
      return state.map((field) => ({
        ...field,
        value: field.value?.trim(),
        error: field.value?.trim() === "",
      }));
    default:
      return state;
  }
};
