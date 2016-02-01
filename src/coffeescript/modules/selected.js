$(function(){
    $("[data-role='dateType']").on("click",function(){
        $("[class$='active']").removeClass("active");
        $(this).addClass("active");

        var  day = new Date(2014,4,0); 
        var daycount = day.getDate();
        var week=daycount%4;
        
        var id=$("[class$='active']").eq(0).attr('id');
        if(id=="byDay"){
            $("#inputGroup").css("display","table");
            $("#prev").attr("onfocus","var next=$dp.$('next');WdatePicker({isShowClear:false,isShowOK:false,onpicked:function(){next.focus();},maxDate:'#F{$dp.$D(\\'next\\')}',skin:'default',dateFmt:'yyyy年MM月dd日'})");
            $("#next").attr("onfocus","WdatePicker({isShowClear:false,isShowOK:false,minDate:'#F{$dp.$D(\\'prev\\')}',skin:'default',dateFmt:'yyyy年MM月dd日'})");
        }else if(id=="byWeek"){
            $("#inputGroup").css("display","table");
            $("#prev").attr("onfocus","var next=$dp.$('next');WdatePicker({isShowWeek:true,isShowClear:false,isShowOK:false,onpicked:function(){next.focus();},maxDate:'#F{$dp.$D(\\'next\\')}',skin:'default',dateFmt:'yyyy年MM月dd日第ww周'})");
            $("#next").attr("onfocus","WdatePicker({isShowClear:false,isShowOK:false,minDate:'#F{$dp.$D(\\'prev\\')}',skin:'default',dateFmt:'yyyy年MM月dd日第ww周'})");
        }else{
            $("#inputGroup").css("display","table");
            $("#prev").attr("onfocus","var next=$dp.$('next');WdatePicker({isShowClear:false,isShowOK:false,quickSel:12,onpicked:function(){next.focus();},maxDate:'#F{$dp.$D(\\'next\\')}',skin:'default',dateFmt:'yyyy年MM月'})");
            $("#next").attr("onfocus","WdatePicker({isShowClear:false,isShowOK:false,minDate:'#F{$dp.$D(\\'prev\\')}',skin:'default',dateFmt:'yyyy年MM月'})");
        }
    });
    $("#Largearea").on("change",function(){
        var areavalue = $("#Largearea").val();
        var arealength = $('table').find('tr').length;
        if (areavalue==1)
        {
            for(var i=0;i<arealength;i++)
            {
                $("tr:eq("+i+") td:eq(0)").show();
            }
        }
    })
    $("#province").on("change",function(){
        var provincevalue = $("#province").val();
        var provincelength = $('table').find('tr').length;
        if (provincevalue==1)
        {
            for(var i=0;i<provincelength;i++)
            {
                $("tr:eq("+i+") td:eq(1)").show();
            }
        }
    })
    $("#city").on("change",function(){
        var cityvalue = $("#province").val();
        var citylength = $('table').find('tr').length;
        if (cityvalue==1)
        {
            for(var i=0;i<citylength;i++)
            {
                $("tr:eq("+i+") td:eq(2)").show();
            }
        }
    })
})



