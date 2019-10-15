export default store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('todontState', JSON.stringify(state));
  });
};
