$(document).ready(function(){
        $("<select />", {class:
    'visible-phone'}).appendTo("#tabs-principal .zonaselect");

        // Populate dropdowns with the first menu items
        $("#tabs-principal .nav-pills li a").each(function() {
            var el = $(this);
            var selected = false;
            var padre = el.parent();

            if($(padre).hasClass('active'))
            {
                selected = 'selected';
            }
            $("<option />", {
                "value"   : el.attr("href"),
                "text"    : el.text(),
                "selected" : selected
            }).appendTo(".zonaTabs select");
        });

        //make responsive dropdown menu actually work           
        $("#tabs-principal select").change(function() {
            //window.location = $(this).find("option:selected").val();
            $('.convertibleCombo a[href="'+$(this).find("option:selected").val()+'"]').tab('show');
        });

        $('#tabs-principal li a[data-toggle="tab"]').on('shown', function (e) {
          var str = e.target;
          str = $(e.target).attr('href');
          $("#tabs-principal .zonaselect select").val(str);
          
           // activated tab
          //alert(e.relatedTarget) // previous tab
        })
});    