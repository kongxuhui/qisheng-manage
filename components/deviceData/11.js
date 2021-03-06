
// myChart.setOption(option);

// function myEcharts11(id, text, dateData, dataArr, xdataArr){
//     // 基于准备好的dom，初始化echarts实例
//     var myChart = echarts.init(document.getElementById('main' + id));

//     option = {
//         title : {
//             text: text,
//             subtext: text + dateData
//         },
//         tooltip : {
//             trigger: 'axis'
//         },
//         legend: {
//             data: dataArr
//         },
//         toolbox: {
//             show : true,
//             feature : {
//                 dataView : {show: true, readOnly: false},
//                 magicType : {show: true, type: ['line', 'bar']},
//                 restore : {show: true},
//                 saveAsImage : {show: true}
//             }
//         },
//         calculable : true,
//         xAxis : [
//             {
//                 type : 'category',
//                 data : xdataArr
//             }
//         ],
//         yAxis : [
//             {
//                 type : 'value'
//             }
//         ],
//         dataZoom: [
//             {
//                 show: true,
//                 start: 94,
//                 end: 100
//             },
//             {
//                 type: 'inside',
//                 start: 94,
//                 end: 100
//             },
//             {
//                 show: false,
//                 yAxisIndex: 0,
//                 filterMode: 'empty',
//                 width: 30,
//                 height: '80%',
//                 showDataShadow: false,
//                 left: '93%'
//             }
//         ],
//         series : [
//             {
//                 name:'蒸发量',
//                 type:'bar',
//                 data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
//                 markPoint : {
//                     data : [
//                         {type : 'max', name: '最大值'},
//                         {type : 'min', name: '最小值'}
//                     ]
//                 },
//                 markLine : {
//                     data : [
//                         {type : 'average', name: '平均值'}
//                     ]
//                 }
//             },
//             {
//                 name:'降水量',
//                 type:'bar',
//                 data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
//                 markPoint : {
//                     data : [
//                         {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
//                         {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
//                     ]
//                 },
//                 markLine : {
//                     data : [
//                         {type : 'average', name : '平均值'}
//                     ]
//                 }
//             }
//         ]
//     };

//    // 使用刚指定的配置项和数据显示图表。
//    myChart.setOption(option);
// }

// //动态element

// <style>
// 		#roleAuthTable + .layui-table-view .layui-table tbody tr:hover {
// 			background-color: transparent;
// 		}
// 	</style>
// 	<div class="layui-fluid">
// 		<div class="layui-card">
// 			<div class="layui-card-body">
// 				<div class="layui-form toolbar">
// 						<div class="layui-row layui-form" id="selectionBox">
// 							<div class="layui-inline" style="cursor:pointer;" id="showList">
// 								<div id="up">显示列表👇</div>
// 								<div id="down" style="display: none;">收起列表👆</div>
// 							</div>
// 							<div class="layui-inline">
// 								<div style="border-right: 2px solid #009688;height: 40px;"  id="lineDiv"></div>
// 							</div>
// 							<div  class="layui-inline" >
// 								<label class="layui-form-label">筛选设置：</label>
// 								<div class="layui-input-inline">
// 									<select name="company" lay-verify="" lay-filter="company" id="company" lay-search="">
// 										<option value="">请选择企业</option>
// 									</select>
// 								</div>
// 							</div>
// 							<div class="layui-input-inline" id="deviceDiv">
// 								<select name="deviceId" lay-verify="" lay-search="" id="deviceId" lay-filter="deviceId">
// 									<option value="">请选择设备</option>
// 								</select>
// 							</div>
// 							<div class="layui-input-inline" id="dateDiv" >
// 								<input type="text" name="date" id="date" lay-verify="" placeholder="请选择日期" autocomplete="off" class="layui-input" style="width: 350px;">
// 							</div>
// 							<div class="layui-inline " id="searchBtn">
// 								<button type="button" class="layui-btn" lay-submit="" lay-filter="search" id="btn">搜索</button>
// 							</div>
// 							<div class="layui-inline " id="colSwitch" style="float: right;">
// 								<div class="layui-input-block">
// 									<input type="checkbox" name="col_double_open" checked="" lay-skin="switch" lay-filter="changeCol" lay-text="双向排列|单项排列">
// 								</div>
// 							</div>
// 						</div>
// 				</div>
// 			</div>
// 			<!-- 要弹出的CheckBox   START -->
// 			<div class="layui-col-md12 layui-col-xs12 layui-anim layui-anim-up" style="display: none;position: fixed;z-index: 10;top: 250px;" id="dataList">
// 					<div class="layui-card">
// 						<div class="layui-card-header">所有数据</div>
// 						<div class="layui-card-body">
// 							<div class="layui-row layui-form layui-col-space30">
// 								<div class="layui-col-sm2 layui-col-md-offset1">
// 									<label class="layui-form-label">电能数据：</label>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="ep" lay-skin="primary"
// 										 name="dataName" title="有功电能数据"></div>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="eq" lay-skin="primary"
// 										 name="dataName" title="无功电能数据"></div>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="es" lay-skin="primary"
// 										 name="dataName" title="视在电能数据"></div>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="eplj" lay-skin="primary"
// 										 name="dataName" title="累计电能数据"></div>
		
		
// 								</div>
// 								<div class="layui-col-sm2 ">
// 									<label class="layui-form-label">功率数据：</label>
		
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="p" lay-skin="primary"
// 										 name="dataName" title="有功功率数据"></div>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="q" lay-skin="primary"
// 										 data-type="功率数据" name="dataName" title="无功功率数据"></div>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="s" lay-skin="primary"
// 										 name="dataName" title="视在功率数据"></div>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="cos" lay-skin="primary"
// 										 name="dataName" title="功率因数数据" checked=""></div>
		
