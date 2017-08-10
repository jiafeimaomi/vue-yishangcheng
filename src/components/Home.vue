<template>
  <div class="g-content">
    <div class="g-banner"></div>
    <ul class="g-view">
        <li>
            <a class="g-link">
                <span class="icon-wrap">
                    <i class="iconfont icon-dianqi"></i>
                </span>
                <span class="v-title">家用电器</span>
            </a>
        </li>
        <li>
            <a class="g-link">
                <span class="icon-wrap">
                    <i class="iconfont icon-dianqi"></i>
                </span>
                <span class="v-title">家用电器</span>
            </a>
        </li>
        <li>
            <a class="g-link">
                <span class="icon-wrap">
                    <i class="iconfont icon-dianqi"></i>
                </span>
                <span class="v-title">家用电器</span>
            </a>
        </li>
        <li>
            <a class="g-link">
                <span class="icon-wrap">
                    <i class="iconfont icon-dianqi"></i>
                </span>
                <span class="v-title">家用电器</span>
            </a>
        </li>
        <li>
            <a class="g-link">
                <span class="icon-wrap">
                    <i class="iconfont icon-dianqi"></i>
                </span>
                <span class="v-title">家用电器</span>
            </a>
        </li>
        <li>
            <a class="g-link">
                <span class="icon-wrap">
                    <i class="iconfont icon-dianqi"></i>
                </span>
                <span class="v-title">家用电器</span>
            </a>
        </li>
        <li>
            <a class="g-link">
                <span class="icon-wrap">
                    <i class="iconfont icon-dianqi"></i>
                </span>
                <span class="v-title">家用电器</span>
            </a>
        </li>
        <li>
            <a class="g-link">
                <span class="icon-wrap">
                    <i class="iconfont icon-dianqi"></i>
                </span>
                <span class="v-title">家用电器</span>
            </a>
        </li>
    </ul>
    <div class="g-intro-wrap">
        <div class="g-intro">
            <p class="g-title-com">
                <span class="icon-wrap">
                    <i class="iconfont icon-huoyan"></i>
                </span>
                <span class="g-title">热门推荐</span>
                <span class="g-more">更多推荐<i class="iconfont icon-more"></i></span>
            </p>
            <ul class="g-intro-main">
                <li>
                    <a class="g-link">
                        <img src="~@/assets/imgs/intro.png" alt="">
                        <span class="g-intro-name">九阳紫砂电炖锅</span>
                        <span class="g-intro-price">￥188</span>
                    </a>
                </li>
                <li>
                    <a class="g-link">
                        <img src="~@/assets/imgs/intro.png" alt="">
                        <span class="g-intro-name">九阳紫砂电炖锅</span>
                        <span class="g-intro-price">￥188</span>
                    </a>
                </li>
                <li>
                    <a class="g-link">
                        <img src="~@/assets/imgs/intro.png" alt="">
                        <span class="g-intro-name">九阳紫砂电炖锅</span>
                        <span class="g-intro-price">￥188</span>
                    </a>
                </li>
                <li>
                    <a class="g-link">
                        <img src="~@/assets/imgs/intro.png" alt="">
                        <span class="g-intro-name">九阳紫砂电炖锅</span>
                        <span class="g-intro-price">￥188</span>
                    </a>
                </li>
            </ul>

        </div>
    </div>
    <div class="g-discount">
        <p class="g-title-com">
            <span class="icon-wrap">
                <i class="iconfont icon-huoyan"></i>
            </span>
            <span class="g-title">聚优惠</span>
            <span class="g-more">更多优惠<i class="iconfont icon-more"></i></span>
        </p>
        <ul class="g-discount-main">
            <li class="g-dis-lf">
                <p class="dis-lf-img">
                    <img src="~@/assets/imgs/dis-lf.png" alt="">
                </p>
                <div class="dis-lf-content">
                    <h2 class="dis-name">i5四核游戏笔记本</h2>
                    <p class="desc"> 1080P屏酷睿i5标压 </p>
                    <p class="price">
                        <span>￥4569</span>
                        <span class="oldprice">￥6088</span>
                    </p>
                </div>
            </li>
            <li class="g-dis-rt">
                <div class="dis-wrap">
                    <p class="dis-img">
                        <img src="~@/assets/imgs/dis.png" alt="">
                    </p>
                    <div class="dis-content">
                        <h2 class="dis-name">i5四核游戏笔记本</h2>
                        <p class="desc">1080P屏酷睿i5标压</p>
                        <p class="price">
                            <span>￥4569</span>
                            <span class="oldprice">￥6088</span>
                        </p>
                    </div>
                </div>
                <div class="dis-wrap">
                    <p class="dis-img">
                        <img src="~@/assets/imgs/dis.png" alt="">
                    </p>
                    <div class="dis-content">
                        <h2 class="dis-name">i5四核游戏笔记本</h2>
                        <p class="desc">
                            1080P屏酷睿i5标压
                        </p>
                        <p class="price">
                            <span>￥4569</span>
                            <span class="oldprice">￥6088</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    gotoNext(addr){
       if(addr!= undefined){
           this.$router.push(`/${addr}`);
       }
    }    
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
    @import '~@/assets/css/home.scss'
</style>
