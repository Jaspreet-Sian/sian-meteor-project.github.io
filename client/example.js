Template.parent.events({
    'click .logId': function () {
       Template.instance().variable = "parent";
       this._id=12345;
       console.log(Template.instance().variable);
     }
});

Template.firstChild.onCreated(function(){
  var tmpl= this;
  console.log(tmpl);
});


Template.adminSelectUser.events({
   'click .selectUser': function(template){
      // var userString = this.valueOf();
  // var parentId = Template.parentData(2)._id;
  var data = Template.currentData();
        console.log("heheh");
        console.log(data.parent,"child");
    }
 });
