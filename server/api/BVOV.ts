export type BVOV_Series = Readonly<{}>;

const getUrl = (api2Url: string, api2Token: string) => {
  return `${api2Url}/api/wfd/bvov.json?token=${api2Token}`;
};

const formatBVOVResults = (BVOVData: BVOV_Series) => {};

export default defineEventHandler(async (event) => {
  const { api2Url, api2Token } = useRuntimeConfig(event);
  const { fakeBVOVFetch } = useAppConfig();

  const url = getUrl(api2Url, api2Token);

  if (!fakeBVOVFetch) {
    const results = await $fetch<BVOV_Series>(url);

    return formatBVOVResults(results);
  }

  console.warn("faking BVOV api call to", url);

  const results: BVOV_Series = {};

  return formatBVOVResults(results);
});
