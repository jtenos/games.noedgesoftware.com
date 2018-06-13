/* global jQuery, app */

jQuery(function() {
    jQuery("#nav-list > li").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        app.actions[jQuery(this).data("action")]();
    });  
});
