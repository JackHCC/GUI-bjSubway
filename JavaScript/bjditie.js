var $j=jQuery.noConflict();

//地铁站数据
var subwayData = {
    "1号线": ["苹果园", "古城", "八角游乐园", "八宝山", "玉泉路", "五棵松", "万寿路", "公主坟", "军事博物馆", "木樨地", "南礼士路", "复兴门", "西单", "天安门西", "天安门东", "王府井", "东单", "建国门", "永安里", "国贸", "大望路", "四惠", "四惠东"],
    "2号线": ["西直门", "积水潭", "鼓楼大街", "安定门", "雍和宫", "东直门", "东四十条", "朝阳门", "建国门", "北京站", "崇文门", "前门", "和平门", "宣武门", "长椿街", "复兴门", "阜成门", "车公庄"],
    "4号线": ["安河桥北", "北宫门", "西苑", "圆明园", "北京大学东门", "中关村", "海淀黄庄", "人民大学", "魏公村", "国家图书馆", "动物园", "西直门", "新街口", "平安里", "西四", "灵境胡同", "西单", "宣武门", "菜市口", "陶然亭", "北京南站", "马家堡", "角门西", "公益西桥"],
    "5号线": ["宋家庄", "刘家窑", "蒲黄榆", "天坛东门", "磁器口", "崇文门", "东单", "灯市口", "东四", "张自忠路", "北新桥", "雍和宫", "和平里北街", "和平西桥", "惠新西街南口", "惠新西街北口", "大屯路东", "北苑路北", "立水桥南", "立水桥", "天通苑南", "天通苑", "天通苑北"],
    "6号线": ["海淀五路居", "慈寿寺", "花园桥", "白石桥南", "车公庄西", "车公庄", "平安里", "北海北", "南锣鼓巷", "东四", "朝阳门", "东大桥", "呼家楼", "金台路", "十里堡", "青年路", "褡裢坡", "黄渠", "常营", "草房"],
    "8号线": ["朱辛庄", "育知路", "平西府", "回龙观东大街", "霍营", "育新", "西小口", "永泰庄", "林萃桥", "森林公园南门", "奥林匹克公园", "奥体中心", "北土城", "安华桥", "鼓楼大街", "什刹海", "南锣鼓巷"],
    "9号线": ["郭公庄", "丰台科技园", "科怡路", "丰台南路", "丰台东大街", "七里庄", "六里桥", "六里桥东", "北京西站", "军事博物馆", "白堆子", "白石桥南", "国家图书馆"],
    "10号线": ["巴沟", "苏州街", "海淀黄庄", "知春里", "知春路", "西土城", "牡丹园", "健德门", "北土城", "安贞门", "惠新西街南口", "芍药居", "太阳宫", "三元桥", "亮马桥", "农业展览馆", "团结湖", "呼家楼", "金台夕照", "国贸", "双井", "劲松", "潘家园", "十里河", "分钟寺", "成寿寺", "宋家庄", "石榴庄", "大红门", "角门东", "角门西", "草桥", "纪家庙", "首经贸", "丰台站", "泥洼", "西局", "六里桥", "莲花桥", "公主坟", "西钓鱼台", "慈寿寺", "车道沟", "长春桥", "火器营"],
    "13号线": ["西直门", "大钟寺", "知春路", "五道口", "上地", "西二旗", "龙泽", "回龙观", "霍营", "立水桥", "北苑", "望京西", "芍药居", "光熙门", "柳芳", "东直门"],
    "14号线": ["张郭庄", "园博园", "大瓦窑", "郭庄子", "大井", "七里庄", "西局"],
    "15号线": ["望京西", "望京", "崔各庄", "马泉营", "孙河", "国展", "花梨坎", "后沙峪", "南法信", "石门", "顺义", "俸伯"],
    "八通线": ["四惠", "四惠东", "高碑店", "传媒大学", "双桥", "管庄", "八里桥", "通州北苑", "果园", "九棵树", "梨园", "临河里", "土桥"],
    "昌平线": ["南邵", "沙河高教园", "沙河", "巩华城", "朱辛庄", "生命科学园", "西二旗"],
    "亦庄线": ["宋家庄", "肖村", "小红门", "旧宫", "亦庄桥", "亦庄文化园", "万源街", "荣京东街", "荣昌东街", "同济南路", "经海路", "次渠南", "次渠"],
    "房山线": ["郭公庄", "大葆台", "稻田", "长阳", "篱笆房", "广阳城", "良乡大学城北", "良乡大学城", "良乡大学城西", "良乡南关", "苏庄"],
    "大兴线": ["公益西桥", "新宫", "西红门", "高米店北", "高米店南", "枣园", "清源路", "黄村西大街", "黄村火车站", "义和庄", "生物医药基地", "天宫院"]
};


