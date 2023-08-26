import axios from "axios";
// import accessToken from "./jwt-token-access/accessToken";

//pass new generated access token here
// const token = accessToken;

//apply base url for axios
const API_URL = "https://bafana-backend.azurewebsites.net";

const axiosApi = axios.create({
  baseURL: API_URL,
  // withCredentials:true
});

// axiosApi.defaults.headers.common["Authorization"] = token;

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
       
  const token = JSON.parse(localStorage.getItem("authUser")).token; // Replace this with your actual access token
  const headers = {
    ...config.headers,
    'x-access-token': token,
  };
  return await axiosApi
    .get(url, { ...config, headers })
    .then((response) => response)
    .catch((error) => {
      if (error.response) {
        console.log("Server responded with an error:", error.response.status);
      } else if (error.request) {
        console.log("No response received from the server:", error.request);
      }
    });
}

export async function post(url, data, config = {}) {
      
    //const token = JSON.parse(localStorage.getItem("authUser")).token; // Replace this with your actual access token
    const headers = {
      ...config.headers,
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbkRldGFpbHMiOnsiaWQiOiI2NGQ5Y2Q4MDkxODVhOWMyMDQwZjEwYWIiLCJlbWFpbElkIjoic3VwZXJ1c2VyMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCR1aE5oYk1yZ00yS0NzRU5hcjdPaDB1WmRNdGhWRXJneUtVSGVtZmFjd2g4OU9PbEVRekJ5bSJ9LCJpYXQiOjE2OTIyNjM3MTEsImV4cCI6MTY5MjI3MDkxMX0._M4RV2e3XhIGnbAvfTXBLxUGQR1Ddtv8RqRB6MNFHzs',
    };
    if(url!='/api/admin/login'){
      return axiosApi
      .post(url, { ...data }, { ...config,headers })
      .then((response) =>response).catch((error) => {
        if (error.response) {
          console.log("Server responded with an error:", error.response.status);
        } else if (error.request) {
          console.log("No response received from the server:", error.request);
        }
      });

    }else{
      return axiosApi
      .post(url, { ...data }, { ...config })
      .then((response) =>response).catch((error) => {
        if (error.response) {
          console.log("Server responded with an error:", error.response.status);
        } else if (error.request) {
          console.log("No response received from the server:", error.request);
        }
      });
    }
  
  }
    


export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => {
       
      response.data
    })
    .catch((error) => {
      if (error.response) {
        console.log("Server responded with an error:", error.response.status);
      } else if (error.request) {
        console.log("No response received from the server:", error.request);
      }
    });
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        console.log("Server responded with an error:", error.response.status);
      } else if (error.request) {
        console.log("No response received from the server:", error.request);
      }
    });
}
