
export type ITvCurrentWeek = Readonly<{

    episodeTitle: string;
    imageUrl: string;
    link: string; //the ITV episode for the current week

}>

export type Seasons =  {

    seasonNumber : number | string;

    episodes : {
        id: string | number,
        episodeNumber: number | string;
        title: string;
        link: string;

    }[];
}[];


export type InsideTheVision = Readonly<{

    ITV : {

        success: boolean;
        message: string;
        data: Readonly<{      
            id: string | number;
            title: string;
            url: string //  https://www.insidethevision.org/
           
            currentWeekEpisode: ITvCurrentWeek;

            seasons: Seasons;
        }>;
    };

}>;



export type ITVData = InsideTheVision['ITV']['data'];


const getUrl = (api2Url: string, api2Token: string) => {

    return `${api2Url}/api/wfd/insideTheVision.json?token=${api2Token}`;
}


const formatITVResults = (ITVData : InsideTheVision) => {

    const data = ITVData['ITV']['data'];
    return data;

}


export default defineEventHandler( async (event) => {


    const {api2Url,api2Token} = useRuntimeConfig(event);

    const {fakeITVFetch} = useAppConfig();

    const url = getUrl(api2Url,api2Token);

    if(!fakeITVFetch){

        const results = await $fetch<InsideTheVision>(url);

        return formatITVResults(results);
    }

    console.warn("faking Inside the Vision api call to ", url);


    const results: InsideTheVision = {


        ITV : {

            success:true,
            message: " ",
            data: {

                id:"1",
                title:"Inside the Vision",
                url: "https://www.insidethevision.org/",
                currentWeekEpisode: {
                    episodeTitle: "S2 Ep12 How to GROW Your Vision",
                    imageUrl:"/images/InsideTheVisionVideo.png",
                    link: "https://www.insidethevision.org/" // it should be  ITV episode for the current week,episodes change each Sunday
                },
                seasons:[

                    {

                        seasonNumber:1,

                        episodes: [

                            { 
                                id : "1",
                                episodeNumber: 1,
                                title: "Introduction to Inside the Vision",
                                link: "https://www.insidethevision.org/episode/update-episode-1-2-2024/"
                            },
                            {
                                id : "2",
                                episodeNumber: 2,
                                title: "Understanding Your Purpose",
                                link: "https://www.insidethevision.org/episode/victory-channel-9-12-2023/"

                            },
                            {
                                id : "3",
                                episodeNumber: 3,
                                title: "Setting Goals for Your Vision",
                                link: "https://www.insidethevision.org/episode/the-reach-bvov-magazine-partner-letter-9-17-2023/"


                            },
                            {
                                id : "4",
                                episodeNumber: 4,
                                title: "Overcoming Obstacles",
                                link: "https://www.insidethevision.org/episode/vision-school-9-26-2023/"
                                
                            },
                            {
                                id : "5",
                                episodeNumber: 5,
                                title: "Building a Support Network",
                                link: "https://www.insidethevision.org/episode/how-your-vision-creates-your-legacy-10-3-2023/"
                                
                            },
                            {
                                id : "6",
                                episodeNumber: 6,
                                title: "Staying Motivated on Your Journey",
                                link: "https://www.insidethevision.org/episode/israel-update-10-17-2023/"
                                
                            },
                            {
                                id : "7",
                                episodeNumber: 7,
                                title: "Adapting to Change",
                                link: "https://www.insidethevision.org/episode/israel-update-10-17-2023/"
                                
                            },
                            {
                                id : "8",
                                episodeNumber: 8,
                                title: "Celebrating Milestones",
                                link: "https://www.insidethevision.org/episode/revival-history-10-24-2023/"
                                
                            },
                            {
                                id : "9",
                                episodeNumber: 9,
                                title: "Learning from Setbacks",
                                link: "https://www.insidethevision.org/episode/vision-school-2-10-31-2023/"
                                
                            },

                            {
                                id : "10",
                                episodeNumber: 10,
                                title: "Expanding Your Vision",
                                link: "https://www.insidethevision.org/episode/international-11-7-2023/"
                                
                            },
                            {
                                id : "11",
                                episodeNumber: 11,
                                title: "The Power of Persistence",
                                link: "https://www.insidethevision.org/episode/israel-11-14-2023/"
                                
                            },
                            {
                                id : "12",
                                episodeNumber: 12,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/outreach-11-21-2023/"
                                
                            },
                            {
                                id : "13",
                                episodeNumber: 13,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/vision-school-3-11-28-2023/"
                                
                            },
                            {
                                id : "14",
                                episodeNumber: 14,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/events-12-5-2023/"
                                
                            },
                            {
                                id : "15",
                                episodeNumber: 15,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/another-look-at-the-reach-12-12-2023/"
                                
                            },
                            {
                                id : "16",
                                episodeNumber: 16,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/healing-school-12-19-2023/"
                                
                            },
                            {
                                id : "17",
                                episodeNumber: 17,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/christmas-episode-12-26-2023/"
                                
                            },
                            {
                                id : "18",
                                episodeNumber: 18,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/jerry-savelle-a-faithful-life/"
                                
                            },
                            {
                                id : "19",
                                episodeNumber: 19,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/never-let-go-of-your-vision/"
                                
                            },

                            {
                                id : "20",
                                episodeNumber: 20,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/kcm-orientation-rerun/"
                                
                            },
                            {
                                id : "21",
                                episodeNumber: 21,
                                title: "Reflecting on Season 1",
                                link: "https://www.insidethevision.org/episode/kcm-orientation-rerun/"
                                
                            },


                        ]


                    },


                    {

                        seasonNumber:2,

                        episodes: [

                            { 
                                id : "1",
                                episodeNumber: 1,
                                title: "Introduction to Inside the Vision",
                                link: "https://www.insidethevision.org/episode/first-episode/"
                            },
                            {
                                id : "2",
                                episodeNumber: 2,
                                title: "Understanding Your Purpose",
                                link: "https://www.insidethevision.org/episode/victory-channel-9-12-2023/"

                            },
                            {
                                id : "3",
                                episodeNumber: 3,
                                title: "Setting Goals for Your Vision",
                                link: "https://www.insidethevision.org/episode/the-reach-bvov-magazine-partner-letter-9-17-2023/"


                            },
                            {
                                id : "4",
                                episodeNumber: 4,
                                title: "Overcoming Obstacles",
                                link: "https://www.insidethevision.org/episode/vision-school-9-26-2023/"
                                
                            },
                            {
                                id : "5",
                                episodeNumber: 5,
                                title: "Building a Support Network",
                                link: "https://www.insidethevision.org/episode/how-your-vision-creates-your-legacy-10-3-2023/"
                                
                            },
                            {
                                id : "6",
                                episodeNumber: 6,
                                title: "Staying Motivated on Your Journey",
                                link: "https://www.insidethevision.org/episode/israel-update-10-17-2023/"
                                
                            },
                            {
                                id : "7",
                                episodeNumber: 7,
                                title: "Adapting to Change",
                                link: "https://www.insidethevision.org/episode/israel-update-10-17-2023/"
                                
                            },
                            {
                                id : "8",
                                episodeNumber: 8,
                                title: "Celebrating Milestones",
                                link: "https://www.insidethevision.org/episode/revival-history-10-24-2023/"
                                
                            },
                            {
                                id : "9",
                                episodeNumber: 9,
                                title: "Learning from Setbacks",
                                link: "https://www.insidethevision.org/episode/vision-school-2-10-31-2023/"
                                
                            },

                            {
                                id : "10",
                                episodeNumber: 10,
                                title: "Expanding Your Vision",
                                link: "https://www.insidethevision.org/episode/international-11-7-2023/"
                                
                            },
                            {
                                id : "11",
                                episodeNumber: 11,
                                title: "The Power of Persistence",
                                link: "https://www.insidethevision.org/episode/israel-11-14-2023/"
                                
                            },
                            {
                                id : "12",
                                episodeNumber: 12,
                                title: "Reflecting on Season 2",
                                link: "https://www.insidethevision.org/episode/outreach-11-21-2023/"
                                
                            },
                            {
                                id : "13",
                                episodeNumber: 13,
                                title: "Reflecting on Season 2",
                                link: "https://www.insidethevision.org/episode/vision-school-3-11-28-2023/"
                                
                            },
                            {
                                id : "14",
                                episodeNumber: 14,
                                title: "Reflecting on Season 2",
                                link: "https://www.insidethevision.org/episode/events-12-5-2023/"
                                
                            },
                            {
                                id : "15",
                                episodeNumber: 15,
                                title: "Reflecting on Season 2",
                                link: "https://www.insidethevision.org/episode/another-look-at-the-reach-12-12-2023/"
                                
                            },
                            {
                                id : "16",
                                episodeNumber: 16,
                                title: "Reflecting on Season 2",
                                link: "https://www.insidethevision.org/episode/healing-school-12-19-2023/"
                                
                            },
                            {
                                id : "17",
                                episodeNumber: 17,
                                title: "Reflecting on Season 2",
                                link: "https://www.insidethevision.org/episode/christmas-episode-12-26-2023/"
                                
                            },
                            {
                                id : "18",
                                episodeNumber: 18,
                                title: "Reflecting on Season 2",
                                link: "https://www.insidethevision.org/episode/jerry-savelle-a-faithful-life/"
                                
                            },
                            {
                                id : "19",
                                episodeNumber: 19,
                                title: "Reflecting on Season 2",
                                link: "https://www.insidethevision.org/episode/never-let-go-of-your-vision/"
                                
                            },

                            {
                                id : "20",
                                episodeNumber: 20,
                                title: "Reflecting on Season 2",
                                link: "https://www.insidethevision.org/episode/kcm-orientation-rerun/"
                                
                            },
                        ]
                    },

                ]
            }
        }
    }

    return formatITVResults(results);
    


})



