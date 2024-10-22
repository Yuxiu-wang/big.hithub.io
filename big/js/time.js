var top_left_sj=document.getElementsByClassName("top_left_sj")[0];
        var top_left_nyr=document.getElementsByClassName("top_left_nyr")[0];
        var top_left_t=document.getElementsByClassName("top_left_t")[0];
        setInterval(function(){
            var date = new Date();
                if (date.getHours() < 10) {
                    var a = "0" + date.getHours();
                } else {
                    var a = date.getHours();
                }

                if (date.getMinutes() < 10) {
                    var b = "0" + date.getMinutes();
                } else {
                    var b = date.getMinutes();
                }

                if (date.getSeconds() < 10) {
                    var c = "0" + date.getSeconds();
                } else {
                    var c = date.getSeconds();
                }
                top_left_sj.innerText = a + ":" + b + ":" + c;
                if(date.getMonth()+1 < 10){
                    var m="0" + date.getMonth();
                }else{
                    var m = date.getMonth();
                }
                if(date.getDate() < 10){
                    var r = "0" + date.getDate();
                }else{
                    var r = date.getDate();
                }
                top_left_nyr.innerText = date.getFullYear() + "年" + m + "月" + r+"日";
                switch(date.getDay()){
                    case 0:
                    top_left_t.innerText = "星期日";
                    break;
                    case 1:
                    top_left_t.innerText = "星期一";
                    break;
                    case 2:
                    top_left_t.innerText = "星期二";
                    break;
                    case 3:
                    top_left_t.innerText = "星期三";
                    break;
                    case 4:
                    top_left_t.innerText = "星期四";
                    break;
                    case 5:
                    top_left_t.innerText = "星期五";
                    break;
                    case 6:
                    top_left_t.innerText = "星期六";
                    break;
                }
        },1000)