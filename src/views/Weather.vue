<template>
  <div>
    <button @click="geoFindMe" class="w3-btn"><span>🌎</span> Locate Me</button>
  </div>
</template>

<script>
export default {
   methods:{
       success(position){
            const { latitude, longitude } = position.coords;
       },
       geoFindMe():{
           console.log("HELLO")
       }
   }
}
</script>

<style scoped>
button {
  text-align: "center";
  font-size: "25px";
}
</style>