// 								</div>
// 								<div class="layui-col-sm2 ">
// 									<label class="layui-form-label">电流数据：</label>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="thdia" lay-skin="primary"
// 										 name="dataName" title="电流谐波畸变率"></div>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="i" lay-skin="primary"
// 										 name="dataName" title="电流数据" checked=""></div>
// 								</div>
// 								<div class="layui-col-sm2 ">
// 									<label class="layui-form-label">电压数据：</label>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="thdua" lay-skin="primary"
// 										 name="dataName" title="电压谐波畸变率"></div>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="u" lay-skin="primary"
// 										 name="dataName" title="电压数据" checked=""></div>
// 								</div>
// 								<div class="layui-col-sm2 ">
// 									<label class="layui-form-label ">频率数据：</label>
// 									<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="feq" lay-skin="primary"
// 										 name="dataName" title="频率数据"></div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 		</div>
// 		<div class="layui-row layui-col-space20 mt20">
// 			<div class="layui-col-xs6 layui-col-sm6 layui-col-md6 layui-col-lg6 relative changeCol bgfff">
// 				<div id="main" style="width: 100%;height:300px;"></div>
// 				<table class="layui-table" id="roleTable" lay-filter="roleTable"></table>
// 			</div>
// 			<div class="layui-col-xs6 layui-col-sm6 layui-col-md6 layui-col-lg6 relative changeCol bgfff">
// 				<div id="main" style="width: 100%;height:300px;"></div>
// 				<table class="layui-table" id="roleTable" lay-filter="roleTable"></table>
// 			</div>
// 			<div class="layui-col-xs6 layui-col-sm6 layui-col-md6 layui-col-lg6 relative changeCol bgfff">
// 				<div id="main" style="width: 100%;height:300px;"></div>
// 				<table class="layui-table" id="roleTable" lay-filter="roleTable"></table>
// 			</div>
// 			<div class="layui-col-xs6 layui-col-sm6 layui-col-md6 layui-col-lg6 relative changeCol bgfff">
// 				<div id="main" style="width: 100%;height:300px;"></div>
// 				<table class="layui-table" id="roleTable" lay-filter="roleTable"></table>
// 			</div>
// 		</div>
// 	</div>

	
// 	<!-- js部分 -->
// 	<script type="text/javascript">
// 		//得到checkbox数据
// 		var checkboxDatas = []
// 		layui.use(['layer', 'jquery', 'form', 'table', 'util', 'admin', 'config', 'tableX', "element", "laydate", 'serverUrl'], function() {
// 			var $ = layui.jquery;
//         	var layer = layui.layer;
// 			var table = layui.table;
// 			var admin = layui.admin;
//             var config = layui.config;
// 			var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块👇
// 			var laydate = layui.laydate; //日期控件
// 			var form = layui.form; //表格内容没有这个就无法显示出select CheckBox 的样式
// 			renderForm();
// 			var serverUrl = layui.serverUrl;
//             var selectOption = layui.selectOption;

// 			selectOption.send_req('qisheng/Company/lst.html', {}, function(data){
//                 var hyArr = [];
//                 const s = new Set();
//                 data.data.forEach((ele, index) => {
//                     hyArr.push({id: ele.id, categoryName: ele.name})
//                 })
//                 hyArr.forEach(x => s.add(x));
//                 selectOption.showCategory(hyArr, 1,'#company')
//                 form.render('select');
//             })


// 			table.render({
//                 elem: '#roleTable',
//                 url: serverUrl + 'qisheng/industry/lst.html',
//                 cellMinWidth: 100,
//                 cols: [[
//                     {type: 'numbers'},
//                     {field: 'name', title: '行业名称'},
//                     {field: 'common', title: '备注'},
//                 ]]
//             });


//        //监听company动态加载DeviceName
//        form.on("select(company)", function(data) {
// 		   var company_id1 = data.value;
// 		   form.render('select');
// 		   selectOption.send_req('qisheng/Equipment/get_devicelst_by_companyid.html', {'company_id': company_id1}, function(data){
//                 var hyArr = [];
//                 const s = new Set();
//                 data.forEach((ele, index) => {
//                     hyArr.push({id: ele.DeviceId, categoryName: ele.DeviceName})
//                 })
//                 hyArr.forEach(x => s.add(x));
//                 selectOption.showCategory(hyArr, 1,'#deviceId')
//                 form.render('select');
//             })
//        });

// 			// $(".layui-elem-quote").load(frontUrl + "/electric_page/components/basic/head.html", function() {
// 			// 	//弹出各种选项
// 				$("#showList").click(function() {
// 					//弹出一堆checkbox
// 					var isShow = $("#up").is(':hidden');
// 					if (!isShow) {
// 						$("#dataList").show();
// 						$("#down").show();
// 						$("#up").hide();
// 					} else {
// 						$("#dataList").hide();
// 						$("#down").hide();
// 						$("#up").show();
// 					}
	
