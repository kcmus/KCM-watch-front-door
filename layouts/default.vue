
 <template>
  <div class="wrapper">

    <HeaderPageHeader/>
    <HeaderOffcanvasMobile/>
     
    <main>
      <NuxtPage/>
    </main>

    <FooterPageFooter/>

  </div>
</template>

<script setup>



</script>

<style lang="scss">



@media (min-width: 768px) {

  main{

     margin-top: 28px;

  } 
  
}



</style>


