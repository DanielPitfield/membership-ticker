const POLITICAL_PARTIES = [
  "Labour",
  "Conservatives",
  "Reform UK",
  "Liberal Democrats",
  "Green",
  "SNP",
  "Plaid Cymru",
] as const;

type PoliticalParty = (typeof POLITICAL_PARTIES)[number];

// Mock data
export const STATIC_MEMBERSHIP_DATA: { name: PoliticalParty; count: number }[] =
  [
    { name: "Labour", count: 100000 },
    { name: "Conservatives", count: 100000 },
    { name: "Reform UK", count: 100000 },
    { name: "Liberal Democrats", count: 100000 },
    { name: "Green", count: 100000 },
    { name: "SNP", count: 100000 },
    { name: "Plaid Cymru", count: 100000 },
  ];
