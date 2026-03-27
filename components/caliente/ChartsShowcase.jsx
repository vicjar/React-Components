"use client";

import React from "react";
import { Row, Col } from "reactstrap";
import { CCard } from "./CCard";
import { CChart, CALIENTE_CHART_COLORS } from "./CChart";

// ============================================================
// 1. Bar Chart - Monthly Revenue by Game Type
// ============================================================

function BarChartExample() {
  return (
    <CCard title="Bar Chart" subtitle="Monthly revenue by game type ($K)">
      <CChart
        height={360}
        option={{
          tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
          legend: { data: ["Slots", "Poker", "Blackjack", "Roulette"], bottom: 0, textStyle: { color: "#6B6B6B" } },
          grid: { left: "3%", right: "4%", bottom: "14%", top: "8%", containLabel: true },
          xAxis: {
            type: "category",
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisLabel: { color: "#6B6B6B" },
            axisLine: { lineStyle: { color: "#E0E0E0" } },
          },
          yAxis: { type: "value", axisLabel: { color: "#6B6B6B", formatter: "${value}K" }, splitLine: { lineStyle: { color: "#F0F0F0" } } },
          series: [
            { name: "Slots", type: "bar", data: [320, 290, 410, 380, 520, 490, 560, 610, 530, 480, 620, 710], itemStyle: { borderRadius: [3, 3, 0, 0] } },
            { name: "Poker", type: "bar", data: [180, 210, 240, 260, 300, 280, 310, 350, 290, 320, 380, 420], itemStyle: { borderRadius: [3, 3, 0, 0] } },
            { name: "Blackjack", type: "bar", data: [220, 240, 280, 300, 350, 320, 340, 390, 310, 360, 410, 450], itemStyle: { borderRadius: [3, 3, 0, 0] } },
            { name: "Roulette", type: "bar", data: [120, 140, 160, 150, 200, 180, 210, 230, 190, 220, 260, 300], itemStyle: { borderRadius: [3, 3, 0, 0] } },
          ],
        }}
      />
    </CCard>
  );
}

// ============================================================
// 2. Line Chart - Daily Active Players
// ============================================================

function LineChartExample() {
  const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
  return (
    <CCard title="Line Chart" subtitle="Daily active players over 30 days">
      <CChart
        height={360}
        option={{
          tooltip: { trigger: "axis" },
          legend: { data: ["VIP", "Regular", "New"], bottom: 0, textStyle: { color: "#6B6B6B" } },
          grid: { left: "3%", right: "4%", bottom: "14%", top: "8%", containLabel: true },
          xAxis: {
            type: "category", boundaryGap: false, data: days,
            axisLabel: { color: "#6B6B6B", interval: 4 },
            axisLine: { lineStyle: { color: "#E0E0E0" } },
          },
          yAxis: { type: "value", axisLabel: { color: "#6B6B6B" }, splitLine: { lineStyle: { color: "#F0F0F0" } } },
          series: [
            { name: "VIP", type: "line", smooth: true, data: [120,132,101,134,90,230,210,182,191,234,290,330,310,280,320,350,310,290,380,410,390,420,440,460,430,410,490,520,500,530], areaStyle: { opacity: 0.1 }, lineStyle: { width: 2 } },
            { name: "Regular", type: "line", smooth: true, data: [520,580,610,590,640,720,690,750,810,780,820,860,830,800,850,890,920,880,940,980,950,1020,990,1050,1080,1020,1100,1150,1120,1180], areaStyle: { opacity: 0.1 }, lineStyle: { width: 2 } },
            { name: "New", type: "line", smooth: true, data: [80,90,70,110,100,120,140,130,150,160,140,180,170,190,200,210,190,220,230,250,240,260,280,270,300,290,310,330,320,350], areaStyle: { opacity: 0.1 }, lineStyle: { width: 2 } },
          ],
        }}
      />
    </CCard>
  );
}

// ============================================================
// 3. Stacked Line Chart - Cumulative Game Revenue
// ============================================================

function StackedLineChartExample() {
  return (
    <CCard title="Stacked Line Chart" subtitle="Cumulative game revenue by month ($K)">
      <CChart
        height={360}
        option={{
          tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
          legend: { data: ["Slots", "Poker", "Blackjack", "Roulette", "Baccarat"], bottom: 0, textStyle: { color: "#6B6B6B" } },
          grid: { left: "3%", right: "4%", bottom: "14%", top: "8%", containLabel: true },
          xAxis: {
            type: "category", boundaryGap: false, data: ["Q1", "Q2", "Q3", "Q4"],
            axisLabel: { color: "#6B6B6B" }, axisLine: { lineStyle: { color: "#E0E0E0" } },
          },
          yAxis: { type: "value", axisLabel: { color: "#6B6B6B", formatter: "${value}K" }, splitLine: { lineStyle: { color: "#F0F0F0" } } },
          series: [
            { name: "Slots", type: "line", stack: "Total", areaStyle: { opacity: 0.25 }, data: [1020, 1460, 1700, 2140], smooth: true },
            { name: "Poker", type: "line", stack: "Total", areaStyle: { opacity: 0.25 }, data: [630, 840, 950, 1190], smooth: true },
            { name: "Blackjack", type: "line", stack: "Total", areaStyle: { opacity: 0.25 }, data: [740, 970, 1040, 1310], smooth: true },
            { name: "Roulette", type: "line", stack: "Total", areaStyle: { opacity: 0.25 }, data: [420, 530, 620, 780], smooth: true },
            { name: "Baccarat", type: "line", stack: "Total", areaStyle: { opacity: 0.25 }, data: [310, 420, 480, 600], smooth: true },
          ],
        }}
      />
    </CCard>
  );
}

