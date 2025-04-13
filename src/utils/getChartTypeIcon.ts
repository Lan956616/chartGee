export const getChartTypeIcon = (chartType: "pie" | "line" | "bar") => {
  switch (chartType) {
    case "pie":
      return "/piechart.png";

    case "line":
      return "/line.png";

    case "bar":
      return "/blackgraph.png";
  }
};
