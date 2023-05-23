const initialState = {
  user: window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {},
  posts: [],
  backUpPosts: [],
};

function setInLocalStorage(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state));
  return state;
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_SERVICES":
      return { ...state, posts: payload, backUpPosts: payload };
    case "LOGIN":
      return { ...state, user: setInLocalStorage("user", payload) };
    case "LOG_OUT":
      return { ...state, user: setInLocalStorage("user", {}) };
    case "CREATEA_ACCOUNT":
      return { ...state, user: setInLocalStorage("user", payload) };
    case "SEARCH_NAME":
      let filterPost = state.backUpPosts.filter((element) =>
        element.title.toLowerCase().includes(payload.toLowerCase())
      );
      if (!filterPost.length) {
        return { ...state, posts: [] };
      }
      return { ...state, posts: filterPost };

    case "FILTER_COUNTRY":
      if (payload === "") return { ...state, posts: state.backUpPosts };
      const filterForCountry = state.backUpPosts.filter(
        (service) => service.location.country === payload
      );
      if (!filterForCountry.length) return { ...state, posts: [] };
      return { ...state, posts: filterForCountry };
    default:
      return { ...state };
  }
}
