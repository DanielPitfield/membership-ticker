import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { STATIC_MEMBERSHIP_DATA } from "./data";

export function MembershipChart() {
  return (
    <ResponsiveContainer width="80%" height="95%">
      <BarChart
        data={STATIC_MEMBERSHIP_DATA}
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Bar dataKey="count">
          {STATIC_MEMBERSHIP_DATA.map((entry) => (
            <Cell key={entry.name} fill={entry.colour} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
