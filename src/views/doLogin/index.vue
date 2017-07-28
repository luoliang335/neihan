<template>
    <div class="doLogin">
        <div class="isMe">
            <!-- <router-link exact to="/" tag="a" ></router-link> -->
            <a @click="routerBack"></a>
            <span>快速登录</span>
        </div>
         <div class="userInfo">
             <div class="username"><input type="text" id="form_password" placeholder="用户名/手机号/邮箱" /></div>
             <div class="password"><input type="password" id="form_password" placeholder="密码" /></div>
             <div class="login_button"><input type="button" id="form_password" value="登录" /></div>
        </div> 
        <div class="resign">
            <router-link to="/home/sign">找回密码</router-link>
            <router-link to="/home/resign">注册账号</router-link>
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


.isMe {
    width: 100%;
    height: 3.345rem;
    background: #222;
    text-align: center;
    line-height: 3.345rem;
    color: #fff;
    font-size: 1.25rem;
    margin-bottom:2rem;
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
.userInfo{
    
    height:10rem;
    margin:0 auto;
    text-align: center;
    width:90%;

}
.username{
   border: 1px solid #ccc;
   border-bottom:0; 
}
.password{
   display:block;
   border: 1px solid #ccc;
}

.username,.password{
    width:100%;
    height:3rem;
    background: #fff;
    line-height:3rem;
    
}
.username input,.password input{
    width:100%;
    line-height:2rem;
    font-size:1rem;
    text-indent:1rem;
}
.login_button{
    width:100%;
    margin-top:1rem;
    

}
.login_button input{
     width:100% ;
     height:3rem;
     background: #ff819f;
     color:#fff;
     border-radius:.3rem;
     font-size:1rem;
}
.resign{
    margin-top:1rem;
    width:100%;
    height:2rem;
    line-height:2rem;
    text-align:center;
}


</style>

