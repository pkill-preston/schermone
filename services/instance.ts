import axios from "axios";

const config = useRuntimeConfig();

const instance = axios.create({
	baseURL: config.public.apiBase,
	timeout: 5000,
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${config.public.apiToken}`
	}
});

export default instance;
