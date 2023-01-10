import {render, screen} from "@testing-library/react";
import {describe, it} from "vitest"
import CapsuleDetail from "../capsule-detail.jsx";
import spacex from "../../../../assets/spacex.jpeg";

const capsule = {
  "capsule_serial": "C101",
  "capsule_id": "dragon1",
  "status": "retired",
  "original_launch": "2010-12-08T15:43:00.000Z",
  "original_launch_unix": 1291822980,
  "missions": [
    {
      "name": "COTS 1",
      "flight": 7
    },
  ],
  "landings": 0,
  "type": "Dragon 1.0",
  "details": "Reentered after three weeks in orbit",
  "reuse_count": 0
};

describe('render capsule detail', () => {
  it('should show detail modal', () => {
    render(<CapsuleDetail capsule={capsule}/>);
    const detailModal = screen.getByRole("detail-modal");
    expect(detailModal).toBeInTheDocument();
  });

  it('should show have image element and have path to spacexlogo', () => {
    render(<CapsuleDetail capsule={capsule}/>);
    const spacexlogo = screen.getByRole("img");
    expect(spacexlogo).toBeInTheDocument();
    expect(spacexlogo).toHaveAttribute('src', spacex);
  });

  it('render multiple instances of capsule data', () => {
    render(<CapsuleDetail capsule={capsule}/>);
    const capsuleData = screen.getAllByTestId("capsule-data");
    expect(capsuleData).toHaveLength(10)
  });
});