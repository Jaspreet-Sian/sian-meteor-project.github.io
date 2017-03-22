Meteor.publish('taskRecord',function(){
    return taskDetail.find({});
})

Meteor.publish('downloadFile', function(){
   return csvCollection.find({});
})
