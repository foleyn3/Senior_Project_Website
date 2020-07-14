function getCourses() {
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "registertest/connectserverdb.php"
    var asynchronous = true;
    ajax.open(method, url, asynchronous);
    ajax.send();

    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data);

            var html = "";
            for(var i = 0; i < data.length; i++) {
                var courseID = data[i].courseID;
                var courseOwner = data[i].courseOwner;

                if(i % 3 == 0) {
                    html+= "<div class=\"container\">";
                    html+= "<div class=\"row\">";
                }
                html += "<div class=\"col-sm\">";
                    html += "<div><button class=\"button button5\">" + courseOwner + "</button></div>";
                html += "</div>";
            }
            document.getElementById("courses").innerHTML = html;
        }
    }
}