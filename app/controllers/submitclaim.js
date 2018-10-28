import Controller from '@ember/controller';

export default Controller.extend({
    actions: {

       


        show0: function() {
                        this.transitionToRoute('userhome');
                  },
                    show: function() {
                          this.transitionToRoute('prodoc');
                    },
                 show1: function(){
                        this.transitionToRoute('policydetails');
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


        setSelection: function (selected) {
            this.set('Category', selected);
            console.log(this.get('Category'))
        },
        

        submitclaim: function () {
            var companyName = this.get('companyName')
            console.log("companyName", companyName)
            var registerId = this.get('registerId')
            console.log("registerId", registerId)
            var notifiedDate = this.get('notifiedDate')
            console.log("notifiedDate", notifiedDate)
            var DOL = this.get('DOL')
            console.log("DOL", DOL)
            var Category = this.get('Category')
            console.log("Category", Category)
            var DOD = this.get('DOD')
            console.log("DOD", DOD)
            var claimAmount = this.get('claimAmount')
            console.log("claimAmount", claimAmount)
            var policyid = this.get('policyid')
            console.log("policyid", policyid)

            var transactiondata = {
              

                "companyName": companyName,
                "registerId": registerId,
                "notifiedDate": notifiedDate,
                "DOL": DOL,
                "Category": Category,
                "DOD": DOD,
                "claimAmount": claimAmount,
                "policyid": policyid

            }
            $.ajax({
                url: 'http://localhost:8082/submitClaim',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(transactiondata),
                success: function (response) {
                    console.log(JSON.stringify(response));
                    console.log("res123...>>>", response);
                    var response=response.submitID
                    alert('Your Submit ID:' + response);
                }
            })


        }
    }
});

