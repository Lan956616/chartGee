import type { Plugin, Chart } from "chart.js";
type BackgroundColorPluginOptions = {
  color: string;
};
export const backgroundColorPlugin: Plugin<
  "bar" | "line" | "pie",
  BackgroundColorPluginOptions
> = {
  id: "backgroundColor",
  beforeDraw: (chart: Chart, _args, options: BackgroundColorPluginOptions) => {
    const { ctx, width, height } = chart;
    ctx.save();
    ctx.fillStyle = options.color || "#FFFFFF";
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  },
};
