import { useState, useEffect } from "react";

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data?.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, rowsPerPage) => {
  return data?.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const usePages = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);
  const [baseIndex, setBaseIndex] = useState(0);
  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);
    setBaseIndex((page - 1) * rowsPerPage);

    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice, rowsPerPage]);

  return { slice, range: tableRange, baseIndex };
};

export default usePages;
