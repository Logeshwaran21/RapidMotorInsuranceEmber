import Controller from '@ember/controller';

export default Controller.extend({
   actions: {
       Login: function() {
var mycontroller=this
        // var email=this.get('email');
        // console.log("email :",email);

        // var password=this.get('password');
        // console.log("password :",password);
        var email = $('#email').val(); 
        var password = $('#password').val();
        
               if(email=="admin@gmail.com" && password == "12345")
               {
                fetch('http://localhost:8082/getCount', {
                    method: 'GET',

                }).then((response) => response.json()).then((responseJson) => {

                    // var rescountvalue = responseJson.count;
                    
                    // console.log("policy test", rescountvalue)
                    console.log("login response admin",responseJson)
                    var rescountvalue = [],
                        rescountvalue = responseJson.count;
                    console.log("Count Login console", rescountvalue)

                    mycontroller.set('rescountvalue', rescountvalue)
                    mycontroller.transitionToRoute('createpolicy')


                })
                //this.transitionToRoute('createpolicy');
               }
               else if(email=="underwriter@gmail.com"&& password == "123456"){
                fetch('http://localhost:8082/getCount2', {
                    method: 'GET',

                }).then((response) => response.json()).then((responseJson) => {

                    // var rescountvalue = responseJson.count;
                    
                    
                    // console.log("policy test", rescountvalue)
                    console.log("login response Underwriter",responseJson)
                    var rescountvalue = [],
                        rescountvalue = responseJson.count;
                    console.log("Count Login console", rescountvalue)

                    mycontroller.set('rescountvalue', rescountvalue)
                    mycontroller.transitionToRoute('underwriter')


                })
                // this.transitionToRoute('underwriter'); 
               }
               else {

        $.ajax({
            type: 'POST',
            url: "http://localhost:8082/Login",
            
            dataType: 'json',
            data:{email:email,password:password} ,
            cache: false,
            success: function(result) {
var alldetails=result
                console.log("getting all",alldetails);
                console.log("in loginjs",result)
                var getname= result.result.users.name
                console.log("name",getname)
                // console.log(mycontroller.set('rescountvaluename', getname))
                // mycontroller.transitionToRoute('userhome')
                //alert("Login Successful");
                var groupID = result.result.users.groupID
                       console.log("in loginjs", groupID);
                fetch('http://localhost:8082/getGroupName', {
                           method: 'POST',
                           headers: {
                               'Accept': 'application/json',
                               'Content-Type': 'application/json'

                           },

                           body: JSON.stringify({

                               "groupID": groupID,
                           }),
                       }).then((response) => response.json()).then((responseJson) => {
                           //var mycontroller=this
                        console.log("loginresponse", responseJson)
                           var groupIDvalue = [],
                               groupIDvalue = responseJson
                           console.log("group name console", groupIDvalue)

                        //    mycontroller.set('groupIDvalue', groupIDvalue)
                        //    mycontroller.transitionToRoute('userhome')

                           console.log(mycontroller.set('rescountvalue', groupIDvalue))
                           mycontroller.transitionToRoute('userhome')




                       })
            }
        })
                // var some=result.message;
                // if(some ==email)
                // {

                    // var getname= result
                   
                    // this.transitionToRoute(getname);
                    //mycontroller.transitionToRoute('userhome');
                   
                // }
                // else{
                //     alert("login failed")
                // }
 

    
   
      }
    },
     Register: function() {
        this.transitionToRoute('reg');
    }}
}
);
