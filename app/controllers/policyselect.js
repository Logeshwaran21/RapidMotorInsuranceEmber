import Controller from '@ember/controller';

export default Controller.extend({
    policy: [],
    isFancy: false,
    //policyval: checkingdata(),

    actions: {

        selectpolicy: function () {
            fetch('http://localhost:8082/getcaptivepolicy', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                }


            }).then((response) => response.json()).then((responseJson) => {
                var mycontroller = this
                var res = responseJson
                console.log("Captive Result policy ", res)
                var bulkdata = res.message
                //bulkprocess:{'bulkdata':true}
                console.log("Create  Captive policy ", bulkdata)
                mycontroller.set('bulk', bulkdata)


            })
            //this.controllerFor('notification').set('bulkdata', bulkdata)

            //this.transitionToRoute(notification, 'bulkdata')
            //this.get(bulkdata).transitionToRoute(notification)
            //this.transition(notification)

        },
        checkingdata: function (item) {
            //var mycontroller = this
            console.log("key",item)
            var policyid = item.Key
            console.log("policyid", policyid)
            // mycontroller.set(policyid)
            // // var policyidvalue = this.set("policyid")
            // console.log("policyidvalue", policyidvalue)

            var policyname = item.Record.policyName
            //var policyname = this.set("policyname")
            console.log("policyname", policyname)

            var policycatagory = item.Record.policycatagory
            //var policycatagory = this.set("policycatagory")
            console.log("policycatagory", policycatagory)

            var policypercentage = item.Record.policypercentage
            //var policypercentage = this.set("policypercentage")
            // console.log("policypercentage", policy)

            var rules = item.Record.rules
            //var rules = this.set("rules")
            console.log("rules", rules)
            //mycontroller.routeFor('notification').set('policy', policypercentage)
            // mycontroller.set("policy", policy
            //mycontroller.send('valuesubmit')
            //return policy
            var data = {
                "policyid": policyid,
                "policyname": policyname,
                "policycatagory": policycatagory,

                "policypercentage": policypercentage,
                "rules": rules
            }
            return data

           


        },

        valuesubmit: function () {
            this.send("checkingdata");
            console.log("data",data)
            var transactiondata = {
                "policyid": policyid,
                "policyname": policyname,
                "policycatagory": policycatagory,
                "policypercentage": policy,
                "rules": rules
            }
            console.log(transactiondata)
            $.ajax({
                url: 'http://localhost:8082/selectPolicyember',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(transactiondata),
                success: function (response) {
                    console.log(JSON.stringify(response));
                    console.log("res123...>>>", response);
                    var message = response.result.message
                    alert('' + message + '');
                }
            })


        }
        // selectedvariables: Ember.computed.filterBy('model', 'isSelected', true),
        // policyid:Key,
        // init() {
        //     this._super(...arguments);
        //     // this.set('AllCountries',[{"code":"US", "name":"USA"}]);
        //     //this.set('countries',["US", "CA"]);
        // }
        // spamDecide: function (model) {
        //     var checkedModels = model.filterBy('isCheck');
        //     console.log(checkedModels);
        // },
        // handleCheckboxChange
        //     : function () {
        //         if (this.get('value')) {
        //             //    var policyid=item.policyid
        //             // var policyid = JSON.stringify(data.Key)
        //             //         mycontroller.set('policyid', policyid)
        //             return 'hello'

        //         }
        //     }
        // handleChange: function () {
        //     if (this.get('isFancy')) {
        //         //    var policyid=item.policyid
        //         // var policyid = JSON.stringify(data.Key)
        //         //         mycontroller.set('policyid', policyid)
        //         return 'hello'

        //     }
        // }

        // myChangeAction(value) {
        //     mycontroller.toggleProperty(cbState);
        //     console.log("checkbox js console", state)
        // }
        // checkboxChanged(rowId, isChecked) {
        //     Ember.$('#txt-' + rowId).prop('disabled', !isChecked);
        // }
        // checkboxClicked(model) {
        //     this.get('model').toggleProperty('isChecked');
        //     // do all the other things
        // }
        // handleChange: function (event, data) {
        //     debugger;
        //     if (event.target.value == true) {

        //         var policyid = JSON.stringify(data.Key)
        //         mycontroller.set('policyid', policyid)
        //         console.log("policyid console", policyid)
        //         // function to set all the other properties to true
        //     }
        // }
        // handlechange:function() {
        // spamDecide: function (model) {
        //     var checkedModels = model.filterBy('isCheck');
        //     console.log(checkedModels);
        // },

        // const state = this.get('cbState');
        // if (state == true) {


        //     var policyid = JSON.stringify(data.Key)
        //     this.setState({ policyid: policyid })
        //     console.log("policyid console", policyid)

        //     var policyName = JSON.stringify(data.Record.policyName)
        //     this.setState({ policyName: policyName })
        //     console.log("policyName console", policyName)

        //     var policycatagory = JSON.stringify(data.Record.policycatagory)
        //     this.setState({ policycatagory: policycatagory })
        //     console.log("policycatagory console", policycatagory)

        //     var rules = JSON.stringify(data.Record.rules)
        //     this.setState({ rules: rules })
        //     console.log("rules console", rules)

        //     var policypercentage = JSON.stringify(data.Record.policypercentage)
        //     this.setState({ policypercentage: policypercentage })
        //     console.log("policypercentage console", policypercentage)

        //     var inputradio = JSON.stringify(data.Record.inputradio)
        //     this.setState({ inputradio: inputradio })
        //     console.log("inputradio console", inputradio)
        // }
        //else {
        //     return alert("Please select atleast one Rule")
        // }
        //}
    }

});