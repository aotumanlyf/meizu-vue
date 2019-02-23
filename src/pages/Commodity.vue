<template>
  <div id="commodity">
    <!-- header -->
    <Header></Header>
    <!-- content -->
    <div id="contentBox">
      <!-- 规格栏 -->
      <div id="con_hd">
        <section>
					<span>
						<a>首页</a>
						&nbsp>&nbsp
					</span>
          <span>
						<a>全部商品</a>
						&nbsp>&nbsp{{title}}
					</span>
        </section>
        <section>
          <ul v-for="item in conHdData">
            <li>{{item.title}}</li>
            <li v-for="j in item.content"><a>{{j}}</a></li>
          </ul>
        </section>
      </div>
      <!-- 商品列表 -->
      <div id="con_con">
        <section id="con_con_hd">
          <a>推荐</a>
          <a>新品</a>
          <a>价格</a>
          <span>
						<i class="iconfont"></i>
						<p>仅显示有货商品</p>
					</span>
        </section>
        <ul id="con_con_con">
          <li :data-id="item.id" v-for="item,index in contentData" @click="jumpPage('/details', 'Details', item.id, $event)">
            <a>
              <img class="big" :src="j" alt="" v-for="j,jIndex in item.img" :key="jIndex" v-show="jIndex == item.index">
              <div class='sImg'>
                <img :class="{sActive: jIndex == item.index}" :src="j" alt="" v-for="j,jIndex in item.img" :key="jIndex"
                :data-class="jIndex" :data-id="index" @click.stop="clickImg">
              </div>
              <span>{{item.title}}</span>
              <span>{{item.details}}</span>
              <span><i>￥</i><p>{{item.price}}</p><em>起</em></span>
              <div class='contrast'>
                <p class="iconfont">&#xe603;</p>
                <i>对比</i>
              </div>
            </a>
          </li>
        </ul>
        <!-- 对比 -->
        <section id="con_con_btn">
          <div id="ccb">
            <div id="ccb_hd" class="iconfont">
              <p>商品对比 (0/4)</p>
              <span>&#xe604;</span>
              <div>
                <em>&#xe604;</em>
                <dl>
                  <dt>&#xe605;</dt>
                  <dd>12</dd>
                </dl>
              </div>
            </div>
            <div id="ccb_btn">
              <p id='btn_null'>您还没有选择需要对比的商品哦～</p>
              <ul>
                <li v-for="item in [1, 2, 3, 4]">
                  <img src="" alt="">
                  <div>
                    <a></a>
                    <article>
                      <span><i></i><em></em></span>
                      <p>删除</p>
                    </article>
                  </div>
                </li>
              </ul>
              <div id="ccb_operate">
                <span>对比</span>
                <p>清空商品</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ConBtn :conBtnData="conBtnData"></ConBtn>
    </div>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from '../components/Header'
    import ConBtn from '../components/ConBtn'
    import Footer from '../components/Footer'
    export default {
        name: "Commodity",
        components: {Header, ConBtn, Footer},
        data(){
          return{
            id: 0,
            title: '手机',
            conHdData:[
              {
                title: '屏幕尺寸：',
                content: ['全部', '5.2英寸', '5.5英寸', '5.7英寸', '5.46英寸', '5.95英寸', '6.0英寸', '6.2英寸', '6.5英寸']
              },
              {
                title: '机身内存：',
                content: ['全部', '32GB', '64GB', '128GB', '256GB']
              }
            ],
            contentData: [
              {
                "img": [require("../assets/c_con_1_1.png"), require("../assets/c_con_1_2.jpg"), require("../assets/c_con_1_3.jpg")],
                "title": "魅族 X8",
                "price": "1598",
                "id": "1",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_2_1.jpg"), require("../assets/c_con_2_2.jpg"), require("../assets/c_con_2_3.jpg")],
                "title": "魅族 16 X",
                "details": "10月10日现货开售 骁龙710 轻奢旗舰",
                "price": "2098",
                "id": "2",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_3_1.jpg"), require("../assets/c_con_3_2.jpg")],
                "title": "魅族 V8 高配版",
                "price": "1098",
                "id": "3",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_4_1.jpg"), require("../assets/c_con_4_2.jpg")],
                "title": "魅族 V8 标准版",
                "price": "799",
                "id": "4",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_5_1.jpg"), require("../assets/c_con_5_2.jpg"), require("../assets/c_con_5_3.jpg")],
                "title": "魅族 16th Plus",
                "details": "骁龙845 屏幕下指纹",
                "price": "3198",
                "id": "5",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_6_1.jpg"), require("../assets/c_con_6_2.jpg"), require("../assets/c_con_6_3.jpg")],
                "title": "魅族 16th",
                "details": "骁龙845 屏幕下指纹",
                "price": "2698",
                "id": "6",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_7_1.jpg"), require("../assets/c_con_7_2.jpg"), require("../assets/c_con_7_3.jpg"),
                  require("../assets/c_con_7_4.jpg")],
                "title": "魅族 15",
                "details": "魅族15系列最高降501元，享魅族16系列优...",
                "price": "1998",
                "id": "7",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_8_1.jpg"), require("../assets/c_con_8_2.jpg"), require("../assets/c_con_8_3.jpg")],
                "title": "魅族 15 Plus",
                "details": "魅族15系列最高降501元，享魅族16系列优...",
                "price": "2498",
                "id": "8",
                'index': 0
              }, {
                "img": [require("../assets/c_con_9_1.jpg"), require("../assets/c_con_9_2.jpg"), require("../assets/c_con_9_3.jpg")],
                "title": "魅族 M15",
                "details": "魅族15系列最高降501元，享魅族16系列优...",
                "price": "1398",
                "id": "9",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_10_1.jpg"), require("../assets/c_con_10_2.jpg"), require("../assets/c_con_10_3.jpg")],
                "title": "魅族 6T",
                "details": "双摄全面屏，游戏长续航",
                "price": "799",
                "id": "10",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_11_1.jpg"), require("../assets/c_con_11_2.jpg")],
                "title": "魅族 E3",
                "details": "骁龙636处理器 全系6G大运存",
                "price": "1799",
                "id": "11",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_12_1.jpg"), require("../assets/c_con_12_2.jpg"), require("../assets/c_con_12_3.jpg"),
                  require("../assets/c_con_12_4.jpg")],
                "title": "魅族 S6",
                "price": "999",
                "id": "12",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_13_1.jpg"), require("../assets/c_con_13_2.jpg")],
                "title": "魅蓝 6",
                "price": "599",
                "id": "13",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_14_1.jpg"), require("../assets/c_con_14_2.jpg")],
                "title": "魅蓝 Note6",
                "price": "899",
                "id": "14",
                'index': 0,
              }, {
                "img": [require("../assets/c_con_15_1.jpg"), require("../assets/c_con_15_2.jpg"), require("../assets/c_con_15_3.jpg"),
                  require("../assets/c_con_15_4.jpg")],
                "title": "魅族 PRO 7 Plus",
                "details": "双瞳如小窗 佳景观历历",
                "price": "1799",
                "id": "15",
                'index': 0,
              }],
            conBtnData: [
              {
              "img": require("../assets/c_btn_1.jpg"),
              "title": "魅族 16th",
              "price": "2698",
              "id": "1"
            }, {
              "img": require("../assets/c_btn_2.jpg"),
              "title": "魅族 15",
              "price": "1998",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_3.jpg"),
              "title": "魅族 15 Plus",
              "price": "2498",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_4.jpg"),
              "title": "魅蓝 E3",
              "price": "1799",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_5.jpg"),
              "title": "魅蓝 S6",
              "price": "999",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_1.jpg"),
              "title": "魅族 16th",
              "price": "2698",
              "id": "1"
            }, {
              "img": require("../assets/c_btn_2.jpg"),
              "title": "魅族 15",
              "price": "1998",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_3.jpg"),
              "title": "魅族 15 Plus",
              "price": "2498",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_4.jpg"),
              "title": "魅蓝 E3",
              "price": "1799",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_5.jpg"),
              "title": "魅蓝 S6",
              "price": "999",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_1.jpg"),
              "title": "魅族 16th",
              "price": "2698",
              "id": "1"
            }, {
              "img": require("../assets/c_btn_2.jpg"),
              "title": "魅族 15",
              "price": "1998",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_3.jpg"),
              "title": "魅族 15 Plus",
              "price": "2498",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_4.jpg"),
              "title": "魅蓝 E3",
              "price": "1799",
              "id": "0"
            }, {
              "img": require("../assets/c_btn_5.jpg"),
              "title": "魅蓝 S6",
              "price": "999",
              "id": "0"
            }],
          }
        },
        mounted(){
          //获取页面类型
          this.id = this.$route.params.id;
          switch (this.id){
            case '0':
              this.title = '手机';
              break;
            case '1':
              this.title = '声学';
              break;
            case '2':
              this.title = '智能';
              break;
            case '3':
              this.title = '生活';
              break;
            default:
              console.log('err')
          }

          //coontent
          //选择是否是有货商品
          $('#con_con #con_con_hd span').click(function(){
            if($(this).find('i').html()){
              $(this).find('i').css({background: '#fff'}).html("")
            }else{
              $(this).find('i').css({background: '#f4f4f4'}).html("&#xe613;")
            }
          })
          //商品
          //显示对比按钮
          $('#con_con_con').on('mouseenter', ' li a', function(){
            $(this).find('.contrast').css({display: 'block'});
          }).on('mouseleave', ' li a', function(){
            if($(this).find('.contrast').attr('xxx') != 'xxx'){
              $(this).find('.contrast').css({display: 'none'});
            }
          })
          //商品对比
          //警告栏关闭
          $('#ccb_hd div em').click(function(){
            $('#ccb_hd div').css('display', 'none')
          })
          //点击对比按钮,显示下栏
          var count = 0;
          var cId = [];
          $('#con_con_con').on('click', 'li a .contrast', function(){
            $('#con_con_btn').css('display', 'block');
            //遍历数组，检查是否有重复商品
            for(var i in cId){
              if(cId[i] == $(this).closest('li').data('id')){
                warn('该商品已经添加过了哦～');
                return false;
              }
            }
            count++;
            btnNull();
            if(count == 5){
              warn('您最多只能同时对比4款商品哦～');
            }else{
              //显示对比按钮
              $(this).attr('xxx', `xxx`);
              //存入商品序号
              cId.push($(this).closest('li').data('id'));
              //商品对比(0/4)
              $('#ccb_hd p').html(`商品对比 (${count}/4)`);
              //商品信息
              $('#ccb_btn ul li').eq(count-1).css('display', 'block');
              $('#ccb_btn ul li').eq(count-1).find('div a').html(`${$(this).closest('a').find('span:eq(0)').html()}`);
              $('#ccb_btn ul li').eq(count-1).find('div article span em').html(`${$(this).closest('a').find('span:eq(2) p').html()}.00`);
              $('#ccb_btn ul li').eq(count-1).find('div article span i').html(`${$(this).closest('a').find('span:eq(2) i').html()}`);
              $('#ccb_btn ul li').eq(count-1).find('img').attr('src',`${$(this).closest('a').find('.active').attr('src')}`);
              $('#ccb_btn ul li').eq(count-1).attr('class',`${$(this).closest('li').attr('id')}`);
            }
            return false;
          })
          //弹出警告栏
          function warn(text){
            //警告栏
            $('#ccb_hd div').css('display', 'block');
            // 警告栏延时3s消失
            clearTimeout(timer);
            var timer = setTimeout(function(){
              $('#ccb_hd div').css('display', 'none')
            }, 3000)
            //警告信息
            $('#ccb_hd div dl dd').html(text);
          }

          //下栏功能
          //关闭
          $('#ccb_hd span').click(function(){
            $('#con_con_btn').css('display', 'none');
          })
          //删除
          $('#ccb_btn ul').on('click', 'li div article p', function(){
            //隐藏对比按钮
            $(`#con_con_con #${$(this).closest('li').attr('class')}`).find('.contrast').attr('xxx', '').css('display', 'none');
            console.log(`#con_con_con #${$(this).closest('li').attr('class')}`);

            $(this).closest("li").css('display', 'none');
            count--;
            btnNull();
            $('#ccb_hd p').html(`商品对比 (${count}/4)`);
            for(var i in cId){
              if(cId[i] == $(this).closest('li').attr('class')){
                cId.splice(i, 1);
                return false;
              }
            }
          }).find('li div').hover(function(){
            $(this).find('article p').css('display', 'block')
          }, function(){
            $(this).find('article p').css('display', 'none')
          })
          //清空
          $('#ccb_operate p').click(function(){
            $('#ccb_btn ul li').css('display', 'none');
            count = 0;
            $('#ccb_hd p').html(`商品对比 (${count}/4)`);
            cId = [];
            $('#con_con_con li .contrast').attr('xxx', '').css('display', 'none');
            btnNull();
          })
          //您还没有选择需要对比的商品哦～
          function btnNull(){
            if(count == 0){
              $('#btn_null').css('display', 'block');
            }else{
              $('#btn_null').css('display', 'none');
            }
          }

          //阴影效果
          $('#con_con').on('mouseenter', 'li', function(){
            $(this).css({boxShadow: '0px 15px 30px 0px #ddd'})
          }).on('mouseleave', 'li', function(){
            $(this).css({boxShadow: '0 0 0 0'})
          });


        },
        methods:{
          //跳转页面
          jumpPage(path, name, id, ev){
            // if(name){
            //   this.$router.push({path: path + '/:id', name: name, params:{id: id}})
            // }
          },
          //大小图切换
          clickImg(ev){
            let _class = ev.currentTarget.dataset.class;
            let _id = ev.currentTarget.dataset.id;
            this.contentData[_id].index = _class;
          }
        },
        beforeRouteUpdate (to, from, next){
          next();
          //获取页面类型
          this.id = this.$route.params.id;
          switch (this.id){
            case 0:
              this.title = '手机';
              break;
            case 1:
              this.title = '声学';
              break;
            case 2:
              this.title = '智能';
              break;
            case 3:
              this.title = '生活';
              break;
            default:
              console.log('err')
          }
        }
    }
