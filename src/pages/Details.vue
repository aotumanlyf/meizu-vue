<template>
  <div class="details">
    <!-- header -->
    <Header></Header>
    <!-- content -->
    <div id="contentBox">
      <div id="con_hd">
        <section>
          <p>{{name}}</p>
          <ul>
            <li @click="jumpPage('/home', 'Home')"><a>首页</a></li>
            <li><a>概述</a></li>
            <li><a>性能</a></li>
            <li><a>相机</a></li>
            <li><a>参数</a></li>
            <li><a>常见问题</a></li>
          </ul>
        </section>
      </div>
      <div id='con_con'>
        <div id='cc_left'>
          <div id='cc_img' @mouseenter="mouseStart"  @mousemove.stop="mouseMove" @mouseleave="mouseEnd">
            <img :src="img" alt="">
            <p :style="{left: offsetX - 150 + 'px', top: offsetY - 150 + 'px'}"></p>
            <span :style="{backgroundPositionX: 300 - offsetX * 2 + 'px', backgroundPositionY: 300 - offsetY * 2 + 'px'}"></span>
          </div>
          <ul>
            <li v-for="item in imgData" @click="clickImg" :data-img="item"><img :src="item" alt=""></li>
          </ul>
          <div class='iconfont'>
            <dl>
              <dt>&#xe618;</dt>
              <dd>收藏</dd>
            </dl>
            <dl>
              <dt>&#xe603;</dt>
              <dd>对比</dd>
            </dl>
          </div>
        </div>
        <div id='cc_right'>
          <div id='cc_r1'>
            <p>{{name}}</p>
            <p>{{title}}</p>
          </div>
          <div id='cc_r2'>
            <i>￥</i>
            <span>{{skuprice}}</span>
          </div>
          <div id='cc_r3' class='iconfont'>
            <ul>
              <li>支持</li>
              <li v-for="item in support">
                <p>&#xe610;</p>
                <span>{{item}}</span>
              </li>
            </ul>
            <dl>
              <dt>配送服务</dt>
              <dd @mouseenter="regionEnter" @mouseleave="regionLeave">
                <em>{{ccR3[0].title}}</em>&nbsp
                <em v-show="ccR3[0].title !='请选择' & ccR3[1].title != ccR3[0].title">{{ccR3[1].title}}</em>&nbsp
                <em v-show="ccR3[1].title!='请选择'">{{ccR3[2].title}}</em>&nbsp
                <p>&#xe673;</p>
              </dd>
              <article v-show="regionDisplay == true" @mouseenter="regionEnter" @mouseleave="regionLeave">
                <span v-for="item,index in ccR3"
                      @click="clickSpan"
                      :data-id="index"
                      :key="index"
                      :class="{site: regionId == index}"
                      @mouseenter="pEnter"
                      @mouseleave="pLeave">
								 	<i>{{item.title}}</i>
								 	<p :class='{p: pId == index}' >&#xe609;</p>
                </span>
                <ol class='province' v-for="item,index in ccR3" v-if="regionId == index">
                  <li v-for="j,jIndex in item.content"
                      :key="jIndex"
                      :data-id="jIndex"
                      @click="clickLi">{{j.name}}</li>
                </ol>
                <em @click="regionClose"></em>
              </article>
            </dl>
            <div>
              <p>本商品由 魅族 负责发货并提供售后服务</p>
              <a href=''><i>&#xe622;</i> 在线客服</a>
            </div>
          </div>

          <div class='cc_r' v-for="item,index in detailsData">
            <p class="p1">{{item.title}}<a href='' class='iconfont' v-if="item.flag == 1" v-show="barShow">&#xe61f;</a></p>
            <div class="cc_r_spans">
              <span
                v-for="j,i in item.span" @click="choice"
                :class="{ccActive: item.index == i}"
                :data-id="i"
                :data-class="index"
                :data-img="j.img">{{j.txt}}
                <img :src="j.img" alt="" v-if="j.img">
                <p class="p2" v-if="j.tagging">{{j.tagging}}</p>
                <i v-if="j.stages">{{j.stages}}</i>
                <em v-if="j.poundage">{{j.poundage}}</em>
              </span>
              <div class="cc_r_bar" v-if="item.bar" v-show="barData">
                <ul>
                  <li v-for="a in barData">
                    <p><img :src="a.img" alt=""></p>
                    <p>{{a.title}}</p>
                    <p>{{a.price}}</p>
                  </li>
                </ul>
                <span :style="{left: barLeft}"></span>
              </div>
            </div>
          </div>

          <div id='cc_r10'>
            <p>数量</p>
            <section>
              <span @click="reduce" :class="{active: num == 1}">-</span>
              <i>{{num}}</i>
              <span @click="plus" :class="{active: num == 5}">+</span>
            </section>
          </div>
          <div id='cc_r11'>
            <a href='http://localhost:8080/html/order.html'>立即购买</a>
            <a>加入购物车</a>
          </div>
        </div>
      </div>
      <div id="con_btn_box">
        <i id='cb_title'>服务说明</i>
        <img id='cbb_img' src="../assets/c_fuwu.jpg" alt="">
        <ConBtn :conBtnData="conBtnData"></ConBtn>
      </div>
    </div>
    <!--footer-->
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from '../components/Header'
    import ConBtn from '../components/ConBtn'
    import Footer from '../components/Footer'
    export default {
        name: "Details",
        components: { Header, ConBtn, Footer },
        data(){
          return{
            title: '',
            img: '',
            name: '',
            skuprice: 0,
            support: ['花呗分期', '顺丰发货', '7天无理由退货'],
            offsetX: 0,
            offsetY: 0,
            imgData: [require('../assets/img1_1_1.jpg'),
              require('../assets/img1_1_2.jpg'),
              require('../assets/img1_1_3.jpg'),
              require('../assets/img1_1_4.jpg')],
            ccR3: [
              {
              title: '请选择',
              content: []
            },{
              title: '请选择',
              content: []
            },{
              title: '请选择',
              content: []
            }],
            regionId: 0,
            regionDisplay: false,
            pId: -1,
            regionFlag: true,
            detailsData: [
              {
                title: '型号',
                index: 0,
                span: [{
                  txt: '魅族 V8 高配版',
                }, {
                  txt: '魅族 V8 标配版',
                }],
              }, {
                title: '网络类型',
                index: 0,
                span: [{
                  txt: '全网通公开版',
                }],
              }, {
                title: '颜色分类',
                index: 0,
                span: [
                  {
                  txt: '雅金',
                  img: require('../assets/img1_1_1.jpg'),
                  imgData: [require('../assets/img1_1_1.jpg'),
                    require('../assets/img1_1_2.jpg'),
                    require('../assets/img1_1_3.jpg'),
                    require('../assets/img1_1_4.jpg')]
                }, {
                  txt: '耀黑',
                  img: require('../assets/img2_1_1.jpg'),
                    imgData: [require('../assets/img2_1_1.jpg'),
                      require('../assets/img2_1_2.jpg'),
                      require('../assets/img2_1_3.jpg'),
                      require('../assets/img2_1_4.jpg')]
                }, {
                  txt: '灰蓝',
                  img: require('../assets/img3_1_1.jpg'),
                    imgData: [require('../assets/img3_1_1.jpg'),
                      require('../assets/img3_1_2.jpg'),
                      require('../assets/img3_1_3.jpg'),
                      require('../assets/img3_1_4.jpg')]
                }, {
                  txt: '烟紫',
                  img: require('../assets/img4_1_1.jpg'),
                    imgData: [require('../assets/img4_1_1.jpg'),
                      require('../assets/img4_1_2.jpg'),
                      require('../assets/img4_1_3.jpg'),
                      require('../assets/img4_1_4.jpg')]
                }],
              }, {
                title: '内存容量',
                index: 0,
                span: [{
                  txt: '4+64GB',
                }]
              }, {
                title: '选择套餐',
                index: 0,
                bar: 1,
                span: [{
                  txt: '官方标配',
                }, {
                  txt: '碎屏保套餐',
                  bar: [{
                    img: require('../assets/bar_1.jpg'),
                    title: '碎屏保',
                    price: '¥ 69.00',
                  }],
                }, {
                  txt: '套餐二',
                  tagging: '省130元',
                  bar: [{
                    img: require('../assets/bar_2.jpg'),
                    title: '魅族 EP-31 耳机',
                    price: '¥ 69.00',
                  }],
                }, {
                  txt: '套餐一',
                  tagging: '省129元',
                  bar: [{
                    img: require('../assets/bar_3.jpg'),
                    title: '魅族 EP51 蓝牙运动耳机',
                    price: '¥ 100.00',
                  }],
                }],
              }, {
                title: '花呗分期',
                index: 0,
                flag: 1,
                span: [{
                  stages: '¥306.21×3期',
                  poundage: '含手续费6.88/期',
                }],
              }
            ],
            barShow: 1,
            barLeft: '',
            barData: '',
            num: 1,
            conBtnData: [{
              "img": require("../assets/c_btn_1.jpg"),
              "title": "魅族 16th",
              "price": "2698",
              "id": "1"
            }, {
              "img": require("../assets/c_btn_2.jpg"),
              "title": "魅族 15",
              "price": "1998",
              "id": "0"
            }]
          }
        },
        methods: {
          //跳转页面
          jumpPage(path, name){
            if(name){
              this.$router.push({path: path, name: name})
            }
          },
          //放大镜
          mouseStart(ev){
            $('#cc_img p').css({display: 'block'});
            $('#cc_img span').css({display: 'block'});
            $('#cc_left span').css({backgroundImage: `url(${$('#cc_left img').attr('src')})`,backgroundSize: '200%'})
          },
          mouseMove(ev){
            if(ev.pageX - $('#cc_img').offset().left <= 150){
              this.offsetX = 150;
            }else if(ev.pageX - $('#cc_img').offset().left >= 430){
              this.offsetX = 430;
            }else{
              this.offsetX = ev.pageX - $('#cc_img').offset().left;
            }

            if(ev.pageY - $('#cc_img').offset().top <= 150){
              this.offsetY = 150;
            }else if(ev.pageY - $('#cc_img').offset().top >= 450){
              this.offsetY = 450;
            }else{
              this.offsetY = ev.pageY - $('#cc_img').offset().top;
            }

          },
          mouseEnd(){
            $('#cc_img p').css({display: 'none'});
            $('#cc_img span').css({display: 'none'});
          },
          //点击切换图片
          clickImg(ev){
            this.img = ev.currentTarget.dataset.img;
          },
          //地区
          regionEnter(){
            this.regionDisplay = true
          },
          regionLeave(){
            if(this.regionFlag){
              this.regionDisplay = false
            }
          },
          clickSpan(ev){
            let id = ev.currentTarget.dataset.id;
            this.regionFlag = false;
            this.regionId = id;
          },
          clickLi(ev){
            let index = this.regionId;
            let id = ev.currentTarget.dataset.id;
            this.regionFlag = false;
            if(index == 0){
              this.ccR3[1].content = this.ccR3[0].content[id].c_list;
              this.ccR3[0].title = this.ccR3[0].content[id].name;
              this.regionId = 1;
              this.ccR3[1].title = '请选择';
              this.ccR3[2].title = '请选择';
              this.ccR3[2].content = '';
            }else if(index == 1){
              this.ccR3[2].content = this.ccR3[1].content[id].d_list;
              this.ccR3[1].title = this.ccR3[1].content[id].name;
              this.regionId = 2;
              this.ccR3[2].title = '请选择';
            }else if(index == 2){
              this.ccR3[2].title = this.ccR3[2].content[id].name;
              $('#cc_r3 dl article').css({display: 'none'})
              this.regionFlag = true;
            }
          },
          regionClose(){
            this.regionDisplay = false
            this.regionFlag = true;
          },
            //光标
          pEnter(ev){
            this.pId = ev.currentTarget.dataset.id
          },
          pLeave(){
            this.pId = -1;
          },
          //点击选择商品属性
          choice(ev){
            let _class = ev.currentTarget.dataset.class;
            let _id = ev.currentTarget.dataset.id;
            let _img = ev.currentTarget.dataset.img;
            this.detailsData[_class].index = _id;
            //判断图片
            if(_img){
              this.img = _img;
              this.imgData = this.detailsData[_class].span[_id].imgData
            }
            //判断箭头
            if(_id % 3 == 0){
              this.barLeft = '80px';
            }else if(_id % 3 == 1){
              this.barLeft = '270px';
            }else if(_id % 3 == 2){
              this.barLeft = '460px';
            }
            this.barData = this.detailsData[_class].span[_id].bar
          },
          //数字加减
          plus(){
            if(this.num < 5){
              this.num++
            }
          },
          reduce(){
            if(this.num > 1){
              this.num--
            }
          },
        },
        mounted(){
          this.title = this.$route.query.title;
          this.img = this.$route.query.img;
          this.name = this.$route.query.name;
          let str = this.$route.query.skuprice;
          this.skuprice = str.substring(1) + '.00';
          //content
          //con_hd
          // $(window).scroll(function(){
          //   if($(window).scrollTop() >= 81){
          //     $('#con_hd').css({position: 'fixed', borderBottom: '1px solid #efefef'})
          //   }else{
          //     $('#con_hd').css({position: 'absolute', borderBottom: 'none'})
          //   }
          // })


          //请求地区信息
          let _this = this;
          this.$http({
            url: 'https://merchant-api-f.netmi.com.cn/base/district-api/index',
            method: 'post',
            data: {
              upid: 0,
              data_type: 1,
            }
          }).then(function(res){
            _this.ccR3[0].content = res.data.data;
          })


          //保留两位小数
          function dbNum(num){
            return parseInt(num * 100) / 100;
          }
          //图片放大效果
          $('#con_btn ul').on('mouseenter', 'li', function(){
            $(this).find('p').stop().animate({backgroundSize: `110%`}, 200);
          }).on('mouseleave', 'li', function(){
            $(this).find('p').stop().animate({backgroundSize: `100%`}, 200);
          })

        },
        beforeRouteUpdate (to, from, next){
          next();
          this.title = this.$route.query.title;
          this.img = this.$route.query.img;
          this.name = this.$route.query.name;
          this.skuprice = this.$route.query.skuprice;
        }
    }
