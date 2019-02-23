<template>
  <!--头部-->
  <div id = "headerBox">
    <div id = "header">
      <span class="iconfont meizu" @click="jumpPage('/home', 'Home')"><a :class="{a : color == '#fff'}">&#xe997;</a></span>
      <!--导航栏-->
      <ul id="header_ul1" class="iconfont">
        <li v-for="item in headerArr"
            v-if="item.title"
            @click="jumpPage(item.path, item.name, item.id)"
            @mouseenter="showBar(item.id)"
            @mouseleave="hidenBar(item.id)">
          <a v-html="item.title" :class="{a : color == '#fff'}"></a>
          <span v-if="item.Bubble">{{numShop}}</span>
        </li>
        <form action="" v-else>
          <input type="text" placeholder="魅族 V8">
          <i class="iconfont">&#xe600;</i>
        </form>
      </ul>
      <!--用户信息-->
      <ul id="header_ul4" :class="{ul : color == '#fff'}" @mouseenter="showBar(headerId)" @mouseleave="hidenBar(headerId)">
        <li><a>立即登陆</a></li>
        <li><a>立即注册</a></li>
        <li><a>我的订单</a></li>
        <li><a>M码通道</a></li>
        <span :class="{span : color == '#fff'}"></span>
      </ul>
    </div>
    <!--商品栏-->
    <ul id="header_ul2" @mouseenter="showBar(headerId)" @mouseleave="hidenBar(headerId)">
      <li v-for="item,index in listData" @click="jumpPage('/details', 'Details', item.skuid, { name: item.name, img: item.img, skuprice: item.skuprice, title: item.title })" @mouseenter="headerOp" @mouseleave="headerOpEnd"
      :class="{liOp: index == liIndex}" :style="{opacity: op}" :data-id="index">
        <a>
          <img :src="item.img" alt="">
          <span>{{item.name}}</span>
          <p>{{item.skuprice}}</p>
        </a>
      </li>
    </ul>
    <!--APP下载-->
    <div id="header_ul3_box" @mouseenter="showBar(headerId)" @mouseleave="hidenBar(headerId)">
      <div id="header_ul3">
        <img src="../assets/header_2_1.jpg" alt="">
        <a><img src="../assets/header_2_2.png" alt=""></a>
        <a><img src="../assets/header_2_2.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "Header",
        data(){
          return{
            headerArr: [
              {
                title: '手机',path: '/commodity', id: 0, name: 'Commodity'
              },{
                title: '声学',path: '/commodity', id: 1, name: 'Commodity'
              },{
                title: '智能',path: '/commodity', id: 2, name: 'Commodity'
              },{
                title: '生活',path: '/commodity', id: 3, name: 'Commodity'
              },{
                title: 'Flyme',
              },{
                title: '服务',
              },{
                title: '专卖店',
              },{
                title: '社区',
              },{
                title: 'APP下载', id: 8,
              },{
                icon: '&#xe600;'
              },{
                title: '&#xe663;', id: 10,
              },{
                title: '&#xe735;',
                Bubble: 1,
                url: '',
                id: 11,
                path: '/shopping',
                name: 'Shopping'
              }],
            headerData: [],
            listData: [],
            headerId: 0,
            op: 1,
            liIndex: 0,
          }
        },
        computed: {
          ...mapState(['shopData', 'numShop']),
        },
        props:{
          color:{
            type: String,   //属性的类型
            required: false,  // true 必须传 false 不是必须传递的
            default: '#000' //默认值
          },
        },
        mounted(){
          this.numAll();
          //header
          let _this = this;
          this.$http.post('https://dms-dataapi.meizu.com/data/jsdata.jsonp?callback=renderSite&blockIds=233,266,267')
            .then(function(res){
              _this.headerData = JSON.parse(res.data.substring(11, res.data.length - 1));
            })
        },
        methods: {
          ...mapActions(['numAll']),
          //跳转页面
          jumpPage(path, name, id, query){
            console.log(id)
            if(path){
              this.$router.push({path: path + '/:id', name: name, params:{id: id}, query})
            }
          },
          //显示菜单
          showBar(id){
            if(id <= 3){
              $('#header_ul2').stop().animate({height: 270}, 500);
              $('#header_ul1 li a').css({color: '#000'});
              $('.meizu a').css({color: '#00beff'});
              this.listData = this.headerData.block_266[id].floorAllocations;

            }else if(id == 8){
              $('#header_ul3_box').stop().animate({height: 402}, 500);
              $('#header_ul1 li a').css({color: '#000'});
              $('.meizu a').css({color: '#00beff'});
            }else if(id == 10){
              $('#header_ul4').css('display', 'block');
            }
            this.headerId = id;
          },
          //隐藏菜单
          hidenBar(id){
            if(id <= 3){
              $('#header_ul2').stop().animate({height: 0}, 10);
              if(this.color == '#fff'){
                $('#header_ul1 li a').css({color: '#fff'});
                $('.meizu a').css({color: '#fff'});
              }else{
                $('#header_ul1 li a').css({color: '#000'});
                $('.meizu a').css({color: '#00beff'});
              }
            }else if(id == 8){
              $('#header_ul3_box').stop().animate({height: 0}, 10);
              if(this.color == '#fff'){
                $('#header_ul1 li a').css({color: '#fff'});
                $('.meizu a').css({color: '#fff'});
              }else{
                $('#header_ul1 li a').css({color: '#000'});
                $('.meizu a').css({color: '#00beff'});
              }
            }else if(id == 10){
              $('#header_ul4').css('display', 'none');
            }
            this.headerId = id;
          },
          //透明度
          headerOp(ev){
            this.liIndex = ev.currentTarget.dataset.id;
            this.op = 0.5;

          },
          headerOpEnd(ev){
            this.op = 1;

          },
        },
    }
