import { ApiParams } from '../types';

export default async function fetchData(params: ApiParams): Promise<any> {
  const baseUrl = "https://www.alphavantage.co/query";
  const apiKey = "K5CQE26OF90AEQDB";
  let apiParams = `apikey=${apiKey}&datatype=json`;
  if (params.function) {
    apiParams = `${apiParams}&function=${params.function}`;
  }
  if (params.symbol) {
    apiParams = `${apiParams}&symbol=${params.symbol}`;
  }
  if (params.keywords) {
    apiParams = `${apiParams}&keywords=${params.keywords}`;
  }

  const response = await fetch(`${baseUrl}?${apiParams}`);
  
  return await response.json();
}
