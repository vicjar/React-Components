"use client";

import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart, LineChart, ScatterChart, RadarChart, SankeyChart, HeatmapChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DataZoomComponent,
  ToolboxComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// Register required ECharts modules
echarts.use([
  BarChart,
  LineChart,
  ScatterChart,
  RadarChart,
  SankeyChart,
  HeatmapChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DataZoomComponent,
  ToolboxComponent,
  CanvasRenderer,
]);

// ============================================================
// Caliente Casino color palette for charts
// ============================================================

export const CALIENTE_CHART_COLORS = [
  "#C8102E", // Caliente red
  "#1A1A1A", // Black
  "#D4A843", // Gold
  "#E85D5D", // Light red
  "#404040", // Dark gray
  "#8B1A2B", // Deep red
  "#A0A0A0", // Gray
  "#F0D080", // Light gold
];

// ============================================================
// CChart - Generic ECharts wrapper
// ============================================================

export const CChart = ({
  option,
  height = 350,
  className = "",
  loading = false,
}) => {
  const mergedOption = {
    color: CALIENTE_CHART_COLORS,
    textStyle: {
      fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
    },
    ...option,
  };

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={mergedOption}
      style={{ height, width: "100%" }}
      className={className}
      showLoading={loading}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default CChart;
