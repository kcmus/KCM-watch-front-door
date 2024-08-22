import type { FooterMenuLookupResult } from "./footer-menu";

export type HeaderMenuLookupResult = Readonly<{
  header: FooterMenuLookupResult["footer"];
}>;


const getUrl = (api2Url: string, api2Token: string) => {
  return `${api2Url}/api/menus/header.json?token=${api2Token}`;
};

const formatSubMenu = (menuData: HeaderMenuLookupResult["header"]["content"][0]["children"]) => {
  return (
    menuData?.map((menuItem) => ({
      title: menuItem.title,
      url: menuItem.url,
      target: menuItem.target,
    })) ?? []
  );
};

const formatMenuResults = (menuData: HeaderMenuLookupResult["header"]["content"]) => {
  return menuData.map((mainMenu) => ({
    title: mainMenu.title,
    url: mainMenu.url === "" ? "#" : mainMenu.url,
    dropdown: Array.isArray(mainMenu.children) && mainMenu.children.length > 0,
    subItems: formatSubMenu(mainMenu.children),
    target: mainMenu.target,
  }));
};

export default defineEventHandler(async (event) => {
  const { api2Url, api2Token } = useRuntimeConfig(event);
  const { fakeMenuLookup } = useAppConfig();


  // api2Url: "https://local-api2.kcmtst.org",
  const url = getUrl(api2Url, api2Token);

  if (!fakeMenuLookup) {
    const results = await $fetch<HeaderMenuLookupResult>(url);
    return formatMenuResults(results.header.content);
  }

  // console.warn("faking API call to ", url);

  const results: HeaderMenuLookupResult = {
    "header": {
      "statusCode": 200,
      "error": null,
      "item": "header",
      "content": [
        {
          "title": "Read",
          "weight": "-66",
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "Faith to Faith — Daily Devotionals",
              "weight": "0",
              "url": "https://www.kcm.org/read/faith-to-faith",
              "target": "_self",
            },
            {
              "title": "Blog",
              "weight": "1",
              "url": "http://blog.kcm.org",
              "target": "_blank",
            },
            {
              "title": "Outreach",
              "weight": "2",
              "url": "http://blog.kcm.org/category/outreach",
              "target": "_blank",
            },
            {
              "title": "BVOV Magazine",
              "weight": "3",
              "url": "https://www.kcm.org/read/magazine",
              "target": "_self",
            },
            {
              "title": "Question of the Day",
              "weight": "4",
              "url": "https://www.kcm.org/read/question-of-the-day",
              "target": "_self",
            },
            {
              "title": "One-Year Bible",
              "weight": "5",
              "url": "https://www.kcm.org/read/one-year-bible",
              "target": "_self",
            },
            {
              "title": "Prophecies",
              "weight": "6",
              "url": "https://www.kcm.org/read/prophecies",
              "target": "_self",
            },
            {
              "title": "Testimonies",
              "weight": "7",
              "url": "https://www.kcm.org/read/testimonies",
              "target": "_self",
            },
          ],
        },
        {
          "title": "Watch",
          "weight": "-65",
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "VICTORY Channel Live",
              "weight": "-68",
              "url": "https://www.kcm.org/watch/live",
              "target": "_self",
            },
            {
              "title": "Inside the Vision",
              "weight": "-67",
              "url": "https://www.insidethevision.org",
              "target": "_blank",
            },
            {
              "title": "BVOV Daily Broadcast",
              "weight": "-65",
              "url": "https://www.kcm.org/watch/tv-broadcast",
              "target": "_self",
            },
            {
              "title": "Notes/Downloads",
              "weight": "-64",
              "url": "https://www.kcm.org/watch/downloads",
              "target": "_self",
            },
            {
              "title": "Watch Events OnDemand",
              "weight": "-63",
              "url": "https://www.kcm.org/watch/event",
              "target": "_self",
            },
            {
              "title": "Ways to Watch",
              "weight": "-62",
              "url": "https://www.kcm.org/watch/more-ways-watch",
              "target": "_self",
            },
          ],
        },
        {
          "title": "Events",
          "weight": "-64",
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "Event Listing",
              "weight": "-50",
              "url": "https://www.kcm.org/events",
              "target": "_self",
            },
            {
              "title": "Why Attend?",
              "weight": "-49",
              "url": "https://www.kcm.org/events/why-attend",
              "target": "_self",
            },
            {
              "title": "What to Expect",
              "weight": "-48",
              "url": "https://www.kcm.org/events/what-to-expect",
              "target": "_self",
            },
            {
              "title": "Watch Events OnDemand",
              "weight": "-47",
              "url": "https://www.kcm.org/watch/event",
              "target": "_self",
            },
            {
              "title": "Volunteer Opportunities",
              "weight": "-46",
              "url": "https://www.kcm.org/volunteer-opportunities",
              "target": "_self",
            },
          ],
        },
        {
          "title": "Real Help",
          "weight": "-63",
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "Welcome to Real Help",
              "weight": "-52",
              "url": "https://www.kcm.org/real-help",
              "target": "_self",
            },
            {
              "title": "Finances",
              "weight": "41",
              "url": "https://www.kcm.org/real-help/finances",
              "target": "_self",
            },
            {
              "title": "Relationships",
              "weight": "42",
              "url": "https://www.kcm.org/real-help/relationships",
              "target": "_self",
            },
            {
              "title": "Healing",
              "weight": "43",
              "url": "https://www.kcm.org/real-help/healing",
              "target": "_self",
            },
            {
              "title": "Prayer",
              "weight": "44",
              "url": "https://www.kcm.org/real-help/prayer",
              "target": "_self",
            },
            {
              "title": "Faith",
              "weight": "45",
              "url": "https://www.kcm.org/real-help/faith",
              "target": "_self",
            },
            {
              "title": "Life & Work",
              "weight": "46",
              "url": "https://www.kcm.org/real-help/life-work",
              "target": "_self",
            },
            {
              "title": "Spiritual Growth",
              "weight": "47",
              "url": "https://www.kcm.org/real-help/spiritual-growth",
              "target": "_self",
            },
            {
              "title": "Salvation",
              "weight": "48",
              "url": "https://www.kcm.org/real-help/salvation",
              "target": "_self",
            },
          ],
        },
        {
          "title": "About Us",
          "weight": "-62",
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "Start Here",
              "weight": "-53",
              "url": "https://www.kcm.org/about-us",
              "target": "_self",
            },
            {
              "title": "Elite CX Team",
              "weight": "-52",
              "url": "http://blog.kcm.org/category/elite-cx-team",
              "target": "_self",
            },
            {
              "title": "Find a Church",
              "weight": "-51",
              "url": "https://www.kcm.org/church-listing",
              "target": "_self",
            },
            {
              "title": "Find a Career",
              "weight": "-50",
              "url": "https://www.kcm.org/about-us/employment",
              "target": "_self",
            },
          ],
        },
        {
          "title": "Partner",
          "weight": "-61",
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "Partnership",
              "weight": "-50",
              "url": "https://www.kcm.org/partner",
              "target": "_self",
            },
            {
              "title": "Believers' Academy",
              "weight": "-49",
              "url": "https://www.kcm.org/believers-academy",
              "target": "_self",
            },
            {
              "title": "Kenneth's Partner Letter Archive",
              "weight": "-48",
              "url": "https://www.kcm.org/believers-academy/partner-letter-archive",
              "target": "_self",
            },
            {
              "title": "Bonus Library",
              "weight": "-47",
              "url": "https://www.kcm.org/believers-academy/bonus-library",
              "target": "_self",
            },
            {
              "title": "Community",
              "weight": "-46",
              "url": "https://community.kcm.org",
              "target": "_self",
            },
          ],
        },
        // {
        //   "title": "No Sub Menus",
        //   "weight": "-60",
        //   "url": "/",
        //   "target": "_self",
        //   "children": [

        //   ]
        // },
      ],
    },
  };

  return formatMenuResults(results.header.content);
});
