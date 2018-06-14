import Controller from '@ember/controller';

export default Controller.extend({
   actions: {
       Login: function() {
        var category = $('#id_of_select').val(); 
           if(category=="Doctor")
           {
       
            this.transitionToRoute('home');
           }
           else if(category=="Lab Reporter"){
            this.transitionToRoute('lhome'); 
           }
           else if(category=="General User"){
            this.transitionToRoute('phome'); 
           }
        
        
//            alert();
//            var email = $('#loginEmail').val();
//            console.log(email);
//            var password = $('#loginPassword').val();
//            console.log(password);
//            var category = $('#id_of_select').val();
//            console.log(category);
//            var login = {
//                "email":email,
//                "password":password,
//                "category":category
//            }
           
           
//            return $.ajax({
//            url:'http://localhost:8082/login',
//            type: 'POST',
//            contentType: 'application/json',
//            data: JSON.stringify(login),
//            success: function(response) {
//            console.log(JSON.stringify(response));
//            alert(''+response.message+'');

//                if(category == "doctor"){
//                    this.transitionToRoute('home');
// console.log(result)
//                 }else if(category == "patient"){
//                     this.transitionToRoute('phome');
//  console.log(result)
//                  } else if(category == "lab"){
//                     this.transitionToRoute('lhome');
//  console.log(result)
//                  }
//                 else
//                   console.log("Invalid Emailid and Password")
//                }});
           
//            }
       
       
           
     
     },
     Register: function() {
        this.transitionToRoute('reg');
    }}
}
);