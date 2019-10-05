<template>
    <div class="index-view">
      <div class="view-row">
        <div class="view-left">
          <div class="view-img" @click="goDetail(1)">
            <img :src="url" alt="">
          </div>
        </div>
        <div class="view-right">
          <div class="view-img" @click="goDetail(2)">
            <img :src="url1" alt="">
          </div>
        </div>
      </div>
      <div class="view-btn">
        <div class="btn-cont">
          <button class="btn1" @click="prev">
            <span>上一帧</span>
          </button>
          <button class="btn2" @click="next">
            <span>下一帧</span>
          </button>
        </div>
      </div>
        <div class="view-dia" v-if="imgShow">
          <div class="view-close" @click="imgClose">
            <img src="../assets/close.jpg" alt="">
          </div>
          <div class="dia-img">
            <img :src="diaImg" alt="">
          </div>
        </div>
    </div>
</template>

<script>
import big1 from '../assets/img-big/18.png'
import big2 from '../assets/img-big/19.png'
import big3 from '../assets/img-big/20.png'
import big4 from '../assets/img-big/21.png'
import big5 from '../assets/img-big/22.png'
import big6 from '../assets/img-big/23.png'
import big7 from '../assets/img-big/24.png'
import big8 from '../assets/img-big/25.png'
import big9 from '../assets/img-big/26.png'
import small1 from '../assets/img-small/18.png'
import small2 from '../assets/img-small/19.png'
import small3 from '../assets/img-small/20.png'
import small4 from '../assets/img-small/21.png'
import small5 from '../assets/img-small/22.png'
import small6 from '../assets/img-small/23.png'
import small7 from '../assets/img-small/24.png'
import small8 from '../assets/img-small/25.png'
import small9 from '../assets/img-small/26.png'
  export default {
    name: 'landing-page',
    data() {
      return {
        url: big1,
        url1: small1,
        imgShow: false,
        diaImg: '',
        bigList: [big1,big2,big3,big4,big5,big6,big7,big8,big9],
        smallList: [small1,small2,small3,small4,small5,small6,small7,small8,small9],
        num: 0
      }
    },
    methods: {
      goDetail (num) {
        if (num == 1) {
          this.diaImg = this.url
        } else if (num == 2) {
          this.diaImg = this.url1
        }
        this.imgShow = true
      },
      imgClose () {
        this.imgShow = false
      },
      prev () {
        if (this.num > 0) {
          this.num --
        } else {
          this.num = this.bigList.length - 1
        }
        this.url = this.bigList[this.num]
        this.url1 = this.smallList[this.num]
      },
      next () {
        // this.num ++
        if (this.num < this.bigList.length - 1) {
          this.num ++
        } else {
          this.num = 0
        }
        this.url = this.bigList[this.num]
        this.url1 = this.smallList[this.num]
        // this.$axios.HttpPost(this.PublicAddress.accessDelete.url,
        // {
        //   idcard: "demo-USERID",
        //   page: 0,
        //   size: 0
        // })
        // .then(data=>{
        //   console.log(data, 'data')
        // });
      }
    }
  }
</script>

<style lang="scss" scoped>
.index-view {
    width: 100%;
    // height: 1000px;
    // border-bottom: 1px solid purple;
    .grid-content {
        display: flex;
        justify-content: center;
    }
    .view-row {
      display: flex;
      .view-left,.view-right {
        width: 50%;
        display: flex;
        justify-content: center;
        .view-img {
          width: 448px;
          height: 448px;
          transition: 0.3s;
          &:hover {
            transform: scale(0.96);
            transition: 0.3s;
            
          }
          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
        }
      }
    }
    .view-dia {
      width: 100%;
      height: 100%;
      z-index: 9999;
      background: dimgray;
      // opacity: 0.2;
      position: absolute;
      left: 0;
      top: 0;
      .dia-img {
        height: 100%;
        display: flex;
        justify-content: center;
        img {
          height: 100%;
          cursor: pointer;
        }
      }
      .view-close {
        position: absolute;
        right: 30px;
        top: 30px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .view-btn {
      width: 100%;
      height: 60px;
      margin-top: 35px;
      display: flex;
      justify-content: flex-end;
      .btn-cont {
        width: 50%;
        text-align: center;
        button {
          background-color: #409eff;
          border-color: #409eff;
          color: #fff;
          border: none;
          transition: 0.1s;
          cursor: pointer;
          outline: none;
          // width: 100px;
          // height: 40px;
          padding: 12px 33px;
          border-radius: 4px;
          &:hover {
            background-color: #409eff;
            opacity: 0.8;
          }
          &:active {
            opacity: 1;
          }
          &.btn1 {
            margin-right: 20px;
          }
          span {
            font-weight: 500;
            font-size: 14px;
          }
        }
      }
    }
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>