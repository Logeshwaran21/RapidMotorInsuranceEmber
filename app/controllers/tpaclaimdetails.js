import Controller from '@ember/controller';

export default Controller.extend({
   
    actions:{
    show0: function() {
        this.transitionToRoute('userhome');
  },
    show: function() {
        this.transitionToRoute('getuserdetails');
  },
  show1: function(){
    this.transitionToRoute('underwriter');
 },
   show2: function(){
  this.transitionToRoute('tpaclaimdetails');
},               
                      show3: function(){
                          this.transitionToRoute('claimdetails');
                              },
                              show4: function(){
                                  this.transitionToRoute('login');
                                      },
                                      show5:function () {
                                        var x = document.getElementById("reports");
                                        var y = document.getElementById("reports1");
                                  
                                        if (x.style.display === "block") {
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

claimdetails:function (){
    console.log("welcome")
    var mycontroller = this
    var userId = this.get('userId')
            console.log("userId", userId)
            var userdetails={
                "userId":userId
            }

    $.ajax({
        url: 'http://localhost:8082/retrieveClaim',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(userdetails),
        success: function (result) {
         
            console.log(JSON.stringify(result));
            console.log("retreiving---->", result);
            var name = result.result.docs[0].Records.patientData.companyName;
                    console.log("testing",name)
                    mycontroller.set('name',name)  
                    var registerId = result.result.docs[0].Records.patientData.registerId;
                    console.log("registerId",registerId)
                    mycontroller.set('registerId',registerId)
                    var notifiedDate = result.result.docs[0].Records.patientData.notifiedDate;
                    console.log("testing",notifiedDate)
                    mycontroller.set('notifiedDate',notifiedDate)
                    var DOL = result.result.docs[0].Records.patientData.DOL;
                    console.log("testing",DOL)
                    mycontroller.set('DOL',DOL)
                    var Category = result.result.docs[0].Records.patientData.Category;
                    console.log("testing",Category)
                    mycontroller.set('Category',Category)
                    var DOD = result.result.docs[0].Records.patientData.DOD;
                    console.log("testing",DOD)
                    mycontroller.set('DOD',DOD)
                    var claimAmount = result.result.docs[0].Records.patientData.claimAmount;
                    console.log("testing",claimAmount)
                    mycontroller.set('claimAmount',claimAmount)
                    var policyid = result.result.docs[0].Records.patientData.policyid;
                    console.log("testing",policyid)
                    mycontroller.set('policyid',policyid)
                    var status = result.result.docs[1].Records.status;
                    console.log("testing",status)
                    mycontroller.set('status',status)
                    var submitID = result.result.docs[1].Records.submitID;
                    console.log("testing",submitID)
                    mycontroller.set('submitID',submitID)            
                    var AmountPayerWouldPay = result.result.docs[1].Records.AmountPayerWouldPay;
                    console.log("testing",AmountPayerWouldPay)
                    mycontroller.set('AmountPayerWouldPay',AmountPayerWouldPay)
                    var AmountuserHavetopay = result.result.docs[1].Records.AmountuserHavetopay;
                    console.log("testing",AmountuserHavetopay)
                    mycontroller.set('AmountuserHavetopay',AmountuserHavetopay)
                    var message = result.result.docs[1].Records.message;
                    console.log("testing",message)
                    mycontroller.set('message',message)
                    var name = result.result.docs[0].Records.patientData.companyName;
                    console.log("testing",name)
                    mycontroller.set('name',name)

          
           
        }
        
    
    })
  
},

 }                             

    });