var	edgesData = [["苹果园", "古城", 2.5], ["古城", "八角游乐园", 1.9], ["八角游乐园", "八宝山", 2.4], ["八宝山", "玉泉路", .9], ["玉泉路", "五棵松", 1.7], ["五棵松", "万寿路", 1.8], ["万寿路", "公主坟", 1.2], ["公主坟", "军事博物馆", 1.7], ["军事博物馆", "木樨地", 2.2], ["木樨地", "南礼士路", 1.2], ["南礼士路", "复兴门", 1.5], ["复兴门", "西单", 1.6], ["西单", "天安门西", 1.2], ["天安门西", "天安门东", .8], ["天安门东", "王府井", 1.3], ["王府井", "东单", 1.1], ["东单", "建国门", 1.3], ["建国门", "永安里", 1.3], ["永安里", "国贸", .8], ["国贸", "大望路", 1.3], ["大望路", "四惠", 1.6], ["四惠", "四惠东", 1.7], ["西直门", "积水潭", 1.8], ["积水潭", "鼓楼大街", 1.7], ["鼓楼大街", "安定门", 1.2], ["安定门", "雍和宫", 1.1], ["雍和宫", "东直门", 2.6], ["东直门", "东四十条", .8], ["东四十条", "朝阳门", 1], ["朝阳门", "建国门", 1.8], ["建国门", "北京站", 1], ["北京站", "崇文门", .9], ["崇文门", "前门", 1.9], ["前门", "和平门", 1.4], ["和平门", "宣武门", .8], ["宣武门", "长椿街", .9], ["长椿街", "复兴门", 1.2], ["复兴门", "阜成门", 1.8], ["阜成门", "车公庄", 1], ["车公庄", "西直门", .8], ["安河桥北", "北宫门", 1.4], ["北宫门", "西苑", 1.2], ["西苑", "圆明园", 2.1], ["圆明园", "北京大学东门", 1.6], ["北京大学东门", "中关村", 1], ["中关村", "海淀黄庄", 1], ["海淀黄庄", "人民大学", 1], ["人民大学", "魏公村", 1], ["魏公村", "国家图书馆", 1.6], ["国家图书馆", "动物园", 1.7], ["动物园", "西直门", 1.6], ["西直门", "新街口", 1], ["新街口", "平安里", 1.1], ["平安里", "西四", 1], ["西四", "灵境胡同", .8], ["灵境胡同", "西单", .9], ["西单", "宣武门", .8], ["宣武门", "菜市口", 1.1], ["菜市口", "陶然亭", 1.9], ["陶然亭", "北京南站", 1.6], ["北京南站", "马家堡", 1.7], ["马家堡", "角门西", .8], ["角门西", "公益西桥", .9], ["宋家庄", "刘家窑", 1.7], ["刘家窑", "蒲黄榆", .8], ["蒲黄榆", "天坛东门", 1.8], ["天坛东门", "磁器口", 1.2], ["磁器口", "崇文门", .8], ["崇文门", "东单", .8], ["东单", "灯市口", 1], ["灯市口", "东四", .7], ["东四", "张自忠路", 1], ["张自忠路", "北新桥", .8], ["北新桥", "雍和宫", 1], ["雍和宫", "和平里北街", 1.4], ["和平里北街", "和平西桥", 1], ["和平西桥", "惠新西街南口", .9], ["惠新西街南口", "惠新西街北口", 1.2], ["惠新西街北口", "大屯路东", 1.7], ["大屯路东", "北苑路北", 2.9], ["北苑路北", "立水桥南", 1.3], ["立水桥南", "立水桥", 1.3], ["立水桥", "天通苑南", 1.5], ["天通苑南", "天通苑", .9], ["天通苑", "天通苑北", .9], ["海淀五路居", "慈寿寺", 1.4], ["慈寿寺", "花园桥", 1.4], ["花园桥", "白石桥南", 1.2], ["白石桥南", "车公庄西", 1.6], ["车公庄西", "车公庄", .9], ["车公庄", "平安里", 1.4], ["平安里", "北海北", 1.2], ["北海北", "南锣鼓巷", 1.4], ["南锣鼓巷", "东四", 1.9], ["东四", "朝阳门", 1.4], ["朝阳门", "东大桥", 1.5], ["东大桥", "呼家楼", .8], ["呼家楼", "金台路", 1.4], ["金台路", "十里堡", 1.9], ["十里堡", "青年路", 1.3], ["青年路", "褡裢坡", 3.9], ["褡裢坡", "黄渠", 1.2], ["黄渠", "常营", 1.7], ["常营", "草房", 1.5], ["朱辛庄", "育知路", 2.3], ["育知路", "平西府", 2], ["平西府", "回龙观东大街", 1.9], ["回龙观东大街", "霍营", 1], ["霍营", "育新", 1.7], ["育新", "西小口", 1.5], ["西小口", "永泰庄", 1], ["永泰庄", "林萃桥", 2.4], ["林萃桥", "森林公园南门", 2.7], ["森林公园南门", "奥林匹克公园", 1.1], ["奥林匹克公园", "奥体中心", 1.7], ["奥体中心", "北土城", 1], ["北土城", "安华桥", .9], ["安华桥", "鼓楼大街", 2.3], ["鼓楼大街", "什刹海", 1.1], ["什刹海", "南锣鼓巷", 1], ["郭公庄", "丰台科技园", 1.3], ["丰台科技园", "科怡路", .8], ["科怡路", "丰台南路", .9], ["丰台南路", "丰台东大街", 1.6], ["丰台东大街", "七里庄", 1.3], ["七里庄", "六里桥", 1.7], ["六里桥", "六里桥东", 1.2], ["六里桥东", "北京西站", 1.2], ["北京西站", "军事博物馆", 1.4], ["军事博物馆", "白堆子", 2.6], ["白堆子", "白石桥南", .9], ["白石桥南", "国家图书馆", 1.1], ["巴沟", "苏州街", 1], ["苏州街", "海淀黄庄", .9], ["海淀黄庄", "知春里", 1], ["知春里", "知春路", 1], ["知春路", "西土城", 1], ["西土城", "牡丹园", 1.3], ["牡丹园", "健德门", .9], ["健德门", "北土城", 1], ["北土城", "安贞门", .9], ["安贞门", "惠新西街南口", .9], ["惠新西街南口", "芍药居", 1.7], ["芍药居", "太阳宫", .9], ["太阳宫", "三元桥", 1.7], ["三元桥", "亮马桥", 1.4], ["亮马桥", "农业展览馆", .8], ["农业展览馆", "团结湖", .8], ["团结湖", "呼家楼", 1.1], ["呼家楼", "金台夕照", .6], ["金台夕照", "国贸", .9], ["国贸", "双井", 1.7], ["双井", "劲松", 1], ["劲松", "潘家园", 1.1], ["潘家园", "十里河", 1.1], ["十里河", "分钟寺", 1.6], ["分钟寺", "成寿寺", .9], ["成寿寺", "宋家庄", 1.6], ["宋家庄", "石榴庄", 1.2], ["石榴庄", "大红门", 1.3], ["大红门", "角门东", 1], ["角门东", "角门西", 1.2], ["角门西", "草桥", 1.5], ["草桥", "纪家庙", 1.6], ["纪家庙", "首经贸", 1.1], ["首经贸", "丰台站", 1.6], ["丰台站", "泥洼", .9], ["泥洼", "西局", .8], ["西局", "六里桥", 1.6], ["六里桥", "莲花桥", 2.2], ["莲花桥", "公主坟", 1], ["公主坟", "西钓鱼台", 2.2], ["西钓鱼台", "慈寿寺", 1.1], ["慈寿寺", "车道沟", 1.7], ["车道沟", "长春桥", 1.1], ["长春桥", "火器营", .9], ["火器营", "巴沟", 1.4], ["西直门", "大钟寺", 2.8], ["大钟寺", "知春路", 1.2], ["知春路", "五道口", 1.8], ["五道口", "上地", 4.8], ["上地", "西二旗", 2.5], ["西二旗", "龙泽", 3.6], ["龙泽", "回龙观", 1.3], ["回龙观", "霍营", 2], ["霍营", "立水桥", 4.8], ["立水桥", "北苑", 2.3], ["北苑", "望京西", 6.7], ["望京西", "芍药居", 2], ["芍药居", "光熙门", 1.1], ["光熙门", "柳芳", 1.1], ["柳芳", "东直门", 1.7], ["张郭庄", "园博园", 1.3], ["园博园", "大瓦窑", 3.8], ["大瓦窑", "郭庄子", 1.2], ["郭庄子", "大井", 1.9], ["大井", "七里庄", 1.5], ["七里庄", "西局", .8], ["望京西", "望京", 1.6], ["望京", "崔各庄", 3.9], ["崔各庄", "马泉营", 1.9], ["马泉营", "孙河", 3.3], ["孙河", "国展", 3.3], ["国展", "花梨坎", 1.6], ["花梨坎", "后沙峪", 3.3], ["后沙峪", "南法信", 4.5], ["南法信", "石门", 2.6], ["石门", "顺义", 1.3], ["顺义", "俸伯", 2.9], ["四惠", "四惠东", 1.7], ["四惠东", "高碑店", 1.3], ["高碑店", "传媒大学", 1.9], ["传媒大学", "双桥", 1.8], ["双桥", "管庄", 1.9], ["管庄", "八里桥", 1.7], ["八里桥", "通州北苑", 1.7], ["通州北苑", "果园", 1.4], ["果园", "九棵树", .9], ["九棵树", "梨园", 1.2], ["梨园", "临河里", 1.2], ["临河里", "土桥", .7], ["南邵", "沙河高教园", 5.4], ["沙河高教园", "沙河", 1.9], ["沙河", "巩华城", 2], ["巩华城", "朱辛庄", 3.8], ["朱辛庄", "生命科学园", 2.4], ["生命科学园", "西二旗", 5.4], ["宋家庄", "肖村", 2.9], ["肖村", "小红门", 1.3], ["小红门", "旧宫", 2.4], ["旧宫", "亦庄桥", 1.9], ["亦庄桥", "亦庄文化园", .9], ["亦庄文化园", "万源街", 1.5], ["万源街", "荣京东街", 1.2], ["荣京东街", "荣昌东街", 1.3], ["荣昌东街", "同济南路", 2.3], ["同济南路", "经海路", 2.2], ["经海路", "次渠南", 2], ["次渠南", "次渠", 1.2], ["郭公庄", "大葆台", 1.3], ["大葆台", "稻田", 6.4], ["稻田", "长阳", 4], ["长阳", "篱笆房", 2.1], ["篱笆房", "广阳城", 1.4], ["广阳城", "良乡大学城北", 1.9], ["良乡大学城北", "良乡大学城", 1.1], ["良乡大学城", "良乡大学城西", 1.7], ["良乡大学城西", "良乡南关", 1.3], ["良乡南关", "苏庄", 1.3], ["东直门", "三元桥", 4], ["三元桥", "T3航站楼", 27.2], ["T3航站楼", "T2航站楼", 7.6], ["公益西桥", "新宫", 2.8], ["新宫", "西红门", 5], ["西红门", "高米店北", 1.7], ["高米店北", "高米店南", 1.1], ["高米店南", "枣园", 1.1], ["枣园", "清源路", 1.1], ["清源路", "黄村西大街", 1.2], ["黄村西大街", "黄村火车站", 1], ["黄村火车站", "义和庄", 1.8], ["义和庄", "生物医药基地", 2.9], ["生物医药基地", "天宫院", 1.8]];


