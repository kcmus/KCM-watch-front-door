export default defineAppConfig({
  webUrl: "https://www.kcm.org",
  zaWebUrl: `https://www.kcm.org.za`,
  auWebUrl: `https://secure.kcm.org.au`,
  caWebUrl: `https://kcmcanada.ca`,
  ukWebUrl: `https://kcm.org.uk`,
  uaWebUrl: `https://www.kcm.org.ua`,
  esWebUrl: `https://es.kcm.org`,
  ptWebUrl: `https://pt.kcm.org`,
  webSyncID: "1db6ba71-e641-3900-9545-707c2a56b8e8",
  sessionGUID: "e7d6cdd5-86b2-5b40-7ed9-a142233cd78b",
  /** When true, fakes the API calls to retrieve header/footer data. */
  fakeMenuLookup: true,
  footer: {
    subscribeUrl: `/read/faith-to-faith/subscribe`,
  },
  prayerForm: {
    pageTitle: "Volunteer Prayer Request Form | Kenneth Copeland Ministries",
    enforceSSO: true,

    defaultPublicationUse: true,
    defaultCountry: "US",

    defaultIpAddress: "67.62.42.66",
    defaultGeoIpCountry: "US",
    defaultSourceCode: "GW1VPFSOUT",

    /** When true, fakes the account lookup by phone number. */
    fakeAccountLookup: false,
    /** When true, fakes the submission of a prayer request. */
    fakeSubmitPrayerRequest: false,
  },
});