// ============================================================
// 4. Scatter Chart - Player Bet vs. Winnings
// ============================================================

function ScatterChartExample() {
  const generateData = (count, maxBet, factor) =>
    Array.from({ length: count }, () => {
      const bet = Math.round(Math.random() * maxBet + 20);
      const win = Math.round(bet * factor * (Math.random() * 2 - 0.3));
      return [bet, win];
    });

  return (
    <CCard title="Scatter Chart" subtitle="Player bet amounts vs. winnings correlation">
      <CChart
        height={360}
        option={{
          tooltip: {
            trigger: "item",
            formatter: (params) => {
              const v = Array.isArray(params) ? params[0].value : params.value;
              return `Bet: $${v[0]}<br/>Winnings: $${v[1]}`;
            },
          },
          legend: { data: ["VIP Players", "Regular Players"], bottom: 0, textStyle: { color: "#6B6B6B" } },
          grid: { left: "3%", right: "4%", bottom: "14%", top: "8%", containLabel: true },
          xAxis: { name: "Bet Amount ($)", nameLocation: "center", nameGap: 30, axisLabel: { color: "#6B6B6B" }, splitLine: { lineStyle: { color: "#F0F0F0" } } },
          yAxis: { name: "Winnings ($)", nameLocation: "center", nameGap: 40, axisLabel: { color: "#6B6B6B" }, splitLine: { lineStyle: { color: "#F0F0F0" } } },
          series: [
            { name: "VIP Players", type: "scatter", symbolSize: 10, data: generateData(40, 5000, 1.2), itemStyle: { color: CALIENTE_CHART_COLORS[0], opacity: 0.7 } },
            { name: "Regular Players", type: "scatter", symbolSize: 8, data: generateData(60, 1000, 0.8), itemStyle: { color: CALIENTE_CHART_COLORS[2], opacity: 0.7 } },
          ],
        }}
      />
    </CCard>
  );
}

// ============================================================
// 5. Bubble Chart - Game Popularity (scatter with variable size)
// ============================================================

function BubbleChartExample() {
  const games = [
    { name: "Slots", data: [[50, 45, 8500]] },
    { name: "Poker", data: [[300, 120, 3200]] },
    { name: "Blackjack", data: [[200, 60, 5100]] },
    { name: "Roulette", data: [[150, 30, 4300]] },
    { name: "Baccarat", data: [[500, 90, 1800]] },
    { name: "Craps", data: [[100, 40, 2600]] },
    { name: "Keno", data: [[25, 15, 6200]] },
  ];

  return (
    <CCard title="Bubble Chart" subtitle="Game popularity: avg bet vs. session time (bubble size = player count)">
      <CChart
        height={380}
        option={{
          tooltip: {
            trigger: "item",
            formatter: (params) => {
              const v = Array.isArray(params) ? params[0] : params;
              return `<strong>${v.seriesName}</strong><br/>Avg Bet: $${v.value[0]}<br/>Avg Session: ${v.value[1]}min<br/>Players: ${v.value[2].toLocaleString()}`;
            },
          },
          legend: { data: games.map((g) => g.name), bottom: 0, textStyle: { color: "#6B6B6B", fontSize: 11 } },
          grid: { left: "3%", right: "4%", bottom: "16%", top: "8%", containLabel: true },
          xAxis: { name: "Avg Bet ($)", nameLocation: "center", nameGap: 30, axisLabel: { color: "#6B6B6B" }, splitLine: { lineStyle: { color: "#F0F0F0" } } },
          yAxis: { name: "Avg Session (min)", nameLocation: "center", nameGap: 40, axisLabel: { color: "#6B6B6B" }, splitLine: { lineStyle: { color: "#F0F0F0" } } },
          series: games.map((g, i) => ({
            name: g.name,
            type: "scatter",
            data: g.data,
            symbolSize: (val) => Math.sqrt(val[2]) / 1.5,
            itemStyle: { color: CALIENTE_CHART_COLORS[i % CALIENTE_CHART_COLORS.length], opacity: 0.75 },
          })),
        }}
      />
    </CCard>
  );
}

