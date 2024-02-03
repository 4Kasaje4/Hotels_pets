@ -1,4 +1,116 @@
<template>
  <RouterView />
</template>

<script>
export default {
  methods:{
    async start(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
  body{
    font-family: 'Prompt', sans-serif;
  }
</style>

