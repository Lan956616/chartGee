export const getChartTypeIcon = (chartType: "pie" | "line" | "bar") => {
  switch (chartType) {
    case "pie":
      return "/charts/piechart.png";

    case "line":
      return "/charts/line.png";

    case "bar":
      return "/charts/blackgraph.png";
  }
};
