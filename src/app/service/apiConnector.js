//import axios from "axios";

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//   return axiosInstance({
//     method: `${method}`,
//     url: `${url}`,
//     data: bodyData ? bodyData : null,
//     headers: headers ? headers : null,
//     params: params ? params : null,
//   });
// };

import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    "x-api-key": import.meta.env.VITE_API_SECRET_KEY,
  },
});

export const apiConnector = async (
  method,
  url,
  bodyData,
  headers = {},
  params = {}
) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: bodyData || null,
      headers: {
        ...axiosInstance.defaults.headers.common,
        ...headers,
      },
      params: params || null,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
