<template>
    <div class="login">
        <div class="isMe">
            <!-- <router-link exact to="/" tag="a" ></router-link> -->
            <a @click="routerBack"></a>
            <span>我的</span>
        </div>
        <div class="userIcon">
            <a></a>
            <router-link to="/home/login" tag="span">立即登录</router-link>
        </div>
        <div class="listContent">
            <ul>
                <li>
                    <a>
                        <span></span>段友圈<i></i></a>
                </li>
                <li>
                    <a>
                        <span></span>投稿<i></i></a>
                </li>
                <li>
                    <a>
                        <span></span>评论<i></i></a>
                </li>
                <li>
                    <a>
                        <span></span>收藏<i></i></a>
                </li>
                <li>
                    <a>
                        <span></span>意见反馈<i></i></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "denglu",
    methods:{
         routerBack(){
        this.$router.back(-1);
      }
    }
}
</script>
<style scoped>
.login {}

.isMe {
    width: 100%;
    height: 3.345rem;
    background: #222;
    text-align: center;
    line-height: 3.345rem;
    color: #fff;
    font-size: 1.25rem;
}
.isMe a{
    width:1.5rem;
    height:1.5rem;
    float:left;
    margin-top:1rem;
    margin-left:1rem;
    opacity: .6;
    background:url("/static/img/return.png")no-repeat center;
}
.isMe span{
 margin-left:-3rem; 
}
.userIcon {
    width: 100%;
    height: 10rem;
}

.userIcon a {
    width: 5rem;
    height: 5rem;
    display: block;
    border-radius: 50%;  
    margin: 0 auto;
    margin-top: 1.345rem;
    background:url("/static/img/user.png")no-repeat center;

}

.userIcon span {
    width: 6rem;
    height: 2.5rem;
    display: block;
    background: #ff819f;
    margin: 0 auto;
    margin-top: 1.345rem;
    line-height: 2.5rem;
    text-align: center;
    color: #fff;
    border-radius: .315rem;
}

.listContent ul {
    width: 100%;
    height: 10rem;
}

.listContent ul li {
    height: 3.456rem;
    width: 100%;
    display: block;
    margin: 0 auto;
    text-align: left;
    border-top: 1px solid #f0f0f0;
    line-height: 3.456rem;
    font-size: 1.125rem;
    overflow: hidden;
}

.listContent ul li a {
    width: 100%;
    height: 100%;
}

.listContent ul li span {
    background-position: 50%;
    background-size:60%;
    background-repeat: no-repeat;
    width: 2rem;
    height: 2rem;
    border-radius: .345rem;
    float: left;
    margin-top: .657rem;
    margin-left: 1rem;
    margin-right: 1rem;
}

.listContent ul li:nth-child(1) span {
    background-image: url("/static/img/duanyou.png"); 
    background-color: #ff6753; 
    
}

.listContent ul li:nth-child(2) span {
    background-image: url("/static/img/tougao.png");
    background-color:#48C0ED;
}

.listContent ul li:nth-child(3) span {
    background-image: url("/static/img/pinglun.png");
    background-color:#17D06E;
}

.listContent ul li:nth-child(4) span {
    background-image: url("/static/img/shoucang.png");
    background-color:#FF993F;
}

.listContent ul li:nth-child(5) span {
    background-image: url("/static/img/yijian.png");
    background-color:#7B9AFF;
}
.listContent ul li i{
    width:1rem;
    height:1rem;
    float:right;
    margin-top:1.235rem;
    margin-right:1rem;
    background: url("/static/img/next_right.png")no-repeat center
}
</style>

