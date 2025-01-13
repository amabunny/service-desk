import { Api } from './service-desk/Api';

export const serviceDeskApi = new Api({
  baseURL: import.meta.env.VITE_SERVICE_DESK_API_BASE_URL,
});
