<template>
  <div id="home">
    <!--头部-->
    <Header color="#fff"></Header>
    <!-- banner -->
    <div class="swiper-container" id="bannerBox">
      <div class="swiper-wrapper" id="banner">
        <div class="swiper-slide" v-for="item in bannerData" :style="{backgroundImage: 'url(' + item + ')'}">
          <a></a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination">
        <i class="swiper-pagination-bullet 1"></i>
      </div>
    </div>
    <!-- content -->
    <div class="contentBox">
      <!-- content_1 -->
      <div class="content_1_Box">
        <ul class="content_1">
          <li v-for="item in navData" @mouseenter="imgOpacity" @mouseleave="imgOpacityEnd">
            <a>
              <img :src="item.img" alt="">
              <span>{{item.title}}</span>
              <p>{{item.details}}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- content_2 -->
      <div class="content_2_Box" v-for="item in contentData" v-if="item[0].id == 1">
        <div class="con_2_hd_box">
          {{item[0].title}}
        </div>
        <div class="con_2_ban_box" @mouseenter="imgOpacity" @mouseleave="imgOpacityEnd">
          <a :style="{backgroundImage: 'url(' + item[0].img + ')'}"></a>
        </div>
        <div class="con_2_con_box">
          <ul class="con_2_con">
            <li :class="j.class" v-for="j in item[1]" @mouseenter="imgShadow" @mouseleave="imgShadowEnd">
              <a>
                <img :src="j.img" alt="">
                <span>{{j.title}}</span>
                <span>{{j.details}}</span>
                <span><i>{{j.currency}}</i>{{j.price}}<em v-if="j.sp == 1">起</em></span>
                <span v-if="j.sp == 1">新品</span>
                <img :src="j.img" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- content_3 -->
      <div class="content_3_Box" v-else-if="item[0].id == 2">
        <div class="con_3_hd_box">
          {{item[0].title}}
        </div>
        <div class="con_3_ban_box">
          <a :style="{backgroundImage: 'url(' + item[0].img + ')'}" @mouseenter="imgOpacity" @mouseleave="imgOpacityEnd"></a>
        </div>
        <div class="con_3_con_box">
          <ul class="con_3_con">
            <li :class="j.class" v-for="j in item[1]"
                :data-op="j.op"
                @mouseenter="imgShadow" @mouseleave="imgShadowEnd">
              <a>
                <img :src="j.img" alt="" :class="{img: !j.title}">
                <span>{{j.title}}</span>
                <span>{{j.details}}</span>
                <span><i>{{j.currency}}</i>{{j.price}}<em>{{j.original}}</em></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- content_6 -->
      <div class="content_6_Box" v-else-if="item[0].id == 3">
        <div class="con_6_hd_box">
          {{item[0].title}}
        </div>
        <div class="con_6_con_box">
          <ul class="con_6_con">
            <li v-for="j in item[1]" @mouseenter="imgShadow" @mouseleave="imgShadowEnd">
              <a>
                <img :src="j.img" alt="">
                <div>
                  <img :src="j.portrait" alt="">
                  <span>{{j.user}}</span>
                </div>
                <p>{{j.intro}}</p>
                <p>{{j.commodity}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- content_7 -->
      <div class="content_7_Box" v-else-if="item[0].id == 4">
        <div class="con_7_hd_box">
          {{item[0].title}}
        </div>
        <div class="con_7_con_box">
          <ul class="con_7_con">
            <li v-for="j in item[1]" v-if="j.title" @mouseenter="imgShadow" @mouseleave="imgShadowEnd">
              <a>
                <img :src="j.img" alt="" v-if="!j.title" class="">
                <div v-else>
                  <img :src="j.img" alt="">
                  <i></i>
                </div>
                <p>{{j.title}}</p>
              </a>
            </li>
            <li v-else class="li_img">
              <a>
                <img :src="j.img" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
    import  Swiper from 'swiper'
    import  Header from '../components/Header'
    import  Footer from '../components/Footer'
    import  'swiper/dist/css/swiper.min.css'
    export default {
        name: "Home",
        components: {Header, Footer},
        data(){
            return{
              bannerData:[require("../assets/banner_1.jpg"),require("../assets/banner_2.jpg"),require("../assets/banner_3.jpg"),require("../assets/banner_4.jpg"),require("../assets/banner_5.jpg"),require("../assets/banner_6.jpg")],
              navData: [
                {
                  "title": "魅友节",
                  "details": "年度盛宴 领卷立减",
                  "img": require("../assets/con_1_1.jpg")
                }, {
                  "title": "推荐有奖",
                  "details": "推荐魅族产品 最高返5%奖金",
                  "img": require("../assets/con_1_2.jpg")
                }, {
                  "title": "一周新品",
                  "details": "每周上新 万里挑一",
                  "img": require("../assets/con_1_3.jpg")
                }, {
                  "title": "APP送新机",
                  "details": "狂送10台魅族 16th",
                  "img": require("../assets/con_1_4.jpg")
                }
              ],
              contentData: [
                [
                  {
                  "title": "魅族手机",
                  "img": require("../assets/con_2_1.jpg"),
                  "id": 1,
                }, [
                  {
                    "title": "魅族 V8 标配版",
                    "img": require("../assets/con_2_2.png"),
                    "details": "5.7 英寸 HD + 全面屏",
                    "price": "799",
                    "currency": "￥",
                    "id": "1",
                    "sp": "0",
                    "class": "big"
                  }, {
                    "title": "魅族 16th",
                    "img": require("../assets/con_2_3.png"),
                    "details": "骁龙845 屏幕下指纹",
                    "price": "2798",
                    "currency": "￥",
                    "id": "1",
                    "sp": "1",
                    "class": "big"
                  }, {
                    "title": "魅族 15",
                    "img": require("../assets/con_2_4.png"),
                    "details": "2000万暗光双摄 AI智能美颜",
                    "price": "1998",
                    "currency": "￥",
                    "id": "0",
                    "sp": "1",
                    "class": "small"
                  }, {
                    "title": "魅族 16 X",
                    "img": require("../assets/con_2_5.png"),
                    "details": "骁龙7 10 轻奢旗舰",
                    "price": "2098",
                    "currency": "￥",
                    "id": "1",
                    "sp": "1",
                    "class": "small"
                  }, {
                    "title": "魅蓝 E3",
                    "img": require("../assets/con_2_6.png"),
                    "details": "骁龙636处理器 全系6G大运存",
                    "price": "1799",
                    "currency": "￥",
                    "id": "0",
                    "sp": "0",
                    "class": "small"
                  }, {
                    "title": "魅蓝 6T",
                    "img": require("../assets/con_2_7.png"),
                    "details": "双摄全面屏 游戏长续航",
                    "price": "799",
                    "currency": "￥",
                    "id": "0",
                    "sp": "1",
                    "class": "small"
                  }
                ]],
                [
                  {
                  "title": "魅族声学",
                  "img": require("../assets/con_3_1.jpg"),
                  "id": 2,
                }, [
                  {
                    "img": require("../assets/con_3_2.jpg"),
                    'op': 1,
                  }, {
                    "title": "魅族EP-31耳机",
                    "img": require("../assets/con_3_3.png"),
                    "details": "舒适均衡 精致优雅",
                    "price": "199",
                    "currency": "￥",
                    "original": "",
                  }, {
                    "title": "魅蓝 EP52 蓝牙耳机",
                    "img": require("../assets/con_3_4.png"),
                    "details": "新品到货 限量抢购",
                    "price": "249",
                    "currency": "￥",
                    "original": "￥299",
                  }, {
                    "title": "魅族 HD50 头戴式耳机",
                    "img": require("../assets/con_3_5.png"),
                    "details": "清新简洁，有音质更有颜值",
                    "price": "299",
                    "currency": "￥",
                    "original": "￥399",
                  }, {
                    "img": require("../assets/con_3_6.png"),
                    'op': 1,
                  }, {
                    "title": "魅族 FlowBass 三单元耳机",
                    "img": require("../assets/con_3_7.png"),
                    "details": "用的惬意 听的尽兴",
                    "price": "499",
                    "currency": "￥",
                    "original": "￥599",
                  }, {
                    "title": "魅族 EP2X 耳机",
                    "img": require("../assets/con_3_8.png"),
                    "details": "契合声音的流动之美",
                    "price": "69",
                    "currency": "￥",
                    "original": "￥129",
                  }, {
                    "title": "魅族 LIVE 四单元动铁耳机",
                    "img": require("../assets/con_3_9.png"),
                    "details": "享12期免息",
                    "price": "1199",
                    "currency": "￥",
                    "original": "￥1299",
                  }
                ]],
                [
                  {
                  "title": "智能配件",
                  "img": require("../assets/con_4_1.jpg"),
                  "id": 2,
                }, [
                  {
                    "img": require("../assets/con_4_2.jpg"),
                    'op': 1,
                  }, {
                    "title": "魅族EP-31耳机",
                    "img": require("../assets/con_4_3.png"),
                    "details": "舒适均衡 精致优雅",
                    "price": "199",
                    "currency": "￥",
                    "original": "",
                  }, {
                    "title": "魅蓝 EP52 蓝牙耳机",
                    "img": require("../assets/con_3_4.png"),
                    "details": "新品到货 限量抢购",
                    "price": "249",
                    "currency": "￥",
                    "original": "￥299",
                  }, {
                    "title": "魅族 HD50 头戴式耳机",
                    "img": require("../assets/con_4_5.png"),
                    "details": "清新简洁，有音质更有颜值",
                    "price": "299",
                    "currency": "￥",
                    "original": "￥399",
                  }, {
                    "img": require("../assets/con_4_6.png"),
                    'op': 1,
                  }, {
                    "title": "魅族 FlowBass 三单元耳机",
                    "img": require("../assets/con_4_7.png"),
                    "details": "用的惬意 听的尽兴",
                    "price": "499",
                    "currency": "￥",
                    "original": "￥599",
                  }, {
                    "title": "魅族 EP2X 耳机",
                    "img": require("../assets/con_4_8.png"),
                    "details": "契合声音的流动之美",
                    "price": "69",
                    "currency": "￥",
                    "original": "￥129",
                  }, {
                    "title": "魅族 LIVE 四单元动铁耳机",
                    "img": require("../assets/con_4_9.png"),
                    "details": "享12期免息",
                    "price": "1199",
                    "currency": "￥",
                    "original": "￥1299",
                  }
                ]],
                [
                  {
                  "title": "生活周边",
                  "img": require("../assets/con_5_1.jpg"),
                  "id": 2,
                }, [
                  {
                    "img": require("../assets/con_5_2.jpg"),
                    'op': 1,
                  }, {
                    "title": "魅族EP-31耳机",
                    "img": require("../assets/con_5_3.png"),
                    "details": "舒适均衡 精致优雅",
                    "price": "199",
                    "currency": "￥",
                    "original": "",
                  }, {
                    "title": "魅蓝 EP52 蓝牙耳机",
                    "img": require("../assets/con_5_4.png"),
                    "details": "新品到货 限量抢购",
                    "price": "249",
                    "currency": "￥",
                    "original": "￥299",
                  }, {
                    "title": "魅族 HD50 头戴式耳机",
                    "img": require("../assets/con_5_5.png"),
                    "details": "清新简洁，有音质更有颜值",
                    "price": "299",
                    "currency": "￥",
                    "original": "￥399",
                  }, {
                    "img": require("../assets/con_5_6.jpg"),
                    'op': 1,
                  }, {
                    "title": "魅族 FlowBass 三单元耳机",
                    "img": require("../assets/con_5_7.jpg"),
                    "details": "用的惬意 听的尽兴",
                    "price": "499",
                    "currency": "￥",
                    "original": "￥599",
                  }, {
                    "title": "魅族 EP2X 耳机",
                    "img": require("../assets/con_5_8.png"),
                    "details": "契合声音的流动之美",
                    "price": "69",
                    "currency": "￥",
                    "original": "￥129",
                  }, {
                    "title": "魅族 LIVE 四单元动铁耳机",
                    "img": require("../assets/con_5_9.png"),
                    "details": "享12期免息",
                    "price": "1199",
                    "currency": "￥",
                    "original": "￥1299",
                  }
                ]],
                [
                  {
                  "title": "社区热贴",
                  "id": 3,
                }, [
                  {
                    "img": require("../assets/con_6_1.jpg"),
                    "portrait": require("../assets/user_6_1.jpg"),
                    "user": "小墨灰",
                    "intro": "摄影离不开适当的后期，好在如今你可以在魅族手机上轻松完成操作。",
                    "commodity": "摄影技巧"
                  }, {
                    "img": require("../assets/con_6_2.jpg"),
                    "portrait": require("../assets/user_6_2.jpg"),
                    "user": "Keicy520",
                    "intro": "工作和学习中的沟通总离不开邮件，而 Flyme 邮箱的出色体验为我们带来的不只是生产力。",
                    "commodity": "功能解析"
                  }, {
                    "img": require("../assets/con_6_3.jpg"),
                    "portrait": require("../assets/user_6_3.jpg"),
                    "user": "歩惊云",
                    "intro": "妙用 Flyme 分身，做生活和工作的「两面派」。",
                    "commodity": "功能解析"
                  }, {
                    "img": require("../assets/con_6_4.jpg"),
                    "portrait": require("../assets/user_6_4.jpg"),
                    "user": "郑金龙",
                    "intro": "这款匠心精神打造的十五周年旗舰机，再不下手就要后悔啦~",
                    "commodity": "魅族 15"
                  }, {
                    "img": require("../assets/con_6_5.jpg"),
                    "portrait": require("../assets/user_6_5.jpg"),
                    "user": "屌丝扮海绵",
                    "intro": "千元最强性能手机登场，高通骁龙 710 次旗舰级处理器加持，玩王者荣耀 Vulkan 模式请认准魅族 X8。",
                    "commodity": "魅族 X8"
                  }, {
                    "img": require("../assets/con_6_6.jpg"),
                    "portrait": require("../assets/user_6_6.jpg"),
                    "user": "醉刘的摄影狮",
                    "intro": "“窗含西岭千秋雪” 魅族 16th 用旗舰双摄带你领略诗句中的美景。",
                    "commodity": "魅族 16th"
                  }, {
                    "img": require("../assets/con_6_7.jpg"),
                    "portrait": require("../assets/user_6_7.jpg"),
                    "user": "换了个机",
                    "intro": "准旗舰游戏拍照手机魅族 X8，不止有实力，还有最美刘海屏！",
                    "commodity": "魅族 X8"
                  }, {
                    "img": require("../assets/con_6_8.jpg"),
                    "portrait": require("../assets/user_6_8.jpg"),
                    "user": "xrx3p",
                    "intro": "性能几乎一致，价格差距也不大，魅族 16 X 和魅族 X8 哪款更适合你？",
                    "commodity": "什么值得买"
                  }
                ]],
                [
                  {
                  "title": "Flyme",
                  "id": 4,
                }, [
                  {
                    "img": require("../assets/con_7_1.jpg"),
                  }, {
                    "img": require("../assets/con_7_2.jpg"),
                    "title": "魅族 V8 产品视频"
                  }, {
                    "img": require("../assets/con_7_3.jpg"),
                    "title": "魅族 EP52 Lite 蓝牙运动耳机"
                  }, {
                    "img": require("../assets/con_7_4.jpg"),
                    "title": "Flyme 7"
                  }, {
                    "img": require("../assets/con_7_5.jpg"),
                    "title": "安全家庭"
                  }, {
                    "img": require("../assets/con_7_6.jpg"),
                    "title": "魅族互娱 MGC 探险嘉年华"
                  }, {
                    "img": require("../assets/con_7_7.jpg"),
                    "title": "魅族 X8 游戏性能测试"
                  }
                ]],
                [
                  {
                    "title": "精彩视频",
                    "id": 4,
                  }, [
                  {
                    "img": require("../assets/con_8_1.jpg"),
                    "title": "魅族 16 X 产品视频"
                  }, {
                    "img": require("../assets/con_8_2.jpg"),
                    "title": "魅族 X8 产品视频"
                  }, {
                    "img": require("../assets/con_8_3.jpg"),
                    "title": "魅族 V8 产品视频"
                  }, {
                    "img": require("../assets/con_8_4.jpg"),
                    "title": "魅族 EP52 Lite 蓝牙运动耳机"
                  }, {
                    "img": require("../assets/con_8_5.jpg"),
                    "title": "Flyme 7"
                  }, {
                    "img": require("../assets/con_8_6.jpg"),
                    "title": "安全家庭"
                  }, {
                    "img": require("../assets/con_8_7.jpg"),
                    "title": "魅族互娱 MGC 探险嘉年华"
                  }, {
                    "img": require("../assets/con_8_8.jpg"),
                    "title": "魅族 X8 游戏性能测试"
                  }
                ]]
              ],
            }
        },
        mounted(){
          //banner轮播
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            },
          })

        },
        methods:{
          imgShadow(ev){
            if(ev.currentTarget.dataset.op != 1){
              ev.currentTarget.style.boxShadow = '0px 15px 30px 0px #ddd';
            }
          },
          imgShadowEnd(ev){
            ev.currentTarget.style.boxShadow = '0 0 0 0'
          },
          imgOpacity(ev){
            ev.currentTarget.style.opacity = 0.8;
          },
          imgOpacityEnd(ev){
            ev.currentTarget.style.opacity = 1
          },
        }
    }
