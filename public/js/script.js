$(function(){
    window.AppView = Backbone.View.extend({
        el: $("#reader"),
        events: {
                    "click #lhn-add-subscription"       : "quickaddurl",
                },
    quickaddurl: function() {
                     $("#quick-add-bubble-holder").attr('class', '');
                  },
    });

    window.App = new AppView;
});
