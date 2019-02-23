<template>
  <div id="shopping">
    <!-- header -->
    <div id = "headerBox">
      <div id = "header">
        <span class="iconfont meizu" @click="jumpPage('/home')"><a>&#xe997;</a></span>
        <ul>
          <li>购物车</li>
          <li>></li>
          <li>确认订单</li>
          <li>></li>
          <li>在线支付</li>
          <li>></li>
          <li>完成</li>
        </ul>
        <div id='header_right'>
          <p>我的订单</p>
          <ol :class="{onOl: headerFlag}" @mouseenter="headerEnter" @mouseleave="headerLeave">
            <li :class="{liOn: headerFlag}">我的商城<i class='iconfont'>{{headerFlag? '&#xe608;': '&#xe673;'}}</i></li>
            <li @mouseenter="liEnter" @mouseleave="liLeave">地址管理</li>
            <li @mouseenter="liEnter" @mouseleave="liLeave">我的收藏</li>
            <li @mouseenter="liEnter" @mouseleave="liLeave">我的回购金</li>
            <li @mouseenter="liEnter" @mouseleave="liLeave">问题反馈</li>
            <li @mouseenter="liEnter" @mouseleave="liLeave">退出</li>
          </ol>
        </div>
      </div>
    </div>
    <!-- content -->
    <div id='contentBox'>
      <div id='content'>
        <div id='con_hd'>
          <dl>
            <dt :class='{iconfont:true, checkAll: true, dtActive: flag}' @click="clickAll">&#xe613;</dt>
            <dd>全选</dd>
          </dl>
          <p>单价(元)</p>
          <p>数量</p>
          <p>小计(元)</p>
          <p @click="edit">{{editFlag? '编辑': '完成'}}</p>
        </div>
        <div id='con_con' v-if="shopData">
          <dl v-for="item,index in shopData">
            <dt>
							<span class="iconfont">
								<i :class='{checkAll: true, iActive: item.flag}' @click="clickClass(index)">&#xe613;</i>
								<em>{{item.title}}</em>
							</span>
              <p>已免邮费</p>
            </dt>
            <dd v-for="j,iIndex in item.content">
              <section>
                <p :class="{pActive: j.flag, iconfont: true, checkCom: true}" @click="clickP(index, iIndex)">&#xe613;</p>
                <img :src="j.img" alt="">
                <span>
									<i>{{j.title}}</i>
									<em>{{j.content}}</em>
								</span>
              </section>
              <p class='unitPrice'>￥{{j.price}}.00</p>
              <span class="quantity">
								<i :class="{active: j.num != 1}" @click="reduce(index, iIndex)">-</i>
								<input type="text" :value="j.num">
								<i :class="{active: j.num != 5}" @click="plus(index, iIndex)">+</i>
                <p>限购5件</p>
							</span>
              <p class='totalPrice'>￥{{j.price * j.num}}.00</p>
              <p class='fKeys iconfont' v-if="editFlag">--</p>
              <p class='fKeys iconfont' v-else>
                <i @mouseenter="editEneter(index, iIndex)"
                   @mouseleave="editLeave(index, iIndex)"
                   @click="editClick(index, iIndex)">&#xe604;</i>
                <i :class="{editActive: j.edit}"></i>
              </p>
            </dd>
          </dl>
          <div>
            <img src="../assets/shopping.png" alt="">
            <span>
							<i>购物车内还没有商品，赶紧去选购吧~</i>
							<a href="http://localhost:8080/html/meizu.html">返回商品首页</a>
						</span>
          </div>
        </div>
        <div id='con_btn_box' :class="{conBtnBox: conBtn}" :style="{width: width + 'px'}">
          <div id='con_btn' :class="{conBtn: conBtn}">
            <dl>
              <dt :class='{iconfont:true, checkAll: true, dtActive: flag}' @click="clickAll">&#xe613;</dt>
              <dd>全选</dd>
            </dl>
            <span>
						<p>删除选中的商品</p>
						<p>共 <i>{{numShop}}</i> 件商品，已选择 <em>{{num}}</em> 件</p>
					</span>
            <span>
						<p>已优惠 <i>0.00</i> 元，合计（不含运费）：<em>￥{{totalPrice}}.00</em></p>
						<p>去结算</p>
					</span>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
    import Footer from '../components/Footer'
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "Shopping",
        components: { Footer },
        data(){
          return{
            totalPrice: 0,
            flag: false,
            num: 0,
            editFlag: true,
            offsetTop: 0,
            conBtn: false,
            width: 0,
            headerFlag: false,
          }
        },
        computed: {
          ...mapState(['shopData', 'numShop']),
        },
        methods: {
          //跳转页面
          jumpPage(path){
            if(path){
              this.$router.push({path: path})
            }
          },
          //头部
          headerEnter(ev){
            this.headerFlag = true;
          },
          headerLeave(ev){
            this.headerFlag = false;
          },
          liEnter(ev){
            ev.currentTarget.style.background = '#FAFAFC';
          },
          liLeave(ev){
            ev.currentTarget.style.background = '#fff';
          },
          //选择
            //单选
          clickP(index, iIndex){
            let flag = true;
            this.shopData[index].content[iIndex].flag = !this.shopData[index].content[iIndex].flag;
            if(!this.shopData[index].content[iIndex].flag){
              this.shopData[index].flag = false;
              this.flag = false;
            }else{
              for(let j = 0; j < this.shopData[index].content.length; j++){
                if(!this.shopData[index].content[j].flag){
                  flag = false;
                }
              }
              this.shopData[index].flag = flag;
              if(flag & this.pitchOnClass()){
                this.flag = true
              }
            }
            this.reckon();
            this.pitchOnNum();
          },
            //类选
          clickClass(index){
            let flag = false;
            for(let i = 0; i < this.shopData[index].content.length; i++){
              if(!this.shopData[index].content[i].flag){
                this.clickP(index, i);
                flag = true;
              }
            }
            if(!flag){
              this.shopData[index].flag = false;
              this.flag = false
              for(let i = 0; i < this.shopData[index].content.length; i++){
                this.clickP(index, i);
              }
            }else{
              this.shopData[index].flag = true;
              if(this.pitchOnClass()){
                this.flag = true
              }
            }
            this.reckon();
            this.pitchOnNum();
          },
            //全选
          clickAll(){
            if(this.flag){
              this.flag = false;
              for(let i = 0; i < this.shopData.length; i++){
                this.clickClass(i)
              }
            }else{
              for(let i = 0; i < this.shopData.length; i++){
                if(!this.shopData[i].flag){
                  this.flag = true;
                  this.clickClass(i)
                }
              }
            }
          },
            //判断类名是否选中
          pitchOnClass(){
            for(let i = 0; i < this.shopData.length; i++){
              if(!this.shopData[i].flag){
                return false;
              }
            }
            return true;
          },
          //数字加减
          plus(index, i){
            if(this.shopData[index].content[i].num < 5){
              this.shopData[index].content[i].num++
            }
            this.reckon();
            this.numAll();
            this.pitchOnNum();
          },
          reduce(index, i){
            if(this.shopData[index].content[i].num > 1){
              this.shopData[index].content[i].num--
            }
            this.reckon();
            this.numAll();
            this.pitchOnNum();
          },
          //计算总价
          reckon(){
            this.totalPrice = 0;
            for(let i = 0; i < this.shopData.length; i++){
              for(let j = 0; j < this.shopData[i].content.length; j++){
                if(this.shopData[i].content[j].flag){
                  this.totalPrice += this.shopData[i].content[j].price * this.shopData[i].content[j].num;
                }
              }
            }
            this.pitchOnNum();
          },
          //商品数量
          ...mapActions(['numAll']),
          //选中商品数量
          pitchOnNum(){
            this.num = 0;
            for(let i = 0; i < this.shopData.length; i++){
              for(let j = 0; j < this.shopData[i].content.length; j++){
                if(this.shopData[i].content[j].flag == 1){
                  this.num += this.shopData[i].content[j].num;
                }
              }
            }
          },
          //编辑
          edit(){
            this.editFlag = !this.editFlag
          },
          editEneter(index, iIndex){
            this.shopData[index].content[iIndex].edit = true;
          },
          editLeave(index, iIndex){
            this.shopData[index].content[iIndex].edit = false;
          },
            //删除
          editClick(index, iIndex){
            this.shopData[index].content.splice(iIndex, 1);
            if(this.shopData[index].content.length == 0){
              this.shopData.splice(index, 1)
            }
            this.numAll();
            this.pitchOnNum();
          },
          //滚动
          scrollBtn(){
            let ullHeight = document.documentElement.clientHeight;
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(this.offsetTop - scrollTop +70 <= ullHeight){
              this.conBtn = false;
            }else{
              this.conBtn = true;
            }
          },
        },
        mounted(){
          this.width = document.documentElement.clientWidth;
          this.numAll();
          window.addEventListener('scroll', this.scrollBtn);
          this.offsetTop = $('#con_btn')[0].offsetTop;
        },
    }
