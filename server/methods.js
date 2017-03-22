Meteor.methods({
  'insertTask': function(obj){
    // console.log("chlda");
    if(taskDetail.insert({
      taskName: obj.taskName,
      from: obj.from,
      to: obj.to,
      hours: obj.hours,
      date: obj.date,
      price: obj.price,
      classes: obj.classes,
      course: obj.course,
      task: obj.task
    })){
      console.log("Inserted");
    }
  },
  'updateTask': function(id , obj){
    console.log(id);
    if(taskDetail.update({_id: id},{$set: obj})){
      console.log("Updated");
      
    }
    else {
      console.log("not upadtes");
      sAlert.info("not Updated");
    }
  },
  'deleteTask': function(id){
    console.log(id);
    if(taskDetail.remove({_id: id}))
      {
      console.log("Removed");
    }
  },
  'uploadFile': function(obj){
    // console.log("chlda");
    if(csvCollection.insert({
      fileURL: obj.fileURL,
      uploadedAt : obj.uploadedAt
    })){
      console.log("Inserted");
    }
  },
  'UpdateFile': function(id , obj){
    console.log(id);
    if(csvCollection.update({_id: id},{$set: obj})){
      console.log("Updated");
      log.info("insertered");
    }
    else {
      console.log("not upadtes");
    }
  },
  'deleteFile': function(id){
    console.log(id);
    if(csvCollection.remove({_id: id}))
      {
      console.log("Removed");
    }
  }

});
