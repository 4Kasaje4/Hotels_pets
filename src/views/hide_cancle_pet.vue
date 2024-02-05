<template></template>
<script>
  export default {
    name:'hide_cancle_pet',

   methods: {
    test(){
        console.log(this.$route.params.pet_id);
    }
   },
   mounted(){
    this.test();
   }
  }
</script>
<style></style>