</script>

<style scoped lang="scss">
  #shopping{
    /*header*/
    #headerBox{
      height: 81px;
      position: relative;
      z-index: 100;
      #header{
        width: 1240px;
        margin: 0 auto;
        height: 81px;
        position: relative;
        .meizu{
          float: left;
          position: relative;
          z-index: 300;
          line-height: 81px;
          height: 81px;
          overflow: hidden;
          a{
            font-size: 22px;
            color: #00c3f5;
          }
        }
        ul{
          float: left;
          margin-left: 50px;
          line-height: 80px;
          li{
            float: left;
            font-size: 14px;
            margin-right: 10px;
            color: #999;
            &:nth-child(1){
              color: #333;
            }
          }
        }
        #header_right{
          float: right;
          font-size: 12px;
          line-height: 80px;
          height: 80px;
          color: #333;
          p{
            float: left;
            padding: 0 20px;
            cursor: pointer;
          }
          ol{
            height: 38px;
            float: left;
            border: 1px solid #fff;
            border-radius: 3px;
            margin-top: 20px;
            background: #fff;
            overflow: hidden;
            transition: 0.5s;
            li{
              line-height: 38px;
              cursor: pointer;
              padding: 0 20px;
              i{
                font-size: 12px;
                margin-left: 5px;
              }
              &:last-child{
                text-align: center;
                border-top: 1px solid #ccc
              }
            }
            .liOn{
              color: #00c3f5;
            }
          }
          .onOl{
            height: 230px;
            border: 1px solid #aaa;
          }
        }
      }
    }
    /* content */
    #contentBox{
      padding-bottom: 40px;
      overflow: hidden;
      background-color: #F4F6FA;
      // height: 341px;
      #content{
        width: 1240px;
        margin: auto;
        // height: 341px;
        #con_hd{
          height: 50px;
          margin-top: 10px;
          font-size: 12px;
          background-color: #fff;
          color: rgba(51,51,51,.4);
          border-bottom: 1px solid #EFEFEF;
          dl{
            float: left;
            width: 513px;
            text-align: left;
            padding-left: 24px;
            line-height: 50px;
            font-size: 14px;
            cursor: pointer;
            dt{
              height: 18px;
              width: 18px;
              border: 1px solid #aaa;
              float: left;
              margin: 15px;
              border-radius: 2px;
              line-height: 15px;
              text-align: center;
              font-weight: 900;
              color: #fff;
              user-select:none
            }
            .dtActive{
              background: #00c3f5
            }
            dd{
              float: left;
              color: #333;
            }
          }
          p{
            float: left;
            text-align: center;
            line-height: 50px;
            &:nth-of-type(1){
              width: 208px;
            }
            &:nth-of-type(2){
              width: 189px;
            }
            &:nth-of-type(3){
              width: 153px;
            }
            &:nth-of-type(4){
              width: 105px;
              text-align: right;
              color: #00c3f5;
              padding-right: 48px;
              cursor: pointer;
            }
          }
        }
        #con_con{
          margin-bottom: 10px;
          dl{
            dt{
              height: 50px;
              line-height: 49px;
              background-color: #FAFAFC;
              span{
                float: left;
                width: 100px;
                text-align: left;
                padding-left: 24px;
                line-height: 50px;
                font-size: 14px;
                cursor: pointer;
                i{
                  height: 18px;
                  width: 18px;
                  border: 1px solid #aaa;
                  float: left;
                  margin: 15px;
                  border-radius: 2px;
                  line-height: 15px;
                  text-align: center;
                  font-weight: 900;
                  color: #FAFAFC;
                  user-select:none;
                }
                .iActive{
                  background: #40D2F8;
                }
                em{
                  float: left;
                  color: #333;
                }
              }
              p{
                float: left;
                font-size: 12px;
                color: #aaa;
              }
            }
            dd{
              border-bottom: 1px solid #EFEFEF;
              line-height: 150px;
              height: 150px;
              border-top: 1px solid #EFEFEF;
              background-color: #fff;
              text-align: center;
              section{
                float: left;
                width: 513px;
                text-align: left;
                padding-left: 24px;
                p{
                  height: 18px;
                  width: 18px;
                  border: 1px solid #aaa;
                  float: left;
                  margin: 65px 15px;
                  border-radius: 2px;
                  line-height: 15px;
                  text-align: center;
                  font-weight: 900;
                  color: #fff;
                  cursor: pointer;
                  user-select:none;
                }
                .pActive{
                  background: #40D2F8;
                }
                img{
                  float: left;
                  height: 100px;
                  width: 100px;
                  margin: 24px 20px;
                }
                span{
                  float: left;
                  margin-top: 55px;
                  i{
                    display: block;
                    line-height: 20px;
                  }
                  em{
                    display: block;
                    line-height: 20px;
                    font-size: 13px;
                    color: #888;
                  }
                }
              }
              .unitPrice{
                width: 208px;
                float: left;
                color: #666;
              }
              .quantity{
                position: relative;
                width: 189px;
                float: left;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                height: 100%;
                i{
                  font-size: 14px;
                  line-height: 22px;
                  height: 22px;
                  border: 1px solid #ccc;
                  font-weight: 900;
                  width: 22px;
                  color: #ccc;
                  transition: 1s;
                  user-select:none;
                }
                .active{
                  color: #333;
                  cursor: pointer;
                  &:hover{
                    color: #40D2F8;
                  }
                }
                input{
                  font-size: 12px;
                  height: 24px;
                  border: 1px solid #ccc;
                  border-left: 0;
                  border-right: 0;
                  width: 37px;
                  text-align: center;
                  vertical-align: baseline;
                  font-weight: 900;
                }
                p{
                  position: absolute;
                  width: 100%;
                  text-align: center;
                  line-height: 20px;
                  font-size:14px;
                  color: #999;
                  top: 100px;
                  margin: 0 auto;
                }
              }
              .totalPrice{
                float: left;
                width: 153px;
                color: #E02B41;
              }
              .fKeys{
                float: left;
                width: 100px;
                text-align: right;
                padding-right: 50px;
                position: relative;
                cursor: pointer;
                user-select:none;
                i:nth-child(1){
                  font-size: 12px;
                  line-height: 30px;
                  width: 30px;
                  display: inline-block;
                  text-align: center;
                  color: #777;
                  font-weight: 900;
                  position: relative;
                  z-index: 5;
                }
                i:nth-child(2){
                  opacity: 0;
                  display: inline-block;
                  height: 25px;
                  width: 25px;
                  border-radius: 50%;
                  background: #ddd;
                  content: '';
                  position: absolute;
                  top: 63px;
                  left: 72px;
                  z-index: 1;
                  transition: 1s;
                }
                i.editActive{
                  opacity: 1;
                }
              }
            }
          }
          div{
            display: none;
            height: 360px;
            width: 100%;
            margin: 10px 0 30px;
            background-color: #fff;
            overflow: hidden;
            img{
              margin: 100px 0 0 400px;
              float: left;
            }
            span{
              float: left;
              i{
                display: block;
                font-size: 18px;
                font-weight: bolder;
                margin: 120px 0 15px 50px;
              }
              a{
                display: block;
                margin-left: 50px;
                color: #40D2F8;
                border: 1px solid #40D2F8;
                border-radius: 4px;
                font-size: 14px;
                width: 90px;
                line-height: 34px;
                padding: 0 20px;
              }
            }
          }
        }
        #con_btn_box{
          #con_btn{
            height: 70px;
            font-size: 14px;
            color: #666;
            line-height: 67px;
            background-color: #fff;
            width: 1240px;
            dl{
              float: left;
              width:100px;
              text-align: left;
              padding-left: 24px;
              line-height: 50px;
              font-size: 14px;
              cursor: pointer;
              margin: 10px 2px;
              dt{
                height: 18px;
                width: 18px;
                border: 1px solid #aaa;
                float: left;
                margin: 15px;
                border-radius: 2px;
                line-height: 15px;
                text-align: center;
                font-weight: 900;
                color: #fff;
                user-select:none;
              }
              .dtActive{
                background: #00c3f5
              }
              dd{
                float: left;
                color: #333;
              }
            }
            span{
              p{
                float: left;
                &:nth-child(1){
                  margin: 1px 10px;
                  cursor: pointer;
                }
                i{

                }
                em{
                  color: #00c3f5;
                }
              }
            }
            span:nth-of-type(2){
              float: right;
              p{
                i{
                  color: #E02B41;
                }
                em{
                  font-size: 20px;
                  font-weight: bolder;
                  color: #E02B41;
                  margin-right: 24px;
                }
              }
              p:nth-child(2){
                font-size: 14px;
                width: 58px;
                height: 34px;
                line-height: 34px;
                padding: 0 20px;
                border-color: #DBDBDB;
                background: #DBDBDB;
                color: #fff;
                text-align: center;
                border-radius: 3px;
                margin: 18px 30px 0px 0px;
                user-select:none;
              }
            }
          }
          .conBtn{
            margin: 0 auto;
          }
        }
        .conBtnBox{
          background-color: #fff;
          position: fixed;
          left: 0;
          bottom: 0;
          box-shadow: 0 -2px 5px rgba(153,153,153,.2);
          z-index: 99;
        }
      }
    }
  }
</style>
