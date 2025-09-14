export interface FilterState {
  symbol: string;
  period: string;
}

export interface PricesData {
  labels: string[];
  datasets: Array<{
    data: number[];
    label: string;
    borderColor?: string;
    backgroundColor?: string;
    fill?: boolean;
    borderWidth?: number;
  }>;
}

export interface PricesState {
  loading: boolean;
  error: string | null;
  data: PricesData | {};
}

export interface SearchState {
  options: DropdownOption[];
  error?: string;
}

export interface SymbolsState {
  loading: boolean;
  data: { [key: string]: string[] };
  error: string | null;
}

export interface RootState {
  filter: FilterState;
  prices: PricesState;
  search: SearchState;
  symbols: SymbolsState;
}

export interface ActionType {
  type: string;
  payload?: any;
  value?: any;
  json?: any;
  searchTerm?: string;
  symbols?: any;
}

export interface DropdownOption {
  key: string;
  value: string;
}

export interface ApiParams {
  symbol?: string;
  period?: string;
}

export interface PriceChartProps {
  data: PricesData | {};
  loading: boolean;
  error: string | null;
}