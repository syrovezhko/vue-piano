<template>
  <div class="container">
    <div class="piano">
      <div class="stand"></div>
      <div class="controls">
        <div class="col col-power">
          <img src="./../assets/power-icon.png" alt="" class="power-img">
          <img src="./../assets/control.png" alt="" class="control-img">
        </div>
        <div class="col col-voluem">
          <div class="graphic-block_voluem">
            <div class="dots"></div>
            <p class="title-btn"></p>
            <div class="bar"></div>
          </div>
          <div class="btn-block_voluem">
            <img src="./../assets/control.png" alt="" class="control-img">
            <img src="./../assets/control.png" alt="" class="control-img">
          </div>
        </div>
        <div class="col col-semple">
          <div class="graphic-block_semple">
            <div class="title">
              <span class="line"></span>
              <p class="title-btn"></p>
              <span class="line"></span>
            </div>
            <div class="title">
              <p class="title-btn"></p>
              <p class="title-btn"></p>
              <p class="title-btn"></p>
            </div>
          </div>
          <div class="btn-block_semple">
            <img src="./../assets/control.png" alt="" class="control-img">
            <img src="./../assets/control.png" alt="" class="control-img">
            <img src="./../assets/control.png" alt="" class="control-img">
          </div>
        </div>
        <div class="col col-octave">
          <div class="btn-block_octave">
            <img src="./../assets/control.png" alt="" class="control-img">
            <img src="./../assets/control.png" alt="" class="control-img">
          </div>
          <div class="arrows">
            <span class="arrow-left"></span>
            <span class="arrow-right"></span>
          </div>
        </div>
      </div>
      <div class="keyboard">
        <div class="key key1">
          <span class="key-black key1-black"></span>
        </div>
        <div class="key-small">
          <img src="./../assets/key-small.png" alt="" class="key-small_img">
        </div>
        <div class="key key2">
          <span class="key-black key2-black_left"></span>
          <span class="key-black key2-black_right"></span>
        </div>
        <div class="key-small">
          <img src="./../assets/key-small.png" alt="" class="key-small_img">
        </div>
        <div class="key key3">
          <span class="key-black key3-black"></span>
        </div>
        <div class="key key1">
          <span class="key-black key1-black"></span>
        </div>
        <div class="key-small">
          <img src="./../assets/key-small.png" alt="" class="key-small_img">
        </div>
        <div class="key key2">
          <span class="key-black key2-black_left"></span>
          <span class="key-black key2-black_right"></span>
        </div>
        <div class="key-small">
          <img src="./../assets/key-small.png" alt="" class="key-small_img">
        </div>
        <div class="key key2">
          <span class="key-black key2-black_left"></span>
          <span class="key-black key2-black_right"></span>
        </div>
        <div class="key-small">
          <img src="./../assets/key-small.png" alt="" class="key-small_img">
        </div>
        <div class="key key3">
          <span class="key-black key3-black"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Piano',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }
  .piano {
    display: flex;
    height: 565px;
    width: 500px;
    border-radius: 10%;
    background-color: #464646;
    padding: 31px 73px 0;
    align-items: flex-start;
    flex-direction: column;
  }
  .stand {
    display: block;
    height: 12px;
    width: 500px;
    background-color: #292929;
    border: 2px solid #1f1f1f;
    border-radius: 5px;
  }
  .controls{
    display: flex;
    align-self: center;
    height: 80px;
    width: 225px;
    margin-top: 70px;
    margin-bottom: 30px;
    border: 1px solid white;
  }
  .control-img{
    width: 7px;
    height: 33px;
    margin: 0 1px;
  }
  .power-img{
    width: 11px;
    height: 11px;
  }
  .power-img path{
    fill: white;
  }
  .col{
    margin: 0 13px;
  }
  .keyboard{
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    padding: 3px;
    width: 100%;
    height: 360px;
    background-image: linear-gradient(#080808, #363636);
  }
  .key{
    display: flex;
    width: 68px;
    height: 317px;
    background-color: #ffffff;
    margin: 1px;
    margin-left: -20px;
  }
  .key1{
    margin: 1px;
    margin-left: 2px;
  }
  .key3{
    margin-right: 3px;
  }
  .key-black{
    display: block;
    height: 210px;
    background-color: #050505;
  }
  .key1-black{
    width: 20px;
    margin-left: auto;
  }
  .key2-black_left{
    width: 20px;
    margin-right: auto;
  }
  .key2-black_right{
    width: 20px;
    margin-left: auto;
  }
  .key3-black{
    width: 20px;
    margin-right: auto;
  }
  .key-small{
    height: 205px;
    width: 45px;
    position: relative;
    margin-left: -20px;
  }
  .key-small_img{
    width: 100%;
    height: 100%;
  }
</style>
