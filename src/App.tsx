import { useState } from "react";
import { DATASET_NAMES, DatasetName, DATASETS } from "./utils/data";
import { PoliticalPartyChart } from "./components/PoliticalPartyChart";

function App() {
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
          <option value={datasetName}>{datasetName}</option>
        ))}
      </select>

      <section>
        <PoliticalPartyChart data={data} />
      </section>
    </>
  );
}

export default App;
