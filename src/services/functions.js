export const setItems = (name, state) => {
  localStorage.setItem(name, JSON.stringify(state));
};
