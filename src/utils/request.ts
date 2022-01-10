import { isLeft } from "fp-ts/lib/Either";
import reporter from 'io-ts-reporters'
import { DmServer, DmServerResponse } from "../types/servers";

export interface RequestOptions {}
export interface Request {
  host: string
}

export default class ApiRequest implements Request {
  readonly host: string = "localhost"

  constructor(host: string) {
    this.host = host
  }

  public async getApiRequest(url: string, method: string): Promise<Array<DmServer>> {
    const req = await fetch(this.getApiUrl(url))
    if (req.ok !== true) {
      throw new Error("Api request not OK()")
    }
    return this.handleApiResponse(req)
  }

  private async handleApiResponse(r: Response): Promise<Array<DmServer>> {
    const rspPayload = await r.json()
    console.log(rspPayload)
    // r.json().then(r => console.log(r))
    const result = DmServerResponse.decode(rspPayload)
    if (isLeft(result)) {
      throw new Error(reporter.report(result).join('\n'));
    }
    return result.right.server_dms;
  }

  private getApiUrl(request: string): string {
    console.log(this.host)
    return this.host + request
  }
}
