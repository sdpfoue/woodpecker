$(function(){
    window.IndexView = Backbone.View.extend({
        el: $("#reader"),
        events: {
                    //"click #lhn-add-subscription"       : "quickadd"
                    "click #reader"       : "quickadd"
                },
    quickadd: function() {
                      alert('xxx');
                      console.log('aa');
                  },
    });
});
