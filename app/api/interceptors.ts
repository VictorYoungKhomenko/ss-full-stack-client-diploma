import { API_URL } from './api.constants'
import axios from 'axios'
import Cookies from 'js-cookie'
import { getContentType } from './api.utils'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

export const axiosAuth = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

axiosAuth.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})
