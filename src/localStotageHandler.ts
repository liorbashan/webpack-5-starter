export class LocalStorageHandler {
  public logMessage(msg: string | null): void {
    if (msg !== null) {
      console.log(msg);
    }
  }

  public getLocalStorageValue(key: string): string | null {
    return localStorage.getItem(key) ? localStorage.getItem(key) : null;
  }

  public setValueToLocalStorage(key: string, value: any): void {
    if (this.isJson(value)) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  public isJson(str: string): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
