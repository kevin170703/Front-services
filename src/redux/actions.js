import axios from "axios";

export function getServices() {
  return async function (distpach) {
    const services = await axios("/posts");
    return distpach({ type: "GET_SERVICES", payload: services.data });
  };
}

export function updatedata(data) {
  data.phoneNumber = data.phoneNumber * 1;
  return async function (distpach) {
    const user = await axios.post("/login", data);
    distpach({ type: "LOGIN", payload: user.data });
  };
}

export function login(dataUser) {
  dataUser.phoneNumber = dataUser.phoneNumber * 1;
  return async function (distpach) {
    const { data } = await axios.post("/login", dataUser);
    if (Array.isArray(data)) return distpach({ type: "LOGIN", payload: data });
    return data;
  };
}

export function editUser(dataUser) {}

export function logOut() {
  return async function (distpach) {
    return distpach({ type: "LOG_OUT" });
  };
}

export function createAccount(dataUser) {
  dataUser.phoneNumber = dataUser.phoneNumber * 1;
  return async function (distpach) {
    const { data } = await axios.post("/newUser", dataUser);
    if (!Array.isArray(data)) return data;
    return distpach({ type: "CREATEA_ACCOUNT", payload: data });
  };
}

export function createPost(data) {
  data.phoneNumber = data.codePhoneNumber + data.phoneNumber;
  return async function (distpach) {
    await axios.post("/newPosts", data);
    return distpach({ type: "CREATEA_POST" });
  };
}

export function delatePost(data) {
  return async function (distpach) {
    await axios.put("/newPosts", data);
  };
}

export function searchName(data) {
  return async function (distpach) {
    return distpach({ type: "SEARCH_NAME", payload: data });
  };
}

export function filtersCountry(data) {
  return async function (distpach) {
    return distpach({ type: "FILTER_COUNTRY", payload: data });
  };
}
