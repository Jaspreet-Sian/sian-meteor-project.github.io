

Template.registerHelper(
  'formatDate' , function(context, options){
    if(context)
    return moment(context).format('YYYY-MM-DD');
  }
);
Template.registerHelper('selected', function(key, value){
       return key == value? {selected:'selected'}: '';
});

Template.tabularForm.onRendered(function(){
  Session.setDefault('editRecordId', null);
  Session.set("nextSearchedTasks",0);
  Session.setDefault('skip',0);
  Session.set('nextSkip',0);
  Session.set('searchedTasks',0);
})

Template.tabularForm.onDestroyed(function(){
  Session.setDefault('editRecordId', null);
  Session.set("nextSearchedTasks",null);
  Session.setDefault('skip',null);
})

Template.tabularForm.helpers({
  'getResult': function(){
    console.log(" tabularForm helper");

      // var data= fetchData();
        fetchData();
        taskPagerButtonActions();
        // taskPagerButtonActions();
        return Session.get('searchedTasks');
  },
  'editing': function(){
    return Session.equals('editRecordId', this._id);
  },
  'totalhours': function(){
     var from= Session.get("timeFrom");
     var to= Session.get("timeTo");
      if((from)||(to)){
        var fromArr=[0,0];
        var toArr=[0,0];
        var totalMinutes=0, totalHours=0;
        fromArr= from.split(":");
        if(to){
          toArr= to.split(":");
          totalHours = Number(toArr[0]) - Number(fromArr[0]);
          totalMinutes = Number(toArr[1]) - Number(fromArr[1]);
        }

        if(totalMinutes < 0){
         if(totalHours != 0){
           totalMinutes += 60;
           totalHours -= 1;
        }
        else if (totalHours == 0) {
          totalMinutes = 0;
        }
       }
       if(totalMinutes < 10){
           totalMinutes = "0" + String(totalMinutes);
       }
       if(totalHours < 10){
           totalHours = "0" + String(totalHours);
       }
      var time= totalHours + ":" + totalMinutes;
      return time;
     }
     else {
       return "00:00";
     }
  },
  minTime: function(){
    return Session.get("timeFrom");
  }

});

Template.tabularForm.events({
  'click .deleteRecord': function(){
    event.preventDefault();
    var id= this._id;
    Meteor.call('deleteTask',id);
  },
  'click .editRecord': function(){
    event.preventDefault();
    Session.set('editRecordId', this._id);
  },
  'click .cancelBtn': function(){
    event.preventDefault();
    Session.set('editRecordId', null);
  },
  'click .updateBtn': function(){
    event.preventDefault();
    updateRecord();
  },
  'input .table-from': function(){
    var from= document.getElementById("tableFrom").value;
    document.getElementById("tableTo").value= from;
    var to= document.getElementById("tableTo").value;
    Session.set("timeFrom", from);
    Session.set("timeTo", to);
    document.getElementById("tableHours").value = calculateHours();
  },
  'input .table-to': function(){
    var to= document.getElementById("tableTo").value;
    var from= document.getElementById("tableFrom").value;
    Session.set("timeFrom", from);
    Session.set("timeTo", to);
    document.getElementById("tableHours").value = calculateHours();
  },
  'click .previous' : function(event,tmpl) {
      event.preventDefault();
      if(Session.get('skip')>=10){
        Session.set('skip',Session.get('skip')-10);
        console.info(Session.get('skip'),"pppp");
        Session.set('nextSearchedTasks',1);
        Session.set('nextSkip',1);
      }
  },
'click .next' : function(event,tmpl){
  event.preventDefault();
  Session.set('skip',Session.get('skip')+10);
  console.info(Session.get('skip'),"nxnxnx");
  var skipCount = Session.get('skip')+10;
  Session.set('nextSkip',skipCount);
}
});
var updateRecord = function(){
  var editRecord = {
    taskName: document.getElementById("tableTaskName").value,
    from: document.getElementById("tableFrom").value,
    to: document.getElementById("tableTo").value,
    hours: document.getElementById("tableHours").value,
    date: document.getElementById("tableDate").value,
    price: document.getElementById("tablePrice").value,
    classes: document.getElementById("tableExistingClasses").value,
    course: document.getElementById("tableExistingCourses").value,
    task: document.getElementById("tableTask").value
  }
  var id= Session.get('editRecordId');

  if(Meteor.call('updateTask', id, editRecord)){
      sAlert.error("Updated");
  }
  else {
      sAlert.error("not Updated");
  }
  Session.set('editRecordId', null);
}


var calculateHours = function(){
  var from= Session.get("timeFrom");
  var to= Session.get("timeTo");
  console.log(from,"from");
  console.log(to,"to");
   if((from)||(to)){
     var fromArr=[0,0];
     var toArr=[0,0];
     var totalMinutes=0, totalHours=0;
     fromArr= from.split(":");
     if(to){
       toArr= to.split(":");
       totalHours = Number(toArr[0]) - Number(fromArr[0]);
       totalMinutes = Number(toArr[1]) - Number(fromArr[1]);
     }

     if(totalMinutes < 0){
      if(totalHours != 0){
        totalMinutes += 60;
        totalHours -= 1;
     }
     else if (totalHours == 0) {
       totalMinutes = 0;
     }
    }
    if(totalMinutes < 10){
        totalMinutes = "0" + String(totalMinutes);
    }
    if(totalHours < 10){
        totalHours = "0" + String(totalHours);
    }
   var time= totalHours + ":" + totalMinutes;
   return time;
  }
  else {
    return "00:00";
  }
}
