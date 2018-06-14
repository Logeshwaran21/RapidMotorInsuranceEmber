import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show0: function() {
            this.transitionToRoute('home');
      },
        show: function() {
              this.transitionToRoute('prodoc');
        },
     show1: function(){
                this.transitionToRoute('records');
                    },
                    shows: function(){
                        this.transitionToRoute('plab');
                            },
                    show2: function(){
                        this.transitionToRoute('medication');
                            },         
                            show3: function(){
                                this.transitionToRoute('firstaid');
                                    },
                                    show4: function(){
                                        this.transitionToRoute('login');
                                            }
    
    }
    // actions: {
    //     show1: function(){
    // this.transitionToRoute('records');
    //     }
    // }
});
$(document).ready(function(){
    $("#mytable #checkall").click(function () {
            if ($("#mytable #checkall").is(':checked')) {
                $("#mytable input[type=checkbox]").each(function () {
                    $(this).prop("checked", true);
                });
    
            } else {
                $("#mytable input[type=checkbox]").each(function () {
                    $(this).prop("checked", false);
                });
            }
        });
        
        $("[data-toggle=tooltip]").tooltip();
    });

