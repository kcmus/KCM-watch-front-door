export type EventsOnDemands = Readonly<{

    Events: {

      success: boolean;
      message: string;
      data: Readonly<{
        id:string | number;
        url: string;

        categories : {

            title: string;
            url: string;

            links: {

                id: string | number;
                title: string;
                url: string 

            }[]

        }[]

      }>

    }

}>

export type EventsData = EventsOnDemands['Events']['data'];


const getUrl = (api2Url:string, api2Token:string) => {

    return `${api2Url}/api/wfd/eventsOnDemands.json?token=${api2Token}`

}


const formatEventsOnDemandsResults = (EventsOnDemandsData: EventsOnDemands) => {

const data = EventsOnDemandsData['Events']['data'];
    return data
}


export default defineEventHandler(async (event) => {

    const {api2Url,api2Token} = useRuntimeConfig(event);

    const {fakeEventsOnDemand} = useAppConfig();

    const url = getUrl(api2Url,api2Token);

    if(!fakeEventsOnDemand){
      
      const results = await $fetch<EventsOnDemands>(url);

      return formatEventsOnDemandsResults(results);
    }

    console.warn("faking Events on Demand api call to ", url);

    const results: EventsOnDemands = {

      Events :{

        success: true,
        message:" ",

        data: {
          id: "1",
          url:"http://kcm.org/watch/event",

          categories : [

            {

              title: "2023 Omaha Victory Campaign",
              url: "https://www.kcm.org/watch/event/2023-omaha-victory-campaign-calling-things-be-not-though-they-were-700-pm-ct?language_content_entity=en-US&gad_source=1&gclid=EAIaIQobChMI6If4kJO2iAMV1TjUAR0uTy0pEAAYASAAEgJww_D_BwE",

              links : [

                {

                  id: '1',
                  title: "Faith: The Secret to Success",
                  url : "https://www.kcm.org/watch/event/2023-omaha-victory-campaign-faith-secret-success-700-pm-ct",

                },

                {

                  id: '2',
                  title: "Naming Your Seed, Offering Message",
                  url : "https://www.kcm.org/watch/event/2023-omaha-victory-campaign-naming-your-seed-offering-message-930-am-ct",
                },

                {

                  id: '3',
                  title: "Calling Things That Be Not As Though They Were",
                  url : "https://www.kcm.org/watch/event/2023-omaha-victory-campaign-calling-things-be-not-though-they-were-700-pm-ct",
                },

                {

                  id: '4',
                  title: "The Wisdom of God for Giving, Offering Message",
                  url : "https://www.kcm.org/watch/event/2023-omaha-victory-campaign-wisdom-god-giving-offering-message-700-pm-ct",
                },


                {

                  id: '5',
                  title: "2024-The Year of Progression, Advancing and Promotions!",
                  url : "https://www.kcm.org/watch/event/2023-omaha-victory-campaign-2024-year-progression-advancing-and-promotions-200-pm",
                },

              ],


            },

            {

              title: "2023 St Louis Victory Campaign",
              url: "https://www.kcm.org/events/2023-st-louis-victory-campaign?language_content_entity=en-US",

              links : [

                {

                  id: '1',
                  title: "God Saturates the Sower With Favor, Offering Msg",
                  url : "https://www.kcm.org/watch/event/2023-st-louis-victory-campaign-god-saturates-sower-favor-offering-msg-930-am-ct",


                },

                {

                  id: '2',
                  title: "The Cares of This World Choke the Word",
                  url : "https://www.kcm.org/watch/event/2023-st-louis-victory-campaign-cares-world-choke-word-700-pm-ct",
                },

                {

                  id: '3',
                  title: "In Him, You Have Everything, Offering Message",
                  url : "https://www.kcm.org/watch/event/2023-st-louis-victory-campaign-him-you-have-everything-offering-message-700-pm-ct",
                },
                {

                  id: '4',
                  title: "Cast Your Cares On Jesus ",
                  url : "https://www.kcm.org/watch/event/2023-st-louis-victory-campaign-cast-your-cares-jesus-800-pm-ct",
                },
                {

                  id: '5',
                  title: "Jesus, Our High Priest, Offering Message",
                  url : "https://www.kcm.org/watch/event/2023-st-louis-victory-campaign-jesus-our-high-priest-offering-message-700-pm-ct",
                },

              ],


            },

            {

              title: "2024 Southwest Believers’ Convention",
              url:"https://www.kcm.org/watch/event/2024-southwest-believers-convention-put-work-fundamentals-faith-700-pm",

              links : [

                {

                  id: '1',
                  title: "Put to Work the Fundamentals of Faith",
                  url : "https://www.kcm.org/watch/event/2024-southwest-believers-convention-put-work-fundamentals-faith-700-pm?language_content_entity=en-US",


                },

                {

                  id: '2',
                  title: "Offering Message",
                  url : "https://www.kcm.org/watch/event/2024-southwest-believers-convention-offering-message-700-pm-1?language_content_entity=en-US",
                },

                {

                  id: '3',
                  title: "Pre-service Prayer",
                  url : "https://www.kcm.org/watch/event/2024-southwest-believers-convention-pre-service-prayer-630-pm-4?language_content_entity=en-US",
                },


                {

                  id: '4',
                  title: "Receive God's Will for Your Healing, Today!",
                  url : "https://www.kcm.org/watch/event/2024-southwest-believers-convention-receive-gods-will-your-healing-today-1000-am?language_content_entity=en-US",
                },


                {

                  id: '5',
                  title: "Pre-Service Prayer",
                  url : "https://www.kcm.org/watch/event/2024-southwest-believers-convention-pre-service-prayer-900-am?language_content_entity=en-US",
                },


                {

                  id: '6',
                  title: "Diligently Listen to the Voice of the Lord",
                  url : "https://www.kcm.org/watch/event/2024-southwest-believers-convention-diligently-listen-voice-lord-700-pm?language_content_entity=en-US",
                },

            
              ],


            },          
          ],
        }
      }
    }

    return formatEventsOnDemandsResults(results);
})
