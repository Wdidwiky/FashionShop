<script>
import axios from "axios";
export default {
  name: "ContentComponent",
  data(){
    return{
      dataProduct:[],
      gambar_url:''
    };
  },

  mounted() {
    axios.get("http://127.0.0.1:8000/api/style")
    .then(Response => {
      this.dataProduct= Response.data;
      console.log(Response)
    })
    .catch(err => {
      console.error('Error:', err);
    })
  },
};
</script>

<template>
  <!-- <div class="grid grid-flow-col grid-rows-4 gap-4">
  <div >
    <img src="src/assets/images/img1.jpg" alt="content">
  </div>
  <div>09</div>
</div> -->
  <div class="container">
    <p class="mt-[250px] ms-20 font-display font-semibold text-[34px]">
      Casual
    </p>
    <div class="mt-8 columns-3 ms-20">
      <div v-if="dataProduct">
        <div v-for="style in dataProduct" >
          <router-link to="/detail">
          <img
            class="w-[390px] h-[582px] rounded-[34px] object-cover"
            :src="`${style.gambar_url}`"
            alt="content"
          />
        </router-link>
        </div>
        
      </div>

      <!-- <img
        class="w-[390px] h-[582px] rounded-[34px] object-cover"
        src="src/assets/images/img1.jpg"
        alt="content"
      />

      <img
        class="w-[390px] h-[582px] rounded-[34px] object-cover"
        src="src/assets/images/img1.jpg"
        alt="content"
      />
    </div>
    <div class="mt-[50px] columns-3 ms-20">
      <img
        class="w-[390px] h-[582px] rounded-[34px] object-cover"
        src="src/assets/images/img1.jpg"
        alt="content"
      />

      <img
        class="w-[390px] h-[582px] rounded-[34px] object-cover"
        src="src/assets/images/img1.jpg"
        alt="content"
      />

      <img
        class="w-[390px] h-[582px] rounded-[34px] object-cover"
        src="src/assets/images/img1.jpg"
        alt="content"
      /> -->
    </div>
  </div>
</template>

<style></style>
