<template>
    <div id="sign">
      <!-- header -->
      <div id="headerBox">
        <div id="header">
          <span class="iconfont meizu"><a>&#xe997;</a></span>
        </div>
      </div>
      <!-- content -->
      <div id='contentBox'>
        <form id="form1" action="">
          <div id='con_hd'>
            <p class='active'>账号登录</p>
            <p>验证码登录</p>
          </div>
          <!--<div id='con_input1'>
              <input type="text" placeholder="手机号/Flyme 账号">
            </div>-->
          <Input ph="手机号/Flyme 账号"/>
          <!--<div id='con_input2'>-->
            <!--<input type="text" placeholder="密码">-->
          <!--</div>-->
          <Input ph="密码"/>
          <!--<div id='con_input3'>-->
            <!--<em class='iconfont'>+86  &#xe609;</em>-->
            <!--<input type="text" placeholder="手机号码">-->
          <!--</div>-->
          <Input ph="手机号码" :phone="true"/>
          <!--<div id='con_input4'>-->
            <!--<input type="text" placeholder="验证码">-->
            <!--<em>获取验证码</em>-->
          <!--</div>-->
          <Input ph="验证码" :prove="true"/>

          <div id='xxx'></div>
          <dl>
            <dt class='iconfont'>&#xe613;</dt>
            <dd>记住登录状态</dd>
          </dl>
          <div id='login'>登录</div>
          <section>
            <a>注册</a>
            <a>忘记密码?</a>
          </section>
          <i><img src="../assets/qr.png" alt=""></i>
          <span id="QR_hd">扫描安全登录</span>
          <img id='QR' src="../assets/mzShow.jpg" alt="">
          <span id="QR_btn">请使用最新Flyme系统相机扫码功能，扫码登录</span>
          <h5><em class='iconfont'>&#xe666;</em><em class='iconfont'>&#xe604;</em></h5>
        </form>
        <form action="" id="form2">
          <p>注册 Flyme 账号</p>
          <div  class='iconfont' id='con_text'>
            <h5><em>&#xe666;</em>密码长度应为8-16个字符，区分大小写<em>&#xe604;</em></h5>
            <h5></h5>
          </div>
          <!--<div id='con_input_f1'>-->
            <!--<em class='iconfont'>+86  &#xe609;</em>-->
            <!--<input type="text" placeholder="手机号码">-->
          <!--</div>-->
          <Input ph="手机号码" :phone="true"/>
          <!--<div id='con_input_f2'>-->
            <!--<input type="text" placeholder='密码'>-->
            <!--<em class='iconfont'>&#xe6a2;</em>-->
          <!--</div>-->
          <!--<div id='con_input_f3'>-->
            <!--<input type="text" placeholder="验证码">-->
            <!--<em>60秒后重新获取</em>-->
          <!--</div>-->
          <div id='yyy'></div>
          <span>点击立即注册，即表示您同意并愿意遵守<a>&nbspFlyme服务协议&nbsp</a>和<a>&nbsp法律声明&nbsp</a></span>
          <div id='logon'>立刻注册</div>
          <section>
            <a>登录</a>
          </section>
        </form>
      </div>
      <!-- footer -->
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '../components/Footer'
    import Input from '../components/Input'
    export default {
        name: "Sign",
        components: { Footer,Input }
    }
</script>

