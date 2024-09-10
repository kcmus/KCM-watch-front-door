export type Seeds_Of_Change = Readonly<{
  seedsOfChange: {
    statusCode: number | null;
    error?: string | null;

    content: Readonly<{
      id: string;
      type: string;
      title: string;
      subtitle: string;
      link: string;
      body: string;
    }>;
  };
}>;

const getUrl = (api2Url: string, api2Token: string) => {
  return `${api2Url}/api/wfd/seedsOfChange.json?token=${api2Token}`;
};

const formatSeedsChangeResults = (SeedsOfChangeData: Seeds_Of_Change) => {
  return SeedsOfChangeData["seedsOfChange"]["content"];
};

export default defineEventHandler(async (event) => {
  const { api2Url, api2Token } = useRuntimeConfig(event);

  const { fakeSeedsOfChangeFetch } = useAppConfig();

  const url = getUrl(api2Url, api2Token);

  if (!fakeSeedsOfChangeFetch) {
    const results = await $fetch<Seeds_Of_Change>(url);

    return formatSeedsChangeResults(results);
  }

  console.warn("faking Seeds of Change api call to", url);

  const results: Seeds_Of_Change = {
    seedsOfChange: {
      statusCode: 200,
      error: null,
      content: {
        id: "seeds-kcm-1c8ff359",
        type: "giving",
        title: "Sow Seeds of Change with KCM.",
        subtitle: "",
        link: "https://my.kcm.org/category/newest-releases/pb-an-encounter-with-him-300853",
        body: "Give a tax-deductible donation to Kenneth Copeland Ministries. Your giving supports worldwide TV, Outreaches, Prayer & Prison programs, and ministries around the globe.",
      },
    },
  };
  return formatSeedsChangeResults(results);
});
