<template>
    <div id="input">
      <!--<input type="text" placeholder="手机号/Flyme 账号">-->

      <!--<input type="text" placeholder="密码">-->

      <!--<em class='iconfont'>+86  &#xe609;</em>-->
      <!--<input type="text" placeholder="手机号码">-->

      <!--<input type="text" placeholder="验证码">-->
      <!--<em>获取验证码</em>-->


      <!--<em class='iconfont'>+86  &#xe609;</em>-->
      <!--<input type="text" placeholder="手机号码">-->

      <!--<input type="text" placeholder='密码'>-->
      <!--<em class='iconfont'>&#xe6a2;</em>-->

      <!--<input type="text" placeholder="验证码">-->
      <!--<em>60秒后重新获取</em>-->

      <span class='iconfont' v-if="phone"><i>+86</i>  <em>&#xe609;</em></span>
      <input type="text" :placeholder="ph">
      <p v-if="prove" v-show="send">{{time}}秒后重新获取</p>
      <p v-if="prove" v-show="!send" class="send" @click="sendCode">获取验证码</p>
    </div>
</template>

<script>
    export default {
        name: "Input",
        props: {
          ph: {
            type: String,
            require: true
          },
          phone: {
            type: Boolean,
            require: false,
            default: false,
          },
          prove: {
            type: Boolean,
            require: false,
            default: false,
          }
        },
        data(){
          return{
            time: 60,
            send: true,
          }
        },
        methods: {
          //获取验证码
          sendCode(){
            let _this = this;

            this.time = 60;
            this.send = true;

            let timer = setInterval(function(){
              _this.time--;
              if(_this.time == 0){
                _this.send = false;
                clearInterval(timer);
              }
            }, 1000)
          }
        },
        mounted(){
          this.sendCode()
        }
    }
</script>

<style scoped lang="scss">
  #input{
    margin-top: 20px;
    height: 48px;
    border: 1px solid #dadada;
    padding: 0 10px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    span{
      width: 55px;
      padding: 0 4px;
      border-right: 1px solid #DDD;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 10px;
      i{
        color: grey;
        font-size: 14px;
      }
      em{
        font-size: 24px;
        color: #C3C3C3;
        font-weight: bolder;
      }
    }
    input{
      border: none;
      height: 100%;
      font-size: 14px;
      flex: 1;
      width: 0;
    }
    p{
      width: 120px;
      text-align: center;
      font-size: 14px;
      border-left: 1px solid #DDD;
      padding-left: 15px;
    }
    .send{
      cursor: pointer;
      color: #387aff;
    }
  }
</style>
