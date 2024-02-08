<template></template>
<script>
  export default {
    name:'hide_logout',
    methods: {
      async check_login(){
          let login_id = this.$route.params.login_id
          const data = {
            login_id : login_id
          }
          const response = await fetch('http://localhost:3000/check_login', {
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
          });
          const response_data = await response.json();
          if(response_data['isLogin'] == false){
            this.$router.push('/login'); 
          }
        },
       async logout(){
         const data = {
          login_id : this.$route.params.login_id,
         }
         const response = await fetch('http://localhost:3000/logout',{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(data)
         });
         const response_data = await response.json();
         if(response_data['status'] == true){
          this.$router.push('/login');
         }else{
          console.log(response_data);
         }
       }
    },
    mounted(){
      this.check_login();
     this.logout();
    }
  }
</script>
<style></style>