layui.config({
    base: 'assets/module/'
}).extend({
    formSelects: 'formSelects/formSelects-v4',
    treetable: 'treetable-lay/treetable',
    dropdown: 'dropdown/dropdown',
    notice: 'notice/notice',
    step: 'step-lay/step',
    dtree: 'dtree/dtree',
    citypicker: 'city-picker/city-picker',
    tableSelect: 'tableSelect/tableSelect',
    serverUrl: 'base_serverUrl',
    selectOption: 'selectOption',
    treetable: 'treetable-lay/treetable'
}).use(['layer', 'element', 'config', 'index', 'admin', 'laytpl', 'serverUrl', 'selectOption'], function () {
    var $ = layui.jquery;
    var layer = layui.layer;
    var element = layui.element;
    var config = layui.config;
    var index = layui.index;
    var admin = layui.admin;
    var laytpl = layui.laytpl;
    var serverUrl = layui.serverUrl;
    var selectOption = layui.selectOption;
    $('#person').click('on',function(){
        $('.layui-layer-title').addClass('center')
        if(config.getToken().sex == '男'){
            sexIcon = '#icon-nan'
        }else{
            sexIcon = '#icon-nv'
            
        }
        layer.open({
            type: 1,
            area: '450px',
            title: ['个人中心', 'padding: 0;text-align: center;color:#357670;font-size:24px;']
            ,shade: [0.8, '#fff']
            ,offset: 'auto' //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
            // ,id: 'layerDemo'+type //防止重复弹出
            ,content: '<div style=" background: #357670;">'+ '<div class="lianBox qishenColor"><div class="center"><svg class="icon pointer" style="width: 53px; height:51px; color: #fff;margin-top: 52px;vertical-align: 0;" aria-hidden="true"><use xlink:href="' + sexIcon + '"></use></svg><div class="person_css"><span>'+ config.getToken().true_name + '</span></div><div class="person_css"><svg class="icon pointer" id="guanbi" style="width: 1em; height:1em; color: #0d7871;" aria-hidden="true"><use xlink:href="#icon-shouji"></use></svg><span class="ml10 mb30">'+ config.getToken().phone + '</span></div></div></div>' +'</div>'
            // ,btn: '关闭全部'
            ,btnAlign: 'c' //按钮居中
            ,success: function(layero, index){
                $('.layui-layer-title').css({
                    'height': '94px',
                    'line-height': '94px',
                })
                $('.layui-layer-setwin').css({
                    'top': '32px',
                    'right': '23px'
                })
                $('.layui-layer-page .layui-layer-content').css({
                    // 'height': '318px',
                    'background': '#0d7871'
                })
                $('.layui-layer-setwin a').css('background', 'none');
                $('.layui-layer-setwin a').html('<svg class="icon pointer" id="guanbi" style="width: 31px; height:31px; color: #0d7871;" aria-hidden="true"><use xlink:href="#icon-guanbi-"></use></svg>')
            }
            ,yes: function(){
                layer.closeAll();
            }
        });
        // selectOption.send_req('qisheng/User/detail.html', {id: config.getToken().user_id}, function(){
        //     layer.closeAll('loading');
        //     layer.closeAll();
        // })
    })
    // 帮助按钮
    $('#help').click('on',function(){
        layer.open({
            type: 1,
            area: '450px'
            ,shade: [0.8, '#fff']
            ,title: ['帮助', 'padding: 0;text-align: center;color:#357670;font-size:24px;']
            ,offset: 'auto' //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
            // ,id: 'layerDemo'+type //防止重复弹出
            ,content: '<div style="padding: 20px 20px; background: #357670;">'+ '<div class="lianBox qishenColor"><div class="center fs7"><div class="middle" style="background: #fff; paddding: 20px; width:154px;height:154px; border-radius:50%;"><img src="./assets/images/scode.jpg" style="width: 80%;border-radius: 50%;margin: 10% 0 0 0;" alt=""></div><div class="person_css"><svg class="icon pointer" style="width:1em; height:1em; color: #0d7871;" aria-hidden="true"><use xlink:href="#icon-dianhua"></use></svg><span class="ml10 mb30">0351-2729990</span></div><div class="person_css"><svg class="icon pointer" style="width: 1em; height:1em; color: #0d7871;" aria-hidden="true"><use xlink:href="#icon-youxiang"></use></svg><span class="ml10 mb30">sxqishen@163.com</span></div></div></div>' +'</div>'
            // ,content: '<div style="padding: 20px 100px;">'+ '<div class="lianBox"><div class="contact"><p class="tel"></p><p class="wechat">18535158021</p><p class="mail">sxqishen@163.com</p></div></div>' +'</div>'
            // ,btn: '关闭全部'
            ,btnAlign: 'c' //按钮居中
            ,success: function(layero, index){
                $('.layui-layer-setwin a').css('background', 'none');
                $('.layui-layer-title').css({
                    'height': '94px',
                    'line-height': '94px',
                })
                $('.layui-layer-page .layui-layer-content').css({
                    'height': 'auto',
                    // 'background': '#0d7871'
                })
                $('.layui-layer-setwin').css({
                    'top': '32px',
                    'right': '32px'
                })
                $('.layui-layer-setwin a').html('<svg class="icon pointer" id="guanbi" style="width: 31px; height:31px; color: #0d7871;" aria-hidden="true"><use xlink:href="#icon-guanbi-"></use></svg>')
            }
            ,yes: function(){
            layer.closeAll();
            }
        });
        // selectOption.send_req('qisheng/User/detail.html', {id: config.getToken().user_id}, function(){
        //     layer.closeAll('loading');
        //     layer.closeAll();
        // })
    })

    // 检查是否登录
 if (!config.getToken()) {
     return location.replace('login.html');
 }

 // 获取用户信息
//  layer.load(2);
//  admin.req('user/info', {}, function (res) {
//      admin.removeLoading();  // 移除页面加载动画
//      layer.closeAll('loading');
//      if (200 == res.code) {
//          config.putUser(res.user);
//          $('#huName').text(res.user.nickName);
//      } else {
//          layer.msg('获取用户失败', {icon: 2});
//      }
//  }, 'GET');

admin.removeLoading();
// layer.closeAll('loading');
    // 加载侧边栏
//  admin.req('user/menu', {}, function (res) {
//  	console.log(JSON.stringify(res.data));
//      laytpl(sideNav.innerHTML).render(res.data, function (html) {
//          $('.layui-layout-admin .layui-side .layui-nav').html(html);
//          element.render('nav');
//      });
//      index.regRouter(res.data);  // 注册路由
//      index.loadHome({  // 加载主页
//          url: '#/welcome',
//          name: '<i class="layui-icon layui-icon-home"></i>'
//      });
//  }, 'get');
//  


   //菜单功能设置
    var menuJson 
    // = [
    //         {
    //             "name": "售电管理",
    //             "icon": "#icon-guanli",
    //             "url": "javascript:;",
    //             "subMenus": [
    //                 {
    //                     "subMenus": [],
    //                     "name": "采集点管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/sdManage/cjdgl"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "行业管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/sdManage/hygl"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "企业管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/sdManage/qygl"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "企业售电管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/sdManage/qysdgl"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "企业用电预测",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/sdManage/qysdyc"
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "电能管理",
    //             "icon": "layui-icon layui-icon-chart-screen",
    //             "url": "javascript:;",
    //             "subMenus": [
    //                 {
    //                     "subMenus": [],
    //                     "name": "报警管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/bjManage/bjgl"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "预警管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/bjManage/yjgl"
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "统计分析",
    //             "icon": "#icon-fenxi1",
    //             "url": "javascript:;",
    //             "subMenus": [
    //                 {
    //                     "subMenus": [],
    //                     "name": "报警分析",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/tjfx/bjfx"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "控电情况分析",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/tjfx/kdqkfx"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "企业用电分析",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/tjfx/qyydfx"
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "电能设备数据分析",
    //             "icon": "#icon-fenxi",
    //             "url": "#/deviceData/deviceData"
    //         },
    //         {
    //             "name": "系统管理",
    //             "icon": "#icon-guanli2",
    //             "url": "javascript:;",
    //             "subMenus": [

    //                 // {
    //                 //     "subMenus": [],
    //                 //     "name": "操作日志",
    //                 //     "icon": "layui-icon layui-icon-flag",
    //                 //     "url": "#/system/role"
    //                 // },
    //                 {
    //                     "subMenus": [],
    //                     "name": "平台用户管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/system/user_platform"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "企业用户管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/system/user_industry"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "角色管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/system/role"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "菜单管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/system/menu"
    //                 },
    //                 {
    //                     "subMenus": [],
    //                     "name": "日志管理",
    //                     "icon": "layui-icon layui-icon-flag",
    //                     "url": "#/system/rizhi"
    //                 }
    //             ]
    //         }
    //     ];
    selectOption.send_req('qisheng/User/user_menu.html', {user_id: config.getToken().user_id}, function(data){
        menuJson = data
        layer.closeAll('loading');
        layer.closeAll();
        menuJson.some( (ele) => {
            if(ele.name == '系统管理'){
                if(ele.subMenus.url == '#/system/user_platform'){
                    selectOption.send_req('qisheng/Main/daiban_user.html', {}, function(data){
                        if(data.is_show == 0){
                            
                        }else{
                            $('#daiban').removeClass('hidden').addClass('show')
                            $('.layui-badge-dot').removeClass('hidden').addClass('show')
                        }
                    })
                }
            }
        })
    })
    // if(config.getToken()){

    // }else{
        // selectOption.send_req('qisheng/Main/daiban_user.html', {}, function(data){
        //     if(data.is_show == 0){

        //     }else{
        //         $('#daiban').removeClass('hidden').addClass('show')
        //         $('.layui-badge-dot').removeClass('hidden').addClass('show')4
        //     }
        // })
    // }
    $('#daiban').click(function(){
        $('.layui-badge-dot').removeClass('show').addClass('hidden')
    })
    laytpl(sideNav.innerHTML).render(menuJson, function (html) {
        $('.layui-layout-admin .layui-side .layui-nav').html(html);
        element.render('nav');
    });
    index.regRouter(menuJson); // 注册路由
    index.loadHome({ // 加载主页
        url: '#/welcome',
        name: '<i class="layui-icon layui-icon-home"></i>'
    });
    $('#shousuo').css({top: ($('.layui-side').height() -50) / 2 - 58})
    $('#shousuo i').click('on',function(){
        if($('#shousuo i')[0].className == 'layui-icon layui-icon-left'){
            $('#shousuo i').removeClass('layui-icon-left').addClass('layui-icon-right')
        }else{
            $('#shousuo i').removeClass('layui-icon-right').addClass('layui-icon-left')
        }
    })

});