//Dijkstra算法
Dijkstra = function() {

    //source起点    target终点    weight权重
    function addEdge(source, target, weight) {
        if (! (source in graph)) graph[source] = {};
        if (! (target in graph)) graph[target] = {};
        if ("number" != typeof weight) weight = 1;
        graph[source][target] = weight,
            graph[target][source] = weight
    }
    function addEdges(edges) {
        for (var i = 0; i < edges.length; ++i) {
            var edge = edges[i];
            addEdge(edge[0], edge[1], edge[2])
        }
    }

    //通过起点终点求最小路径
    function shortestPath(source, target) {
        if (! (source in graph) || !(target in graph))
            return 1 / 0;            //取1/0为无穷大，将邻接矩阵所有元素赋值正无穷
        var dist = {},  //存放最小距离
            visited = {},   //判断是否到达过该点
            numVertex = 0;

        for (var v in graph) dist[v] = 1 / 0,      //初始化最小距离的数组全为无穷大
            numVertex++;
        dist[source] = 0;

        //求最小路径核心
        for (var i = 0; i < numVertex; ++i) {
            var minDist = 1 / 0,
                minV = void 0;

            for (var v in dist) if (! (v in visited)) {
                if (minDist > dist[v]) minDist = dist[v],
                    minV = v
            } else;
            if (void 0 === minV) break;
            if (minV === target) return minDist;
            visited[minV] = true;
            var edges = graph[minV];
            for (var v in edges) if (! (v in visited)) {
                var newDist = minDist + edges[v];
                if (dist[v] > newDist) dist[v] = newDist
            } else;
        }
        return 1 / 0
    }

    //定义联结矩阵存放距离

    var graph = {};
    return {
        addEdge: addEdge,
        addEdges: addEdges,
        shortestPath: shortestPath
    }
} ();


