

<template>

    <div id="Inside-the-vision-video" class="d-flex flex-column">
        <a class="mb-3"   @click="openITVPage" style="cursor: pointer;"><img :src="itv.image" alt="Inside the vision" class="img-fluid"></a>
        <h5 class="text-wrapper-7" @click="openITVPage">{{ itv.title }}</h5>
    </div>
</template>


<script setup>

const itv = {
   image:"/images/InsideTheVisionVideo.png",
   title: 'Inside the Vision - How to GROW Your Vision',
   link: 'https://www.insidethevision.org/',
};


function openITVPage() {
  window.open(itv.link, '_blank');
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




 @media (min-width: 768px){


    #Inside-the-vision-video{
    
     
     align-items: normal;
    
   
    }

}

</style>