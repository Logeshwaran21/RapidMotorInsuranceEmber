import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        show: function(){
            this.transitionToRoute('lprofile');
        },
        show1: function(){
            this.transitionToRoute('ltest');
        },
        blood: function(){
            this.transitionToRoute('ltest');
        },
        Cancer: function(){
            this.transitionToRoute('ltest');
        },
        Cholestrol: function(){
            this.transitionToRoute('ltest');
        },
        Temperature: function(){
            this.transitionToRoute('ltest');
        },
        Urine: function(){
            this.transitionToRoute('ltest');
        },
        show3: function(){
            this.transitionToRoute('login');
        },
        
    }

    
});
    
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(".side-nav .collapse").on("hide.bs.collapse", function() {                   
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
    });
    $('.side-nav .collapse').on("show.bs.collapse", function() {                        
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");        
    });
})

