$(document).ready(function()
{

    $("div#dsiplayMessageDIV_Id").hide();

    $("input[name=showHide]").on("click",function()
    {
        var selectedvalue = $("input[name=showHide]:clicked").val();

        if(selectedvalue == "Show")
        {
            $("div#displayMessageDIV_Id").show();
        }else if(selectedvalue == "Hide"){
            $("div#displayMessageDIV_Id").hide();
        }
    });

});

