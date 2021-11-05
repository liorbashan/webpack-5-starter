import { QueryStringHandler } from "./queryStringHandler";
import { LocalStorageHandler } from "./localStotageHandler";
import { httpRequest } from "./http-request";

(async () => {
  async function init(): Promise<any> {
    const postUrl: string = "http://localhost:3000/api/todos";
    const gclidList: string = "gclidList";
    const lsh: LocalStorageHandler = new LocalStorageHandler();
    const queryStringHandler: QueryStringHandler = new QueryStringHandler();

    let searchParams: URLSearchParams = queryStringHandler.normalizeUrlSearchParams();
    const gclidValue: string | null = queryStringHandler.getGclidValue(searchParams);
    if (gclidValue) {
      lsh.logGclid(gclidList, gclidValue);
      await httpRequest("POST", postUrl, gclidValue).catch((error) => {
        console.error(error);
      });
    }
  }
  init();
})();
