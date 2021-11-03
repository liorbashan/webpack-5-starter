export class QueryStringHandler {
    public normalizeUrlSearchParams(): URLSearchParams {
        let normalizedQuerySearch: string = '';
        const paramsString: string = window.location.search;
        let searchParams: URLSearchParams = new URLSearchParams(paramsString);
        for (const key in searchParams) {
            normalizedQuerySearch += `${key.toLowerCase()}=${searchParams.get(key)}`;
        }
        let result: URLSearchParams = new URLSearchParams(normalizedQuerySearch);

        return result;
    }

    public getGclidValue(searchParams: URLSearchParams): string | null {
        if (searchParams.has('gclid')) {
            const gclidValue = searchParams.get('gclid');
            return gclidValue;
        } else {
            return null;
        }
    }
}
