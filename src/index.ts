import { QueryStringHandler } from './queryStringHandler';
import { LocalStorageHandler } from './localStotageHandler';

const lsh: LocalStorageHandler = new LocalStorageHandler();
const queryStringHandler: QueryStringHandler = new QueryStringHandler();

lsh.logMessage('hi there!!');

let searchParams: URLSearchParams = queryStringHandler.normalizeUrlSearchParams();
const gclidValue = queryStringHandler.getGclidValue(searchParams);
lsh.logMessage(gclidValue);
