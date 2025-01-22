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

// https://en.wikipedia.org/wiki/Political_party_affiliation_in_the_United_Kingdom#Current_membership
export const STATIC_MEMBERSHIP_DATA: PoliticalPartyMembershipDataItem[] = [
  { name: "Labour", count: 366_604, colour: "#e91d0e" },
  { name: "Conservatives", count: 131_680, colour: "#0575c9" },
  { name: "Reform UK", count: 184_797, colour: "#0ad1e0" },
  { name: "Liberal Democrats", count: 90_000, colour: "#ff9a02" },
  { name: "Green", count: 59_000, colour: "#5fb25f" },
  { name: "SNP", count: 69_325, colour: "#ffd02c" },
  { name: "Plaid Cymru", count: 10_000, colour: "#13e594" },
];
