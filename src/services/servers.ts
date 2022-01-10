import { DmServer } from '../types/servers';
import ApiRequest from '../utils/request';

export default async function getServers(): Promise<Array<DmServer>> {
  const api = new ApiRequest("https://stg.playmytime.com");
  return api.getApiRequest("/servers.json", "GET");
}