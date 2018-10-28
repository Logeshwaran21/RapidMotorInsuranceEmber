import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show: function() {
              this.transitionToRoute('prodoc');
    },
     show1: function(){
        this.transitionToRoute('records');
     },
       show2: function(){
      this.transitionToRoute('medication');
    },         
      show3: function(){
     this.transitionToRoute('firstaid');
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
    show6: function(){
        this.transitionToRoute('home2');
         },
    show5:function () {
      var x = document.getElementById("reports");
      var y = document.getElementById("reports1");

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
 
}
}

    
});
