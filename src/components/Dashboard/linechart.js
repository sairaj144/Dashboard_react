import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '6/30/2024 - 7/6/2024', orders: 4, sales: 1404 },
  { name: '7/7/2024 - 7/13/2024', orders: 2, sales: 800 },
  { name: '7/21/2024 - 7/27/2024', orders: 2, sales: 500 },
];

const SalesOrdersChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" tickFormatter={(value) => `${value / 1000}k`} />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip formatter={(value, name) => name === "sales" ? `${value / 1000}k` : value} />
        <Legend verticalAlign="top" align="center" height={36} />
        <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#387908" />
        <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SalesOrdersChart;
