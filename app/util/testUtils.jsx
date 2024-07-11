import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../lib/store";

export function renderWithProviders(ui, extendedRenderOptions = {}) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = makeStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  };
}

export function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => JSON.parse(JSON.stringify(data))
    })
  );
}