</script>

<style scoped lang="scss">
  /* content */
  #contentBox{
    height: 2398px;
    background: #f8f8f8;
    padding-bottom: 60px;
    border-top: 1px solid #efefef;
    #con_hd{
      margin: 0 auto;
      width: 1240px;
      height: 164px;
      font-size: 14px;
      section:nth-child(1){
        height: 40px;
        width: 1240px;
        line-height: 40px;
        color: #999;
        span:nth-child(1){
          a{
            float: left;
            color: #333;
          }
        }
      }
      section:nth-child(2){
        height: 94px;
        width: 1220px;
        background: #fff;
        border: 1px solid #efefef;
        padding: 15px 10px;
        overflow: hidden;
        ul{
          height: 46px;
          width: 100%;
          line-height: 46px;
          margin-left: 10px;
          li{
            float:left;
            margin-right: 62px;
            a:hover{
              color: #00c3f5
            }
          }
          li:nth-child(1){
            margin-right: 14px;
          }
        }
      }
    }
    #con_con{
      height: 1783px;
      overflow: hidden;
      margin-bottom: 20px;
      #con_con_hd{
        width: 1240px;
        height: 21px;
        margin: 30px auto 20px;
        font-size: 14px;
        a{
          float: left;
          width: 50px;
          height: 20px;
          margin-right: 20px;
          line-height: 20px;
        }
        a:hover{
          color: #00c3f5
        }
        span{
          float: right;
          cursor:pointer;
          i{
            float: left;
            height: 12px;
            width: 12px;
            border: 1px solid #ccc;
            font-size: 12px;
            color: red;
            margin: 3px 5px 0 0;
            line-height: 10px;
            background: #fff;
          }
          p{
            float: left;
          }
        }
      }
      #con_con_con{
        height: 1712px;
        width: 1240px;
        margin: 0 auto;
        li{
          height: 416px;
          width:301px;
          background: #fff;
          float: left;
          position: relative;
          margin: 0 12px 12px 0;
          a{
            height: 396px;
            width:241px;
            display: block;
            padding: 20px 30px 0;
            .big{
              width: 220px;
              height: 220px;
              margin: 0 auto 14px;
              text-align: center;
            }
            .sImg{
              width: 200px;
              height: 42px;
              margin: 13px auto 15px;
              overflow: hidden;
              text-align: center;
              font-size: 0;
              img{
                overflow: hidden;
                // float: left;
                display:  inline-block;
                margin: 0 4px;
                width: 40px;
                height: 40px;
                border: 1px solid #EFEFEF;
                border-radius: 4px;
              }
              .sActive{
                border: 1px solid #bbb;
              }
            }
            span:nth-of-type(1){
              width: 100%;
              height: 21px;
              text-align: center;
              font-size: 14px;
              color: #333;
              display: block;
              margin-bottom: 8px;
            }
            span:nth-of-type(2){
              margin-bottom: 8px;
              height: 18px;
              font-size: 12px;
              display: block;
              text-align: center;
              color: #999;
            }
            span:nth-of-type(3){
              display: block;
              font-size: 18px;
              color: #E02B41;
              text-align: center;
              i{
                font-size: 14px;
                margin: 0 5px;
              }
              p{
                display: inline-block;
              }
              em{
                font-size: 12px;
                margin: 0 5px;
              }
            }
            .contrast{
              position: absolute;
              top: 17px;
              left: 23px;
              display: none;
              p{
                font-size: 24px;
                color: #00c3f5;
                float: left;
              }
              i{
                font-size: 14px;
                color: #666;
              }
              i:hover{
                color: #00c3f5;
              }
            }
          }
        }
        li:nth-child(4), li:nth-child(8), li:nth-child(12){
          margin-right: 0;
        }
      }
      #con_con_btn{
        display: none;

        border-top: 1px solid #ddd;
        position: fixed;
        bottom: 0;
        background: #fff;
        height: 154px;
        width: 100%;
        z-index: 100;
        #ccb{
          width: 1240px;
          margin: 0 auto;
          height: 153px;
          #ccb_hd{
            margin: 16px 0 0 18px;
            font-size: 16px;
            font-weight: 700;
            color: #333;
            height: 21px;
            p{
              float: left;
            }
            span{
              float: right;
              padding-right: 15px;
              cursor: pointer;
              color: #aaa;
            }
            div{
              display: none;
              position: fixed;
              top: 0;
              right: 0;
              left: 0;
              bottom: 150px;
              margin: auto;
              height: 130px;
              width: 396px;
              background: #fff;
              box-shadow: 0 0 10px 3px #ccc;
              font-weight: 100;
              em{
                height: 20px;
                position: absolute;
                top: 15px;
                right: 15px;
                font-size: 12px;
                cursor: pointer;
              }
              dl{
                display: block;
                width: 396px;
                height: 130px;
                line-height: 130px;
                text-align: center;
                dt{
                  display: inline-block;
                  font-size: 24px;
                  color: orange
                }
                dd{
                  display: inline-block;
                }
              }
            }
          }
          #ccb_btn{
            #btn_null{
              height: 120px;
              width: 100%;
              display: block;
              text-align: center;
              line-height: 100px;
              display: none;
              color: #999;
            }
            ul{
              height: 100px;
              float: left;
              padding: 6px;
              color: #e0e0e0;
              li{
                float: left;
                overflow: hidden;
                height: 100px;
                margin-top: 18px;
                width: 260px;
                background: #fff;
                display: none;
                img{
                  float: left;
                  width: 75px;
                  height: 75px;
                  margin: 0 0 0 18px;
                  cursor:pointer;
                }
                div{
                  float: left;
                  margin-left: 16px;
                  width: 140px;
                  a{
                    color: #333;
                    overflow: hidden;
                    display: block;
                    float: left;
                    font-size: 14px;
                    width: 129px;
                    height: 38px;
                  }
                  article{
                    float: left;
                    display: inline;
                    margin-top: 10px;
                    width: 140px;
                    height: 19px;
                    line-height: 19px;
                    span{
                      color: #e02b41;
                      font-size: 14px;
                      float: left;
                      width: 70px;
                      i{
                        font-size: 12px;
                      }
                    }
                    p{
                      display: none;
                      font-size: 14px;
                      color: #666;
                      margin-right: 10px;
                      float: right;
                      cursor:pointer;
                    }
                  }
                }
              }
            }
            #ccb_operate{
              text-align: center;
              top: 18px;
              right: 14px;
              margin-right: 30px;
              float: right;
              margin-top: 15px;
              span{
                display: block;
                width: 100px;
                height: 36px;
                line-height: 36px;
                background: #00c3f5;
                color: #fff;
                font-size: 14px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                text-align: center;
                margin-bottom: 10px;
              }
              p{
                font-size: 14px;
                color: #666;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
</style>
