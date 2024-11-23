const numberFormatter = (num = 0, digits = 0) => {
  const lookup = [
    { value: 1e9, symbol: "b" },
    { value: 1e6, symbol: "m" },
    { value: 1e3, symbol: "k" },
    { value: 1, symbol: "" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const { value = 0, symbol = "" } = lookup.find((x) => num >= x.value);

  return value ? (num / value).toFixed(digits).replace(rx, "$1") + symbol : "0";
};

export default numberFormatter;
