// a thunk  returns a function that contains the logic if the thunk is triggered
export const displayAlert = () => () => {
  alert('hello');
};
