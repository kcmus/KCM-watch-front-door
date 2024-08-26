export type LiveTV_Victory = Readonly<{

    liveTV :{
        
        statusCode : number | null,
        error?: string | null,

        content : Readonly<{

            title: string,
            video_url : string,
            redirect_url: string,
            poster_url: string

        }>
    }
}>;


export type LiveTV_Data = LiveTV_Victory['liveTV']['content'];



const getUrl = (api2Url: string, api2Token: string) => {

    return `${api2Url}/api/wfd/liveTV.json?token=${api2Token}`;
}


const formatLiveTVResults = (LiveTVData : LiveTV_Victory) => {

    return LiveTVData["liveTV"]["content"];
}


export default defineEventHandler(async (event) => {


    const {api2Url,api2Token} = useRuntimeConfig(event);

    const {fakeITVFetch} = useAppConfig();

    const url = getUrl(api2Url, api2Token);


    if(!fakeITVFetch){

        const results = await $fetch<LiveTV_Victory>(url);

        return formatLiveTVResults(results);

    }


    console.warn("faking Live TV api call to", url);

    const results : LiveTV_Victory = {

        "liveTV" : {

           "statusCode":200,
           "error" : null,
           content: {

             "title" : "Live TV VICTORY – Faith Teaching 24/7",
            //  video_url : "https://content.uplynk.com/channel/ea37a0934a0749fe80f493b402ce5908.m3u8",
             video_url : "https://www.w3schools.com/html/mov_bbb.mp4",
             redirect_url: "https://www.kcm.org/watch/tv-broadcast",
             poster_url : "/images/LiveTV.png"

           }
        }

    }

    return formatLiveTVResults(results);


})