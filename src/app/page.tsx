// Fresh data on each request (on demand instead of being pre-rendered)
export const dynamic = "force-dynamic";

import { DataDisplay } from "@/components/DataDisplay";

type MembershipData = { current_total: number };
const API_URL = new URL("https://pro-worker.reformparty.uk/ticker/count");

/**
 * Must be called server-side due to CORS restrictions
 * @throws Error if called from client-side context
 */
async function getNumReformMembers(): Promise<number> {
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
}

export default async function Home() {
  // Just once on request, polling frequently may hit rate limits
  const numReformMembers = await getNumReformMembers();

  return <DataDisplay numReformMembers={numReformMembers} />;
}