// 				});
	
// 			// 	//日期编辑
// 				laydate.render({
// 					elem: '#date',
// 					range: ',',
// 				});
// 			// })
	
	
	
	
// 			// $.ajax({
// 			// 	url: serverUrl + "/device/getWorkshopName",
// 			// 	type: "POST",
// 			// 	success: function(data) {
// 			// 		var op = "<option value=''></option>";
// 			// 		for (let i = 0; i < data.length; i++) {
// 			// 			op += "<option value='" + data[i] + "'>" + data[i] + "</option>"
// 			// 		}
// 			// 		$("#workShop").append(op);
// 			// 		form.render(); //重新编译表格里的内容
// 			// 	},
// 			// 	error: function(err) {
// 			// 		$("#workShop").append("<option>网络异常，请稍后重试!</option>");
// 			// 		form.render();
// 			// 		console.log(err)
// 			// 	}
	
// 			// })
// 			myEcharts11();
	
// 			var deviceId = "";
// 			var date = "";
// 			var datatype = ''
// 			//监听提交
// 			form.on('submit(search)', function(data) {
// 				// // layer.alert(JSON.stringify(data.field), {
// 				// // 	title: '最终的提交信息'
// 				// // })
// 				// deviceId = data.field.deviceId;
// 				// date = data.field.date;
// 				// $.each(dataList, function(index, item) {
// 				// 	//防止重复加载
// 				// 	datatype = datatype + ',' + item.num;
// 				// 	$("#" + item.num).remove();
// 				// })
// 				// datatype = datatype.substr(1)
// 				// loadChartData(serverUrl, $, 'nihao', datatype, '20549', date);
// 				// // loadChartData(serverUrl, $, item.title, datatype, '20549', date);
// 				// loadTableData(serverUrl, table, datatype, '20549', date);
// 				// appendEl('6', )
// 			});
	
	
// 			$(".layui-btn-group button").click(function() {
// 				$(".layui-btn-group button").removeClass("layui-btn-normal");
// 				$(this).addClass("layui-btn-normal");
// 				//$("#date").val("2019-06-06 - 2019-08-08")
// 				$.ajax({
// 					url: "",
// 					dataType: "json",
// 					data: {
// 						type: $(this).val()
// 					},
// 					success: function(data) {
// 						$("#date").val(data.date);
// 					},
// 					error: function(err) {
// 						console.log(err)
// 					}
// 				})
// 			})
	
	
	
	
	
	
// 			var dataList = [];
// 			//页面一进来加载数据
// 			$('input[name="dataName"]:checked').each(function() {
// 				console.log(serverUrl)
// 				var checkedName = $(this)[0].title;
// 				var obj = {
// 					"title": $(this)[0].title,
// 					"num": $(this).val()
// 				};
// 				dataList.push(obj);
// 				// //console.log()
// 				// loadChartData(serverUrl, $, checkedName, $(this).val());
// 				// loadTableData(serverUrl, table, $(this).val());
// 			});
	
// 			//监听单双列       指定开关
// 			form.on('switch(changeCol)', function(data) {
// 				this.checked ? $(".changeCol").removeClass("layui-col-md12").addClass("layui-col-md6") : $(".changeCol").removeClass(
// 					"layui-col-md6").addClass("layui-col-md12");
	
// 				//循环刷新echart和table
// 				$("input[name=dataName]:checked").each(function() {
	
// 					//循环刷新echart和table
// 					var chartId = 'main' + $(this).val();
// 					var tableId = 'table' + $(this).val();
// 					//重置表格和图表大小
// 					echarts.init(document.getElementById(chartId)).resize('auto', 'auto', false);
// 					table.resize(tableId);
// 				});
// 			});
	
// 			//监听checkbox   并选出对应的值
// 			form.on('checkbox(checkboxData)', function(data) {
// 				if (data.elem.checked) { //如果选中, 
// 					//如果有设备id才进行查询操作
// 					if (deviceId != "") {
// 						var val = data.value;
// 						loadChartData(serverUrl, $, data.othis[0].innerText, val, deviceId, date);
// 						loadTableData(serverUrl, table, val, deviceId, date);
// 					} else {
// 						//反之填充dataList 不进行这一步 还会走页面一进来的默认选项  [ep,i,eq...]
// 						dataList = [];
// 						$('input[name="dataName"]:checked').each(function() {
// 							var checkedName = $(this)[0].title;
// 							var obj = {
// 								"title": $(this)[0].title,
// 								"num": $(this).val()
// 							};
// 							dataList.push(obj);
// 							//console.log()
// 							// loadChartData(serverUrl, $, checkedName, $(this).val());
// 							// loadTableData(serverUrl, table, $(this).val());
// 						});
// 					}
	
// 				} else {
// 					//删除对应的卡片
// 					$("#" + data.value).remove();
// 				}
// 			});
// 		});
	
	
	
// 		//加载echart配置
// 		function getChartDataOption(type, xAxis, AData, BData, CData, QData, types) {
// 			var datas = [];
// 			datas.push(AData);
// 			datas.push(BData);
// 			datas.push(CData);
// 			datas.push(QData);
	
// 			var arr = [];
// 			for (var i = 0; i < types.length; i++) {
	
// 				for (var j = 0; j < datas.length; j++) {
	
