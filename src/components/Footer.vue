<template>
  <!-- footer -->
  <div id="footerBox">
    <div id="footer">
      <div id="footer_up">
        <div>
          <a v-for="item in ftrHData">
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
          </a>
        </div>
        <div>
          <p>周一至周日 7:30-24:00</p>
          <p>400-788-3333</p>
          <a>在线客服</a>
        </div>
      </div>
      <hr>
      <div id="footer_down">
        <ul>
          <li v-for="item in ftrFData"><a>{{item}}</a></li>
        </ul>
        <div>
          <p>©2018 Meizu Telecom Equipment Co.,Ltd All rights reserved.</p>
          <a>粤ICP备13003602号</a>
          <a>合字B2-20170010</a>
          <a>营业执照</a>
          <a>法律声明</a>
          <p>粤公网安备 44049102496009号</p>
          <a></a>
          <a></a>
          <a></a>
        </div>
        <div class="iconfont">
          <a class="red">&#xe602;</a>
          <a class="#2aeb20">&#xe745;</a>
          <a class="gold">&#xe601;</a>
          <img src="../assets/ban_meizu.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer",
        data(){
          return{
            ftrHData: [
              {
                img: require('../assets/footer_hd_1.png'),
                title: '全场顺丰包邮'
              },
              {
                img: require('../assets/footer_hd_2.png'),
                title: '100+ 城市次日送达'
              },
              {
                img: require('../assets/footer_hd_3.png'),
                title: '7天无理由退货'
              },
              {
                img: require('../assets/footer_hd_4.png'),
                title: '15天换货保障'
              },
              {
                img: require('../assets/footer_hd_5.png'),
                title: '1年免费保修'
              },
              {
                img: require('../assets/footer_hd_6.png'),
                title: '上门快修'
              }
            ],
            ftrFData: [
              '了解魅族', '加入我们', '联系我们', 'Flyme', '魅族社区', '天猫旗舰店', '问题反馈', '线上销售授权名单公示', '出版物经营许可证', '简体中文'
            ]
          }
        },
        mounted(){
          //footer
          $('#footer #footer_down .iconfont a').hover(function(){
            $(this).css('color', $(this).attr('class'));
          }, function(){
            $(this).css('color', '#aaa');
          }).eq(1).hover(function(){
            $('#footer #footer_down .iconfont img').css('display', 'block');
          }, function(){
            $('#footer #footer_down .iconfont img').css('display', 'none');
          })
        }
    }
</script>

<style scoped lang="scss">
  /*footer*/
  #footerBox {
    height:248px;
    background:#fff;
    font-size:14px;
    color:#515151;
    position:relative;
    #footer {
      height:180px;
      width:1240px;
      margin:0 auto;
      padding:48px 0 20px;
      border-top:1px solid #f1f1f1;
      #footer_up {
        height:85px;
        div:nth-child(1) {
          float:left;
          height:69px;
          width:1000px;
          a {
            float:left;
            display:block;
            height:69px;
            width:150px;
            font-size:12px;
            img {
              height:39px;
              width:50px;
              margin:0 auto
            }
            p {
              line-height:30px;
              color:#999;
              text-align:center
            }
          }
        }
        div:nth-child(2) {
          float:right;
          text-align:right;
          margin-top:-18px;
          p:nth-child(1) {
            color:#999;
            font-size:12px;
            line-height:30px
          }
          p:nth-child(2) {
            color:#00c3f5;
            font-weight:400;
            margin-top:-6px;
            line-height:40px;
            font-size:24px
          }
          a {
            height:30px;
            padding:0 16px;
            text-align:center;
            line-height:30px;
            color:#fff;
            border-radius:20px;
            margin-top:3px;
            display:inline-block;
            font-size:14px;
            background:#0bbbef
          }
        }
      }
      hr {
        margin:10px auto 28px;
        display:block;
        height:1px;
        border:0;
        border-top:1px solid #eee;
        padding:0
      }
      #footer_down {
        height:54px;
        ul {
          height:18px;
          width:1000px;
          li {
            padding-right:15px;
            border-right:1px solid #d6d6d6;
            float:left;
            height:18px;
            margin-right:15px;
            a {
              line-height:18px;
              color:#999;
              font-size:12px;
              :hover{
                color:#31a5e7
              }
            }
            :last-child {
              border:0
            }
          }
        }
        div:nth-of-type(1){
          padding-top:8px;
          float:left;
          p {
            color:#999;
            margin:0 6px;
            font-size:12px;
            line-height:27px;
            float:left
          }
          a {
            display:block;
            margin:0 3px;
            color:#999;
            font-size:12px;
            line-height:27px;
            float:left;
            :hover{
              color:#31a5e7
            }
          }
        }
        div:nth-of-type(2) {
          float:right;
          height:28px;
          margin-top:10px;
          position:relative;
          a {
            float:left;
            display:block;
            padding-right:14px;
            margin-right:14px;
            border-right:1px solid #eee;
            font-size:22px;
            color:#aaa;
            :nth-child(3) {
              padding:0;
              margin-right:21px;
              border:none;
              font-size:18px
            }
          }
          img {
            height:180px;
            width:180px;
            position:absolute;
            top:-180px;
            left:-28px;
            display:none
          }
        }
      }
    }
  }
</style>
