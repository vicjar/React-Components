"use client";

import React from "react";
import { CChart, CALIENTE_CHART_COLORS } from "./CChart";

// ============================================================
// CHeatmap - Heatmap Chart Component
// ============================================================

/**
 * CHeatmap - A configurable heatmap chart component
 * 
 * @param {Object} props
 * @param {Array} props.data - Array of [xIndex, yIndex, value] data points
 * @param {Array} props.xAxisData - Labels for x-axis categories
 * @param {Array} props.yAxisData - Labels for y-axis categories
 * @param {string} props.title - Chart title (optional)
 * @param {string} props.subtitle - Chart subtitle (optional)
 * @param {number} props.height - Chart height in pixels (default: 400)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.loading - Show loading state
 * @param {boolean} props.showLabel - Show values on cells (default: true)
 * @param {Array} props.colorRange - Min/max colors for gradient (default: uses Caliente palette)
 * @param {number} props.min - Minimum value for color scale (auto-calculated if not provided)
 * @param {number} props.max - Maximum value for color scale (auto-calculated if not provided)
 * @param {string} props.valueFormatter - Function to format tooltip/label values
 * @param {Object} props.option - Additional ECharts options to merge
 */
export const CHeatmap = ({
  data = [],
  xAxisData = [],
  yAxisData = [],
  title,
  subtitle,
  height = 400,
  className = "",
  loading = false,
  showLabel = true,
  colorRange,
  min,
  max,
  valueFormatter = (value) => value,
  option = {},
}) => {
  // Calculate min/max if not provided
  const values = data.map((item) => item[2]);
  const calculatedMin = min ?? Math.min(...values);
  const calculatedMax = max ?? Math.max(...values);

  // Default color gradient using Caliente colors
  const defaultColorRange = [
    "#F5F5F5",           // Light gray for low values
    "#F0D080",           // Light gold
    "#D4A843",           // Gold
    "#E85D5D",           // Light red
    "#C8102E",           // Caliente red
  ];

  const heatmapOption = {
    title: title ? {
      text: title,
      subtext: subtitle,
      left: "center",
      textStyle: {
        color: "#1A1A1A",
        fontWeight: 600,
        fontSize: 16,
      },
      subtextStyle: {
        color: "#6B6B6B",
        fontSize: 12,
      },
    } : undefined,
    tooltip: {
      position: "top",
      formatter: (params) => {
        const xLabel = xAxisData[params.value[0]] || params.value[0];
        const yLabel = yAxisData[params.value[1]] || params.value[1];
        const value = valueFormatter(params.value[2]);
        return `<strong>${xLabel}</strong> / <strong>${yLabel}</strong><br/>Value: ${value}`;
      },
    },
    grid: {
      left: "12%",
      right: "12%",
      bottom: "15%",
      top: title ? "15%" : "8%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xAxisData,
      splitArea: { show: true },
      axisLabel: {
        color: "#6B6B6B",
        fontSize: 11,
        rotate: xAxisData.length > 12 ? 45 : 0,
      },
      axisLine: { lineStyle: { color: "#E0E0E0" } },
    },
    yAxis: {
      type: "category",
      data: yAxisData,
      splitArea: { show: true },
      axisLabel: {
        color: "#6B6B6B",
        fontSize: 11,
      },
      axisLine: { lineStyle: { color: "#E0E0E0" } },
    },
    visualMap: {
      min: calculatedMin,
      max: calculatedMax,
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: 0,
      inRange: {
        color: colorRange || defaultColorRange,
      },
      textStyle: {
        color: "#6B6B6B",
      },
    },
    series: [
      {
        name: title || "Heatmap",
        type: "heatmap",
        data: data,
        label: {
          show: showLabel,
          color: "#1A1A1A",
          fontSize: 10,
          formatter: (params) => {
            const value = params.value[2];
            // Hide label for very small cells or low values
            if (value === 0 || value === null) return "";
            return valueFormatter(value);
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.3)",
          },
        },
        itemStyle: {
          borderColor: "#FFFFFF",
          borderWidth: 2,
          borderRadius: 2,
        },
      },
    ],
    ...option,
  };

  return (
    <CChart
      option={heatmapOption}
      height={height}
      className={className}
      loading={loading}
    />
  );
};

// ============================================================
// Pre-built Heatmap Variants
// ============================================================

/**
 * Weekly Activity Heatmap - Shows activity patterns across days and hours
 */
export const CWeeklyActivityHeatmap = ({
  data = [],
  height = 350,
  className = "",
  loading = false,
  valueFormatter = (value) => value,
  ...props
}) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = [
    "12am", "1am", "2am", "3am", "4am", "5am",
    "6am", "7am", "8am", "9am", "10am", "11am",
    "12pm", "1pm", "2pm", "3pm", "4pm", "5pm",
    "6pm", "7pm", "8pm", "9pm", "10pm", "11pm",
  ];

  return (
    <CHeatmap
      data={data}
      xAxisData={hours}
      yAxisData={days}
      height={height}
      className={className}
      loading={loading}
      valueFormatter={valueFormatter}
      showLabel={false}
      {...props}
    />
  );
};

/**
 * Monthly Calendar Heatmap - Shows values across a month
 */
export const CMonthlyHeatmap = ({
  data = [],
  month = "January",
  height = 300,
  className = "",
  loading = false,
  ...props
}) => {
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <CHeatmap
      data={data}
      xAxisData={days}
      yAxisData={weeks}
      title={month}
      height={height}
      className={className}
      loading={loading}
      {...props}
    />
  );
};

/**
 * Correlation Matrix Heatmap - Shows correlations between variables
 */
export const CCorrelationHeatmap = ({
  data = [],
  labels = [],
  height = 400,
  className = "",
  loading = false,
  ...props
}) => {
  return (
    <CHeatmap
      data={data}
      xAxisData={labels}
      yAxisData={labels}
      height={height}
      className={className}
      loading={loading}
      min={-1}
      max={1}
      colorRange={["#C8102E", "#F5F5F5", "#1A7A4C"]}
      valueFormatter={(value) => value.toFixed(2)}
      {...props}
    />
  );
};

export default CHeatmap;
