export class LocalStorageHandler {
  public getLocalStorageValue(key: string): string | null {
    return localStorage.getItem(key) ? localStorage.getItem(key) : null;
  }

  public setValueToLocalStorage(key: string, value: any): void {
    if (this.isJson(value)) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  public logGclid(key: string, gclid: string): void {
    const currentStorageValue: string | null = this.getLocalStorageValue(key);
    let gclidsObj: any = {};
    if (currentStorageValue && this.isJsonString(currentStorageValue)) {

      gclidsObj = JSON.parse(currentStorageValue);
      if (gclidsObj.hasOwnProperty(gclid)) {
        gclidsObj[gclid] = Number(gclidsObj[gclid]) + 1;
      } else {
        gclidsObj[gclid] = 1;
      }
    } else {
      gclidsObj[gclid] = 1;
    }

    this.setValueToLocalStorage(key, gclidsObj);
  }

  public isJson(obj: any): boolean {
    try {
      JSON.stringify(obj);
    } catch (e) {
      return false;
    }
    return true;
  }

  public isJsonString(str: string): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
