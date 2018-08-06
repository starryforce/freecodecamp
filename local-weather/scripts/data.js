function bulidIconArr() {
    var tempArr =
        `0   晴   Sunny   晴
1   晴   Clear   晴
2   晴   Fair    晴
3   晴   Fair    晴
4   多云  Cloudy  多云
5   晴间多云    Partly Cloudy   晴间多云
6   晴间多云    Partly Cloudy   晴间多云
7   大部多云    Mostly Cloudy   大部多云
8   大部多云    Mostly Cloudy   大部多云
9   阴   Overcast    阴
10  阵雨  Shower  阵雨
11  雷阵雨 Thundershower   雷阵雨
12  雷阵雨伴有冰雹 Thundershower with Hail 雷阵雨伴有冰雹
13  小雨  Light Rain  小雨
14  中雨  Moderate Rain   中雨
15  大雨  Heavy Rain  大雨
16  暴雨  Storm   暴雨
17  大暴雨 Heavy Storm 大暴雨
18  特大暴雨    Severe Storm    特大暴雨
19  冻雨  Ice Rain    冻雨
20  雨夹雪 Sleet   雨夹雪
21  阵雪  Snow Flurry 阵雪
22  小雪  Light Snow  小雪
23  中雪  Moderate Snow   中雪
24  大雪  Heavy Snow  大雪
25  暴雪  Snowstorm   暴雪
26  浮尘  Dust    浮尘
27  扬沙  Sand    扬沙
28  沙尘暴 Duststorm   沙尘暴
29  强沙尘暴    Sandstorm   强沙尘暴
30  雾   Foggy   雾
31  霾   Haze    霾
32  风   Windy   风
33  大风  Blustery    大风
34  飓风  Hurricane   飓风
35  热带风暴    Tropical Storm  热带风暴
36  龙卷风 Tornado 龙卷风
37  冷   Cold    冷
38  热   Hot 热
99  未知  Unknown 未知`;
    var iconArr = [];
    var tempArr = tempArr.replace(/([a-z]+)\s([a-z]+)/gi, '$1' + '-' + '$2');
    var tempArr = tempArr.replace(/([a-z]+)\s([a-z]+)/gi, '$1' + '-' + '$2');
    var tempArr = tempArr.split(/\n/g);
    for (var i = 0; i < tempArr.length; i++) {
        tempArr[i] = tempArr[i].split(/\s+/);
        iconArr.push({
            code: tempArr[i][0],
            zh: tempArr[i][1],
            en: tempArr[i][2].replace("-", " "),
            url: "//s2.sencdn.com/web/icons/3d_50/" + i + ".png",
        });
    }
    return iconArr;
}
