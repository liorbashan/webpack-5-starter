type Method = "POST" | "GET";

export function httpRequest(method: Method, url: string, gclid: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open(method, url);
    if (method === "POST") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    xhr.onload = function (): void {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function (): void {
      reject({
        status: this.status,
        statusText: `Network Level Error: ${xhr.statusText}`,
      });
    };
    if (method === "POST") {
      xhr.send(`gclid=${gclid}`);
    } else {
      xhr.send();
    }
  });
}