// 					if (i == j) {
// 						var obj = {
// 							// 根据名字对应到相应的系列
// 							name: types[i],
// 							data: datas[j]
// 						}
// 						arr.push(obj);
// 					}
// 				}
	
	
// 			}
	
// 			return {
// 				legend: {
// 					data: type
// 				},
// 				xAxis: {
// 					data: xAxis
// 				},
// 				series: arr
// 			}
// 		}
	
	
// 		//动态element
// 		function appendEl(v, item) {
// 			var col = v ? "6" : "12";
// 			var el = '<div class="layui-col-xs' + col + 'layui-col-sm' + col + 'layui-col-md' + col + 'layui-col-lg' + col + 'relative changeCol" id=' + item + '>' +
// 				'<div id=main' + item + ' style="width: 100%; height:400px;" class="bgfff"></div>'
// 				'<table  id=table' + item + ' class="layui-table"></table>' +
// 				'</div>' +
// 				'</div>';
// 			return el;
// 		}
	
// 		function loadTableData(serverUrl, table, itemId, devId, date) {
// 			//编译表格
// 			table.render({
// 				elem: '#table' + itemId,
// 				height: 210,
// 				url: serverUrl + "qisheng/Idsd/data_chart.html",
// 				cols: [
// 					[ //表头
// 						{
// 							field: 'name',
// 							title: '名称'
// 						}, {
// 							field: 'max',
// 							title: '最大值'
// 						},
// 						{
// 							field: 'min',
// 							title: '最小值'
// 						},
// 						{
// 							field: 'avg',
// 							title: '平均值'
// 						}
// 					]
// 				]
// 			});
// 		}
	
// 		/**
// 		 * @param {Object} $
// 		 * @param {Object} chartTitle   echart头部名字
// 		 * @param {Object} itemId       
// 		 * @param {Object} data
// 		 */
// 		function loadChartData(serverUrl, $, chartTitle, itemId, devId, date, callback) {
// 			$.ajax({
// 				url: serverUrl + "qisheng/Idsd/data_chart.html",
// 				type: "POST",
// 				dataType: 'json',
// 				data: {
// 					"deviceid": devId,
// 					"date_area": date,
// 					'data_type': itemId
// 				},
// 				success: function(data) {
// 					//添加图表element
// 					var v = $("input[name='col_double_open']").is(':checked');
// 					$("#dataList").after(appendEl(v, chartTitle, itemId));

// 					//获得id
// 					var c = 'main' + itemId;
// 					c = echarts.init(document.getElementById('main' + itemId));
// 					//编译echart  设置基础配置
			
			
// 					//获取eachart数据
// 					var xAxis = [];
// 					var AData = [];
// 					var BData = [];
// 					var CData = [];
// 					var QData = [];
// 					// callback(data);
// 					// var arr = []
// 					// for (let i in data.obj) {
// 					// 	let o = {};
// 					// 	o[i] = data.obj[i];
// 					// 	arr.push(o)
// 					// }
// 					// console.log(arr);
// 					// console.log(itemId.split(","));
// 					$.each(data.obj[itemId], function(index, item) {
// 						xAxis.push(item.date);
// 						AData.push(item.A);
// 						BData.push(item.B);
// 						CData.push(item.C);
// 						QData.push(item.Q);
// 					});
// 					c.setOption(getChartOption(chartTitle, chartTitle, date, data.data[0].type));
// 					var option = getChartDataOption(data.type, xAxis, AData, BData, CData, QData, data.data[0].type);
// 					c.setOption(option);
// 				},
// 				error: function(err) {
// 					console.log("charterr", err);
// 				}
// 			})
// 		}
	
	
// 		function xuanran(data,chartTitle,itemId,){
// 			//添加图表element
// 			var v = $("input[name='col_double_open']").is(':checked');
// 			$("#dataList").after(appendEl(v, chartTitle, itemId));

// 			//获得id
// 			var c = 'main' + itemId;
// 			c = echarts.init(document.getElementById('main' + itemId));
// 			//编译echart  设置基础配置
	
	
// 			//获取eachart数据
// 			var xAxis = [];
// 			var AData = [];
// 			var BData = [];
// 			var CData = [];
// 			var QData = [];

// 			$.each(data.data[0][itemId], function(index, item) {
// 				xAxis.push(item.date);
// 				AData.push(item.A);
// 				BData.push(item.B);
// 				CData.push(item.C);
// 				QData.push(item.Q);
// 			});
// 			c.setOption(getChartOption(chartTitle, chartTitle, date, data.data[0].type));
// 			var option = getChartDataOption(data.type, xAxis, AData, BData, CData, QData, data.data[0].type);
// 			c.setOption(option);
// 		}


// 		function renderForm() {
// 			layui.use(['form'], function() {
// 				var form = layui.form; //高版本建议把括号去掉，有的低版本，需要加()
// 				form.render();
// 			});
// 		}

// 		function myEcharts11(){
//     // 基于准备好的dom，初始化echarts实例
//     var myChart = echarts.init(document.getElementById('main'));

