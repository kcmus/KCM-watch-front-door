<template>

    <div id="event-on-demand">

        <div class="row">
            <div class="col-12">
                <h2 class="mb-3" id="text_wrapper_1">Events OnDemand</h2>
            </div>
        </div>


        <div class="row row-cols-1 row-cols-lg-3 g-4">
            <div class="col">
                <div class="card">
                    <img 
                        src="/images/EventsOnDemand-1.png" 
                        class="card-img-top video-thumbnail" 
                        alt="..." 
                        @click="navigateToEventCategory(events1.url)"
                    >
                    <div class="card-body">
                        <h5 
                           class="card-title" 
                           @click="navigateToEventCategory(events1.url)"
                        >
                           {{events1.title}}
                        </h5>
                        <hr/> 
                    </div>
                   
                    <ul class="list-group list-group-flush">
                        <li 
                           class="list-group-item"
                           v-for = "link in events1.links" 
                           :key="link.id" 
                           @click="navigateToEvent(link.url)"
                        >
                           {{link.title}}
                        </li>
                    </ul>

                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img 
                        src="/images/EventsOnDemand-2.png" 
                        class="card-img-top video-thumbnail" 
                        alt="..." 
                        @click="navigateToEventCategory(events1.url)"
                    >
                    <div class="card-body">
                        <h5 
                           class="card-title" 
                           @click="navigateToEventCategory(events2.url)"
                        >
                           {{events2.title}}
                        </h5>
                        <hr/> 
                    </div>
                    <ul class="list-group list-group-flush">
                        <li 
                           class="list-group-item" 
                           v-for = "link in events2.links" 
                           :key="link.id" 
                           @click="navigateToEvent(link.url)"
                        >
                           {{link.title}}
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="col">
                <div class="card">
                    <img 
                         src="/images/EventsOnDemand-3.png"
                         class="card-img-top video-thumbnail"
                         alt="..." 
                         @click="navigateToEventCategory(events1.url)"
                    >
                    <div class="card-body">
                        <h5 
                           class="card-title" 
                           @click="navigateToEventCategory(events3.url)"
                        >
                           {{events3.title}}
                        </h5>
                        <hr/>
            
                    </div>
                 
                    <ul class="list-group list-group-flush">
                        <li 
                           class="list-group-item"
                           v-for = "link in events3.links" 
                           :key="link.id"  
                           @click="navigateToEvent(link.url)"
                        >
                           {{link.title}}
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="row mt-3">

            <div class="col-12 text-center">
                <Button 
                       button-text="All OnDemand Videos" 
                       @click = "clickEvents"
                >
                </Button>

            </div>
    
        </div>
       
        
    </div>
</template>


<script setup lang="ts">

import type { EventsData } from '~/server/api/EventsOnDemand';


//Fetch events on demand data from the API 
const {data: Events_Data} = useFetch<EventsData>('/api/EventsOnDemand');


const url = computed(() => Events_Data.value?.url ?? '');

const eventsCategories = computed(() => Events_Data.value?.categories ?? []);

const events1 = computed(() => eventsCategories.value[0]);
const events2 = computed(() => eventsCategories.value[1]);
const events3 = computed(() => eventsCategories.value[2]);


const navigateToEventCategory = (url: string) => {

    // window.open(url);
    window.location.href = url;
}

const navigateToEvent = (link: string) => {

    // window.open(link);
    window.location.href = link;

}


function clickEvents(){

    // window.open(url.value);
    window.location.href = url.value;
}


</script>

<style scoped>


#text_wrapper_1{

  color: #000000;
  font-family: var(--heading-h2-font-family);
}

.video-thumbnail{

    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}

.card {
    border: none; 
    box-shadow: none;
   
}

img{
    border-radius: 0;
    cursor: pointer;
}

.card-body {
    padding-left: 0;
    margin-bottom: -20px;
}

.card-title{

    font-family: var(--body-bold-font-family);
    font-size: var(--body-bold-font-size);
    font-style: var(--body-bold-font-style);
    font-weight: bold;
    letter-spacing: var(--body-bold-letter-spacing);
    line-height: var(--body-bold--line-height);
    color: #000000;
    cursor: pointer;
   
}


.list-group-item{

    border-bottom: none;
    padding-left: 0; 
    font-family: var(--body-regular-font-family);
    cursor: pointer;

}

ul {
    padding-left: 0;
    margin-left: 0;

}

hr {
    border: 0;
    height: 2px; 
    background-color: black; 
}


</style>