import Controller from '@ember/controller';



export default Controller.extend( {
    isShowingModal: false,
    showLogin: true,
    ShowRequest: false, //this is to show request id
   
    actions: {
        userSubmit: function() {
            console.log("115")
            var Name =$('#Name').val();
            console.log(Name);
            var Address =$('#Address').val();
            console.log(Address);
            var Phone = $('#Phone').val();
            console.log(Phone);
            var groupname = $('#groupname').val();
            console.log(groupname);
            var email = $('#email').val();
            console.log(email);
            var Password = $('#Password').val();
            console.log(Password);
            var confirmpassword = $('#confirmpassword').val();
            console.log(confirmpassword);
            var captiveName= $('#captiveName').val();
            console.log(captiveName);
            var parent = $('#parent').val();
            console.log(parent);
            var employeeID= $('#Name').val();
            console.log(employeeID);
            var captive = $('#captive').val();
            console.log(captive);
            var business =$('#business').val();
            console.log(business);
            var organization =$('#organization').val();
            console.log(organization);

            var mycontroller = this;
            var dataString = {
                "Name": Name,
                "Address": Address,
                "Phone":Phone,
                "groupname":groupname,
                "email":email,
                "Password":Password,
               // "confirmpassword":confirmpassword,
                "captiveName":captiveName,
                "parent":parent,
                "employeeID":employeeID,
                "captive":captive,
                "business":business,
                "organization":organization



                //    "usertype": usertype,
            };
            console.log(JSON.stringify(dataString));
                console.log(email);
                console.log(Password);
                return $.ajax({
                    url: 'http://localhost:8082/registerUser',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(dataString),
                    success: function(response) {
                        console.log((response));
                        var message = response.message
                        console.log("message", message)
                        if (message === "Registration` Successful") {
                            mycontroller.set('message', message)
                            
                            var status = response.status
                            mycontroller.set('usertype', usertype)
                            console.log(usertype)
                        } else {
                            console.log("else")
                        }

                    }
                })
            } 
    },
    });