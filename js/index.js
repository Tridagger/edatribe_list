function render_json_data(keyword = ''){
    $.ajaxSettings.async = false;
    $.getJSON("json/data.json", function(data){
        var dom = '';
        $.each(data, function(index, item){
            // dom += '<li><font face="Microsoft Yahei">['+item.number+'] '+item.title+'</font></li>'
            if(keyword.length === 0 || item.title.indexOf(keyword) !== -1 || item.number.indexOf(keyword) !== -1 ){
                dom += getItem(item, keyword)
            }
        });
        $('.mulu_list').html(dom);
    });
}

function getItem(item, keyword = '')
{
    var number = item.number;
    //高亮处理
    number = number.split(keyword).join('<label style="color:#0f0;background-color:#ff0">'+keyword+'</label>');

    var title = item.title;
    //高亮处理
    title = title.split(keyword).join('<label style="color:#0f0;background-color:#ff0">'+keyword+'</label>');

    return '<li><font face="Microsoft Yahei">['+number+'] '+title+'</font></li>';
}

function init()
{
    render_json_data();
}

$(function () {
    init();
});
