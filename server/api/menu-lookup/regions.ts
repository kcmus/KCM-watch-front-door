const getQueryString = (args: Record<string, string | undefined>) => {
  return Object.keys(args)
    .filter((key) => typeof args[key] === "string" && args[key].length > 0)
    .map((key) => `${key}=${encodeURIComponent(args[key]!)}`)
    .join("&");
};


//  webSyncID: "1db6ba71-e641-3900-9545-707c2a56b8e8",
// sessionGUID: "e7d6cdd5-86b2-5b40-7ed9-a142233cd78b",

export default defineEventHandler(async (event) => {
  const { webSyncID, sessionGUID, ...appConfig } = useAppConfig(event);


  const queryString = getQueryString({ webSyncID, sessionGUID });

  return [
    { id: "us", url: `${appConfig.webUrl}`, name: "United States" },
    { id: "za", url: `${appConfig.zaWebUrl}/?${queryString}`, name: "Africa" },
    { id: "au", url: `${appConfig.auWebUrl}/?${queryString}`, name: "Australia/Pacific" },
    { id: "ca", url: `${appConfig.caWebUrl}`, name: "Canada" },
    { id: "uk", url: `${appConfig.ukWebUrl}/?${queryString}`, name: "Europe" },
    { id: "ua", url: `${appConfig.uaWebUrl}/?${queryString}`, name: "Ukraine" },
    { id: "es", url: `${appConfig.esWebUrl}`, name: "Español" },
    { id: "pt", url: `${appConfig.ptWebUrl}`, name: "Português" },
  ] as const;
});
