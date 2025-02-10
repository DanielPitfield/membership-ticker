import { DataDisplay } from "@/components/DataDisplay";
import { MembershipData } from "./api/ticker/route";

export default async function Home() {
  const numMembers = await (async (): Promise<number> => {
    try {
      const response = await fetch("http://localhost:3000/api/ticker");
      const data = await response.json();

      return data.error ? 0 : (data as MembershipData).current_total;
    } catch (err) {
      return 0;
    }
  })();

  return <DataDisplay numMembers={numMembers} />;
}
