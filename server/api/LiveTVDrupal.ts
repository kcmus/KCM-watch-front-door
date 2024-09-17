export type LiveTVVictory = Readonly<{

    liveTV :{
        
        success : boolean,
        message?: string | null,

        data : Readonly<{

            sid: string,
            streamUri: string,
            status: number,
            internal: number,
            uid: number,
            created: number,
            changed: number,
            mimeType: string,
            pingCount: null,
            clientIp: string
        }>
    }
}>;


export type LiveTVData = LiveTVVictory['liveTV']['data'];



const getUrl = (api2Url: string, api2Token: string) => {

    return `${api2Url}/api/wfd/liveTV.json?token=${api2Token}`;
}


const formatLiveTVResults = (LiveTVData : LiveTVVictory) => {

    return LiveTVData["liveTV"]["data"];
}


export default defineEventHandler(async (event) => {


    const {api2Url,api2Token} = useRuntimeConfig(event);

    const {fakeITVFetch} = useAppConfig();

    const url = getUrl(api2Url, api2Token);


    if(!fakeITVFetch){

        const results = await $fetch<LiveTVVictory>(url);

        return formatLiveTVResults(results);

    }


    console.warn("faking Live TV api call to", url);

    const results : LiveTVVictory = {

        liveTV:{

            success:true,
            message:null,

            data: {

                "sid": "verizon_stream",
                "streamUri": "https://content.uplynk.com/channel/ea37a0934a0749fe80f493b402ce5908.m3u8",
                "status": 1,
                "internal": 0,
                "uid": 346003,
                "created": 1586805200,
                "changed": 1714169473,
                "mimeType": "application/vnd.apple.mpegurl",
                "pingCount": null,
                "clientIp": "172.17.20.34"

            }

        }
    }


    return formatLiveTVResults(results);


})