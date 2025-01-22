import { useState } from "react";
import { DATASETS, PoliticalPartyDataItem } from "./data";
import { PoliticalPartyChart } from "./PoliticalPartyChart";

const DEFAULT_DATA = DATASETS?.[0]?.data ?? [];

function App() {
  const [data, setData] = useState<PoliticalPartyDataItem[]>(DEFAULT_DATA);

  return (
    <>
      <select
        onChange={(e) =>
          setData(
            DATASETS.find((dataset) => dataset.name === e.target.value)?.data ??
              DEFAULT_DATA
          )
        }
      >
        {DATASETS.map((dataset) => (
          <option value={dataset.name}>{dataset.name}</option>
        ))}
      </select>

      <section>
        <PoliticalPartyChart data={data} />
      </section>
    </>
  );
}

export default App;
