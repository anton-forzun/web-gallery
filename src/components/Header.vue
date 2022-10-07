<template>
  <div class="header bg">
    <div class="header-container">
      <div>
        <h1 class="header-name">Lorem Pexels</h1>
        <h4 class="header-discr">The Lorem Ipsum for photos.</h4>
      </div>
      <div class="header-img">
        <img class="img" src="./image/pexels-pixabay-257092.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 350px;
  background-color: blueviolet;
}
.bg {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  animation: AnimateBG 20s ease infinite;
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.header-container {
  display: flex;

  width: 100%;
  justify-content: space-around;
}
.header-name {
  font-size: 80px;
}

.img {
  width: 500px;
  height: 300px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>

