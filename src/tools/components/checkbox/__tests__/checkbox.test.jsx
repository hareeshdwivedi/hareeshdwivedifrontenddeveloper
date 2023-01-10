import {render, screen, fireEvent} from "@testing-library/react"
import {describe, it} from "vitest";
import Checkbox from "../checkbox.jsx";

let checked = false
const mockHandleFilter = () => checked = !checked;
describe('filter checkbox', () => {
  it('render checkbox', () => {
    render(<Checkbox id="retired" name="retired" handleFilter={mockHandleFilter} checked={checked}/>);
    const inputElement = screen.getByTestId('filter-checkbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('check if input checkbox has been checked', () => {
    render(<Checkbox id="retired" name="retired" handleFilter={mockHandleFilter} checked={checked}/>);
    const inputElement = screen.getByTestId('filter-checkbox');
    expect(inputElement).not.toBeChecked();
  });

  it('change filter to false', () => {
    render(<Checkbox id="retired" name="retired" handleFilter={mockHandleFilter} checked={checked}/>);
    const inputElement = screen.getByTestId('filter-checkbox');
    fireEvent.change(inputElement, {target: {checked: true}});
    expect(inputElement).toBeChecked();
  });
});