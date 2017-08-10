<template>
  <div id="app">
    <header class="g-header">
        <div class="g-header-lf">
            <i class="iconfont icon-yunduo"></i>
        </div>
        <div class="g-header-ct">
            <div class="g-header-search">
                <span class="g-search-lf">
                    <i class="iconfont icon-sousuo"></i>
                </span>
                <span class="g-search-rt">全球好奶，折至1折起。。。</span>
            </div>
        </div>
        <div class="g-header-rt">
            <i class="iconfont icon-weixin"></i>
            <span>消息</span>
        </div>
    </header>
    <div class="g-wrapper">
      <router-view></router-view>
    </div>
    <footer class="g-footer">
        <div class="s-selected" @click="gotoNext()">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </div>
        <div @click="gotoNext('classify')">
            <i class="iconfont icon-fenlei"></i>
            <span>分类</span>
        </div>
        <div @click="gotoNext('shopping')">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
        </div>
        <div @click="gotoNext('my')">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    gotoNext(addr){
       if(addr!= undefined){
           this.$router.push(`/${addr}`);
       }else{
         this.$router.push(`/`);
       }
    }    
  },
  mouted(){

  }
}
</script>

<style lang='scss'>
  @import '~@/assets/iconfont/iconfont.css';
  #app{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    .g-header{
      height: 1.30rem;
      background: #ff7e02;
      display: flex;
      .g-header-lf{
          width: 1.42rem;
          height: 100%;
          i{
              color: white;
              font-size: 1.06rem;
          }
      }
      .g-header-ct{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-right: 0.27rem;
          .g-header-search{
              width: 100%;
              height: 0.8rem;
              background: white;
              color: #999999;
              border-radius: 2px;
              display: flex;
          }
          .g-search-lf, .g-search-rt{
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
          }
          .g-search-lf{
              width: 0.8rem;
              height: 100%;
              i{
                  font-size: 0.64rem;
              }
          }    
      }
      .g-header-rt{
          width: 1.2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          i{
              position: relative;
              font-size: 0.64rem;
              &:after{
                  content: '';
                  width: 0.2rem;
                  height: 0.2rem;
                  border: 1px solid white;
                  background: red;
                  display: block;
                  border-radius: 50%;
                  position: absolute;
                  right: 0;
                  top: 0;
              }
          }
      }
  }
    .g-wrapper{
      flex: 1;
      overflow: auto;
    }
    .g-footer{
        height: 1.28rem;
        box-sizing: border-box;
        border-top: 1px solid #eaeaea;
        display: flex;
        div{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            i{
                font-size: 20px;
            }
            &.s-selected{
                i, span{
                    color: #ff3b31;
                }
            }
        }
    }
  }
</style>