<style scoped lang="scss">
  /*header*/
  #headerBox {
    height: 68px;
    position: relative;
    z-index: 100;
    #header {
      width: 1200px;
      margin: 0 auto;
      height: 68px;
      position: relative;
      .meizu {
        float: left;
        a {
          display: block;
          font-size: 20px;
          padding: 28px 0;
          color: #00c3f5;
        }
      }
    }
  }

  /* content */
  #contentBox {
    padding: 5px 0;
    background: url(../assets/banner.png) no-repeat center #EDF9FB;
    height: 750px;
    width: 100%;
    position: relative;
    #form1 {
      width: 298px;
      position: absolute;
      top: 16%;
      right: 140px;
      background-color: #fff;
      padding: 35px 35px 10px;
      border-radius: 2px;
      user-select: none;
      #con_hd {
        font-size: 18px;
        margin-top: 35px;
        width: 300px;
        text-align: center;
        p {
          display: inline-block;
          height: 15px;
          font-size: 18px;
          color: #7f7f7f;
          line-height: 15px;
          cursor: pointer;
          &:hover {
            color: #333;
          }
          &:first-child {
            margin-right: 35px;
            padding-right: 35px;
            border-right: 2px solid #b3abab;
          }
        }
        .active {
          color: #32A5E7;
          &:hover {
            color: #3265ff;
          }
        }
      }
      #con_input1 {
        margin-top: 70px;
        height: 46px;
        width: 278px;
        border: 1px solid #dadada;
        padding: 0 10px;
        border-radius: 3px;
        input {
          border: none;
          height: 46px;
          font-size: 14px;
        }
      }
      #con_input2 {
        margin-top: 20px;
        height: 46px;
        width: 278px;
        border: 1px solid #dadada;
        padding: 0 10px;
        border-radius: 3px;
        input {
          border: none;
          height: 46px;
          font-size: 14px;
        }
      }
      #con_input3 {
        display: none;
        margin-top: 70px;
        height: 46px;
        width: 278px;
        border: 1px solid #dadada;
        padding: 0 10px;
        border-radius: 3px;
        em {
          margin-right: 10px;
          padding-right: 6px;
          border-right: 1px solid #dadada;
          color: #888;
          cursor: pointer;
        }
        input {
          border: none;
          height: 46px;
          font-size: 14px;
        }
      }
      #con_input4 {
        display: none;
        margin-top: 20px;
        height: 46px;
        width: 278px;
        border: 1px solid #dadada;
        padding: 0 10px;
        border-radius: 3px;
        input {
          border: none;
          height: 46px;
          font-size: 14px;
          width: 140px;
        }
        em {
          padding: 0 30px;
          border-left: 1px solid #bababa;
          font-size: 14px;
          height: 20px;
          color: #bababa;
        }
      }
      #xxx {
        margin-top: 20px;
        height: 46px;
        width: 278px;
        border: 1px solid #dadada;
        padding: 0 10px;
        border-radius: 3px;
      }
      dl {
        margin-top: 20px;
        height: 20px;
        cursor: pointer;
        dt {
          height: 18px;
          width: 18px;
          border: 1px solid #aaa;
          line-height: 16px;
          float: left;
          border-radius: 2px;
          text-align: center;
          font-weight: 900;
          color: #fff;
        }
        dd {
          float: left;
          font-size: 14px;
          color: #7f7f7f;
          margin-left: 10px;
          &:hover {
            color: #000;
          }
        }
      }
      #login {
        margin-top: 25px;
        display: block;
        width: 300px;
        height: 46px;
        font-size: 14px;
        line-height: 46px;
        text-align: center;
        margin-bottom: 10px;
        background-color: #32a5e7;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          background: #0275e7;
        }
      }
      section{
        a {
          color: #32A5E7;
          font-size: 14px;
          &:nth-child(1) {
            float: left;
          }
          &:nth-child(2) {
            float: right;
          }
        }
      }
      i {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
      }
      #QR_hd {
        display: block;
        text-align: center;
        font-size: 18px;
        color: #333;
        font-weight: normal;
        margin: 40px auto 20px;
        display: none;
      }
      #QR {
        display: none;
      }
      #QR_btn {
        display: none;
        text-align: center;
        font-size: 16px;
        color: #999;
        padding-bottom: 50px;
      }
      h5 {
        display: none;
        padding-left: 10px;
        border-radius: 3px;
        border: 1px solid #fbbe9d;
        line-height: 30px;
        position: absolute;
        top: 120px;
        background: #fbccc9;
        width: 78%;
        color: #666;
        em{
          &:nth-child(1) {
            font-size: 18px;
            margin-right: 5px;
            color: red;
          }
          &:nth-child(2) {
            float: right;
            color: red;
            margin-right: 10px;
            cursor: pointer;
          }
        }
      }
    }
    #form2 {
      width: 298px;
      position: absolute;
      top: 16%;
      right: 140px;
      background-color: #fff;
      padding: 72px 35px 20px;
      border-radius: 2px;
      user-select: none;
      display: none;
      p {
        color: #00a7ea;
        font-size: 18px;
        text-align: center;
      }
      #con_input_f1 {
        margin-top: 100px;
        height: 46px;
        width: 278px;
        border: 1px solid #dadada;
        padding: 0 10px;
        border-radius: 3px;
        em {
          margin-right: 10px;
          padding-right: 6px;
          border-right: 1px solid #dadada;
          color: #888;
          cursor: pointer;
        }
        input {
          border: none;
          height: 46px;
          font-size: 14px;
        }
      }
      #con_input_f2 {
        margin-top: 150px;
        height: 46px;
        width: 278px;
        border: 1px solid #dadada;
        padding: 0 10px;
        border-radius: 3px;
        display: none;
        em {
          color: #888;
          cursor: pointer;
          float: right;
          line-height: 46px;
        }
        input {
          border: none;
          height: 46px;
          font-size: 14px;
        }
      }
      #con_input_f3 {
        display: none;
        margin-top: 150px;
        height: 46px;
        width: 278px;
        border: 1px solid #dadada;
        padding: 0 10px;
        border-radius: 3px;
        input {
          border: none;
          height: 46px;
          font-size: 14px;
          width: 130px;
        }
        em {
          padding-left: 30px;
          border-left: 1px solid #bababa;
          font-size: 14px;
          height: 20px;
          color: #bababa;
        }
      }
      #con_text {
        height: 100px;
        position: absolute;
        overflow: hidden;
        font-size: 12px;
        width: 83%;
        top: 100px;
        h5{
          &:nth-child(1) {
            display: none;
            padding-left: 10px;
            border-radius: 3px;
            border: 1px solid #fbbe9d;
            line-height: 30px;
            position: absolute;
            top: 20px;
            background: #fbccc9;
            width: 94%;
            color: #666;
            em{
              &:nth-child(1) {
                font-size: 18px;
                margin-right: 5px;
                color: red;
              }
              &:nth-child(2) {
                float: right;
                color: red;
                margin-right: 10px;
                cursor: pointer;
              }
            }
          }
          &:nth-child(2) {
            margin-top: 60px;
            em {
              color: #32A5E7;
              cursor: pointer;
            }
          }
        }
      }
      #yyy {
        margin-top: 40px;
        height: 46px;
        width: 278px;
        border: 1px solid #dadada;
        padding: 0 10px;
        border-radius: 3px;
      }
      span {
        font-size: 12px;
        margin-top: 30px;
        display: block;
        line-height: 18px;
        a {
          color: #00c3f5;
        }
      }
      #logon {
        margin-top: 25px;
        display: block;
        width: 300px;
        height: 46px;
        font-size: 14px;
        line-height: 46px;
        text-align: center;
        margin-bottom: 10px;
        background-color: #32a5e7;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          background: #0275e7;
        }
      }
      section{
        a{
          color: #32A5E7;
          font-size: 14px;
          &:nth-child(1) {
            float: left;
          }
        }
      }
    }
  }


</style>
