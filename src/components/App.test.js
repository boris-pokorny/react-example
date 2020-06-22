import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from './App';

const mockStore = configureMockStore();
const store = mockStore({
    prices: {
        prices: {}
    },
});

test('renders', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/Symbol/i);
  expect(linkElement).toBeInTheDocument();
});
