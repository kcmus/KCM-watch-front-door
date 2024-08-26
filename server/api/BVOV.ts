
export type BVOVItem = {
  id: number | string;
  type: string;
  weight:number;
  title: string;
  body: string;
  summary: string;
  air_date: string;
  video: {
    vimeo: string;
    youtube: string;
    video_preview: string;
  };
  speakers: {
    id: number | string;
    weight: number;
    name: string;
    body: string;
    image: string;
    taxonomy: string;
  }[];
  downloads: {
    audio: string;
    video: string;
  };
  tags: {
    id: number | string;
    weight: number;
    name: string;
    taxonomy: string;
  }[];
};



export type BVOV_Series = Readonly<{

    bvov_current_week: {
      statusCode: number | null;
      error: string | null;
  
      content: Readonly<{
        id: number | string;
        type: string;
        title: string;
        body: string;
        summary: string;
        air_dates: {
          start: string;
          stop: string;
        };
  
        downloads: {
          id:string;
          type: string;
          weight:number;
          download_type:string;
          title: string;
          body: string | null;
          url: string;
          authors: {
            id: number | string;
            weight: number;
            name: string;
            body: string;
            image: string | null;
            taxonomy: string;
          }[];
        }[];

        items: BVOVItem[];
      }>;
    };
}>;



export type BVOV_Results = Readonly<{

  id: string|number,
  title: string,
  body: string,
  summary: string,
  air_dates: {
    start: string;
    stop: string;
  };
  downloads: {
    id:string;
    type: string;
    weight:number;
    download_type:string;
    title: string;
    body: string | null;
    url: string;
    authors: {
      id: number | string;
      weight: number;
      name: string;
      body: string;
      image: string | null;
      taxonomy: string;
    }[];
  }[];

  items: BVOVItem[];
  downloadsNotesUrl: string;

}>;


 


export type TodayVideo = BVOVItem | null;

export type OtherVideos = BVOVItem[] | null;




  
// Function to get API URL
const getUrl = (api2Url: string, api2Token: string) => {
  return `${api2Url}/api/wfd/bvov.json?token=${api2Token}`;
};



// Function to get the notes url of the current week
const getDownloadsUrl = (BVOVData: BVOV_Series): string => {

  return BVOVData.bvov_current_week.content.downloads[0].url;

};



// Function to format and filter BVOV results
const formatBVOVResults = (BVOVData: BVOV_Series) => {

  const downloadsNotesUrl = getDownloadsUrl(BVOVData);
  const { content } = BVOVData.bvov_current_week;

  return {
    id: content.id,
    title: content.title,
    body: content.body,
    summary: content.summary,
    air_dates: content.air_dates,
    downloads: content.downloads,
    items: content.items,
    downloadsNotesUrl:downloadsNotesUrl,
  };


};

