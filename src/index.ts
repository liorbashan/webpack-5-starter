import { QueryStringHandler } from "./queryStringHandler";
import { LocalStorageHandler } from "./localStotageHandler";

const gclidList: string = "gclidList";
const lsh: LocalStorageHandler = new LocalStorageHandler();
const queryStringHandler: QueryStringHandler = new QueryStringHandler();

let searchParams: URLSearchParams = queryStringHandler.normalizeUrlSearchParams();
const gclidValue: string | null = queryStringHandler.getGclidValue(searchParams);
if (gclidValue) {
  lsh.logGclid(gclidList, gclidValue);
}
