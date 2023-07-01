<script setup>
import NavBar from "../components/NavBar.vue";
import ContentLayout from "../components/ContentLayout.vue"
</script>

<template>
  <div class="container mx-auto">
    <NavBar />
  </div>

  <div class="container w-[86rem] h-[727px] mt-[74px] bg-white">
    <div
      class="detail mx-auto absolute w-[170px] h-[170px] right-[340px] top-[256px] bg-secondGrey">
      <img
        class="w-[127px] absolute top-5 left-5"
        src="src/assets/images/t-shirt1.png"
        alt="detail"
      />
    </div>
    <div
      class="detail mx-auto absolute w-[170px] h-[170px] right-[340px] top-[470px] bg-secondGrey">
      <img
        class="w-[127px] absolute top-5 left-5"
        src="src/assets/images/short-pants1.png"
        alt="detail"
      />
    </div>
    <div
      class="detail mx-auto absolute w-[170px] h-[170px] right-[340px] top-[686px] bg-secondGrey">
      <img
        class="w-[127px] absolute top-5 left-5"
        src="src/assets/images/shoes1.png"
        alt="detail"
      />
    </div>
    <p class="relative leading-6 font-desc ms-40 top-3 text-6">Casual Style</p>
    <div
      class="container w-[720px] relative top-[-50px] right-[10.5rem] drop-shadow-2xl h-[613px] mt-[74px] bg-white"
    >
      <img
        class="relative left-[165px] top-[25px] w-[390px] h-[562px] object-cover rounded-[34px]"
        src="src/assets/images/img1.jpg"
        alt="detail"
      />
    </div>
  </div>
  <p class="flex justify-center mt-11 text-[42px] font-display">Similiar Outfit</p>
  <div>
    <ContentLayout/>
  </div>
</template>

<style></style>
