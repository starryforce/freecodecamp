$(document).ready(function () {
    var sBtn = document.getElementById("searchBtn");
    var sTxt = document.getElementById("searchTxt");
    var mResult = document.getElementById("results");
    sBtn.onclick = function () {
        var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
        var cb = '&callback=JSON_CALLBACK';
        var title = sTxt.value;
        $.ajax({
            url: api + title + cb,
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                if (data.query) {
                    showResult(data);
                    moveBox();
                }
            }
        });
    };

    function showResult(data) {
        var newA = null;
        var newLi = null;
        var newH2 = null;
        var newP = null;
        if (mResult.hasChildNodes()) {
            mResult.removeChild(mResult.firstChild);
        }
        var newUl = document.createElement("ul");
        for (id in data.query.pages) {
            newA = document.createElement("a");
            newLi = document.createElement("li");
            newH2 = document.createElement("h2");
            newP = document.createElement("p");
            newA.appendChild(newH2);
            newA.appendChild(newP);
            newLi.appendChild(newA);
            newA.setAttribute("href", "https://en.wikipedia.org/?curid=" + id);
            newA.setAttribute("target", "_blank");
            newH2.innerHTML = data.query.pages[id].title;
            newP.innerHTML = data.query.pages[id].extract;
            newUl.appendChild(newLi);
        }
        mResult.appendChild(newUl);
    }

    function moveBox() {
        var box = document.getElementById("searchbox");
        box.style.margin = "0 auto";
    }
});