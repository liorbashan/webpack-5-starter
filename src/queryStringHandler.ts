export class QueryStringHandler {
  public normalizeUrlSearchParams(): URLSearchParams {
    let normalizedQuerySearch: string = "";
    const paramsString: string = window.location.search;
    let searchParams: URLSearchParams = new URLSearchParams(paramsString);
    searchParams.forEach((key, value) => {
      normalizedQuerySearch += `${value.toLowerCase()}=${key}&`;
    });
    let result: URLSearchParams = new URLSearchParams(normalizedQuerySearch);

    return result;
  }

  public getGclidValue(searchParams: URLSearchParams): string | null {
    if (searchParams.has("gclid")) {
      const gclidValue: string | null = searchParams.get("gclid");
      return gclidValue;
    } else {
      return null;
    }
  }
}