//     option = {
//         title : {
//             text: '某地区蒸发量和降水量',
//             subtext: '纯属虚构'
//         },
//         tooltip : {
//             trigger: 'axis'
//         },
//         legend: {
//             data:['蒸发量','降水量']
//         },
//         toolbox: {
//             show : true,
//             feature : {
//                 dataView : {show: true, readOnly: false},
//                 magicType : {show: true, type: ['line', 'bar']},
//                 restore : {show: true},
//                 saveAsImage : {show: true}
//             }
//         },
//         calculable : true,
//         xAxis : [
//             {
//                 type : 'category',
//                 data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
//             }
//         ],
//         yAxis : [
//             {
//                 type : 'value'
//             }
//         ],
//         dataZoom: [
//             {
//                 show: true,
//                 start: 94,
//                 end: 100
//             },
//             {
//                 type: 'inside',
//                 start: 94,
//                 end: 100
//             },
//             {
//                 show: false,
//                 yAxisIndex: 0,
//                 filterMode: 'empty',
//                 width: 30,
//                 height: '80%',
//                 showDataShadow: false,
//                 left: '93%'
//             }
//         ],
//         series : [
//             {
//                 name:'蒸发量',
//                 type:'bar',
//                 data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
//                 markPoint : {
//                     data : [
//                         {type : 'max', name: '最大值'},
//                         {type : 'min', name: '最小值'}
//                     ]
//                 },
//                 markLine : {
//                     data : [
//                         {type : 'average', name: '平均值'}
//                     ]
//                 }
//             },
//             {
//                 name:'降水量',
//                 type:'bar',
//                 data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
//                 markPoint : {
//                     data : [
//                         {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
//                         {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
//                     ]
//                 },
//                 markLine : {
//                     data : [
//                         {type : 'average', name : '平均值'}
//                     ]
//                 }
//             }
//         ]
//     };

