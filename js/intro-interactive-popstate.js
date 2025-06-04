// popstate handler for intro page
window.onpopstate = function(event) {
  if (event.state && event.state.section) {
    showContent(event.state.section);
  }
};
