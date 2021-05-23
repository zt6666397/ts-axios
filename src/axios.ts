import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'
import { buildURL } from './helpers/url'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transfromResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transfromURL(config)
  config.headers = transfromHeades(config)
  config.data = transfromRequestData(config)
}

function transfromURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transfromRequestData(config: AxiosRequestConfig): any {
  const { data } = config
  return transformRequest(data)
}

function transfromHeades(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transfromResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default axios
