import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
export default function PnLChart({ data }) {
  // data should be [{ date, profit_loss }, ...]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="profit_loss" stroke="#1976d2" />
      </LineChart>
    </ResponsiveContainer>
  );
}