</script>

<style lang="scss" scoped>
  /* content */
  #contentBox{
    overflow: hidden;
    background: #fff;
    padding-top: 66px;
    border-top: 1px solid #efefef;
    position: relative;
    #con_hd{
      height: 71px;
      width: 100%;
      background: rgba(246, 248, 251, 0.9);
      position: absolute;
      z-index: 80;
      top: 0;
      section{
        margin: 0 auto;
        width: 1240px;
        p{
          float: left;
          font-size: 26px;
          line-height: 70px;
        }
        ul{
          float: right;
          li{
            float: left;
            font-size: 16px;
            color: #333;
            a{
              margin-top: 24px;
              padding: 0 20px;
              display: block;
              border-left: 1px solid #dedede;
              height: 20px;
              &:hover{
                color: #00c3f5;
              }
            }
          }
          li:first-child{
            a{
              border: none;
            }
          }
        }
      }
    }
    #con_con{
      width: 1240px;
      margin: 0 auto;
      background: #fff;
      user-select: none;
      overflow: hidden;
      #cc_left{
        float: left;
        width: 560px;
        margin-right: 40px;
        #cc_img{
          position: relative;
          z-index: 1;
          cursor: pointer;
          img{
            margin: 8px 40px 8px 0;
            height: 560px;
            width: 560px;
          }
          p{
            position: absolute;
            height: 278px;
            width: 278px;
            border: 1px solid #00c3f5;
            border-radius: 5px;
            top: 0;
            left: 0;
            background: rgba(0, 195, 245, 0.1);
            display: none;
          }
          span{
            display: none;
            position: absolute;
            height: 600px;
            width: 600px;
            border: 1px solid #00c3f5;
            border-radius: 5px;
            top: 0;
            left: 600px;
            background: #fff no-repeat;
            background-size: 400%;
          }
        }
        ul{
          margin-top: 10px;
          margin-left: 24px;
          height: 107px;
          text-align: center;
          li{
            display: inline-block;
            margin: 0 24px;
            overflow: hidden;
            height: 102px;
            cursor: pointer;
            img{
              height: 80px;
              width: 80px;
            }
          }
        }
        .iconfont{
          padding: 10px 56px 0;
          dl{
            float: left;
            font-size: 12px;
            text-align: center;
            color: #bfbfbf;
            cursor: pointer;
          }
          dl:nth-child(1){
            dt{
              font-size: 18px;
            }
          }
          dl:nth-child(2){
            margin-left: 40px;
            dt{
              font-size: 24px;
              height: 20px;
              line-height: 20px;
            }
          }
        }
      }
      #cc_right{
        float: right;
        width: 640px;
        font-size: 12px;
        padding-top: 25px;
        #cc_r1{
          padding-top: 20px;
          margin-bottom: 12px;
          font-size: 28px;
          font-weight: 800;
          color: #262626;
          p:nth-child(2){
            color: #e22841;
            font-size: 14px;
            font-weight: 400;
            margin-top: 5px;
          }
        }
        #cc_r2{
          background: #f4f6fa;
          padding: 16px 0 12px;
          color: #e02b41;
          padding-left: 10px;
          i{
            font-size: 24px;
          }
          span{
            font-size: 36px;
            font-weight: 500;
            height: 36px;
            display: inline-block;
            line-height: 36px;
          }
        }
        #cc_r3{
          border-bottom: 1px dashed #dedede;
          padding: 18px 0 18px 10px;
          ul{
            height: 20px;
            li{
              height: 18px;
              margin-right: 20px;
              color: #8c8c8c;
              line-height: 20px;
              font-size: 12px;
              float: left;
              p{
                float: left;
                margin-right: 8px;
                line-height: 18px;
                color: #595959;
                font-size: 18px;
              }
              span{
                float: left;
              }
            }
            li:nth-child(1){
              margin-right: -8px;
              letter-spacing: 24px;
            }
          }
          dl{
            padding-top: 15px;
            position: relative;
            dt{
              width: 65px;
              height: 18px;
              color: #8c8c8c;
              line-height: 20px;
              font-size: 12px;
              float: left;
            }
            dd{
              display: inline-block;
              padding-right: 10px;
              height: 18px;
              line-height: 18px;
              font-size: 14px;
              color: #262626;
              cursor: pointer;
              p{
                font-size: 20px;
                float: right;
                margin-left: 8px;
              }
            }
            article{
              position: absolute;
              left: 65px;
              padding: 10px 0 15px;
              width: 498px;
              border: 1px solid #dedede;
              height: auto;
              background: #fff;
              span{
                display: inline-block;
                font-size: 0;
                height: 25px;
                background-color: #fff;
                border: 1px solid #ddd;
                border-bottom: 0;
                padding: 0 2px 0 10px;
                line-height: 25px;
                color: #000;
                cursor: pointer;
                i{
                  display: inline-block;
                  font-size: 12px;
                }
                p{
                  font-size: 12px;
                  display: inline-block;
                  margin-left: 5px;
                  position: relative;
                }
                .p{
                  top: 2px;
                  color: #00c3f5;
                }
                &:first-child{
                  margin-left: 10px;
                }
              }
              .site{
                border: 1px solid #000;
                border-bottom: 0;
                height: 26px;
                p{
                  color: #00c3f5;
                }
              }
              ol{
                width: 100%;
                border-top: 1px solid #000;
                margin-top: -1px;
                padding-top: 20px;
                li{
                  float: left;
                  width: 80px;
                  padding: 2px 0 2px 15px;
                  clear: none;
                  font-size: 12px;
                  line-height: 22px;
                  cursor: pointer;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                &:nth-of-type(2), &:nth-of-type(3){
                  display: none;
                }
              }
              em{
                position: absolute;
                display: block;
                height: 17px;
                width: 17px;
                border-radius: 50%;
                top: -8px;
                right: -8px;
                text-align: center;
                line-height: 17px;
                cursor: pointer;
                background: url('../assets/icons.png') -30px -40px;
              }
            }
          }
          div{
            margin-top: 5px;
            margin-left: 65px;
            color: #8c8c8c;
            line-height: 20px;
            font-size: 12px;
            height: 20px;
            p{
              display: block;
              float: left;
            }
            a{
              display: block;
              float: left;
              margin: -3px 0 0 10px;
              color: #27b3ff;
              i{
                font-size: 18px;
              }
            }
          }
        }
        .cc_r{
          margin: 20px 0 -10px 10px;
          overflow: hidden;
          display: flex;
          .p1{
            width: 65px;
            height: 40px;
            color: #8c8c8c;
            line-height: 42px;
            font-size: 12px;
            a{
              display: block;
              font-size: 20px;
              height: 20px;
              float: right;
              margin: -22px 24px 0 0;
            }
          }
          .cc_r_spans{
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            span{
              cursor: pointer;
              width: 176px;
              margin: 0 10px 10px 0;
              background-color: #fff;
              line-height: 40px;
              border: 1px solid #BFBFBF;
              border-radius: 2px;
              color: #595959;
              text-align: center;
              font-size: 14px;
              img{
                height: 32px;
                width: 32px;
                float: left;
                margin: 4px -50px 0 50px;
              }
              .p2{
                float: right;
                color: #f86467;
                margin: -1px 30px 0 -40px;
              }
              i{
                display: block;
                line-height: 18px;
                padding-top: 7px;
              }
              em{
                display: block;
                color: #8c8c8c;
                font-size: 12px;
                line-height: 18px;
                padding: 3px 0 7px;
              }
            }
            .ccActive{
              border: 1px solid #333;
            }
            .cc_r_bar{
              position: relative;
              padding: 10px 0;
              margin: 6px 0 10px;
              width: 548px;
              border: 1px solid #000;
              background: #fff;
              border-radius: 4px;
              ul{
                margin-bottom: -5px;
                overflow: hidden;
                li{
                  float: left;
                  position: relative;
                  width: 182px;
                  text-align: center;
                  font-size: 12px;
                  p{
                    margin-bottom: 5px;
                    text-align: center;
                    img{
                      width: 60px;
                      height: 60px;
                      display: inline-block;
                    }
                  }
                }
              }
              span{
                position: absolute;
                height: 8px;
                width: 8px;
                border: 0;
                border-top: 2px solid #333;
                border-left: 2px solid #333;
                transform: rotate(45deg);
                top: -6px;
                left: 80px;
                border-raius: 0;
              }
            }
          }
        }

        #cc_r10{
          margin: 20px 0 -10px 10px;
          height: 52px;
          p{
            float: left;
            height: 40px;
            color: #8c8c8c;
            line-height: 42px;
            font-size: 12px;
            margin-right: -8px;
            letter-spacing: 24px;
          }
          section{
            float: left;
            height: 40px;
            span{
              float: left;
              display: block;
              height: 40px;
              width: 30px;
              cursor: pointer;
              color: #000;
              line-height: 38px;
              font-size: 14px;
              text-align: center;
              border: 1px solid #e7e7e7;
              background: #f7f7f7;
            }
            i{
              float: left;
              width: 60px;
              height: 40px;
              line-height: 40px;
              font-size: 12px;
              text-align: center;
              color: #595959;
              border: 1px solid #dedede;
              border-right: none;
              border-left: none;
            }
            .active{
              color: #e0e0e0;
              cursor: default;
            }
          }
          .ccActive{
            border: 1px solid #333;
          }
        }
        #cc_r11{
          margin-top: 45px;
          a{
            padding: 15px 0;
            width: 208px;
            font-size: 20px;
            line-height: 24px;
            color: #fff;
            background-color: #27b3ff;
            border-radius: 3px;
            text-align: center;
            float: left;
            margin-right: 20px;
            &:hover{
              background-color: #0793ff;
            }
          }
          a:nth-child(2){
            width: 206px;
            line-height: 22px;
            color: #27b3ff;
            background: #fff;
            border: 1px solid #27b3ff;
            cursor: pointer;
            &:hover{
              background-color: #eff3ff;
            }
          }
        }
      }
    }
    #con_btn_box{
      margin-top: 60px;
      padding-bottom: 60px;
      background: #f4f4f4;
      #cb_title{
        display: block;
        font-size: 24px;
        padding-top: 45px;
        padding-bottom: 20px;
        width: 1240px;
        margin: 0 auto;
      }
      #cbb_img{
        margin: 0 auto;
      }
    }

  }
</style>
