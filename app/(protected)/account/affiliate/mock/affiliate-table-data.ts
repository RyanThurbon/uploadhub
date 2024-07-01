const affiliateTableMockData = [
  {
    tier: "1",
    countries: ["Australia, Germany, United Kingdom, United States"],
    earnings: {
      first: "30",
      second: "30",
      third: "30",
      fourth: "30",
    },
  },
  {
    tier: "2",
    countries: ["Austria, Canada, Finland, France, Norway"],
    earnings: {
      first: "20",
      second: "20",
      third: "20",
      fourth: "20",
    },
  },
  {
    tier: "3",
    countries: ["Belgium, Croatia, Ireland, Italy, Netherlands, New Zealand, Spain, Sweden, Switzerland"],
    earnings: {
      first: "13",
      second: "13",
      third: "13",
      fourth: "13",
    },
  },
  {
    tier: "4",
    countries: ["Bosnia-Herzegovina, Brazil, Chile, Colombia, Cyprus, Czech Republic, Greece, Hong Kong and more"],
    earnings: {
      first: "10",
      second: "10",
      third: "10",
      fourth: "10",
    },
  },
];

const affiliateTableTierColors: any = {
  1: "text-cyan-400",
  2: "text-orange-400",
  3: "text-blue-400",
  4: "text-violet-400",
};

export { affiliateTableMockData, affiliateTableTierColors };
