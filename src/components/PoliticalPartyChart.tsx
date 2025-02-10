import {
  DatasetName,
  DATASETS,
  PARTY_COLOURS,
  PoliticalPartyDataItem,
} from "../utils/data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PoliticalPartyChartProps {
  selectedDatasetName: DatasetName;
  numReformMembers: number;
}

export function PoliticalPartyChart(props: PoliticalPartyChartProps) {
  const data = ((): PoliticalPartyDataItem[] => {
    const sourceData =
      // Using dataset name
      DATASETS.find((dataset) => dataset.name === props.selectedDatasetName)
        ?.data ??
      // Otherwise, first dataset
      DATASETS?.[0].data ??
      // Otherwise, no data
      [];

    if (props.selectedDatasetName === "Membership count") {
      return [
        // Remove static data
        ...sourceData.filter((x) => x.name !== "Reform UK"),
        // Use determined membership instead
        {
          name: "Reform UK",
          count: props.numReformMembers,
        } as PoliticalPartyDataItem,
      ].sort((a, b) => b.count - a.count);
    }

    return sourceData;
  })();

  return (
    <ResponsiveContainer width="80%" height="95%">
      <BarChart
        data={data}
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

        <Tooltip />

        <Bar dataKey="count">
          {data.map((entry) => {
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