export default defineEventHandler(async (event) => {
  const { api2Url, api2Token } = useRuntimeConfig(event);
  const { fakeBVOVFetch } = useAppConfig();

  const url = getUrl(api2Url, api2Token);

  if (!fakeBVOVFetch) {
    try {
      const results = await $fetch<BVOV_Series>(url);
      return formatBVOVResults(results);
    } catch (error) {
      console.error("Error fetching BVOV data:", error);
      return { error: "Failed to fetch BVOV data" };
    }
  }

  console.warn("Faking BVOV API call to", url);

  const fakeResults: BVOV_Series = {
    bvov_current_week: {
      statusCode: 200,
      error: null,
      content: {
        id: 1,
        type: "daily_broadcast_series",
        title: "The Manifestations of the Holy Spirit and Prayer",
        body: "<p>Body, Possibly Containing HTML Markup.</p>",
        summary: "<p>Summary, Possibly Containing HTML Markup.</p>",
        air_dates: {
          start: "2024-8-19",
          stop: "2024-8-23",
        },
        downloads: [
          {
            id: "1",
            type: "downloadable_asset",
            weight:1,
            download_type:"notes",
            title: "Download Title",
            body: null,
            url: "https://t.kcm.org/download/bnt240819_broadcast-notes",
            authors: [
              {
                id: 1,
                name: "speaker name1",
                body: "speaker description1",
                image: " ",
                weight: 1,
                taxonomy: "speaker_author",
              },
              {
                id: 2,
                name: "speaker name2",
                body: "speaker description2",
                image: " ",
                weight: 1,
                taxonomy: "speaker_author",
              },
            ],
          },
        ],
        
        items: [

          {

              id: 1,
              weight: 1,
              type: "daily_broadcast",
              title: "Prayer is a Vital Part of the Christian Life",
              body: "<p>Body, Possibly Containing HTML Markup.</p>",
              summary: "You may have faith and hope, but do you have Love? Watch Believer's Voice of Victory as Kenneth Copeland reveals how Love is the requirement for manifestations of the Holy Spirit. Learn how to abide in Love, so God can use His power on your behalf through the Holy Spirit!",
              air_date: "2024-8-26",
              video: {
                vimeo: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                youtube: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video_preview: "/images/BVOV-1.png",
              },
      
              speakers:[
                  {
                      id : 1, 
                      name: "speaker name-1",
                      body: "speaker descirption-1",
                      image:"",
                      weight:1,
                      taxonomy:"speaker_author",
                  },
                  {
                      id : 2, 
                      name: "speaker name-2",
                      body: "speaker descirption-2",
                      image: "",
                      weight: 1,
                      taxonomy:"speaker_author", 
                  }
              ] ,

              downloads: {
                audio: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
              },
      
              tags:[]

          },

          {

              id: 2,
              weight:1,
              type: "daily_broadcast",
              title: "How to Access the Power of God Through Prayer",
              body: "<p>Tuesday-Body, Possibly Containing HTML Markup.</p>",
              summary: "2You may have faith and hope, but do you have Love? Watch Believer's Voice of Victory as Kenneth Copeland reveals how Love is the requirement for manifestations of the Holy Spirit. Learn how to abide in Love, so God can use His power on your behalf through the Holy Spirit!",
              air_date: "2024-8-27",
              video: {
                vimeo: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                youtube: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video_preview: "/images/BVOV-1.png",
              },
      
              speakers:[
                  {
                      id : 1, 
                      name: "speaker name-1",
                      body: "speaker descirption-1",
                      image:"",
                      weight:1,
                      taxonomy:"speaker_author",
                  },
                  {
                      id : 2, 
                      name: "speaker name-2",
                      body: "speaker descirption-2",
                      image: "",
                      weight: 1,
                      taxonomy:"speaker_author", 
                  }
              ],

              downloads: {
                audio: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
              },
      
              tags:[]

          },


          {

              id: 3,
              weight:1,
              type: "daily_broadcast",
              title: "The Holy Spirit Prays for You Every Day",
              body: "<p>Wednesday-Body, Possibly Containing HTML Markup.</p>",
              summary: "3You may have faith and hope, but do you have Love? Watch Believer's Voice of Victory as Kenneth Copeland reveals how Love is the requirement for manifestations of the Holy Spirit. Learn how to abide in Love, so God can use His power on your behalf through the Holy Spirit!",
              air_date: "2024-8-28",
              video: {
                vimeo: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                youtube: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video_preview: "/images/BVOV-1.png",
              },
      
              speakers:[
                  {
                      id : 1, 
                      name: "speaker name-1",
                      body: "speaker descirption-1",
                      image:"",
                      weight:1,
                      taxonomy:"speaker_author",
                  },
                  {
                      id : 2, 
                      name: "speaker name-2",
                      body: "speaker descirption-2",
                      image: "",
                      weight: 1,
                      taxonomy:"speaker_author", 
                  }
              ] ,

              downloads: {
                audio: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
              },
      
              tags:[]

          },

          {

              id: 4,
              weight:1,
              type: "daily_broadcast",
              title: "Prayer That Receives Answers from God",
              body: "<p>Thursday-Body, Possibly Containing HTML Markup.</p>",
              summary: "You may have faith and hope, but do you have Love? Watch Believer's Voice of Victory as Kenneth Copeland reveals how Love is the requirement for manifestations of the Holy Spirit. Learn how to abide in Love, so God can use His power on your behalf through the Holy Spirit!",
              air_date: "2024-8-29",
              video: {
                vimeo: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                youtube: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video_preview: "/images/BVOV-1.png",
              },
      
              speakers:[
          
              ] ,

              downloads: {
                audio: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
              },
      
              tags:[]

          },

          {

              id: 5,
              weight:1,
              type: "daily_broadcast",
              title: "The Requirement for Mani-festations of the Holy Spirit",
              body: "<p>Body, Possibly Containing HTML Markup.</p>",
              summary: "You may have faith and hope, but do you have Love? Watch Believer's Voice of Victory as Kenneth Copeland reveals how Love is the requirement for manifestations of the Holy Spirit. Learn how to abide in Love, so God can use His power on your behalf through the Holy Spirit!",
              air_date: "2024-8-30",
              video: {
                vimeo: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                youtube: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video_preview: "/images/BVOV-1.png",
              },
      
              speakers:[
                  {
                      id : 1, 
                      name: "speaker name-1",
                      body: "speaker descirption-1",
                      image:"",
                      weight:1,
                      taxonomy:"speaker_author",
                  },
                  {
                      id : 2, 
                      name: "speaker name-2",
                      body: "speaker descirption-2",
                      image: "",
                      weight: 1,
                      taxonomy:"speaker_author", 
                  }
              ] ,

              downloads: {
                audio: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
                video: "https://www.kcm.org/watch/tv-broadcast/how-be-strong-end-times-part-3?m=1081772",
              },
      
              tags:[]

          },

      ]

      },
    },
  };

  
  return formatBVOVResults(fakeResults);
});
  