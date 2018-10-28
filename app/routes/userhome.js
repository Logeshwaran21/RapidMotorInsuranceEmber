import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // var usertype=this.controllerFor('login').get('user');
        //var mycontroller = this
        var createpolicyController = this.controllerFor('userhome');
        var user = this.controllerFor('login').get('rescountvalue');
        var user1 = this.controllerFor('login').get('rescountvaluename');
        // var gvalue=[],
        console.log("routegroupname", user1)
        console.log("routegroupname", user)

        // createpolicyController.set('user1', user1);
        // console.log(createpolicyController.get('user1'));

        createpolicyController.set('user', user);
        console.log(createpolicyController.get('user'));
        //mycontroller.set('getid', user)

    }
});
