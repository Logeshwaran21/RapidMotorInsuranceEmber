import Controller from '@ember/controller';

export default Controller.extend({


    actions: {

        show5:function () {
            var x = document.getElementById("createpolicy");
            var y = document.getElementById("approvepolicy");
      
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        
          
          if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
       
      },

        createpolicy: function () {
            var policyname = this.get('policyname')
            console.log("policyname", policyname)
            var policycatagory = this.get('policycatagory')
            console.log("policycatagory", policycatagory)
            var paymentrule = this.get('paymentrule')
            console.log("paymentrule", paymentrule)
            var transactiondata = {
                "policyname": policyname,
                "policycatagory": policycatagory,
                "paymentrule": paymentrule
            }

            $.ajax({
                url: 'http://159.65.148.82:8082/createpolicyember',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(transactiondata),
                success: function (response) {
                    console.log(JSON.stringify(response));
                    console.log("res123...>>>", response);

                    var message = response.result
                    var policyid = response.policyid

                    alert('' + message + '\n' + policyid);
                }
            })
            
        },
        adminnotification:function(){
            fetch('http://159.65.148.82:8082/Notification', {
           method: 'GET',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'

           }
       }).then((result) => result.json()).then((result) => {
           console.log("notify data =======>", result)
           var mycontroller=this
           var res = result.message
           console.log("admincreatepolicynotification",res)
           mycontroller.set('res',res)
           
       })
       
        },
        checkingdata: function (item) {
            //var mycontroller = this
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

            // var policypercentage = item.Record.policypercentage
            //var policypercentage = this.set("policypercentage")
            // console.log("policypercentage", policy)

            var rules = item.Record.rules
            //var rules = this.set("rules")
            console.log("rules", rules)
            // var transactiondata = {
            //     "policyid": policyid,
            //     "policyname": policyname,
            //     "policycatagory": policycatagory,

            //     "policypercentage": policypercentage,
            //     "rules": rules
            // }
            //mycontroller.routeFor('notification').set('policy', policypercentage)
            // mycontroller.set("policy", policy
            //mycontroller.send('valuesubmit')
            //return policy

          
        },
        Approve:function(item){
      
            var policyid = item.Key
            console.log("Approvedpolicyid", policyid)
            // mycontroller.set(policyid)
            // // var policyidvalue = this.set("policyid")
            // console.log("policyidvalue", policyidvalue)

            var policyname = item.Record.policyName
            //var policyname = this.set("policyname")
            console.log("Approvedpolicyname", policyname)

            var policycatagory = item.Record.policycatagory
            //var policycatagory = this.set("policycatagory")
            console.log("Approvedpolicycatagory", policycatagory)

            // var policypercentage = item.Record.policypercentage
            //var policypercentage = this.set("policypercentage")
            // console.log("policypercentage", policy)

            var rules = item.Record.rules
            var transactiondatavalue = {
                "policyid": policyid,
                "policyname": policyname,
                "policycatagory": policycatagory,
                // "policypercentage": policypercentage,
                "rules": rules
            }
            console.log(transactiondatavalue)
            $.ajax({
                url: 'http://159.65.148.82:8082/notifyApprove',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(transactiondatavalue),
                success: function (response) {
                    console.log(JSON.stringify(response));
                    console.log("res123...>>>", response);
                    var message = response.result.message
                    alert('' + message + '');
                }
            })

        }
    }
});