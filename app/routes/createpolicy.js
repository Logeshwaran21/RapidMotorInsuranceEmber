import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // var usertype=this.controllerFor('login').get('user');
        //var mycontroller = this
        var createpolicyController = this.controllerFor('createpolicy');
        var user = this.controllerFor('login').get('rescountvalue');
        // var gvalue=[],

        console.log("createpolicyroute", user)

        createpolicyController.set('user', user);
        console.log(createpolicyController.get('user'));
        //mycontroller.set('getid', user)

    }
});
