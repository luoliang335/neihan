//   底部无限加载    
function scrolldata() {
            // let self = this;
            $(window).scroll(function () {
                if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
                    this.getdata();
                }
            })
        }