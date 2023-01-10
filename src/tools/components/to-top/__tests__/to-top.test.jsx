import {render, act, waitFor} from "@testing-library/react";
import {describe, it} from "vitest";
import ToTop from "../to-top.jsx";

describe('render to top button', () => {
  it('should scroll to top of the page', async () => {
    render(<ToTop/>);
    act(() => {
      window.scrollTo(0, document.offsetTop);
    });

    await waitFor(() => {
      expect(window.scrollY).toBe(0);
    });
  });
})