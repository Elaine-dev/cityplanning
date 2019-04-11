$("#edit-state").change(function () {
    if($(this).val() == "") $(this).addClass("empty");
    else $(this).removeClass("empty")
});

$("#edit-state").change();