// ============================================================
// 6. Radar Chart - Game Performance Metrics
// ============================================================

function RadarChartExample() {
  return (
    <CCard title="Radar Chart" subtitle="Game performance across key metrics">
      <CChart
        height={380}
        option={{
          tooltip: { trigger: "item" },
          legend: { data: ["Slots", "Poker", "Blackjack"], bottom: 0, textStyle: { color: "#6B6B6B" } },
          radar: {
            indicator: [
              { name: "Revenue", max: 100 },
              { name: "Player Count", max: 100 },
              { name: "Retention", max: 100 },
              { name: "Avg Session", max: 100 },
              { name: "Growth Rate", max: 100 },
              { name: "Player Satisfaction", max: 100 },
            ],
            shape: "polygon",
            splitArea: { areaStyle: { color: ["rgba(200,16,46,0.02)", "rgba(200,16,46,0.04)"] } },
            axisLine: { lineStyle: { color: "#E0E0E0" } },
            splitLine: { lineStyle: { color: "#E8E8E8" } },
            axisName: { color: "#6B6B6B", fontSize: 11 },
          },
          series: [{
            type: "radar",
            data: [
              { value: [92, 88, 75, 60, 85, 78], name: "Slots", areaStyle: { opacity: 0.15 }, lineStyle: { width: 2 } },
              { value: [70, 55, 85, 90, 60, 88], name: "Poker", areaStyle: { opacity: 0.15 }, lineStyle: { width: 2 } },
              { value: [80, 72, 80, 70, 75, 82], name: "Blackjack", areaStyle: { opacity: 0.15 }, lineStyle: { width: 2 } },
            ],
          }],
        }}
      />
    </CCard>
  );
}

// ============================================================
// 7. Sankey Chart - Player Flow Through Casino Sections
// ============================================================

function SankeyChartExample() {
  return (
    <CCard title="Sankey Chart" subtitle="Player flow through casino sections">
      <CChart
        height={400}
        option={{
          tooltip: { trigger: "item", triggerOn: "mousemove" },
          series: [{
            type: "sankey",
            layout: "none",
            emphasis: { focus: "adjacency" },
            nodeAlign: "left",
            lineStyle: { color: "gradient", curveness: 0.5 },
            label: { color: "#1A1A1A", fontSize: 11 },
            itemStyle: { borderWidth: 1, borderColor: "#FFF" },
            data: [
              { name: "Lobby", itemStyle: { color: "#C8102E" } },
              { name: "Slots Area", itemStyle: { color: "#E85D5D" } },
              { name: "Table Games", itemStyle: { color: "#1A1A1A" } },
              { name: "Sports Book", itemStyle: { color: "#D4A843" } },
              { name: "VIP Lounge", itemStyle: { color: "#8B1A2B" } },
              { name: "Restaurant", itemStyle: { color: "#404040" } },
              { name: "Cashier", itemStyle: { color: "#A0A0A0" } },
              { name: "Exit", itemStyle: { color: "#6B6B6B" } },
            ],
            links: [
              { source: "Lobby", target: "Slots Area", value: 3200 },
              { source: "Lobby", target: "Table Games", value: 2100 },
              { source: "Lobby", target: "Sports Book", value: 1800 },
              { source: "Lobby", target: "VIP Lounge", value: 900 },
              { source: "Slots Area", target: "Restaurant", value: 1200 },
              { source: "Slots Area", target: "Cashier", value: 1500 },
              { source: "Slots Area", target: "Table Games", value: 500 },
              { source: "Table Games", target: "VIP Lounge", value: 600 },
              { source: "Table Games", target: "Cashier", value: 1400 },
              { source: "Table Games", target: "Restaurant", value: 600 },
              { source: "Sports Book", target: "Restaurant", value: 800 },
              { source: "Sports Book", target: "Cashier", value: 700 },
              { source: "Sports Book", target: "Slots Area", value: 300 },
              { source: "VIP Lounge", target: "Cashier", value: 1100 },
              { source: "VIP Lounge", target: "Restaurant", value: 400 },
              { source: "Restaurant", target: "Exit", value: 3000 },
              { source: "Cashier", target: "Exit", value: 4700 },
            ],
          }],
        }}
      />
    </CCard>
  );
}

// ============================================================
// Main Charts Section Export
// ============================================================

export function ChartsSection() {
  return (
    <div className="showcase-section">
      <span className="section-title">Charts (ECharts)</span>
      <Row>
        <Col xl={6}><BarChartExample /></Col>
        <Col xl={6}><LineChartExample /></Col>
      </Row>
      <Row>
        <Col xl={6}><StackedLineChartExample /></Col>
        <Col xl={6}><ScatterChartExample /></Col>
      </Row>
      <Row>
        <Col xl={6}><BubbleChartExample /></Col>
        <Col xl={6}><RadarChartExample /></Col>
      </Row>
      <SankeyChartExample />
    </div>
  );
}

export default ChartsSection;
