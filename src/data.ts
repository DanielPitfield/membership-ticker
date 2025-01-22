const POLITICAL_PARTIES = [
  "Labour",
  "Conservatives",
  "Reform UK",
  "Liberal Democrats",
  "Green",
  "SNP",
  "Plaid Cymru",
] as const;

type PoliticalPartyName = (typeof POLITICAL_PARTIES)[number];

type PoliticalPartyMembershipDataItem = {
  name: PoliticalPartyName;
  count: number;
  colour: string;
};

// Mock data
export const STATIC_MEMBERSHIP_DATA: PoliticalPartyMembershipDataItem[] = [
  { name: "Labour", count: 100000, colour: "#e91d0e" },
  { name: "Conservatives", count: 100000, colour: "#0575c9" },
  { name: "Reform UK", count: 100000, colour: "#0ad1e0" },
  { name: "Liberal Democrats", count: 100000, colour: "#ff9a02" },
  { name: "Green", count: 100000, colour: "#5fb25f" },
  { name: "SNP", count: 100000, colour: "#ffd02c" },
  { name: "Plaid Cymru", count: 100000, colour: "#13e594" },
];
