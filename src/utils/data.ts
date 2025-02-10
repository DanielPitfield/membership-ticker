const POLITICAL_PARTIES = [
  "Labour",
  "Conservatives",
  "Reform UK",
  "Liberal Democrats",
  "Green",
  "SNP",
  "Plaid Cymru",
] as const;

export const DATASET_NAMES = [
  "Membership count",
  "General Election Seats",
  "General Election Vote Share",
  "January 2025 - Voting Intention Poll",
] as const;

export type PoliticalPartyName = (typeof POLITICAL_PARTIES)[number];
export type DatasetName = (typeof DATASET_NAMES)[number];

export type PoliticalPartyDataItem = {
  name: PoliticalPartyName;
  count: number;
};

export const PARTY_COLOURS: { name: PoliticalPartyName; colour: string }[] = [
  { name: "Labour", colour: "#e91d0e" },
  { name: "Conservatives", colour: "#0575c9" },
  { name: "Reform UK", colour: "#0ad1e0" },
  { name: "Liberal Democrats", colour: "#ff9a02" },
  { name: "Green", colour: "#5fb25f" },
  { name: "SNP", colour: "#ffd02c" },
  { name: "Plaid Cymru", colour: "#13e594" },
];

// https://en.wikipedia.org/wiki/Political_party_affiliation_in_the_United_Kingdom#Current_membership
// https://www.reformparty.uk/counter
const MEMBERSHIP_DATA: PoliticalPartyDataItem[] = [
  { name: "Labour", count: 309_000 },
  { name: "Conservatives", count: 131_680 },
  { name: "Reform UK", count: 204_363 },
  { name: "Liberal Democrats", count: 90_000 },
  { name: "Green", count: 59_000 },
  { name: "SNP", count: 69_325 },
  { name: "Plaid Cymru", count: 10_000 },
];

// https://www.bbc.co.uk/news/election/2024/uk/results
const GENERAL_ELECTION_2024_SEATS_DATA: PoliticalPartyDataItem[] = [
  { name: "Labour", count: 412 },
  { name: "Conservatives", count: 121 },
  { name: "Reform UK", count: 5 },
  { name: "Liberal Democrats", count: 72 },
  { name: "Green", count: 4 },
  { name: "SNP", count: 9 },
  { name: "Plaid Cymru", count: 4 },
];

// https://www.bbc.co.uk/news/election/2024/uk/results
const GENERAL_ELECTION_2024_VOTE_SHARE_DATA: PoliticalPartyDataItem[] = [
  { name: "Labour", count: 33.7 },
  { name: "Conservatives", count: 23.7 },
  { name: "Reform UK", count: 14.3 },
  { name: "Liberal Democrats", count: 12.2 },
  { name: "Green", count: 6.7 },
  { name: "SNP", count: 2.5 },
  { name: "Plaid Cymru", count: 0.7 },
];

// https://findoutnow.co.uk/blog/voting-intention-8th-jan-2025/
const JANUARY_2025_POLL_VOTING_INTENTION_DATA: PoliticalPartyDataItem[] = [
  { name: "Labour", count: 25 },
  { name: "Conservatives", count: 20 },
  { name: "Reform UK", count: 25 },
  { name: "Liberal Democrats", count: 11 },
  { name: "Green", count: 11 },
  { name: "SNP", count: 3 },
  { name: "Plaid Cymru", count: 1 },
];

export const DATASETS: { name: DatasetName; data: PoliticalPartyDataItem[] }[] =
  [
    { name: "Membership count", data: MEMBERSHIP_DATA },
    { name: "General Election Seats", data: GENERAL_ELECTION_2024_SEATS_DATA },
    {
      name: "General Election Vote Share",
      data: GENERAL_ELECTION_2024_VOTE_SHARE_DATA,
    },
    {
      name: "January 2025 - Voting Intention Poll",
      data: JANUARY_2025_POLL_VOTING_INTENTION_DATA,
    },
  ]
    // Sort the data items of each dataset in descending order
    .map((dataset) => ({
      name: dataset.name as DatasetName,
      data: dataset.data.sort((a, b) => b.count - a.count),
    }));
