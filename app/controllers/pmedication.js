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
    
});

