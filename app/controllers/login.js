import Controller from '@ember/controller';

export default Controller.extend({
   actions: {
       Login: function() {

        var email=this.get('email');
        console.log("email :",email);

        var password=this.get('password');
        console.log("password :",password);
        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/Login",
            
            dataType: 'json',
            data:{email:email,password:password} ,
            cache: false,
            success: function(result) {



    }
}
    )



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
           
      },
     Register: function() {
        this.transitionToRoute('reg');
    }}
}
);
