export type TV_Offer = Readonly<{
  tvOffer: {
    statusCode: number | null;
    error?: string | null;

    content: Readonly<{
      id: string;
      type: string;
      title: string;
      subtitle: string;
      link: string;
      body: string;
      price: string;
      offerDates: object;
      image: object | string;
    }>;
  };
}>;

const getUrl = (api2Url: string, api2Token: string) => {
  return `${api2Url}/api/wfd/tvOffer.json?token=${api2Token}`;
};

const formatFreeOfferResults = (TVOfferData: TV_Offer) => {
  return TVOfferData["tvOffer"]["content"];
};

export default defineEventHandler(async (event) => {
  const { api2Url, api2Token } = useRuntimeConfig(event);

  const { fakeTVOfferFetch } = useAppConfig();

  const url = getUrl(api2Url, api2Token);

  if (!fakeTVOfferFetch) {
    const results = await $fetch<TV_Offer>(url);

    return formatFreeOfferResults(results);
  }

  console.warn("faking Free TV Offer api call to", url);

  const results: TV_Offer = {
    tvOffer: {
      statusCode: 200,
      error: null,
      content: {
        id: "offer-kcm-1c8ff359",
        type: "product_offer",
        title: "Release the Powerhouse of Faith in Your Heart Today!",
        subtitle: "Becoming God-Inside Minded Package",
        link: "https://my.kcm.org/category/newest-releases/pb-an-encounter-with-him-300853",
        body: "Body content",
        price: "$25.99",
        offerDates: {
          start: "05/25/1999",
          stop: "05/27/1998",
        },
        // image: "/images/FreeTVOffer.png",
        image: {
          src: "/images/FreeTVOffer.png",
          alt: "title",
          title: "large image",
          large: {
            src: "/images/FreeTVOffer.png",
            alt: "title",
            title: "large image",
          },
          small: {
            src: "/images/FreeTVOffer.png",
            alt: "title",
            title: "small image",
          },
        },
      },
    },
  };
  return formatFreeOfferResults(results);
});
