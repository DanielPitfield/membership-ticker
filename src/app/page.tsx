// Fresh data on each request (on demand instead of being pre-rendered)
export const dynamic = "force-dynamic";

import { DataDisplay } from "@/components/DataDisplay";

type MembershipData = { current_total: number };
const API_URL = new URL("https://pro-worker.reformparty.uk/ticker/count");

export default async function Home() {
  const numMembers = await (async (): Promise<number> => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        return 0;
      }

      const data: MembershipData = await response.json();

      return data?.current_total ?? 0;
    } catch (err) {
      console.error(err);

      return 0;
    }
  })();

  return <DataDisplay numMembers={numMembers} />;
}
