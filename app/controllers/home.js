import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show: function() {
              this.transitionToRoute('prodoc');
        }

    
    }
});