function genSubwayStationHtml(lineName) {
    for (var stations = subwayData[lineName], htmls = [], i = 0; i < stations.length; ++i) htmls.push("<li>" + stations[i] + "</li>");
    return htmls.join("")
}

function genSubwayLineHtml() {
    var htmls = [],
        i = -1,
        classname = ["op-subway-one", "op-subway-two", "op-subway-four", "op-subway-five", "op-subway-six", "op-subway-seven", "op-subway-eight", "op-subway-nine", "op-subway-ten", "op-subway-thirteen", "op-subway-fourteen", "op-subway-fifteen", "op-subway-batong", "op-subway-changpi", "op-subway-yizhuan", "op-subway-fangsan", "op-subway-jichang"];
    for (var lineName in subwayData) i++,
        htmls.push("<li><span class=" + classname[i] + "></span>" + lineName + "</li>");
    return htmls.join("")
}

//选择按钮设置
function tryActiveCalcButton() {
    var start = $j(".op-subway-box-start .op-subway-station em").text(),
        end = $j(".op-subway-box-end .op-subway-station em").text();
    if ("选择车站" != start && "选择车站" != end) $j(".op-subway-calc-false").addClass("op-subway-calc-fare").removeClass("op-subway-calc-false")
}

//c初始化线路盒子
function initSubwayBox() {
    var lineHtml = genSubwayLineHtml();
    $j(".op-subway-line .op-subway-ul").html(lineHtml),
        $j(".op-subway-line .op-subway-ul").on("click", "li",
            function() {
                var lineName = $j(this).text();
                $j(this).parent().parent().parent().find(".op-subway-line em").css({
                    padding: "0px 5px 0px 20px"
                }),
                    $j(this).parent().parent().parent().find(".op-subway-station").css({
                        background: "#fff"
                    }),
                    $j(this).parent().parent().parent().find(".op-subway-station em").css({
                        color: "#333"
                    });
                var stationHtml = genSubwayStationHtml(lineName),
                    $box = $j(this).parent().parent().parent();
                $box.find(".op-subway-ulk").html(stationHtml);
                var firstStation = subwayData[lineName][0];
                $box.find(".op-subway-station em").text(firstStation),
                    tryActiveCalcButton()
            }),
        $j(".op-subway-ul, .op-subway-ulk").each(function() {
            $j(this).find("li").eq(0).addClass("op-subway-textone")
        })
}


