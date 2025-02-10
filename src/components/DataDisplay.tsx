"use client";

import { DatasetDropdown } from "@/components/DatasetDropdown";
import { PoliticalPartyChart } from "@/components/PoliticalPartyChart";
import { DatasetName, DATASET_NAMES, DATASETS } from "@/utils/data";
import { useState } from "react";

interface DataDisplayProps {
  numReformMembers: number;
}

export function DataDisplay(props: DataDisplayProps) {
  const [selectedDatasetName, setSelectedDatasetName] = useState<DatasetName>(
    DATASET_NAMES?.[0]
  );

  return (
    <>
      <DatasetDropdown
        selectedDatasetName={selectedDatasetName}
        setSelectedDatasetName={setSelectedDatasetName}
      />

      <section>
        <PoliticalPartyChart
          selectedDatasetName={selectedDatasetName}
          numReformMembers={props.numReformMembers}
        />
      </section>
    </>
  );
}
