import { ApiParams } from '../types';

export default async function fetchData(params: ApiParams): Promise<any> {
  const baseUrl = "http://localhost:3001";

  // Handle price data requests for selected symbol and period
  if (params.symbol && params.period) {
    try {
      const response = await fetch(`${baseUrl}/data/${params.symbol}/${params.period}`);
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error);
      }

      return result;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  throw new Error('Invalid API parameters');
}

export async function fetchSymbols(): Promise<any> {
  const baseUrl = "http://localhost:3001";

  try {
    const response = await fetch(`${baseUrl}/symbols`);
    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error);
    }

    return result.symbols;
  } catch (error) {
    throw new Error(`Failed to fetch symbols: ${error}`);
  }
}