function format(distance) {
    distance += .001;
    var s = distance + "",
        index = s.indexOf(".");
    if (index >= 0) if (s.length > index + 2) s = s.substr(0, index + 2);
    return s
}

function genText(distance, fare) {
    var increase = calcMonthlyFare(fare);
    if (distance = format(distance), 0 === increase) return '<p class="op-subway-span"></p>';
    else return '<p class="op-subway-span">计算结果：距离<em class="op-subway-increase">' + distance + '</em>公里，票价<em class="op-subway-increase ">' + fare + '</em>元！'
}


function initCalcFare() {
    $j(".op-subway-main").on("click", ".op-subway-calc-fare",
        function() {
            var start = $j(".op-subway-box-start .op-subway-station em").html(),
                end = $j(".op-subway-box-end .op-subway-station em").html();
            if ("选择车站" == start || "选择车站" == end) return $j(".op-subway-ts").show(),
                false;
            if (start == end) return $j(".op-subway-ts").html("你还在原地，要用地铁？").show(),
                false;
            else $j(".op-subway-ts").hide();
            $j(this).parent().css({
                "border-bottom": "1px solid #fff"
            }),
                $j(".op-subway-tab,.op-subway-footer,.op-subway-Share").show(),
                $j(".op-subway-tab li").eq(0).removeClass("on").siblings().addClass("on"),
                $j($j(".op-subway-tab li").eq(0).attr("data")).show().siblings().not(".Share").hide();
            var distance = Dijkstra.shortestPath(start, end),
                fare1 = calcFare1(distance),
                fare2 = calcFare2(distance);
            $j(".op-subway-content1 .op-subway-text .op-subway-fareinfo").html(genText(distance, fare1));
            $j(".op-subway-content2 .op-subway-text .op-subway-fareinfo").html(genText(distance, fare2));

        })
}


