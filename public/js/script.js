$(function(){
    window.AppView = Backbone.View.extend({
        el: $("#reader"),
        events: {
                    "click #lhn-add-subscription"       : "quickaddurl",
                    "click #quick-add-close"            : "quickAddClose",
                },
    quickaddurl: function() {
                     $("#quick-add-bubble-holder").attr('class', '');
                  },
    quickAddClose: function() {
                       $("#quick-add-bubble-holder").attr('class', 'hidden');
                   }
    });

    window.App = new AppView;
});
