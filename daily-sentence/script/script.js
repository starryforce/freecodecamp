$(document).ready(function() {
    $("#getSen").click(function() {
        $.ajax({
            url: "https://api.lwl12.com/hitokoto/main/get",
            success: function(result) {
                $("#sentence").text(result);
                $("#weibo").attr("href", "http://service.weibo.com/share/share.php?url={{url}}&amp;title={{message}}");
            }
        });
    });
});
