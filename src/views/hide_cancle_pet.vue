<template></template>
<script>
  export default {
    name:'hide_cancle_pet',
    methods: {
       async loaddata(){
         const data = {
          ps_id : this.$route.params.ps_id,
          pet_id : this.$route.params.pet_id
         }
         const response = await fetch('http://localhost:3000/cancle_pet_in_hotel',{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(data)
         });
         const response_data = await response.json();
         if(response_data['status'] == true){
          this.$router.go(-1);
         }else{
          console.log(response_data);
         }
       }
    },
    mounted(){
     this.loaddata();
    }
  }
</script>
<style></style>