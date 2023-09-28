
export class FetchError extends Error {
  data: any;
  status: number;

  constructor(status: number, data: any) {
    super('Fetch Error ' + status);
    this.data = data;
    this.status = status;
  }
}

export async function fetcher<T = any>(url: string, init: RequestInit = {}) {
  const response = await fetch(url, init);

  const data = await response.json();
  const status = response.status;

  if (![200, 201].includes(status)) {
    throw new FetchError(status, data);
  }

  return data as T;
}

export function getFetch() {
  return async (url: string, init: RequestInit = {}) => {
    return fetcher(url, { ...init});
  };
}
