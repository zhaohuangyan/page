$(function(){
    $("[data-role='dateType']").on("click",function(){
        $("[class$='active']").removeClass("active");
        $(this).addClass("active");
        
        var id=$("[class$='active']").eq(0).attr('id');
        if(id=="byDay"){
            $("#inputGroup").css("display","table");
            $("#prev").attr("onfocus","var next=$dp.$('next');WdatePicker({isShowClear:false,isShowOK:false,onpicked:function(){next.focus();},maxDate:'#F{$dp.$D(\\'next\\')}',skin:'default',dateFmt:'yyyy年MM月dd日'})");
            $("#next").attr("onfocus","WdatePicker({isShowClear:false,isShowOK:false,minDate:'#F{$dp.$D(\\'prev\\')}',skin:'default',dateFmt:'yyyy年MM月dd日'})");
        }else if(id=="byWeek"){
            $("#inputGroup").css("display","table");
            $("#prev").attr("onfocus","var next=$dp.$('next');WdatePicker({skin:'default',isShowWeek:true,onpicked:function() {$dp.$('d_1').value=$dp.cal.getP('W','W')},dateFmt:'yyyy年MM月dd日第W周',isShowWeek:true,isShowClear:false,isShowOK:false,onpicked:function(){next.focus();},maxDate:'#F{$dp.$D(\\'next\\')}'})");
            $("#next").attr("onfocus","WdatePicker({skin:'default',isShowWeek:true,onpicked:function() {$dp.$('d_1').value=$dp.cal.getP('W','W')},dateFmt:'yyyy年MM月dd日第W周',isShowClear:false,isShowOK:false,minDate:'#F{$dp.$D(\\'prev\\')}'})");
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
    var length = $('table').find('tr').length;
    for(var i=0;i<length;i++)
    {
        $(".td_1").hide();
        $(".td_2").show();
    }
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
    $("#shows").on("change",function(){
        var value = $("#shows").val();
        var lengths = $('table').find('td').length;
        if (value==1)
        {
            for(var i=0;i<length;i++)
            {
                for(var j=0;j<lengths;j++)
                {
                    $("tr:eq("+i+") td:eq("+j+")").show();
                }
            }
        }else if (value==2)
        {
            for(var i=0;i<length;i++)
            {
                $("tr:eq("+i+") td:eq(8)").show();
            }
        }else if (value==3)
        {
            for(var i=0;i<length;i++)
            {
                $("tr:eq("+i+") td:eq(9)").show();
            }
        }else if (value==4)
        {
            for(var i=0;i<length;i++)
            {
                $("tr:eq("+i+") td:eq(10)").show();
            }
        }else if (value==5)
        {
            for(var i=0;i<length;i++)
            {
                $("tr:eq("+i+") td:eq(11)").show();
            }
        }else if (value==6)
        {
            for(var i=0;i<length;i++)
            {
                $("tr:eq("+i+") td:eq(12)").show();
            }
        }else if (value==7)
        {
            for(var i=0;i<length;i++)
            {
                $("tr:eq("+i+") td:eq(13)").show();
            }
        }else if (value==8)
        {
            for(var i=0;i<length;i++)
            {
                $("tr:eq("+i+") td:eq(14)").show();
            }
        }
    })
    $('#byDay').click(function(){
        $("#byWeek").attr("disabled","disabled")
        $("#byMonth").attr("disabled","disabled")
    })
    $('#byWeek').click(function(){
        $("#byDay").attr("disabled","disabled")
        $("#byMonth").attr("disabled","disabled")
    })
    $('#byMonth').click(function(){
        $("#byWeek").attr("disabled","disabled")
        $("#byDay").attr("disabled","disabled")
    })
    $("#area_1").click(function(){
        for(var i=0;i<length;i++)
        {
            $("tr:eq("+i+") td:eq(1)").show();
        }
    })
})  



