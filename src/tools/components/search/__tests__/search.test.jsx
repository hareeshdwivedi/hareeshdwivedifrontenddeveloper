import {render, screen, fireEvent} from "@testing-library/react";
import {describe, it} from "vitest";
import Search from "../search.jsx";
import CapsuleProvider from "../../../../context/capsule-context";
import {store} from "../../../../redux/store.js";
import {Provider} from "react-redux";
import 'isomorphic-fetch';

const MockSearch = () => {
  return (
    <CapsuleProvider>
      <Provider store={store}>
        <Search/>
      </Provider>
    </CapsuleProvider>
  );
};

describe('', () => {
  it('render search input', () => {
    render(<MockSearch/>);
    const inputElement = screen.getByPlaceholderText(/Search by capsule serial eg. C101/i);
    fireEvent.change(inputElement, {
      target: {
        value: "C201",
      },
    })
    expect(inputElement.value).toBe("C201");
  });
});