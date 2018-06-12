import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show: function() {
              this.transitionToRoute('pprodoc');
        },
     show1: function(){
                this.transitionToRoute('precords');
                    },
                    show2: function(){
                        this.transitionToRoute('pmedication');
                            },         
                            show3: function(){
                                this.transitionToRoute('pfirstaid');
                                    },
                                    show4: function(){
                                        this.transitionToRoute('plogin');
                                            }
    
    }
});
