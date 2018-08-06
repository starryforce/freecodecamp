$(function() {
    //構造url並且加密參數字符串
    function buildUrl(userLocation) {
        /******** 本示例仅做开发参考使用，不建议在生产环境下暴露 key！ ********/
        var UID = "U726ED58D3"; // 测试用 用户ID，请更换成您自己的用户ID
        var KEY = "dsprqfofwx1fhugk"; // 测试用key，请更换成您自己的 Key
        var API = "https://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
        var LOCATION = userLocation; // 除拼音外，还可以使用 v3 id、汉语等形式
        // 获取当前时间戳
        var ts = Math.floor(new Date().getTime() / 1000);
        // 构造验证参数字符串
        var str = "ts=" + ts + "&uid=" + UID;
        // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
        // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
        var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
        sig = encodeURIComponent(sig);
        str = str + "&sig=" + sig;
        // 构造最终请求的 url
        return API + "?location=" + LOCATION + "&" + str;
    }

    function update(data) {
        var iconArr = bulidIconArr();
        $("#local").text(data.results[0].location.path);
        $("#weather").text(data.results[0].now.text);
        $("#temp").text(data.results[0].now.temperature);
        var code = data.results[0].now.code;
        $("#icon").attr("src", iconArr[code].url);
        $("#icon").attr("alt", data.results[0].now.text);
    }

    function bindSwitch(data) {
        var cTemp = data.results[0].now.temperature;
        var fTemp = "" + cTemp * 1.8 + 32;
        $("#symb").click(function() {
            if ("°C" === $(this).text()) {
                $(this).text("°F");
                $("#temp").text(fTemp);
            } else {
                $(this).text("°C");
                $("#temp").text(cTemp);
            }
        });
    }

    function getLocation() {
        var userLocation = "";
        debugger;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                userLocation = position.coords.latitude + ":" + position.coords.longitude;
                //location获取成功后组装url
                var urlStr = buildUrl(userLocation);
                $.ajax({
                    url: urlStr,
                    dataType: "jsonp",
                    success: function(data) {
                        update(data);
                        bindSwitch(data);
                    }
                });
            });
        }
    }
    getLocation();
    // 直接发送请求进行调用，手动处理回调函数
});
