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
          <div class="graphic-block graphic-block_voluem">
            <div class="dots">
              <span class="dot-active dot"></span>
              <span class="dot-active dot"></span>
              <span class="dot-active dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <p class="title-btn">Voluem</p>
            <div class="bar"></div>
          </div>
          <div class="btn-block btn-block_voluem">
            <img src="./../assets/control.png" alt="" class="control-img">
            <img src="./../assets/control.png" alt="" class="control-img">
          </div>
        </div>
        <div class="col col-semple">
          <div class="graphic-block graphic-block_semple">
            <div class="semple-title">
              <span class="line"></span>
              <p class="title-btn">Tone</p>
              <span class="line"></span>
            </div>
            <div class="semple-title_btn">
              <p class="title-btn">Piano</p>
              <p class="title-btn">D. Piano</p>
              <p class="title-btn">Others</p>
            </div>
          </div>
          <div class="btn-block btn-block_semple">
            <img src="./../assets/control.png" alt="" class="control-img">
            <img src="./../assets/control.png" alt="" class="control-img">
            <img src="./../assets/control.png" alt="" class="control-img">
          </div>
        </div>
        <div class="col col-octave">
          <div class="btn-block btn-block_octave">
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
        <div class="key key1 pushed">
          <span class="key-black key1-black pushed-black"></span>
        </div>
        <div class="key-small">
          <img src="./../assets/key-small.png" alt="" class="key-small_img">
        </div>
        <div class="key key2">
          <span class="key-black key2-black_left"></span>
          <span class="key-black key2-black_right"></span>
        </div>
        <div class="key-small pushed-small">
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
    margin-top: 70px;
    margin-bottom: 30px;
  }
  .col{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    margin: 0 5px 15px;
  }
  .power-img{
    margin-bottom: 8px;
  }
  .control-img{
    width: 7px;
    height: 33px;
    margin: 0 8px;
  }
  .power-img{
    width: 11px;
    height: 11px;
  }
  .btn-block{
    display: flex;
    justify-content: space-between;
  }
  .dots{
    display: flex;
    justify-content: space-between;
  }
  .dot{
    width: 4px;
    height: 4px;
    border: 1px solid white;
    border-radius: 50%;
    margin: 2px;
  }
  .dot-active{
    background: white;
  }
  .title-btn{
    color: white;
    font-size: 6px;
    margin: 0 2px;
  }
  .bar{
    margin: 0;
    background: white;
    width: 100%;
    height: 6px;
    clip-path: polygon(0% 100%, 100% 0%, 100% 100%, 100% 100%);
  }
  .graphic-block{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
  }
  .semple-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    margin-top: 8px;
  }
  .line{
    display: block;
    width: 30px;
    height: 2px;
    background: white;
  }
  .semple-title_btn{
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-bottom: 8px;
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
    border-radius: 0 0 5px 5px;
  }
  .key:hover{
    background-image: linear-gradient(#ffffff, #deffbd);
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
  .key-small:hover{
    background-image: linear-gradient(#ffffff, #deffbd);
  }
  .key-small:hover .key-small_img{
    opacity: 0.9;
  }
  .key-small_img{
    width: 100%;
    height: 100%;
  }
  .pushed {
    opacity: 1;
    padding: 2px;
    background-image: linear-gradient(#ffffff, #b5ff78);
  }
  .pushed-black{
    margin-right: -2px;
    margin-top: -2px;
  }
  .pushed:hover {
    background-image: linear-gradient(#ffffff, #b5ff78);
  }
  .pushed-small{
    background-image: linear-gradient(black, #b5ff78);
  }
</style>
