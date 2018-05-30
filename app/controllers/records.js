import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show1: function(){
    this.transitionToRoute('records');
        }
    }
});
