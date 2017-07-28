<template>
    <div>
        <toprefresh></toprefresh>
        <!-- 绑定触摸事件 -->
        <div @touchstart="_touchStart" @touchmove="_touchMove" @touchend="_touchEnd" class="content">
            <!-- 父组件向子组件传参 -->
            <fadetip :message="number"></fadetip>
            <!-- 遍历数据 -->
            <li class="content_once" v-for="(item,index) in data " :key='item.id' ref="s-s">
                <div class="header">
                    <img :src="data[index].user.avatar_url"></img>
                    <span>{{data[index].user.name}}</span>
                </div>
                <p>{{data[index].text}}</p>
                <div class="neihan_mark">
                    <a>{{data[index].category_name}}</a>
                </div>
                <div class="footer">
                    <ul bianl="" dian="false">
                        <li>
                            <a @click="markClick($event,'zan-on')">
                                <img class="img1" src="../assets/img/zan.png" />
                                <span>{{data[index].digg_count}}</span>
                            </a>
                        </li>
                        <li>
                            <a @click="markClick($event,'qie-on')">
                                <img src="../assets/img/qie.png" />
                                <span>{{data[index].bury_count}}</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="../assets/img/comment.png" />
                                <span>{{data[index].comment_count}}</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="../assets/img/transmit.png" />
                                <span>{{data[index].share_count}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <shade :text="msg"></shade>
            <!-- 子组件调用父组件的方法 -->
            <refresh @refreshlist="getdata('refresh')"></refresh>
    
        </div>
    </div>
</template>

<script>
import '@/assets/css/template.css'
import '@/assets/js/jquery.js'
import shade from '@/components/shade'
import refresh from '@/components/refresh'
import topRefresh from '@/components/topRefresh'
import fadetip from '@/components/fadetip'
import '@/assets/js/clickShade.js'


export default {
    name: 'Home',
    components: {
        shade: shade,
        refresh: refresh,
        toprefresh: topRefresh,
        fadetip: fadetip,
    },
    data() {
        return {
            data: [],
            msg: '',
            number: '',

        }
    },

    created() {
        this.getdata('refresh')
        this.scrolldata()
        this.throttle()
    },


    methods: {
        /*---------------获取后台数据----------------*/
        getdata(parameter) {

            var self = this;
            var arr=[];
            $.ajax({
                type: "get",
                dataType: "jsonp",
                url: "http://is.snssdk.com/neihan/stream/mix/v1/?mpic=1&webp=1&essence=1&content_type=-102&message_cursor=-1&am_longitude=110&am_latitude=120&am_city=%E5%8C%97%E4%BA%AC%E5%B8%82&am_loc_time=1489226058493&count=30&min_time=1489205901&screen_width=1450&do00le_col_mode=0&iid=3216590132&device_id=32613520945&ac=wifi&channel=360&aid=7&app_name=joke_essay&version_code=612&version_name=6.1.2&device_platform=android&ssmix=a&device_type=sansung&device_brand=xiaomi&os_api=28&os_version=6.10.1&uuid=326135942187625&openudid=3dg6s95rhg2a3dg5&manifest_version_code=612&resolution=1450*2800&dpi=620&update_version_code=6120",
                data: {

                },
                //成功的时候调用
                success: function (data) {
                    // 判断数据是否为空
                    if (data.data!= undefined) {
                        if (data.data.data.length != 0) {    
                            self.number = data.data.tip;
                            var s = data.data.data.length;
                            var k = 0;
                            for (var i = 0; i < s; i++) {
                                if (data.data.data[i].group) {
                                    arr[k] = data.data.data[i].group;
                                    k++;
                                }
                            }
                            // 判断传递过来的参数 来进行数据刷新 数据追加到最前 数据追加到末尾处理
                            if (parameter=='refresh') {
                                self.data = arr;
                                // console.log("更新数据")

                            } else if (parameter==top) {
                                self.data = arr.concat(self.data);
                                // console.log("往上追加数据")
 
                            } else {
                                self.data = self.data.concat(arr);
                                //  console.log("往下追加数据")

                            }
                     
                        }else{
                            return;
                        }
 
                    }else{
                        return;
                    }
                },

            })
        },
        /*-------------无限滚动函数---------------*/
        scrolldata() {
            let self = this;
            $(window).scroll(function () {
                if ($(document).scrollTop() == $(document).height() - $(window).height()) {
                      self.throttle(self.getdata(),1000)
        
                }
            })
        },
        /*---------------节流函数-----------------------*/
         throttle(method,delay){
            var timer=null;
            return function(){
                var context=this, args=arguments;
                clearTimeout(timer);
                timer=setTimeout(function(){
                    method.apply(context,args);
                },delay);
            }

        },
        /*----------------开始触摸-----------------*/
        _touchStart: function (ev) {
            //    判断滚动条的距离
            // if ($(document).scrollTop() != 0) {
            //         return;
            //     }
                ev = ev || event;
                if (ev.touches.length == 1) {
                    // 手指按下的时候记录按下的位置Y值
                    this.startY = ev.touches[0].clientY;

                }
            
        },
        /*----------------触摸滑动-----------------*/
        _touchMove: function (ev) {
            
            ev = ev || event;
            if (ev.touches.length == 1) {
                // 滑动过程中的实时位置
                this.moveY = ev.touches[0].clientY
                // 滑动过程中实时计算滑动距离
                this.disY = this.startY - this.moveY;
                // 如果是向下滑动或者只是点击执行
                if (this.disY < 0) {
                    var Iheight = $(event.currentTarget).parents("div").find(".parents").height();
                    $(event.currentTarget).parents("div").find(".move").css({ "margin-top": -this.disY > Iheight ? Iheight : -this.disY, "transform": "rotate(720deg)" })
                    // 如果是向下滑动则返回
                } else if (this.disY >= 0) {
                    return;
                }
            }

        },
        /*-----------------触摸停止------------------*/
        _touchEnd: function (ev) {
            // 判断下拉元素滚动的距离
            if (parseInt($(event.currentTarget).parents("div").find(".move").css("margin-top")) > 60) {
                          // 判断开始触摸到结束触摸的距离，元素复原
               if (event.changedTouches.length == 1) {
                let endY = event.changedTouches[0].clientY;
                this.disY = endY - this.startY;
                if (this.disY > 0) {
                                    // 请求数据
                this.getdata(top);
                // 显示获取过来的条目
                $(".fadetip").css("display", "block");
                // 2S后隐藏
                setTimeout(function () {
                    $(".fadetip").css("display", "none");
                }, 2000)
                   
                }
            }

            } $(event.currentTarget).parents("div").find(".move").css({ "margin-top": 0, "transform": "rotate(0deg)" })
 
        },
        /*-----------------点赞标记---------------*/
        markClick:function(event, attr) {
            let lock = $(event.currentTarget).parents('ul').attr('dian');
            // 设置默认事件 默认false
            if (lock == 'false') {
                this.msg = '操作成功';
                $(".shade").css("display", "block");
                setTimeout(function () {
                    $(".shade").css("display", "none");
                }, 1000)
            }
            // 当为真时执行 默认不执行
            else if (lock == 'true') {
                $(".shade").find('span').html($(event.currentTarget).parents('ul:eq(0)').attr('bianl'))
                this.msg = $(event.currentTarget).parents('ul').attr('bianl');
                $(".shade").css("display", "block");
                setTimeout(function () {
                    $(".shade").css("display", "none");
                }, 2000)
                return;
            };
            // dian属性值设置为真
            $(event.currentTarget).parents('ul').attr('dian', 'true');
            // 判断当点击时候传送的参数 并且把参数保存到bianl
            if (attr == 'zan-on') {
                $(event.currentTarget).parents('ul').attr('bianl', '您已顶过');
                $(event.currentTarget).find('img').attr({ 'src': '../static/img/' + attr + '.png' });
                $(event.currentTarget).find('span').html(Number($(event.currentTarget).find('span').html()) + 1);
            } else if (attr == 'qie-on') {
                $(event.currentTarget).parents('ul').attr('bianl', '您已踩过');
                $(event.currentTarget).find('img').attr({ 'src': '../static/img/' + attr + '.png' });
                $(event.currentTarget).find('span').html(Number($(event.currentTarget).find('span').html()) + 1);
            }
        },
    }
}
</script>
<style scoped>

</style>