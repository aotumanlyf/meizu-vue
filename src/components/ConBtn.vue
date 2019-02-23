<template>
  <div id="con_btn">
    <section>
      <p>为您推荐</p>
      <div class="iconfont">
        <span :class="{active: ulLeft >= 0}" @click="scrollLeft">&#xe607;</span>
        <span :class="{active: ulLeft <= long}" @click="scrollRight">&#xe606;</span>
      </div>
    </section>
    <div id='scroll'>
      <ul :style="{left: ulLeft + 'px'}">
        <li v-for="item,index in conBtnData" @click="jumpPage('/details', 'Details', item.id)">
          <a>
            <p :style="{background: 'url(' + item.img + ') center no-repeat', backgroundSize: '100%'}"
            @mouseenter="imgEnter" @mouseleave="imgLeave"></p>
            <span>{{item.title}}</span>
            <span><i>￥&nbsp</i>{{item.price}}<em>&nbsp起</em></span>
            <span v-if="item.id == 1">新品</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ConBtn",
        data(){
          return{
            ulLeft: 0,
            long: 0,
          }
        },
        props:{
          conBtnData: {
            type: Array,   //属性的类型
            required: false,  // true 必须传 false 不是必须传递的
          }
        },
        methods: {
          //跳转页面
          jumpPage(path, name, id){
            if(name){
              this.$router.push({path: path + '/:id', name: name, params:{id: id}})
              this.$router.go(0)
            }
          },
          //左右滚动
          scrollLeft(){
            if(this.ulLeft < 0){
              this.ulLeft += 1245;
            }
          },
          scrollRight(){
            if(this.ulLeft > this.long){
              this.ulLeft -= 1245;
            }
          },
          imgEnter(ev){
            ev.currentTarget.style.backgroundSize = '110%'
          },
          imgLeave(ev){
            ev.currentTarget.style.backgroundSize = '100%'
          }
        },
        mounted(){
          this.long = - Math.ceil(this.conBtnData.length / 5 - 1) * 1245;

        },

    }
</script>

<style scoped lang="scss">
  #con_btn{
    width: 1240px;
    margin: 0 auto;
    section{
      margin-top: 60px;
      margin-bottom: 14px;
      height: 36px;
      p{
        float: left;
        font-size: 24px;
      }
      div{
        float: right;
        span{
          display: inline-block;
          width: 22px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border: 2px solid #00C3F5;
          cursor: pointer;
          font-size: 16px;
          color: #00C3F5;
        }
        .active{
          border: 1px solid #eee;
          color: #eee;
        }
      }
    }
    #scroll{
      height: 338px;
      width: 1245px;
      overflow: hidden;
      position: relative;
      ul{
        height: 338px;
        background: #fff;
        position: absolute;
        transition: 0.8s;
        li{
          width: 245px;
          height: 338px;
          margin-right: 5px;
          float: left;
          display: block;
          position: relative;
          a{
            width: 225px;
            padding: 36px 10px 5px;
            display: block;
            text-align: center;
            p{
              height: 180px;
              width: 180px;
              margin-bottom: 36px;
              display: inline-block;
              transition: 0.5s;
            }
            span:nth-of-type(1){
              font-size: 14px;
              color: #555757;
              display: block;
              text-align: center;
            }
            span:nth-of-type(2){
              margin-top: 10px;
              font-size: 16px;
              color: #e02b41;
              display: block;
              em, i{
                font-size: 12px;
              }
            }
            span:nth-of-type(3){
              position: absolute;
              top: 28px;
              left: 168px;
              height: 40px;
              width: 40px;
              border-radius: 50%;
              color: #fff;
              font-size: 12px;
              line-height: 40px;
              text-align: center;
              background-color: #f0415f;
            }
          }
        }
        li:nth-of-type(5), li:nth-of-type(10), li:nth-of-type(15){
          margin: 0;
        }
      }
    }
  }
</style>
