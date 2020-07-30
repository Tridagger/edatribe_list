$.getJSON("json/download.json", function(data){
    var dom = '';
    $.each(data, function(index, item){
        dom += '<li><font face="Microsoft Yahei">['+item.number+'] '+item.title+'</font></li>'
    });
    $('.mulu_list').html(dom);
})