</script>

<style lang="scss">
  #home{
    /*banner*/
    #bannerBox {
      height:670px;
      z-index:10;
      top:0;
      position:absolute;
      width:100%;
      overflow:hidden;
      .swiper-pagination-bullets {
        height:30px;
        width:170px;
        position:absolute;
        bottom:20px;
        z-index:1;
        left:0;
        right:0;
        margin:auto;
        .swiper-pagination-bullet {
          height:8px;
          width:8px;
          border-radius:50%;
          background:#fff;
          float:left;
          margin:8px;
          cursor:pointer;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background:0 0;
          border:1px solid #fff
        }
      }
      #banner {
        height:681px;
        width:839%;
        position:absolute;
        div {
          height:681px;
          width:12%;
          float:left;
          font-size:100px;
          background-size: auto 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #333333;
          a {
            display:block;
            height:681px;
            width:100%
          }
        }
      }
    }

    /*content*/
    .contentBox {
      background:#f4f4f4;
      /*height:6709px;*/
      margin-top:588px;
      .content_1_Box {
        height:278px;
        margin-bottom:50px;
        background:#fff;
        .content_1 {
          height:278px;
          width:1240px;
          margin:0 auto;
          li {
            float:left;
            width:310px;
            height:187px;
            padding-top:45px;
            a {
              display:block;
              height:187px;
              width:310px;
              img {
                height:130px;
                width:190px;
                margin:0 auto 8px
              }
              span {
                display:block;
                height:30px;
                font-size:20px;
                color:#333;
                text-align:center
              }
              p {
                height:21px;
                font-size:14px;
                color:#999;
                text-align:center
              }
            }
          }
        }
      }
      .content_2_Box {
        height:1511px;
        margin-bottom:50px;
        .con_2_hd_box {
          height:45px;
          margin-bottom:10px;
          font-size:30px;
          text-align:center
        }
        .con_2_ban_box {
          height:451px;
          background:#fff;
          a {
            display:block;
            height:451px;
            width:100%;
            background:center no-repeat;
            background-size:auto 100%;
          }
        }
        .con_2_con_box {
          height:1005px;
          .con_2_con {
            width:1240px;
            margin:0 auto;
            height:1005px;
            li {
              float:left;
              background:#fff;
              margin:10px 9px 0 0
            }
            .big {
              height:610px;
              width:615px;
              position:relative;
              a {
                overflow:hidden;
                display:block;
                height:610px;
                width:615px;
                span:nth-of-type(1) {
                  height:42px;
                  font-size:28px;
                  color:#333;
                  display:block;
                  text-align:center;
                  margin-top:58px
                }
                span:nth-of-type(2) {
                  height:27px;
                  font-size:18px;
                  color:#333;
                  display:block;
                  text-align:center
                }
                span:nth-of-type(3) {
                  display:block;
                  height:33px;
                  font-size:22px;
                  color:#c00;
                  text-align:center;
                  i {
                    font-size:14px
                  }
                  em {
                    font-size:16px
                  }
                }
                span:nth-of-type(4) {
                  display:block;
                  height:60px;
                  width:60px;
                  border-radius:50%;
                  background-image:linear-gradient(120deg,#2e74f6,#56bdf9);
                  position:absolute;
                  top:30px;
                  left:30px;
                  line-height:60px;
                  color:#fff;
                  font-size:16px;
                  text-align:center
                }
                img {
                  height:460px;
                  width:460px;
                  position:absolute;
                  bottom:0;
                  left:0;
                  right:0;
                  margin:auto;
                }
                img:nth-of-type(1) {
                  display:none
                }
              }
            }
            .small {
              height:375px;
              width:303px;
              position:relative;
              a {
                display:block;
                height:375px;
                width:303px;
                overflow:hidden;
                img {
                  height:230px;
                  width:230px;
                  margin:30px auto 0;
                }
                img:nth-of-type(2) {
                  display:none
                }
                span:nth-of-type(1) {
                  height:24px;
                  color:#333;
                  font-size:16px;
                  margin-bottom:2px;
                  display:block;
                  text-align:center
                }
                span:nth-of-type(2) {
                  height:21px;
                  color:#999;
                  font-size:14px;
                  display:block;
                  text-align:center
                }
                span:nth-of-type(3) {
                  height:33px;
                  font-size:22px;
                  color:#c00;
                  display:block;
                  text-align:center;
                  i {
                    font-size:14px
                  }
                  em {
                    font-size:16px
                  }
                }
                span:nth-of-type(4) {
                  display:block;
                  height:60px;
                  width:60px;
                  border-radius:50%;
                  background-image:linear-gradient(120deg,#2e74f6,#56bdf9);
                  position:absolute;
                  top:30px;
                  left:30px;
                  line-height:60px;
                  color:#fff;
                  font-size:16px;
                  text-align:center
                }
              }
            }
            li:nth-child(2),li:nth-child(6){
              margin-right:0
            }
          }
        }
      }
      .content_3_Box{
        margin-bottom:50px;
        height:1275px;
        .con_3_hd_box{
          height:45px;
          margin-bottom:10px;
          font-size:30px;
          text-align:center
        }
        .con_3_ban_box{
          height:451px;
          background:#fff;
          a{
            display:block;
            height:451px;
            background:center no-repeat
          }
        }
        .con_3_con_box{
          height:375px;
          .con_3_con{
            height:375px;
            width:1240px;
            margin:0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
              height:375px;
              width:303px;
              margin-top: 10px;
              background:#fff;
              float:left;
              position:relative;
              a{
                display:block;
                height:375px;
                width:303px;
                img{height:230px;
                  width:230px;
                  margin:0 auto}
                .img{height:375px;
                  width:303px}
                span:nth-of-type(1){height:24px;
                  color:#333;
                  font-size:16px;
                  margin-bottom:2px;
                  display:block;
                  text-align:center}
                span:nth-of-type(2){height:21px;
                  color:#999;
                  font-size:14px;
                  display:block;
                  text-align:center}
                span:nth-of-type(3){
                  height:33px;
                  font-size:22px;
                  color:#c00;
                  display:block;
                  text-align:center;
                  i{font-size:14px}
                  em{font-size:14px;
                    color:#666;
                    text-decoration:line-through;
                    margin-left:8px}
                }
              }
            }
            /*li:nth-child(4),li:nth-child(8){*/
              /*margin-right:0*/
            /*}*/
          }
        }
      }
      .content_6_Box {
        /*height:843px;*/
        margin-bottom:50px;
        .con_6_hd_box{
          height:45px;
          font-size:30px;
          text-align:center;
        }
        .con_6_con_box {
          /*height:388px;*/
          .con_6_con {
            /*height:388px;*/
            width:1240px;
            margin:0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
              margin-top: 9px;
              float:left;
              width:303px;
              height:400px;
              background-color:#fff;
              a {
                height:400px;
                width:303px;
                font-size:14px;
                img {
                  height:190px;
                  width:303px
                }
                div{
                  height:42px;
                  width:273px;
                  line-height:42px;
                  margin-top:10px;
                  padding:0 15px;
                  img {
                    height:38px;
                    width:38px;
                    float:left
                  }
                  span {
                    margin-left:15px;
                    text-align:left;
                    float:left
                  }
                }
                p:nth-of-type(1) {
                  padding:10px 15px 15px;
                  font-size:16px;
                  line-height:27px;
                  text-align:left;
                  height:66px
                }
                p:nth-of-type(2) {
                  color:#999;
                  display:block;
                  padding:0 15px;
                  margin-top:10px;
                  text-align:left
                }
              }
            }
          }
        }
      }
      .content_7_Box {
        /*height:299px;*/
        padding-bottom:50px;
        .con_7_hd_box{
          height:45px;
          font-size:30px;
          text-align:center;
        }
        .con_7_con_box {
          /*height:244px;*/
          width:1240px;
          margin:0 auto;
          .con_7_con{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
              float:left;
              width:303px;
              height:244px;
              /*margin-right:9px;*/
              background-color:#fff;
              margin-top: 9px;
              a {
                width:303px;
                height:244px;
                div {
                  height:190px;
                  width:303px;
                  position:relative;
                  i{
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    background: url(https://www3.res.meizu.com/static/cn/global/images/icon-video-player_36c4d32.png) no-repeat;
                    background-size: 100%;
                    right: 15px;
                    bottom: 15px;
                  }
                }
                p {
                  height:55px;
                  font-size:16px;
                  line-height:55px;
                  text-align:center
                }
              }
            }
            .li_img{
              float:left;
              width:615px;
              height:244px;
              margin-right:9px;
              background-color:#fff;
              a {
                height:244px;
                width:615px;
                img {
                  height:244px;
                  width:615px
                }
              }
            }
          }
        }
      }
    }
  }
</style>
