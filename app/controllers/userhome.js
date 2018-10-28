import Controller from '@ember/controller';
var _data
export default Controller.extend({
     //data :null,

    actions: {

        selectpolicy: function () {
            fetch('http://159.65.148.82:8082/getcaptivepolicy', {
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
        // checkingdata: function (item) {
        //     //var mycontroller = this
        //     console.log("key",item)
        //     var policyid = item.Key
        //     console.log("policyid", policyid)
        //     // mycontroller.set(policyid)
        //     // // var policyidvalue = this.set("policyid")
        //     // console.log("policyidvalue", policyidvalue)

        //     var policyname = item.Record.policyName
        //     //var policyname = this.set("policyname")
        //     console.log("policyname", policyname)

        //     var policycatagory = item.Record.policycatagory
        //     //var policycatagory = this.set("policycatagory")
        //     console.log("policycatagory", policycatagory)

        //     var policypercentage = item.Record.policypercentage
        //     //var policypercentage = this.set("policypercentage")
        //     // console.log("policypercentage", policy)

        //     var rules = item.Record.rules
        //     //var rules = this.set("rules")
        //     console.log("rules", rules)
        //     //mycontroller.routeFor('notification').set('policy', policypercentage)
        //     // mycontroller.set("policy", policy
        //     //mycontroller.send('valuesubmit')
        //     //return policy
            
        //     var item = {}
        //     item['policyid'] = policyid
        //     item['policyname'] = policyname
        //     item['policycatagory'] = policycatagory
        //     item['policypercentage'] = policypercentage
        //     item['rules'] = rules
        // //    var mydata = [
        // //     policyid=policyid,
        // //     policyname=policyname,
        // //     policycatagory=policycatagory,
        // //     policypercentage=policypercentage,
        // //     rules=rules
        // //         // "policyid"= policyid,
        // //         // "policyname"= policyname,
        // //         // "policycatagory"= policycatagory,

        // //         // "policypercentage"= policypercentage,
        // //         // "rules"= rules
        // //    ]
        //     _data.push(item)


        //     // var data = {
        //     //     "policyid": policyid,
        //     //     "policyname": policyname,
        //     //     "policycatagory": policycatagory,

        //     //     "policypercentage": policypercentage,
        //     //     "rules": rules
        //     // }
        //     // return data

            


        // },
        //Approve

        Approve: function (item) {
            //console.log("bulk",data)
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
    
                //var policypercentage = item.Record.policypercentage
                //var policypercentage = this.set("policypercentage")
                // console.log("policypercentage", policy)
    
                var rules = item.Record.rules
                //var rules = this.set("rules")
                console.log("rules", rules)

        var data = {
                "policyid": policyid,
                "policyname": policyname,
                "policycatagory":policycatagory,
                // "policypercentage": policypercentage,
                "rules": rules
            }
            
            $.ajax({
                url: 'http://159.65.148.82:8082/selectPolicyember',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (response) {
                    console.log(JSON.stringify(response));
                    console.log("res123...>>>", response);
                    var message = response.result.message
                    alert('' + message + '');
                }
            })


        },

        show: function() {
              this.transitionToRoute('getclaimdetails');
    },
     show1: function(){
        this.transitionToRoute('policyselect');
     },
       show2: function(){
      this.transitionToRoute('submitclaim');
    },         
      show3: function(){
     this.transitionToRoute('claimdetails');
     },
     show4: function(){
    this.transitionToRoute('login');
     },
    //  show6:function () {
    //   var x = document.getElementById("reports");
    //   var y = document.getElementById("reports1");
    //   x.style.display= "none";
    //   y.style.display= "none";

    //  },

    show5:function () {
      var x = document.getElementById("policy");
    //   var y = document.getElementById("reports1");

      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "block";
      }
  
    
//     if (y.style.display === "none") {
//       y.style.display = "block";
//   } else {
//       y.style.display = "none";
//   }
 
},
selectpolicy: function () {
    fetch('http://159.65.148.82:8082/getcaptivepolicy', {
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

getrating: function(){
    fetch('http://159.65.148.82:8082/getRating', {
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
 
         }
 
 
     }).then((result) => result.json()).then((result) => {
         console.log("current rating =======>", result)
         var mycontroller = this
         var res = result.rating
         console.log("rating",res)
         mycontroller.set('result',res)  
        //  mycontroller.transistionTORoute(result,'home');
         //mycontroller.transitionToRoute('res',"home")
     console.log("homerating",res)
     })
 
 },





}

    
});




