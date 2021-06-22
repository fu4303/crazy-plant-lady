const getHeaderDisplay = (breakpoint) => {
  switch (breakpoint) {
    case "xs":
      return "display-1";
    case "sm":
      return "display-2";
    case "md":
      return "display-3";
    default:
      return "display-4";
  }
};

export { getHeaderDisplay };
