"use client";

import { PoliticalPartyChart } from "@/components/PoliticalPartyChart";
import { DatasetName, DATASET_NAMES, DATASETS } from "@/utils/data";
import { useState } from "react";

export default function Home() {
  const [selectedDatasetName, setSelectedDatasetName] = useState<DatasetName>(
    DATASET_NAMES?.[0]
  );

  const data =
    DATASETS.find((dataset) => dataset.name === selectedDatasetName)?.data ??
    DATASETS?.[0].data ??
    [];

  return (
    <>
      <select
        onChange={(e) => setSelectedDatasetName(e.target.value as DatasetName)}
      >
        {DATASET_NAMES.map((datasetName) => (
          <option key={datasetName} value={datasetName}>
            {datasetName}
          </option>
        ))}
      </select>

      <section>
        <PoliticalPartyChart data={data} />
      </section>
    </>
  );
}
