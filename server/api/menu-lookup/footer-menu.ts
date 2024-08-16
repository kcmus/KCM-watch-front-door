export type FooterMenuLookupResult = Readonly<{
  footer: {
    statusCode: number | null;
    error?: string | null;
    item: "header" | "footer";
    content: readonly Readonly<{
      title: string;
      weight: string | number;
      url: string;
      target: string;
      children?: {
        title: string;
        weight: string;
        url: string;
        target: string;
      }[];
    }>[];
  };
}>;

const getUrl = (api2Url: string, api2Token: string) => {
  return `${api2Url}/api/menus/footer.json?token=${api2Token}`;
};

const formatSubMenu = (menuData: FooterMenuLookupResult["footer"]["content"][0]["children"]) => {
  return (
    menuData?.map((menuItem) => ({
      text: menuItem.title,
      href: menuItem.url,
      target: menuItem.target,
    })) ?? []
  );
};

const formatMenuResults = (menuData: FooterMenuLookupResult["footer"]["content"]) => {
  return menuData.map((mainMenu) => ({
    title: mainMenu.title,
    links: formatSubMenu(mainMenu.children),
    target: mainMenu.target,
  }));
};

export default defineEventHandler(async (event) => {
  const { api2Url, api2Token } = useRuntimeConfig(event);
  const { fakeMenuLookup } = useAppConfig();

  const url = getUrl(api2Url, api2Token);

  if (!fakeMenuLookup) {
    const results = await $fetch<FooterMenuLookupResult>(url);
    return formatMenuResults(results.footer.content);
  }

  console.warn("faking API call to ", url);

  const results: FooterMenuLookupResult = {
    "footer": {
      "statusCode": 200,
      "error": null,
      "item": "footer",
      "content": [
        {
          "title": "Connect",
          "weight": 0,
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "Ask for Prayer",
              "weight": "-50",
              "url": "https://www.kcm.org/prayer-request",
              "target": "_self",
            },
            {
              "title": "Submit a Testimony",
              "weight": "-49",
              "url": "https://www.kcm.org/testimony",
              "target": "_self",
            },
            {
              "title": "Contact Us",
              "weight": "-48",
              "url": "https://www.kcm.org/contact-us",
              "target": "_self",
            },
            {
              "title": "Partnership",
              "weight": "-47",
              "url": "https://www.kcm.org/partner",
              "target": "_self",
            },
            {
              "title": "Give",
              "weight": "-46",
              "url": "https://www.kcm.org/give",
              "target": "_blank",
            },
          ],
        },
        {
          "title": "Real Help",
          "weight": 1,
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "Topical Index",
              "weight": "30",
              "url": "https://www.kcm.org/real-help/topical-index",
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
          "title": "Discover",
          "weight": 2,
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "Live TV",
              "weight": "-50",
              "url": "https://www.kcm.org/watch/live",
              "target": "_self",
            },
            {
              "title": "Daily Broadcast",
              "weight": "-49",
              "url": "https://www.kcm.org/watch/tv-broadcast",
              "target": "_self",
            },
            {
              "title": "Join us at an Event",
              "weight": "-48",
              "url": "https://www.kcm.org/events",
              "target": "_self",
            },
            {
              "title": "Kenneth Copeland Bible College",
              "weight": "-47",
              "url": "https://www.kcbiblecollege.org/",
              "target": "_self",
            },
            {
              "title": "Eagle Mountain International Church",
              "weight": "-46",
              "url": "https://www.emic.org",
              "target": "_self",
            },
            {
              "title": "Believers' Academy",
              "weight": "-45",
              "url": "https://www.kcm.org/believers-academy",
              "target": "_self",
            },
            {
              "title": "Superkid Academy",
              "weight": "-44",
              "url": "https://superkidacademy.com/",
              "target": "_self",
            },
          ],
        },
        {
          "title": "Support",
          "weight": 3,
          "url": "",
          "target": "_self",
          "children": [
            {
              "title": "Service Questions",
              "weight": "-50",
              "url": "https://www.kcm.org/customer-service",
              "target": "_self",
            },
            {
              "title": "Find a Career",
              "weight": "-49",
              "url": "https://www.kcm.org/about-us/employment",
              "target": "_self",
            },
            {
              "title": "Frequently Asked Questions",
              "weight": "-48",
              "url": "https://www.kcm.org/help-center",
              "target": "_self",
            },
            {
              "title": "Shop",
              "weight": "-47",
              "url": "https://my.kcm.org",
              "target": "_self",
            },
          ],
        },
      ],
    },
  };

  return formatMenuResults(results.footer.content);
});
