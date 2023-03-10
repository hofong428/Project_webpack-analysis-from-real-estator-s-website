!function(e) {
    var t = {};
    //  所有的模块 都是从这个加载器 执行的  分发器
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
   n('xialuo')  // 对象 根据KEY 找模块
}({

        0: function () {
            console.log('我是模块1  负责加密')
        },

        'xialuo': function () {
            console.log('我是模块2  负责解密')
        },

        9527: function () {
            console.log('我是模块3  负责爬数据')
        }
    }
);

