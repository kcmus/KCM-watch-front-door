
export type BVOVItem = {
  id: number | string;
  type: string;
  weight:number;
  title: string;
  body: string;
  summary: string;
  airDate:  number;
  video: {
    vimeo: string;
    youtube: string;
    videoPreview: string;
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
      success: boolean;
      message: string | null;
  
      data: Readonly<{
        id: number | string;
        type: string;
        title: string;
        body: string;
        summary: string;
        airDates: {
          start: number;
          stop: number;
        };
  
        downloads: {
          id:string;
          type: string;
          weight:number;
          downloadType:string;
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
  airDates: {
    start: string|number;
    stop: string|number;
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

  return BVOVData.bvov_current_week.data.downloads[0].url;

};



// Function to format and filter BVOV results
const formatBVOVResults = (BVOVData: BVOV_Series) => {

  const downloadsNotesUrl = getDownloadsUrl(BVOVData);
  const { data } = BVOVData.bvov_current_week;

  return {
    id: data.id,
    title: data.title,
    body: data.body,
    summary: data.summary,
    airDates: data.airDates,
    downloads: data.downloads,
    items: data.items,
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
     success: true,
     message: null,
    data:  {
        id: "1081799",
        type: "daily_broadcast_series",
        title: "Living Free From All Fear",
        body: "<p>Jesus has delivered you from all fear! This week, on <em>Believer’s Voice of Victory</em>, join Kenneth Copeland as he teaches you how to resist fear by yielding to God’s Love. Decontaminate your faith with these six steps to freedom and discover the power of walking in supernatural forgiveness! Study notes available at kcm.org/notes</p>",
        summary: "",
        airDates: {
            start: 1725840000,
            stop: 1726228799
        },
        downloads: [
            {
                id: "1081821",
                type: "downloadable_asset",
                weight: 0,
                downloadType: "notes",
                title: "KCM Broadcast Notes September 9 - 13 2024 - Living Free From All Fear",
                body: "",
                url: "https://t.kcm.org/download/bnt240909_broadcast-notes",
                authors: [
                    {
                        id: "6225",
                        weight: 0,
                        name: "Kenneth Copeland",
                        body: "<p>Kenneth Copeland is known worldwide as a speaker, author, television minister and recording artist. The driving force of his ministry is the message that God’s Word works to turn every area of life from failure to success.&nbsp;Today, after more than 50 years in public ministry, he and his wife, Gloria, continue to distribute the biblical message of hope worldwide from Kenneth Copeland Ministries headquarters in Fort Worth, Texas, and from international offices in Canada, Europe, Australia, Africa, Ukraine and Latin America. Since his earliest days of ministry, Kenneth Copeland has preached the uncompromised Word of God, continuing to fulfill his mission to declare from the top of the world to the bottom and all the way around that Jesus is Lord!</p>\r\n",
                        image: "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/2023-10/2023-kenneth-copeland-250x250.jpg?VersionId=T7rz2Nw_s1iYTL2I00OdebdluRG3qwyJ",
                        taxonomy: "speaker_author"
                    }
                ]
            }
        ],
        items: [
            {
                id: 1081800,
                type: "daily_broadcast",
                title: "Believe God's Love for You and Live Fearlessly",
                body: "<p>The Bible says God is Love, and it's His Love that casts out all fear. Today, on <em>Believer's Voice of Victory</em>, Kenneth Copeland reminds you there is never a reason to fear, because God, who is Love, has promised to never leave or forsake you!</p>",
                summary: "The Bible says God is Love, and it's His love that casts out all fear. ",
                weight: 0,
                airDate: 1725912727,
                video: {
                    vimeo: "https://vimeo.com/1006363962/00c8a7c603",
                    youtube: "https://youtu.be/YGFZrtE4cAM",
                    videoPreview: "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/1919594662-e46bae11e0067ac9cbcb1fd13edc248a2ffadc98094e31171c04a90c752cc13c-d_1920x1080.jpg?VersionId=rFYv.Ud7qdFwO1xDR6Mi5jvmzjHuzL4i"
                },
                speakers: [
                    {
                        id: "6225",
                        weight: 0,
                        name: "Kenneth Copeland",
                        body: "<p>Kenneth Copeland is known worldwide as a speaker, author, television minister and recording artist. The driving force of his ministry is the message that God’s Word works to turn every area of life from failure to success.&nbsp;Today, after more than 50 years in public ministry, he and his wife, Gloria, continue to distribute the biblical message of hope worldwide from Kenneth Copeland Ministries headquarters in Fort Worth, Texas, and from international offices in Canada, Europe, Australia, Africa, Ukraine and Latin America. Since his earliest days of ministry, Kenneth Copeland has preached the uncompromised Word of God, continuing to fulfill his mission to declare from the top of the world to the bottom and all the way around that Jesus is Lord!</p>\r\n",
                        image: "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/2023-10/2023-kenneth-copeland-250x250.jpg?VersionId=T7rz2Nw_s1iYTL2I00OdebdluRG3qwyJ",
                        taxonomy: "speaker_author"
                    }
                ],
                downloads: {
                    audio: "https://traffic.libsyn.com/copelandnetworkaudiopodcast/KCOPELAND_US_240909_REV_2.mp3",
                    video: "https://traffic.libsyn.com/copelandnetworkvideopodcast/KCOPELAND_US_240909_REV.mp4"
                },
                tags: [
                    {
                        id: "5066",
                        weight: 0,
                        name: "free",
                        taxonomy: "tags"
                    },
                    {
                        id: "1698",
                        weight: 1,
                        name: "freedom",
                        taxonomy: "tags"
                    },
                    {
                        id: "4468",
                        weight: 2,
                        name: "Fearless",
                        taxonomy: "tags"
                    },
                    {
                        id: "5300",
                        weight: 3,
                        name: "deliver",
                        taxonomy: "tags"
                    }
                ]
            },
            {
                id: 1081801,
                type: "daily_broadcast",
                title: "Yield to God’s Love and Resist Fear",
                body: "<p>Perfected love casts out all fear! Watch Kenneth Copeland on <em>Believer’s Voice of Victory</em> as he encourages you to yield to God’s Love and resist fear. Decontaminate your faith from fear as you learn how to be filled with the fullness of God’s Love!</p>",
                summary: "Perfected love casts out all fear!",
                weight: 1,
                airDate: 1725999127,
                video: {
                    "vimeo": "https://vimeo.com/1003210761/36c1adaca3",
                    "youtube": "https://youtu.be/fj0naqvDmo8",
                    "videoPreview": "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/1919595988-a20e09f73e4b5fc2447bdbd8c909e68b22e403e83ea7d4b9f9da78ef420d8cff-d_1920x1080.jpg?VersionId=S6QhyCTcUoQ2GYgbArdJa6C2APNi4LIG"
                },
                speakers: [
                    {
                        "id": "6225",
                        "weight": 0,
                        "name": "Kenneth Copeland",
                        "body": "<p>Kenneth Copeland is known worldwide as a speaker, author, television minister and recording artist. The driving force of his ministry is the message that God’s Word works to turn every area of life from failure to success.&nbsp;Today, after more than 50 years in public ministry, he and his wife, Gloria, continue to distribute the biblical message of hope worldwide from Kenneth Copeland Ministries headquarters in Fort Worth, Texas, and from international offices in Canada, Europe, Australia, Africa, Ukraine and Latin America. Since his earliest days of ministry, Kenneth Copeland has preached the uncompromised Word of God, continuing to fulfill his mission to declare from the top of the world to the bottom and all the way around that Jesus is Lord!</p>\r\n",
                        "image": "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/2023-10/2023-kenneth-copeland-250x250.jpg?VersionId=T7rz2Nw_s1iYTL2I00OdebdluRG3qwyJ",
                        "taxonomy": "speaker_author"
                    }
                ],
                downloads: {
                    audio: "https://traffic.libsyn.com/copelandnetworkaudiopodcast/KCOPELAND_US_240910_2.mp3",
                    "video": "https://traffic.libsyn.com/copelandnetworkvideopodcast/KCOPELAND_US_240910.mp4"
                },
                tags: [
                    {
                        id: "1397",
                        weight: 0,
                        name: "love",
                        taxonomy: "tags"
                    },
                    {
                        id: "4468",
                        weight: 1,
                        name: "Fearless",
                        taxonomy: "tags"
                    },
                    {
                        id: "5390",
                        weight: 2,
                        name: "yield",
                        taxonomy: "tags"
                    },
                    {
                        id: "1320",
                        weight: 3,
                        name: "faith",
                        taxonomy: "tags"
                    }
                ]
            },
            {
                id: 1081802,
                type: "daily_broadcast",
                title: "Walking In Forgiveness Closes the Door on Fear",
                body: "<p>Choose to forgive and forget! Join Kenneth Copeland on <em>Believer’s Voice of Victory</em> as he explains how walking in forgiveness closes the door on fear. Discover how to supernaturally forgive others just as God has forgiven us, and remain forever in His Love!</p>",
                summary: "Choose to forgive and forget!",
                weight: 2,
                airDate: 1726085527,
                video: {
                    vimeo: "https://vimeo.com/1003211851/4b972f0a1e",
                    youtube: "https://youtu.be/FuKAPOVlmUo",
                    videoPreview: "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/1919596862-9583e6f24cc0c6b82b6637d130d12c614dd054bbd5450c5061ff50ab90ea309a-d_1920x1080.jpg?VersionId=1vvtqn7RZjhPBcnmHV.Jo2WfFvIQWlQ9"
                },
                speakers: [
                    {
                        id: "6225",
                        weight: 0,
                        name: "Kenneth Copeland",
                        body: "<p>Kenneth Copeland is known worldwide as a speaker, author, television minister and recording artist. The driving force of his ministry is the message that God’s Word works to turn every area of life from failure to success.&nbsp;Today, after more than 50 years in public ministry, he and his wife, Gloria, continue to distribute the biblical message of hope worldwide from Kenneth Copeland Ministries headquarters in Fort Worth, Texas, and from international offices in Canada, Europe, Australia, Africa, Ukraine and Latin America. Since his earliest days of ministry, Kenneth Copeland has preached the uncompromised Word of God, continuing to fulfill his mission to declare from the top of the world to the bottom and all the way around that Jesus is Lord!</p>\r\n",
                        image: "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/2023-10/2023-kenneth-copeland-250x250.jpg?VersionId=T7rz2Nw_s1iYTL2I00OdebdluRG3qwyJ",
                        taxonomy: "speaker_author"
                    }
                ],
                downloads: {
                    audio: "https://traffic.libsyn.com/copelandnetworkaudiopodcast/KCOPELAND_US_240911_2.mp3",
                    video: "https://traffic.libsyn.com/copelandnetworkvideopodcast/KCOPELAND_US_240911.mp4"
                },
                tags: [
                    {
                        id: "1311",
                        weight: 0,
                        name: "Christian Walk",
                        taxonomy: "tags"
                    },
                    {
                        id: "5635",
                        weight: 1,
                        name: "walking",
                        taxonomy: "tags"
                    },
                    {
                        id: "1324",
                        weight: 2,
                        name: "forgiveness",
                        taxonomy: "tags"
                    },
                    {
                        "id": "4468",
                        "weight": 3,
                        "name": "Fearless",
                        "taxonomy": "tags"
                    }
                ]
            },
            {
                id: 1081803,
                type: "daily_broadcast",
                title: "A Fearless Lifestyle Shows God’s Love to Others",
                body: "<p>It’s time to step it up! Watch <em>Believer’s Voice of Victory</em> as Kenneth Copeland shares with you biblical steps for living a life free from fear. Learn that responding to others with God’s Love is key to living the fearless life Jesus made possible for you.</p>",
                summary: "It’s time to step it up!",
                weight: 3,
                airDate: 1726171927,
                video: {
                    vimeo: "https://vimeo.com/1003212698/e41f815228",
                    youtube: "https://youtu.be/28k2QBguAJQ",
                    videoPreview: "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/1919597832-f2568fde532f2e9d2541e4e6284169efdf07c774be920aa9618cd6fb682cb0d0-d_1920x1080.jpg?VersionId=Gd9Q98zj_G7M.piuPRk4YLVnDjv8WYMq"
                },
                speakers: [
                    {
                        id: "6225",
                        weight: 0,
                        name: "Kenneth Copeland",
                        body: "<p>Kenneth Copeland is known worldwide as a speaker, author, television minister and recording artist. The driving force of his ministry is the message that God’s Word works to turn every area of life from failure to success.&nbsp;Today, after more than 50 years in public ministry, he and his wife, Gloria, continue to distribute the biblical message of hope worldwide from Kenneth Copeland Ministries headquarters in Fort Worth, Texas, and from international offices in Canada, Europe, Australia, Africa, Ukraine and Latin America. Since his earliest days of ministry, Kenneth Copeland has preached the uncompromised Word of God, continuing to fulfill his mission to declare from the top of the world to the bottom and all the way around that Jesus is Lord!</p>\r\n",
                        image: "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/2023-10/2023-kenneth-copeland-250x250.jpg?VersionId=T7rz2Nw_s1iYTL2I00OdebdluRG3qwyJ",
                        taxonomy: "speaker_author"
                    }
                ],
                downloads: {
                    audio: "https://traffic.libsyn.com/copelandnetworkaudiopodcast/KCOPELAND_US_240912_2.mp3",
                    video: "https://traffic.libsyn.com/copelandnetworkvideopodcast/KCOPELAND_US_240912.mp4"
                },
                tags: [
                    {
                        id: "4468",
                        weight: 0,
                        name: "Fearless",
                        taxonomy: "tags"
                    },
                    {
                        id: "5039",
                        weight: 1,
                        name: "lifestyle",
                        taxonomy: "tags"
                    },
                    {
                        id: "1698",
                        weight: 2,
                        name: "freedom",
                        taxonomy: "tags"
                    },
                    {
                        id: "1397",
                        weight: 3,
                        name: "love",
                        taxonomy: "tags"
                    }
                ]
            },
            {
                id: 1081804,
                type: "daily_broadcast",
                title: "Live Fearlessly Through the Power of God’s Love",
                body: "<p>No fear here! Watch <em>Believer’s Voice of Victory</em> as Kenneth Copeland teaches you how to live fearlessly through the power of God’s Love. Live a life of love so you can resist the devil and make him flee!</p>",
                summary: "No fear here!",
                weight: 4,
                airDate: 1726258327,
                video: {
                    vimeo: "https://vimeo.com/1003213573/795048c338",
                    youtube: "https://youtu.be/P-YRJUB_vrg",
                    videoPreview: "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/1919598763-dc4df802804703a7e08093e14fee1ce32b6db1513b971245eed244ceb735b2f5-d_1920x1080.jpg?VersionId=vAxFENf0Kv1nkfSx2Y6.XOQ_9lxGcQdW"
                },
                speakers: [
                    {
                        id: "6225",
                        weight: 0,
                        name: "Kenneth Copeland",
                        body: "<p>Kenneth Copeland is known worldwide as a speaker, author, television minister and recording artist. The driving force of his ministry is the message that God’s Word works to turn every area of life from failure to success.&nbsp;Today, after more than 50 years in public ministry, he and his wife, Gloria, continue to distribute the biblical message of hope worldwide from Kenneth Copeland Ministries headquarters in Fort Worth, Texas, and from international offices in Canada, Europe, Australia, Africa, Ukraine and Latin America. Since his earliest days of ministry, Kenneth Copeland has preached the uncompromised Word of God, continuing to fulfill his mission to declare from the top of the world to the bottom and all the way around that Jesus is Lord!</p>\r\n",
                        image: "https://kcm-www-tst.s3.amazonaws.com/tst/s3fs-public/2023-10/2023-kenneth-copeland-250x250.jpg?VersionId=T7rz2Nw_s1iYTL2I00OdebdluRG3qwyJ",
                        taxonomy: "speaker_author"
                    }
                ],
                downloads: {
                    audio: "https://traffic.libsyn.com/copelandnetworkaudiopodcast/KCOPELAND_US_240913_2.mp3",
                    video: "https://traffic.libsyn.com/copelandnetworkvideopodcast/KCOPELAND_US_240913.mp4"
                },
                tags: [
                    {
                        id: "4468",
                        weight: 0,
                        name: "Fearless",
                        taxonomy: "tags"
                    },
                    {
                        id: "5805",
                        weight: 1,
                        name: "live",
                        taxonomy: "tags"
                    },
                    {
                        id: "5039",
                        weight: 2,
                        name: "lifestyle",
                        taxonomy: "tags"
                    },
                    {
                        id: "1397",
                        weight: 3,
                        name: "love",
                        taxonomy: "tags"
                    }
                ]
            }
        ]
    },
    },
  };

  
  return formatBVOVResults(fakeResults);
});
  