</script>

<style scoped lang="scss">
  #headerBox {
    z-index:100;
    height:82px;
    position:relative;
    #header {
      width:1240px;
      margin:0 auto;
      height:82px;
      position:relative;
      .meizu {
        float:left;
        a {
          display:block;
          font-size:22px;
          padding:28px 0;
          color:#00beff
        }
        .a{
          color: #fff
        }
      }
      #header_ul1 {
        float:right;
        height:80px;
        li {
          float:left;
          height:80px;
          a {
            display:block;
            padding:31px 20px 30px;
            line-height:21px;
            font-size:14px;
            color:#000;
          }
          .a{
            color: #fff;
          }
        }
        li:nth-last-of-type(2) a {
          padding:30px 8px;
          font-size:20px
        }
        li:nth-last-of-type(1){
          a {
            padding:30px 8px;
            font-size:28px
          }
          span {
            border-radius:50%;
            background:#c00;
            height:15px;
            width:15px;
            padding:0;
            position:absolute;
            top:25px;
            right:5px;
            color:#fff;
            line-height:15px;
            font-size:10px;
            text-align:center
          }
        }
        form {
          float:left;
          margin:26px 5px 0 10px;
          width:170px;
          height:30px;
          line-height:29px;
          font-size:12px;
          background:#fff;
          border-radius:20px;
          border:1px solid #999;

          input:nth-child(1) {
            border:none;
            width:127px;
            height:20px;
            margin:5px 0 0 15px;
            position:relative;
            font-size:10px
          }
          input:nth-child(2) {
            border:none;
            background:0 0;
            font-size:14px
          }
        }
      }
      #header_ul4 {
        display:none;
        width:98px;
        background:#fff;
        position:absolute;
        top:65px;
        left:1128px;
        border-radius:4px;
        border: 1px solid #aaa;
        li {
          margin:15px;
          text-align:center;
          a {
            display:block;
            font-size:12px;
            &:hover{
              color: #00beff;
            }
          }
        }
        span {
          display:block;
          height: 12px;
          width: 12px;
          transform:rotate(45deg);
          background: #fff;
          position:absolute;
          top:-7px;
          left:44px;
          border-left: 1px solid #aaa;
          border-top: 1px solid #aaa;
        }
        .span {
          border: none;
          top: -6px;
        }
      }
      #header_ul4.ul{
        border: none;
      }
    }
    #header_ul2 {
      height:0;
      background:#fff;
      z-index:-1;
      text-align:center;
      font-size:0;
      top:0;
      position:absolute;
      width:100%;
      overflow:hidden;
      li {
        display:inline-block;
        height:156px;
        width:152px;
        margin-top:88px;
        font-size:0;
        a {
          display:block;
          height:156px;
          width:152px;
          font-size:12px;
          color:#515151;
          img {
            display:inline-block;
            height:120px;
            width:120px
          }
          p,span{
            display:inline-block;
            height:18px;
            width:120px
          }
        }
      }
      .liOp{
        opacity: 1 !important;
      }
    }
    #header_ul3_box {
      height:0;
      background:#fff;
      z-index:-1;
      top:0;
      position:absolute;
      width:100%;
      overflow:hidden;
      #header_ul3 {
        height:402px;
        width:1240px;
        text-align:center;
        position:absolute;
        left:0;
        right:0;
        margin:auto;
        img {
          display:inline-block;
          height:300px;
          width:1240px;
          margin-top:88px
        }
        a {
          display:block;
          height:28px;
          width:125px;
          position:absolute;
          top:300px;
          img {
            height:28px;
            width:125px;
            margin:0
          }
        }
        a:nth-of-type(1) {
          left:375px
        }
        a:nth-of-type(2) {
          right:117px
        }
      }
    }
  }
