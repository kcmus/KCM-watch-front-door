<template>

<div id="event-on-demand">

<div class="row">
    <div class="col-12">
        <h2 class="mb-3" id="text_wrapper_1">{{title}}</h2>
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
               :button-text = "buttonText"
               @click = "clickEvents"
        >
        </Button>

    </div>

</div>


</div>






</template>


<script setup lang="ts">

interface EventLink {

    id?: string;
    title?: string;
    url?: string;
}

interface Event{

    title?: string;
    url?:string;
    links:[]

}


interface EventsBox {

    title?:string;
    events1?:Event;
    events2?: Event;
    events3?:Event;
    buttonText:string;

}

const props = defineProps<EventsBox>();




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


<style>

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