"use client";

import { DatasetName, DATASET_NAMES } from "@/utils/data";

interface DatsetDropdownProps {
  selectedDatasetName: DatasetName;
  setSelectedDatasetName: (newDatasetName: DatasetName) => void;
}

export function DatasetDropdown(props: DatsetDropdownProps) {
  return (
    <select
      value={props.selectedDatasetName}
      onChange={(e) =>
        props.setSelectedDatasetName(e.target.value as DatasetName)
      }
    >
      {DATASET_NAMES.map((datasetName) => (
        <option key={datasetName} value={datasetName}>
          {datasetName}
        </option>
      ))}
    </select>
  );
}
