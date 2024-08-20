export type ITV_Episode = Readonly<{

    itv_current_week :{

        statusCode: number | null,
        error?: string | null,

        content: Readonly<{

            title :string,
            weight: string | number,
            image_url: string,
            episode_url: string,
        }>
    }

}>



const getUrl = (api2Url: string, api2Token: string) => {

    return `${api2Url}/api/wfd/ITV.json?token=${api2Token}`;
}


const formatITVResults = (ITVData: ITV_Episode) => {

    return ITVData["itv_current_week"]["content"];

    

}


export default defineEventHandler(async (event) => {

    const {api2Url, api2Token} = useRuntimeConfig(event);

    const {fakeITVFetch} = useAppConfig();

    const url = getUrl(api2Url,api2Token);

    if(!fakeITVFetch){

        const results = await $fetch<ITV_Episode>(url);

        return formatITVResults(results);


    }


    console.warn("faking ITV API call to", url);

  
    

    const results: ITV_Episode = {


        "itv_current_week" : {

            "statusCode": 200,
            "error" : null,
            "content" : {

                "title" : "Inside the Vision - How to GROW Your Vision",
                "weight": 0,
                "image_url": "/images/InsideTheVisionVideo.png",
                "episode_url": "https://www.insidethevision.org/",
            }

        }

    }

    // console.log(formatITVResults(results));
    

    return formatITVResults(results);
})

