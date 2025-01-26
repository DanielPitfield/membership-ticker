import { PARTY_COLOURS, type PoliticalPartyDataItem } from "../utils/data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface PoliticalPartyChartProps {
  data: PoliticalPartyDataItem[];
}

export function PoliticalPartyChart(props: PoliticalPartyChartProps) {
  return (
    <ResponsiveContainer width="80%" height="95%">
      <BarChart
        data={props.data}
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
          {props.data.map((entry) => {
            const colour =
              PARTY_COLOURS.find((party) => party.name === entry.name)
                ?.colour ?? "#000000";

            return <Cell key={entry.name} fill={colour} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
