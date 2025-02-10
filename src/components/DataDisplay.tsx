"use client";

import { DatasetDropdown } from "@/components/DatasetDropdown";
import { PoliticalPartyChart } from "@/components/PoliticalPartyChart";
import { DatasetName, DATASET_NAMES, DATASETS } from "@/utils/data";
import { useState } from "react";

interface DataDisplayProps {
  numMembers: number;
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
          numMembers={props.numMembers}
        />
      </section>
    </>
  );
}
