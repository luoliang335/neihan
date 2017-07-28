function markClick(event, attr) {
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
            // lock = true;
            // dian属性值设置为真
            $(event.currentTarget).parents('ul').attr('dian', 'true');
            // 判断当点击时候传送的参数 并且把参数保存到bianl
            if (attr == 'zan-on') {
                // lock = false;
                $(event.currentTarget).parents('ul').attr('bianl', '您已顶过');
                $(event.currentTarget).find('img').attr({ 'src': '../static/img/' + attr + '.png' });
                $(event.currentTarget).find('span').html(Number($(event.currentTarget).find('span').html()) + 1);
            } else if (attr == 'qie-on') {
                $(event.currentTarget).parents('ul').attr('bianl', '您已踩过');
                $(event.currentTarget).find('img').attr({ 'src': '../static/img/' + attr + '.png' });
                $(event.currentTarget).find('span').html(Number($(event.currentTarget).find('span').html()) + 1);
            }
        }