$(function(){
    window.AppView = Backbone.View.extend({
        el                                        : $("body"),
        events                                    : {
                    "click #lhn-add-subscription" : "quickaddurl",
                    "click #quick-add-close"      : "quickAddClose",
                    "click #quick-add-btn"        : "addFeed",
                    "click #register_link"        : "showRegisterForm",
                    "click #register-form-close"  : "closeRegisterForm",
                    "click #login_link"           : "showLoginForm",
                    "click #login-form-close"     : "closeLoginForm",
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
    showLoginForm: function(){
                       $("#login").attr('class', '');
                      },
    closeLoginForm: function(){
                           $("#login").attr('class', 'hidden');
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



    window.AppRoute = Backbone.Router.extend({
        routers: {
                     "test" : "func"
                 },
                 func: function(){
                           console.log('abc');
                       }


    });

    window.App = new AppView;
    window.BackboneRouter = new AppRoute();
    Backbone.history.start();
});
