const formatNumToUnit = (n: number) => {
  if (n >= 0 && n < 10000) {
    return Math.abs(Number(n)) + "";
  } else if (n >= 10000 && n < 1.0e6) {
    return (Math.abs(Number(n)) / 1.0e3).toFixed(0) + "K";
  } else if (n >= 1.0e6 && n < 1.0e9) {
    return (Math.abs(Number(n)) / 1.0e6).toFixed(2) + "M";
  } else if (n >= 1.0e9) {
    return (Math.abs(Number(n)) / 1.0e6).toFixed(2) + "M";
  } else {
    return "Error";
  }
};

function formatNumToDot(n: number | string) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export { formatNumToUnit, formatNumToDot };