</style>



<!-- headerData: [{"block_233":[{"placeholder":"魅族 16th"}],"block_266":[{"name":"手机","href":"https://lists.meizu.com/page/list?categoryid=76","node":[{"skuid":"10333","name":"魅族 Note8","skuprice":"￥999","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png","href":"https://detail.meizu.com/item/meizunote8.html","title":"12.24-12.25 限时购机赠送ME20耳机"},{"skuid":"10390","name":"魅族 16 X","skuprice":"￥2098","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/BC/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png","href":"https://detail.meizu.com/item/meizu16x.html","title":"高通骁龙710 屏下指纹 旗舰双摄"},{"skuid":"9853","name":"魅族 V8 高配版","skuprice":"￥1098","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/9D/Cgbj0VuhxsmABvIIAAMCZZS4ycg181.png","href":"https://detail.meizu.com/item/meizuv8.html"},{"skuid":"10035","name":"魅族 X8","skuprice":"￥1598","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png","href":"https://detail.meizu.com/item/meizux8.html"},{"skuid":"9161","name":"魅族 16th","skuprice":"￥2698","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png","href":"https://detail.meizu.com/item/meizu16th.html"},{"skuid":"7119","name":"魅族 15","skuprice":"￥2499","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/04/0B/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png","href":"https://detail.meizu.com/item/meizu15.html"},{"skuid":"6815","name":"魅蓝 E3","skuprice":"￥1799","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/03/BC/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png","href":"https://detail.meizu.com/item/meilane3.html"},{"skuid":"7519","name":"魅蓝 6T","skuprice":"￥799","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/04/8D/Cgbj0VsM-kuAGYZmAAm_NQr8nSk674.png","href":"https://detail.meizu.com/item/meilan6t.html"}],"floorAllocations":[{"skuid":"10333","name":"魅族 Note8","skuprice":"￥999","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png","href":"https://detail.meizu.com/item/meizunote8.html","title":"12.24-12.25 限时购机赠送ME20耳机"},{"skuid":"10390","name":"魅族 16 X","skuprice":"￥2098","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/BC/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png","href":"https://detail.meizu.com/item/meizu16x.html","title":"高通骁龙710 屏下指纹 旗舰双摄"},{"skuid":"9853","name":"魅族 V8 高配版","skuprice":"￥1098","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/9D/Cgbj0VuhxsmABvIIAAMCZZS4ycg181.png","href":"https://detail.meizu.com/item/meizuv8.html"},{"skuid":"10035","name":"魅族 X8","skuprice":"￥1598","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png","href":"https://detail.meizu.com/item/meizux8.html"},{"skuid":"9161","name":"魅族 16th","skuprice":"￥2698","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png","href":"https://detail.meizu.com/item/meizu16th.html"},{"skuid":"7119","name":"魅族 15","skuprice":"￥2499","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/04/0B/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png","href":"https://detail.meizu.com/item/meizu15.html"},{"skuid":"6815","name":"魅蓝 E3","skuprice":"￥1799","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/03/BC/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png","href":"https://detail.meizu.com/item/meilane3.html"},{"skuid":"7519","name":"魅蓝 6T","skuprice":"￥799","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/04/8D/Cgbj0VsM-kuAGYZmAAm_NQr8nSk674.png","href":"https://detail.meizu.com/item/meilan6t.html"}]},{"name":"声学","href":"https://lists.meizu.com/page/list/?categoryid=231","floorAllocations":[{"skuid":"7159","name":"POP 真无线蓝牙耳机","skuprice":"￥499","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png","href":"https://detail.meizu.com/item/meizu_tws.html"},{"skuid":"6203","name":"魅族 Flow Bass 三单元耳机","skuprice":"￥599","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/02/EE/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png","href":"https://detail.meizu.com/item/flowbass.html"},{"skuid":"7157","name":"魅族 HALO 激光蓝牙耳机","skuprice":"￥999","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png","href":"https://detail.meizu.com/item/meizu_g20.html"},{"skuid":"696","name":"魅族 EP51 蓝牙运动耳机","skuprice":"￥269","priceGetStart":false,"img":"https://storeimg.meizu.com/product/1459849377-64075.png","href":"https://detail.meizu.com/item/meizu_ep51.html"},{"skuid":"9843","name":"魅族 EP52 Lite 蓝牙耳机","skuprice":"￥129","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png","href":"https://detail.meizu.com/item/meizu_ep52_lite.html"},{"skuid":"6202","name":"魅族 LIVE 四单元动铁耳机","skuprice":"￥1299","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/02/EF/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png","href":"https://detail.meizu.com/item/meiuzep71.html"},{"skuid":"10044","name":"魅族 EP-31 耳机","skuprice":"￥199","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/20/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png","href":"https://detail.meizu.com/item/EP31.html"},{"skuid":"5445","name":"魅蓝 EP52 蓝牙耳机","skuprice":"￥299","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/02/69/Cgbj0Vn2f8mAcov7AAHUhmjUdk0958.png","href":"https://detail.meizu.com/item/meilanep52.html"}],"node":[{"skuid":"7159","name":"POP 真无线蓝牙耳机","skuprice":"￥499","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png","href":"https://detail.meizu.com/item/meizu_tws.html"},{"skuid":"6203","name":"魅族 Flow Bass 三单元耳机","skuprice":"￥599","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/02/EE/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png","href":"https://detail.meizu.com/item/flowbass.html"},{"skuid":"7157","name":"魅族 HALO 激光蓝牙耳机","skuprice":"￥999","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png","href":"https://detail.meizu.com/item/meizu_g20.html"},{"skuid":"696","name":"魅族 EP51 蓝牙运动耳机","skuprice":"￥269","priceGetStart":false,"img":"https://storeimg.meizu.com/product/1459849377-64075.png","href":"https://detail.meizu.com/item/meizu_ep51.html"},{"skuid":"9843","name":"魅族 EP52 Lite 蓝牙耳机","skuprice":"￥129","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png","href":"https://detail.meizu.com/item/meizu_ep52_lite.html"},{"skuid":"6202","name":"魅族 LIVE 四单元动铁耳机","skuprice":"￥1299","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/02/EF/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png","href":"https://detail.meizu.com/item/meiuzep71.html"},{"skuid":"10044","name":"魅族 EP-31 耳机","skuprice":"￥199","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/20/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png","href":"https://detail.meizu.com/item/EP31.html"},{"skuid":"5445","name":"魅蓝 EP52 蓝牙耳机","skuprice":"￥299","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/02/69/Cgbj0Vn2f8mAcov7AAHUhmjUdk0958.png","href":"https://detail.meizu.com/item/meilanep52.html"}]},{"name":"配件","href":"https://lists.meizu.com/page/list?categoryid=186","floorAllocations":[{"skuid":"9846","name":"魅族移动电源3","skuprice":"￥79","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/92/Cgbj0VugrWKAXgQoAALx033SuQ0691.png","href":"https://detail.meizu.com/item/meizu_power_bank_3.html"},{"skuid":"5526","name":"快充电源适配器（UP0830S）","skuprice":"￥89","priceGetStart":false,"img":"https://storeimg.meizu.com/product/1467170145-52479.png","href":"https://detail.meizu.com/item/up0830s.html"},{"skuid":"7160","name":"魅族无线充电器","skuprice":"￥99","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png","href":"https://detail.meizu.com/item/wireless_charger.html","title":"10W快速充电 无线即放即充"},{"skuid":"6553","name":"魅族 Type-C 2.0数据线","skuprice":"￥39","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/03/2F/Cgbj0FqYqxqAcZ-nAAGaLqkN71s729.png","href":"https://detail.meizu.com/item/type_c_2.html"},{"skuid":"2459","name":"魅族 Micro USB 数据线","skuprice":"￥29","priceGetStart":false,"img":"https://storeimg.meizu.com/product/1458617159-29477.png","href":"https://detail.meizu.com/item/micro_usb_cable.html"},{"skuid":"4270","name":"魅族 Type-C 金属数据线","skuprice":"￥39","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/00/1E/CnQOjVef_HaAaD-bAAHXId4TWtA165.png","href":"https://detail.meizu.com/item/type_c.html","title":"支持2A快速充电 耐用又放心"},{"skuid":"9327","name":"魅族 16th 高透保护膜","skuprice":"￥19","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/EE/Cgbj0VwRr7qAbuVYAAY0bXC77yg241.png","href":"https://detail.meizu.com/item/meizu_16_pasting.html","title":"高透光率 支持魅族16th屏幕指纹解锁"},{"skuid":"9414","name":"魅族 16th Plus 亲肤保护壳","skuprice":"￥29","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/16/Cgbj0Ft7iV6AQANcAAL00J0tbyQ152.png","href":"https://detail.meizu.com/item/meizu_16th_plus_protector.html","title":"量体打造的纤薄 薄如无形"}],"node":[{"skuid":"9846","name":"魅族移动电源3","skuprice":"￥79","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/92/Cgbj0VugrWKAXgQoAALx033SuQ0691.png","href":"https://detail.meizu.com/item/meizu_power_bank_3.html"},{"skuid":"5526","name":"快充电源适配器（UP0830S）","skuprice":"￥89","priceGetStart":false,"img":"https://storeimg.meizu.com/product/1467170145-52479.png","href":"https://detail.meizu.com/item/up0830s.html"},{"skuid":"7160","name":"魅族无线充电器","skuprice":"￥99","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png","href":"https://detail.meizu.com/item/wireless_charger.html","title":"10W快速充电 无线即放即充"},{"skuid":"6553","name":"魅族 Type-C 2.0数据线","skuprice":"￥39","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/03/2F/Cgbj0FqYqxqAcZ-nAAGaLqkN71s729.png","href":"https://detail.meizu.com/item/type_c_2.html"},{"skuid":"2459","name":"魅族 Micro USB 数据线","skuprice":"￥29","priceGetStart":false,"img":"https://storeimg.meizu.com/product/1458617159-29477.png","href":"https://detail.meizu.com/item/micro_usb_cable.html"},{"skuid":"4270","name":"魅族 Type-C 金属数据线","skuprice":"￥39","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/00/1E/CnQOjVef_HaAaD-bAAHXId4TWtA165.png","href":"https://detail.meizu.com/item/type_c.html","title":"支持2A快速充电 耐用又放心"},{"skuid":"9327","name":"魅族 16th 高透保护膜","skuprice":"￥19","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/EE/Cgbj0VwRr7qAbuVYAAY0bXC77yg241.png","href":"https://detail.meizu.com/item/meizu_16_pasting.html","title":"高透光率 支持魅族16th屏幕指纹解锁"},{"skuid":"9414","name":"魅族 16th Plus 亲肤保护壳","skuprice":"￥29","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/06/16/Cgbj0Ft7iV6AQANcAAL00J0tbyQ152.png","href":"https://detail.meizu.com/item/meizu_16th_plus_protector.html","title":"量体打造的纤薄 薄如无形"}]},{"name":"生活","href":"https://lists.meizu.com/page/list/?categoryid=222","floorAllocations":[{"skuid":"2463","name":"魅族盒子 一键找回遥控器","skuprice":"￥299","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/00/9C/Cix_s1gYZWCAc1jqAAGoLQ8h81w741.png","href":"https://detail.meizu.com/item/meizu_hezi.html","title":"海量内容 同享美妙"},{"skuid":"1112","name":"魅族路由器 极速版","skuprice":"￥199","priceGetStart":false,"img":"https://storeimg.meizu.com/product/1465698264-58364.jpg","href":"https://detail.meizu.com/item/router_f1.html","title":"天生不凡 快狠稳"},{"skuid":"3463","name":"魅族桌面多功能USB排插","skuprice":"￥89","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/01/07/CnQOjViEff2AGm-aAADs7Q-pP_M820.png","href":"https://detail.meizu.com/item/usb_platooninsert.html","title":"颜值与实力 亦可兼得"},{"skuid":"6821","name":"Everyday 乐游系列 酷 MA 萌定制版","skuprice":"￥599","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/03/59/Cgbj0Vqwv3SAKEs9AAeZO9uMlbg447.png","href":"https://detail.meizu.com/item/kumamon.html"},{"skuid":"4709","name":"魅蓝休闲旅行双肩包","skuprice":"￥199","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/00/BE/Cix_s1g7l-yANQsqAAJSWz441uE109.jpg","href":"https://detail.meizu.com/item/meilan_bag.html"},{"skuid":"4792","name":"魅蓝胸包","skuprice":"￥119","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/02/7B/Cgbj0Vn6yW6AUlsRAAWrjB0SvJc768.png","href":"https://detail.meizu.com/item/everydaychestpack.html"},{"skuid":"4790","name":"魅蓝数码收纳包","skuprice":"￥59","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/01/FB/Cgbj0Vmnd4mACpbbAAWpKisBvl4526.png","href":"https://detail.meizu.com/item/digitalstoragepack.html"},{"skuid":"4708","name":"魅蓝旅行包","skuprice":"￥269","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/01/B0/Cgbj0VlZqvaAGb0QAAUD7V55-H8213.png","href":"https://detail.meizu.com/item/meilan_travellingbag.html","title":"轻盈负重 细节开花"}],"node":[{"skuid":"2463","name":"魅族盒子 一键找回遥控器","skuprice":"￥299","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/00/9C/Cix_s1gYZWCAc1jqAAGoLQ8h81w741.png","href":"https://detail.meizu.com/item/meizu_hezi.html","title":"海量内容 同享美妙"},{"skuid":"1112","name":"魅族路由器 极速版","skuprice":"￥199","priceGetStart":false,"img":"https://storeimg.meizu.com/product/1465698264-58364.jpg","href":"https://detail.meizu.com/item/router_f1.html","title":"天生不凡 快狠稳"},{"skuid":"3463","name":"魅族桌面多功能USB排插","skuprice":"￥89","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/01/07/CnQOjViEff2AGm-aAADs7Q-pP_M820.png","href":"https://detail.meizu.com/item/usb_platooninsert.html","title":"颜值与实力 亦可兼得"},{"skuid":"6821","name":"Everyday 乐游系列 酷 MA 萌定制版","skuprice":"￥599","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/03/59/Cgbj0Vqwv3SAKEs9AAeZO9uMlbg447.png","href":"https://detail.meizu.com/item/kumamon.html"},{"skuid":"4709","name":"魅蓝休闲旅行双肩包","skuprice":"￥199","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/00/BE/Cix_s1g7l-yANQsqAAJSWz441uE109.jpg","href":"https://detail.meizu.com/item/meilan_bag.html"},{"skuid":"4792","name":"魅蓝胸包","skuprice":"￥119","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/02/7B/Cgbj0Vn6yW6AUlsRAAWrjB0SvJc768.png","href":"https://detail.meizu.com/item/everydaychestpack.html"},{"skuid":"4790","name":"魅蓝数码收纳包","skuprice":"￥59","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/01/FB/Cgbj0Vmnd4mACpbbAAWpKisBvl4526.png","href":"https://detail.meizu.com/item/digitalstoragepack.html"},{"skuid":"4708","name":"魅蓝旅行包","skuprice":"￥269","priceGetStart":false,"img":"https://openfile.meizu.com/group1/M00/01/B0/Cgbj0VlZqvaAGb0QAAUD7V55-H8213.png","href":"https://detail.meizu.com/item/meilan_travellingbag.html","title":"轻盈负重 细节开花"}]},{"name":"Flyme","href":"https://www.flyme.cn/index.html","floorAllocations":""},{"name":"服务","href":"http://care.meizu.com/","floorAllocations":""},{"name":"专卖店","href":"http://retail.meizu.com/index.html","floorAllocations":""},{"name":"社区","href":"https://bbs.meizu.cn/","floorAllocations":""}],"block_267":[{"imgRetina":"https://fms.res.meizu.com/dms/2018/11/20/e481d699-8d20-4bf5-92cb-b7a4f7d8fd2b.jpg","storeHref":"https://hd.meizu.com/share/app_download.html","bbsHref":"http://app.flyme.cn/apps/public/detail"}],"skuInfo":[{"skuId":"10333","skuMinPrice":"","skuPrice":"999.0"},{"skuId":"10390","skuMinPrice":"","skuPrice":"1798.0"},{"skuId":"9853","skuMinPrice":"","skuPrice":"898.0"},{"skuId":"10035","skuMinPrice":"","skuPrice":"1498.0"},{"skuId":"9161","skuMinPrice":"","skuPrice":"2498.0"},{"skuId":"7119","skuMinPrice":"","skuPrice":"1498.0"},{"skuId":"6815","skuMinPrice":"","skuPrice":"1799.0"},{"skuId":"7519","skuMinPrice":"","skuPrice":"799.0"},{"skuId":"7159","skuMinPrice":"399.0","skuPrice":"499.0"},{"skuId":"6203","skuMinPrice":"399.0","skuPrice":"599.0"},{"skuId":"7157","skuMinPrice":"499.0","skuPrice":"999.0"},{"skuId":"696","skuMinPrice":"129.0","skuPrice":"229.0"},{"skuId":"9843","skuMinPrice":"","skuPrice":"129.0"},{"skuId":"6202","skuMinPrice":"1099.0","skuPrice":"1299.0"},{"skuId":"10044","skuMinPrice":"99.0","skuPrice":"199.0"},{"skuId":"5445","skuMinPrice":"199.0","skuPrice":"299.0"},{"skuId":"9846","skuMinPrice":"","skuPrice":"79.0"},{"skuId":"5526","skuMinPrice":"69.0","skuPrice":"89.0"},{"skuId":"7160","skuMinPrice":"79.0","skuPrice":"99.0"},{"skuId":"6553","skuMinPrice":"49.0","skuPrice":"59.0"},{"skuId":"2459","skuMinPrice":"","skuPrice":"29.0"},{"skuId":"4270","skuMinPrice":"","skuPrice":"39.0"},{"skuId":"9327","skuMinPrice":"","skuPrice":"19.0"},{"skuId":"9414","skuMinPrice":"","skuPrice":"29.0"},{"skuId":"2463","skuMinPrice":"199.0","skuPrice":"399.0"},{"skuId":"1112","skuMinPrice":"99.0","skuPrice":"199.0"},{"skuId":"3463","skuMinPrice":"49.0","skuPrice":"89.0"},{"skuId":"6821","skuMinPrice":"","skuPrice":"599.0"},{"skuId":"4709","skuMinPrice":"169.0","skuPrice":"199.0"},{"skuId":"4792","skuMinPrice":"89.0","skuPrice":"119.0"},{"skuId":"4790","skuMinPrice":"49.0","skuPrice":"59.0"},{"skuId":"4708","skuMinPrice":"199.0","skuPrice":"269.0"}]}], -->