//    // 使用刚指定的配置项和数据显示图表。
//    myChart.setOption(option);
// }
// 	</script>
<style>
		#roleAuthTable + .layui-table-view .layui-table tbody tr:hover {
			background-color: transparent;
		}
	</style>
	<div class="layui-fluid">
		<div class="layui-card">
			<div class="layui-card-body">
				<div class="layui-form toolbar">
						<div class="layui-row layui-form" id="selectionBox">
							<div class="layui-inline" style="cursor:pointer;" id="showList">
								<div id="up">显示列表👇</div>
								<div id="down" style="display: none;">收起列表👆</div>
							</div>
							<div class="layui-inline">
								<div style="border-right: 2px solid #009688;height: 40px;"  id="lineDiv"></div>
							</div>
							<div  class="layui-inline" >
								<label class="layui-form-label">筛选设置：</label>
								<div class="layui-input-inline">
									<select name="company" lay-verify="" lay-filter="company" id="company" lay-search="">
										<option value="">请选择企业</option>
									</select>
								</div>
							</div>
							<div class="layui-input-inline" id="deviceDiv">
								<select name="deviceId" lay-verify="" lay-search="" id="deviceId" lay-filter="deviceId">
									<option value="">请选择设备</option>
								</select>
							</div>
							<div class="layui-input-inline" id="dateDiv" >
								<input type="text" name="date" id="date" lay-verify="" placeholder="请选择日期" autocomplete="off" class="layui-input" style="width: 350px;">
							</div>
							<div class="layui-inline " id="searchBtn">
								<button type="button" class="layui-btn" lay-submit="" lay-filter="search" id="btn">搜索</button>
							</div>
							<div class="layui-inline " id="colSwitch" style="float: right;">
								<div class="layui-input-block">
									<input type="checkbox" name="col_double_open" checked="" lay-skin="switch" lay-filter="changeCol" lay-text="双向排列|单项排列">
								</div>
							</div>
						</div>
				</div>
			</div>
			<!-- 要弹出的CheckBox   START -->
			<div class="layui-col-md12 layui-col-xs12 layui-anim layui-anim-down" style="display: none;position: fixed;z-index: 10;top: 200px;" id="dataList">
				<div class="layui-card">
					<div class="layui-card-header">所有数据<i  id="down1" class="absolute layui-icon layui-icon-up middle pointer l50b"></i></div>
					<div class="layui-card-body">
						<div class="layui-row layui-form layui-col-space30 coom">
							<div class="layui-col-sm2 layui-col-md-offset1">
								<label class="layui-form-label">电能数据：</label>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="ep" lay-skin="primary"
										name="dataName" title="有功电能数据"></div>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="eq" lay-skin="primary"
										name="dataName" title="无功电能数据"></div>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="es" lay-skin="primary"
										name="dataName" title="视在电能数据"></div>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="eplj" lay-skin="primary"
										name="dataName" title="累计电能数据"></div>
	
	
							</div>
							<div class="layui-col-sm2 ">
								<label class="layui-form-label">功率数据：</label>
	
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="p" lay-skin="primary"
										name="dataName" title="有功功率数据"></div>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="q" lay-skin="primary"
										data-type="功率数据" name="dataName" title="无功功率数据"></div>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="s" lay-skin="primary"
										name="dataName" title="视在功率数据"></div>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="cos" lay-skin="primary"
										name="dataName" title="功率因数数据" checked=""></div>
	
							</div>
							<div class="layui-col-sm2 ">
								<label class="layui-form-label">电流数据：</label>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="thdia" lay-skin="primary"
										name="dataName" title="电流谐波畸变率"></div>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="i" lay-skin="primary"
										name="dataName" title="电流数据" checked=""></div>
							</div>
							<div class="layui-col-sm2 ">
								<label class="layui-form-label">电压数据：</label>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="thdua" lay-skin="primary"
										name="dataName" title="电压谐波畸变率"></div>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="u" lay-skin="primary"
										name="dataName" title="电压数据" checked=""></div>
							</div>
							<div class="layui-col-sm2 ">
								<label class="layui-form-label ">频率数据：</label>
								<div class="layui-form-item" pane=""><input type="checkbox" lay-filter="checkboxData" value="feq" lay-skin="primary"
										name="dataName" title="频率数据"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="pack" class="layui-row layui-col-space20 mt20"></div>
	</div>

	
	<!-- js部分 -->
	<script type="text/javascript">
		//得到checkbox数据
		var checkboxDatas = []
		layui.use(['layer', 'jquery', 'form', 'table', 'util', 'admin', 'config', 'tableX', "element", "laydate", 'serverUrl'], function() {
			var $ = layui.jquery;
        	var layer = layui.layer;
			var table = layui.table;
			var admin = layui.admin;
			var config = layui.config;
            var tableX = layui.tableX;			
			var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块👇
			var laydate = layui.laydate; //日期控件
			var form = layui.form; //表格内容没有这个就无法显示出select CheckBox 的样式
			renderForm();
			var serverUrl = layui.serverUrl;
            var selectOption = layui.selectOption;

			selectOption.send_req('qisheng/Company/lst.html', {}, function(data){
                var hyArr = [];
                const s = new Set();
                data.data.forEach((ele, index) => {
                    hyArr.push({id: ele.id, categoryName: ele.name})
                })
                hyArr.forEach(x => s.add(x));
                selectOption.showCategory(hyArr, 1,'#company')
                form.render('select');
            })


			table.render({
                elem: '#roleTable',
                url: serverUrl + 'qisheng/industry/lst.html',
                cellMinWidth: 100,
                cols: [[
                    {type: 'numbers'},
                    {field: 'name', title: '行业名称'},
                    {field: 'common', title: '备注'},
                ]]
            });


			//监听company动态加载DeviceName
			form.on("select(company)", function(data) {
				var company_id1 = data.value;
				var hyArr;
				$("#deviceId").empty();
				form.render('select');
				hyArr = [];
				selectOption.send_req('qisheng/Equipment/get_devicelst_by_companyid.html', {'company_id': company_id1}, function(data){
					hyArr = [];
					const s = new Set();
					data.forEach((ele, index) => {
						hyArr.push({id: ele.DeviceId, categoryName: ele.DeviceName})
					})
					hyArr.forEach(x => s.add(x));
					selectOption.showCategory(hyArr, 1,'#deviceId')
					form.render('select');
				})
			});

			// $(".layui-elem-quote").load(frontUrl + "/electric_page/components/basic/head.html", function() {
			// 	//弹出各种选项
				$("#showList").click(function() {
					//弹出一堆checkbox
					var isShow = $("#up").is(':hidden');
					if (!isShow) {
						$("#dataList").show();
						$("#down").show();
						$("#up").hide();
					} else {
						$("#dataList").hide();
						$("#down").hide();
						$("#up").show();
					}
	
				});
				$(document).click(function(e){
		　　　　　　 var $target  = $(e.target);
	　　　　　  　		if(!$target.closest("#up, .coom").length){
	　　　　　　   			$("#dataList").hide();
							$("#down").hide();
							$("#up").show();
	　　　　　　     	}　　
		　　　　　　})
				$("#down1").click(function() {
					//弹出一堆checkbox
					var isShow = $("#up").is(':hidden');
					if (!isShow) {
						$("#dataList").show();
						$("#down").show();
						$("#up").hide();
					} else {
						$("#dataList").hide();
						$("#down").hide();
						$("#up").show();
					}
	
				});
	　　　　　　
	
			// 	//日期编辑
				laydate.render({
					elem: '#date',
					range: ',',
				});
			// })

			// $.ajax({
			// 	url: serverUrl + "/device/getWorkshopName",
			// 	type: "POST",
			// 	success: function(data) {
			// 		var op = "<option value=''></option>";
			// 		for (let i = 0; i < data.length; i++) {
			// 			op += "<option value='" + data[i] + "'>" + data[i] + "</option>"
			// 		}
			// 		$("#workShop").append(op);
			// 		form.render(); //重新编译表格里的内容
			// 	},
			// 	error: function(err) {
			// 		$("#workShop").append("<option>网络异常，请稍后重试!</option>");
			// 		form.render();
			// 		console.log(err)
			// 	}
	
			// })
	
			var deviceId = "";
			var date = "";
			var datatype = ''
			var dataArr = [];
			//监听提交
			form.on('submit(search)', function(data) {
				// layer.alert(JSON.stringify(data.field), {
				// 	title: '最终的提交信息'
				// })
				datatype = ''
				dataArr = [];
				deviceId = data.field.deviceId;
				date = data.field.date;
				$.each(dataList, function(index, item) {
					//防止重复加载
					dataArr.push(item);
					datatype = datatype + ',' + item.num;
					$("#" + item.num).remove();
					// loadTableData(serverUrl, table, item.num, '20549', date);});
				})
				datatype = datatype.substr(1)
				loadChartData(serverUrl, $, datatype, deviceId, date, dataArr);
				// loadChartData(serverUrl, $, item.title, datatype, '20549', date);
			});
	
	
			$(".layui-btn-group button").click(function() {
				$(".layui-btn-group button").removeClass("layui-btn-normal");
				$(this).addClass("layui-btn-normal");
				//$("#date").val("2019-06-06 - 2019-08-08")
				$.ajax({
					url: "",
					dataType: "json",
					data: {
						type: $(this).val()
					},
					success: function(data) {
						$("#date").val(data.date);
					},
					error: function(err) {
						console.log(err)
					}
				})
			})
	
			var dataList = [];
			//页面一进来加载数据
			$('input[name="dataName"]:checked').each(function() {
				var checkedName = $(this)[0].title;
				var obj = {
					"title": $(this)[0].title,
					"num": $(this).val()
				};
				dataList.push(obj);
				// //console.log()
				// loadChartData(serverUrl, $, checkedName, $(this).val());
				// loadTableData(serverUrl, table, $(this).val());
			});
	
			//监听单双列       指定开关
			form.on('switch(changeCol)', function(data) {
				this.checked ? $(".changeCol").removeClass("layui-col-md12").addClass("layui-col-md6") : $(".changeCol").removeClass(
					"layui-col-md6").addClass("layui-col-md12");
	
				//循环刷新echart和table
				$("input[name=dataName]:checked").each(function() {
	
					//循环刷新echart和table
					var chartId = 'main' + $(this).val();
					var tableId = 'table' + $(this).val();
					//重置表格和图表大小
					echarts.init(document.getElementById(chartId)).resize('auto', 'auto', false);
					table.resize(tableId);
				});
			});
	
			//监听checkbox   并选出对应的值
			form.on('checkbox(checkboxData)', function(data) {
				if (data.elem.checked) { //如果选中, 
					//如果有设备id才进行查询操作
					// if (deviceId != "") {
					// 	var val = data.value;
					// 	loadChartData(serverUrl, $, data.othis[0].innerText, val, deviceId, date);
					// 	loadTableData(serverUrl, table, val, deviceId, date);
					// } else {
						//反之填充dataList 不进行这一步 还会走页面一进来的默认选项  [ep,i,eq...]
						dataList = [];
						$('input[name="dataName"]:checked').each(function() {
							var checkedName = $(this)[0].title;
							var obj = {
								"title": $(this)[0].title,
								"num": $(this).val()
							};
							dataList.push(obj);
							//console.log()
							// loadChartData(serverUrl, $, checkedName, $(this).val());
							// loadTableData(serverUrl, table, $(this).val());
						});
					// }
	
				} else {
					//删除对应的卡片
					$("#" + data.value).remove();
				}
			});
		});
	
		//eachart  基础配置
		function getChartOption(text, subtext, stringDate, types) {
			var arr = [];
			var color = ['orange', "green", 'red', "blue"];
			for (var i = 0; i < types.length; i++) {
				var obj = {
					name: types[i],
					type: 'line',
					data: [],
					markPoint: {
						data: [{
								type: 'max',
								name: '最大值'
							},
							{
								type: 'min',
								name: '最小值'
							}
						]

					},
					markLine: {
						data: [{
							type: 'average',
							name: '平均值'
						}]
					},
					itemStyle: {
						normal: {
							color: color[i]
						}
					}
				};
				arr.push(obj);
			}

			var optionU = {
				title: {
					text: text,
					subtext: subtext + " " + stringDate
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: []
				},
				dataZoom:{
					show:true,
				},
				toolbox: {
					show: true,
					feature: {
						mark: {
							show: true
						},
						dataView: {
							show: true,
							readOnly: true,
							optionToContent: function(opt) {
								var axisData = opt.xAxis[0].data;
								var series = opt.series;
								var table = '<table style="width:95%;text-align:center" class="layui-table"><tbody><tr>' +
									'<td>时间</td>';
								for (let i = 0; i < series.length; i++) {
									table += '<td>' + series[i].name + '</td>';
								}
								table += '</tr>';
								for (var i = 0, l = axisData.length; i < l; i++) {
									table += '<tr>' + '<td>' + axisData[i] + '</td>';

									for (let j = 0; j < series.length; j++) {
										if (typeof(series[j].data[i]) != "undefined") {
											table += '<td>' + series[j].data[i] + '</td>';
										}
									}
									table += '</tr>';
								}
								table += '</tbody></table>';
								return table;
							}
						},
						magicType: {
							show: true,
							type: ['line', 'bar']
						},
						restore: {
							show: false
						},
						saveAsImage: {
							show: true
						},
						myTool1: {
							show: true,
							title: '导出excel',
							// icon: 'image://' + frontUrl + '/HBuilderProjects/static/assets/images/Excel.png',
							onclick: function(e) {
								var series = e.option.series;
								var axisData = e.option.xAxis[0].data;
								var str = '时间,' + series[0].name + "," + series[1].name + "," + series[2].name + "," + series[3].name + "\n";

								for (var i = 0, l = axisData.length; i < l; i++) {

									str += `${ axisData[i] + '\t'},`;
									str += `${ series[0].data[i] + '\t'},`;
									str += `${ series[1].data[i] + '\t'},`;
									str += `${ series[2].data[i] + '\t'},`;
									str += `${ series[3].data[i] + '\t'}`;
									str += '\n';

								}

								let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
								//通过创建a标签实现
								let link = document.createElement("a");
								link.href = uri;
								//对下载的文件命名
								link.download = e.option.title[0].text + ".csv";
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);

							}
						},
					}
				},
				calculable: true,
				xAxis: [{
					type: 'category',
					boundaryGap: false,
					data: []
				}],
				yAxis: [{
					type: 'value',
					axisLabel: {}
				}],
				series: arr
			};
			return optionU;
		}


	
	
		//加载echart配置
		function getChartDataOption(type, xAxis, AData, BData, CData, QData, types) {
			var datas = [];
			datas.push(AData);
			datas.push(BData);
			datas.push(CData);
			datas.push(QData);
	
			var arr = [];
			for (var i = 0; i < types.length; i++) {
	
				for (var j = 0; j < datas.length; j++) {
	
					if (i == j) {
						var obj = {
							// 根据名字对应到相应的系列
							name: types[i],
							type: 'line',
							data: datas[j]
						}
						arr.push(obj);
					}
				}
	
	
			}
			return {
				legend: {
					data: type
				},
				xAxis: {
					data: xAxis
				},
				series: arr
			}
		}
	
	
		//动态element
		function appendEl(v, name, item) {
			var col = v ? "layui-col-md6" : "layui-col-md12";
			var el = '<div class="layui-col-xs12 changeCol ' + col + '" id=' + item + '>' +
				'<div class="layui-card">' +
				'<div class="layui-card-header">' + name + '</div>' +
				'<div class="layui-card-body">' +
				'<div id=main' + item + ' style="height:400px;" class="bgfff"></div>' +
				'<div class="layui-row ">' +
				// '<table  id=table' + item + ' lay-skin="nob"></table>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>';
			return el;
		}
	
		function loadTableData(serverUrl, table, itemId, devId, date) {
			//编译表格
			table.render({
				elem: '#table' + itemId,
				height: 210,
				cellMinWidth: 100,
				// url: serverUrl + "qisheng/Idsd/data_chart.html",
				// where: {
				// 	data_type: itemId,
				// 	date: date,
				// 	deviceId: devId
				// },
				// parseData: function(res) { //res 即为原始返回的数据
				// 	console.log(res.data)
				// 	return {
				// 		"code": res.status, //解析接口状态
				// 		"msg": res.message, //解析提示文本
				// 		"count": res.total, //解析数据长度
				// 		"data": res.data == [] ? [] : res.data[0].maxMin //解析数据列表
				// 	};
				// },
				cols: [
					[ //表头
						{
							field: 'name',
							title: '名称'
						}, {
							field: 'max',
							title: '最大值'
						},
						{
							field: 'min',
							title: '最小值'
						},
						{
							field: 'avg',
							title: '平均值'
						}
					]
				],
				data:[
					{
						"name": 'a',
						"max": '10',
						"min": '10',
						"avg": '10',
					},
					{
						"name": 'b',
						"max": '10',
						"min": '10',
						"avg": '10',
					}
				]
			});
		}
	
		/**
		 * @param {Object} $
		 * @param {Object} chartTitle   echart头部名字
		 * @param {Object} itemId       
		 * @param {Object} data
		 */
		function loadChartData(serverUrl, $, itemId, devId, date, dataArr) {
			$.ajax({
				url: serverUrl + "qisheng/Idsd/data_chart.html",
				type: "POST",
				dataType: 'json',
				data: {
					"deviceid": devId,
					"date_area": date,
					'data_type': itemId
				},
				success: function(data) {
					$('#pack').html('');
					itemId.split(',').map((item)=>{
						var chartTitle = '';
						dataArr.forEach((val) => {
							if(val.num == item){
								chartTitle = val.title
							}
						})
						//添加图表element
						var v = $("input[name='col_double_open']").is(':checked');
						$('#pack').append(appendEl(v, chartTitle, item));

						//获得id
						var c = 'main' + item;
						c = echarts.init(document.getElementById('main' + item));
						//编译echart  设置基础配置
				
				
						//获取eachart数据
						var xAxis = [];
						var AData = [];
						var BData = [];
						var CData = [];
						var QData = [];
						// callback(data);
						var arr = []
						for (let i in data.obj) {
							let o = {};
							o[i] = data.obj[i];
							arr.push(o)
						}
						console.log(data);
						// console.log(itemId.split(","));
						// Math.min(...arr)
						$.each(data.obj[item], function(index, item1) {
							// console.log(item1)
							xAxis.push(item1.date);
							AData.push(item1.A);
							BData.push(item1.B);
							CData.push(item1.C);
							QData.push(item1.Q);
						});
						
						// c.setOption(getChartOption(chartTitle, chartTitle, date, data.data[0].type));
						// var option = getChartDataOption(data.type, xAxis, AData, BData, CData, QData, data.data[0].type);
						c.setOption(getChartOption(chartTitle, chartTitle, date, item));
						var option = getChartDataOption(['A', 'B', 'C', 'Q'], xAxis, AData, BData, CData, QData, ['A', 'B', 'C', 'Q']);

						// debugger;
						c.setOption(option);
    				})
					
				},
				error: function(err) {
					console.log("charterr", err);
				}
			})
		}


		function renderForm() {
			layui.use(['form'], function() {
				var form = layui.form; //高版本建议把括号去掉，有的低版本，需要加()
				form.render();
			});
		}
	</script>