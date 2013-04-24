$(function(){
    window.AppView = Backbone.View.extend({
        el: $("body"),
        events: {
                    "click #lhn-add-subscription"       : "quickaddurl",
                    "click #quick-add-close"            : "quickAddClose",
                    "click #quick-add-btn"              : "addFeed",
                    "click #register_link"              : "showRegisterForm",
                    "click #register-form-close"       : "closeRegisterForm",
                },
    quickaddurl: function() {
                     $("#quick-add-bubble-holder").attr('class', '');
                  },
    quickAddClose: function() {
                       $("#quick-add-bubble-holder").attr('class', 'hidden');
                   },
    showRegisterForm: function(){
                       $("#register").attr('class', '');
                      },
    closeRegisterForm: function(){
                           $("#register").attr('class', 'hidden');
                       },

    addFeed: function(){
                 $("#loading-area-container").removeClass('hidden');
                 $("#quick-add-bubble-holder").attr('class', 'hidden');
                 var feed = $("#quickadd").val();
                 $.post("/feed", {feed: feed}, function(result){
                    $("#loading-area-container").addClass('hidden');
                 });
             },
    });

    window.App = new AppView;
});
