layui.define('form', function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
var $ = layui.jquery;
var myObj = {
    showCategory: function(data, count,ele){
        $(data).each(function (i, n) {
            // console.log(n);
            var t = "";
            for (var j = 0; j < count; ++j) {
                t += "   ";
            }
            if (n.length > 0) {
                $(ele).append("<option value='" + n.id + "'>" + t + n.categoryName + "</option>");
                showCategory(n.children, count + 1, ele)
            } else {
                $(ele).append("<option value='" + n.id + "'>" + t + n.categoryName + "</option>");
            }
        });
    },
    send_req: function(purl,jsonparam,succfun,pasync){
        // var url = 'http://192.168.139.101:88/tp5/public/index.php/' + purl;
        var url = 'https://wx.sdkndsm.com/qishen/tp5/public/index.php/' + purl;
        // var url = 'http://rvz0dpf0nr.52http.net/public/index.php/' + purl;
        if(!pasync){  pasync = false; }
            $.ajax({
                    url:url,
                    type:'POST',
                    dataType:'JSON',
                    async:pasync,
                    data:jsonparam,
                    success:function(data){
                        if(data.data && data.code===0){
                             succfun(data);   
                             return;
                        } 

                        if(data.success == true){
                            if(data.obj){
                                succfun(data.obj);
                            }else{
                                succfun(data)
                            }
                        }else{
                            layer.msg(data.msg);
                            layer.closeAll('loading');
                        }
                    },
                    error:function(XMLHttpRequest, textStatus, errorThrown){
                    console.log("ajax错误类型："+textStatus);
                    console.log(errorThrown);
        //     alert(XMLHttpRequest.status);
            // alert(XMLHttpRequest.readyState);
        //     alert(textStatus);
                    }
        });
    }
};
  
  //输出test接口
  exports('selectOption', myObj);
});  


    // function getDataList(obj) {
    //     // 请求
    //     $.ajax({
    //         type: obj.type,
    //         url: obj.url,
    //         success: function(response){
    //             obj.callback(response);
    //         }
    //     })
    // }


    // function showCategory(data, count,ele) {
    //     $(data).each(function (i, n) {
    //         // console.log(n);
    //         var t = "";
    //         for (var j = 0; j < count; ++j) {
    //             t += "   ";
    //         }
    //         if (n.children.length > 0) {
    //             $(ele).append("<option value='" + n.id + "'>" + t + n.categoryName + "</option>");
    //             showCategory(n.children, count + 1, ele)
    //         } else {
    //             $(ele).append("<option value='" + n.id + "'>" + t + n.categoryName + "</option>");
    //         }
    //     });
    //     form.render('select');
    // }
    // $.get("/cd/tool/category/tree.afca", {}, function (data) {
    //     showCategory(data.data, 0);
    //     form.render('select');
    // }, "json");