function genVoteText(count) {
    return "(" + count + ")"
}

//点击选项设置
function initSubwayClick() {
    $j(".op-subway-line,.op-subway-station").on("click",
        function(event) {
            if (event.stopPropagation(), $j(".op-subway-ts").hide(), $j(".op-subway-box ul").hide(), $j(this).find("ul").children().length) $j(this).find("ul").show();
            $j(document).on("click",
                function() {
                    $j(".op-subway-box ul").hide()
                })
        }),
        $j(".op-subway-line,.op-subway-station").on("mouseover", "li",
            function() {
                $j(this).addClass("op-subway-ons")
            }),
        $j(".op-subway-line,.op-subway-station").on("mouseout", "li",
            function() {
                $j(this).removeClass("op-subway-ons")
            }),
        $j(".op-subway-ul,.op-subway-ulk").on("click", "li",
            function(event) {
                event.stopPropagation(),
                    $j(this).parent().parent().find("em").html($j(this).html()),
                    $j(this).parent().parent().find("ul").hide()
            }),
        $j(".op-subway-close").on("mouseover",
            function() {
                $j(this).addClass("op-subway-close-on"),
                    $j(this).on("click",
                        function() {
                            $j(this).parent().hide()
                        })
            }),
        $j(".op-subway-close").on("mouseout",
            function() {
                $j(this).removeClass("op-subway-close-on")
            }),
        $j(".op-subway-code").on("click",
            function(event) {
                event.stopPropagation()
            }),
        $j(".op-subway-messages").on("click",
            function(event) {
                event.stopPropagation()
            }),
        $j(document).on("click",
            function() {
                $j(".op-subway-code").hide(),
                    $j(".op-subway-messages").hide()
            });
    var tabIndex = 0;
    $j(".op-subway-tab .op-subway-li").on("click", ".hard",
        function(event) {
            event.preventDefault();
            var $el = $j(this),
                tag = "option" + tabIndex,
                cookieName = "subway_" + tag;
            if (null === CookieUtil.getCookie(cookieName)) Bbstat.addCount("subway", tag, 1,
                function(rsp) {
                    if (rsp.count) $el.next().text(genVoteText(rsp.count)),
                        CookieUtil.setCookie(cookieName, "voted", 86400)
                })
        })
}
function init() {
    initSubwayBox(),
        initSubwayClick(),
        initCalcFare(),
        initDijkstra()
}

function initDijkstra() {
    Dijkstra.addEdges(edgesData)
}

function calcFare1(distance) {
    if (distance <= 3) return 2;
    if (distance <= 6) return 3;
    if (distance <= 18) return 3 + Math.ceil((distance - 6) / 6);
    if (distance <= 42) return 5 + Math.ceil((distance - 18) / 12);
    else return 7 + Math.ceil((distance - 42) / 18)
}
function calcFare2(distance) {
    if (distance <= 6) return 3;
    if (distance <= 12) return 4;
    if (distance <= 32) return 4 + Math.ceil((distance - 12) / 10);
    else return 6 + Math.ceil((distance - 32) / 20)
}
function calcMonthlyFare(fare) {
    var addtext = 2 * (fare - 2) * 22 * 12;
    return addtext
}

init();