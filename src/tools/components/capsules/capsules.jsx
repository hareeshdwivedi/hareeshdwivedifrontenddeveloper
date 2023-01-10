import React, {useEffect} from "react";
import Capsule from "../capsule/capsule.jsx";
import usePages from "../../hooks/usePages.js";
import {useCapsuleServices} from "../../../context/capsule-context.jsx";

const Capsules = ({capsules, search, onView, page, rowsPerPage}) => {
  const {setRange} = useCapsuleServices();
  const {slice, range} = usePages(capsules, page, rowsPerPage);

  useEffect(() => {
    setRange(range);
  }, [range.length])

  return slice.filter((capsule) => capsule.capsule_serial.toLowerCase().includes(search)).map((capsule, index) => {
    return <Capsule
      key={index}
      capsule={capsule}
      onView={() => onView(capsule)}
    />
    });
}

export default Capsules;