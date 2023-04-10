import axios from "axios";

const apiUrl = {
  client: 'http://localhost:3000/',
  back: import.meta.env.VITE_BACKURL
}


/**
 * @description 呼叫 api 成功處理
 * @param {object} response 呼叫 api 成功回覆的資料
 */
const successHandler = (response: { data?: any; config?: any }) => {
  const { data } = response;
  if (response) {
    if (data !== undefined) {
      // 取得呼叫 api 的相關資訊
      const {
        config: { method, url, baseURL },
      } = response;
      let logUrl = "";
      if (baseURL) {
        const re = new RegExp(baseURL, "g");
        logUrl = url.replace(re, baseURL.slice(-1) === "/" ? "/" : "");
      } else {
        logUrl = url;
      }
      writeResponseLog(method, logUrl, data);
      return data;
    }
  }
};

/**
 * @description 呼叫 api 錯誤處理
 * @param {object} error 呼叫 api 發生錯誤時回覆的錯誤資訊
 */

const errorHandler = (error: { response: any }) => {
  const { response } = error;
  console.log(
    `%c 💩💩💩 API發生例外錯誤 💩💩💩${response && response.status ? `status code [${response.status}]` : ""
    }`,
    "color: #BB2E29; font-size: 14px; font-weight: bold;"
  );
  return Promise.reject(error);
};

const writeReqeustLog = (
  method: string,
  baseURL: string,
  url: string,
  data: {}
) => {
  console.log(
    `%c >>> [${method}]Request(${baseURL}${url}) >>> `,
    "background-color: #7CBC9D; color: white; font-size: 14px; font-weight: bold;"
  );
  console.log(data);
};

/**
 * @description 輸出呼叫 api 回傳的資料
 * @param {string} method 呼叫 api 的 method
 * @param {string} url api 的網址
 * @param {object} data 呼叫 api 回傳的資料
 */
const writeResponseLog = (method: string, url: string, data = {}) => {
  console.log(
    `%c <<< [${method}]Response(${url}) <<< `,
    "background-color: #E0455D; color: white; font-size: 14px; font-weight: bold;"
  );
  console.log(data);
};

/**
 * @param {string} baseURL api 的主機 url，來源為 apiServers
 * @param {string} url api 的功能url
 * @param {object} data 傳送給 api 的參數
 */

const get = async (baseURL: string, url: string, data: object = {}) => {
  writeReqeustLog("get", baseURL, url, data);
  return axios({
    method: 'get',
    baseURL,
    url,
    params: {
      ...data
    }
  })
    .then(successHandler)
    .catch(errorHandler)
}

const getToken = async (baseURL: string, url: string, data: {} = {}, head: any) => {
  writeReqeustLog("get", baseURL, url, data);
  return axios({
    method: 'get',
    baseURL,
    url,
    params: {
      ...data
    },
    headers: {
      'Authorization': `Bearer ${head.token}`
    },
  }).then(successHandler).catch(errorHandler)
}


const post = async (baseURL: string, url: string, data = {}) => {
  writeReqeustLog("post", baseURL, url, data);
  return axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    baseURL,
    url,
    data,
  })
    .then(successHandler)
    .catch(errorHandler);
};

const postToken = async (baseURL: string, url: string, data: any, head: any) => {
  writeReqeustLog('post', baseURL, url, data)
  console.log(head)
  return axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${head.token}`,
      //'refreshToken':head.refreshToken
    },
    baseURL,
    url,
    data
  })
    .then(successHandler)
    .catch(errorHandler)
}

const patch = async (baseURL: string, url: string, data = {}) => {
  writeReqeustLog("patch", baseURL, url, data);
  return axios({
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    baseURL,
    url,
    data,
  })
    .then(successHandler)
    .catch(errorHandler);
};


export default {
  apiUrl,
  get,
  post,
  patch,
  postToken,
  getToken
};
