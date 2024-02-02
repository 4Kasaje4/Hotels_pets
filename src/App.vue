<template>
  <RouterView />
  <div>
    <div class="box">
      <div class="card">
    <div class="card-details">
      <h1 class="text-title">Welcome</h1>
      <h1  class="text-title1">To</h1>
      <h1  class="text-title2">CAT & DOG HOTEL</h1>
  
      <p class="text-body"></p>
    </div>
    <button class="card-button">start</button>
  </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
  body{
    font-family: 'Prompt', sans-serif;
  }
  .box{
    display: flex;
    justify-content: center;
    margin-top: 200px;

  }
  .card {
 width: 550px;
 height: 250px;
 border-radius: 20px;
 background: #FFF9E8;
 position: relative;
 padding: 1.8rem;
 border: 2px solid #FFF9E8;
 transition: 0.5s ease-out;
 overflow: visible;
}

.card-details {
 color: black;
 height: 100%;
 gap: .5em;
 display: grid;
 place-content: center;
}

.card-button {
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: #925f02;
 color: #fff;
 font-size: 20px;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
}

.text-body {
 color: rgb(134, 134, 134);
}

.text-title {
 font-weight: bold;
 text-align: center;
 color: #C07E00;
}

.text-title1{
 font-weight: bold;
 text-align: center;
 color: #C07E00;
}
.text-title2{
 font-weight: bold;
 text-align: center;
 color: #C07E00;
}

.card:hover {
 border-color: #925f02;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}


</style>