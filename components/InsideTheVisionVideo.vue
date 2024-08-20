

<template>

    <div id="Inside-the-vision-video" class="d-flex flex-column">
        <a class="mb-3"  @click="openITVPage" style="cursor: pointer;">
            <img 
                :src="itv_current_week.image_url" 
                alt="Inside the vision" 
                class="img-fluid"
            >
        </a>
        <h5 
           class="text-wrapper-7" 
           @click="openITVPage" 
           style="cursor: pointer;" 
        >
         {{ itv_current_week.title }}
        </h5>
    </div>
</template>


<script setup>



const {data: itv_current_week} = useFetch("/api/InsideTheVisionVideo");


function openITVPage() {
  window.open(itv_current_week.episode_url, '_blank');
}

</script>

<style scoped>


#Inside-the-vision-video{
    align-items: center;
}
   
.text-wrapper-7{
    color: #000000;
    font-family: var(--heading-h5-font-family);
    font-size: var(--heading-h5-font-size);
    font-style: var(--heading-h5-font-style);
    font-weight: var(--heading-h5-font-weight);
    
    letter-spacing: var(--heading-h5-letter-spacing);
    line-height: var(--heading-h5-line-height);   
} 


img {
  max-width: 100%;
  height: auto;
}
 


@media (min-width: 992px) and (max-width: 1120px) {

        .text-wrapper-7{
            font-size: 16px;

        }

        img{

            width: 580px;
        }

}




 @media (min-width: 992px){


    #Inside-the-vision-video{
    
     
     align-items: normal;
    
   
    }

}

</style>