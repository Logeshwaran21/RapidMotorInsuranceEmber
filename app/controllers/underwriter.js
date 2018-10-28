import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        updateValue: function (value) {
            this.set('selectedvalue', value);
            //console.log(this.get('selectedvalue'))
        },
        tpa: function () {
            var insuredId = this.get('insuredId')
            console.log("insuredId", insuredId)
            var claimAmount = this.get('claimAmount')
            console.log("claimAmount", claimAmount)
            var Amounttopay = this.get('Amounttopay')
            console.log("Amounttopay", Amounttopay)
            var Reason = this.get('Reason')
            console.log("Reason", Reason)

            var status = this.get('selectedvalue')
            console.log("status", status)

            var transactiondata = {
                "insuredId": insuredId,
                "claimAmount": claimAmount,
                "Amounttopay": Amounttopay,
                "Reason": Reason,
                "status": status

            }
            $.ajax({
                url: 'http://159.65.148.82:8082/underwriter',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(transactiondata),
                success: function (response) {
                    console.log(JSON.stringify(response));
                    console.log("res123...>>>", response);
                    var message=response.message
                    alert('' + message + '');
                }
            })


        },
        show: function() {
            this.transitionToRoute('getclaimdetails');
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
    }
});