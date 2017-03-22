  Session.set("chartArr",  null);
Template.uploadFile.onCreated(function(){
  var tmpl= this;
  tmpl.autorun(function(){
    // tmpl.subscribe('downloadFile');
  })
  Template.instance().uploading= new ReactiveVar(false);
})

// Tell client and server what the file limitations are:

// Slingshot.fileRestrictions("myFileUploads", {
//   //Only images are allowed
//   allowedFileTypes: [".csv"],
//
//   //Maximum file size:
//   maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
// });

Template.uploadFile.helpers({
  'uploading' : function(){
     return Template.instance().uploading.get();
  },
  'chart' : function() {
    console.log(Session.get("chartArr"),"dddd");
    if(Session.get("chartArr")){
      console.log("kkkkk");
      drawchart();
    }
  }
});

Template.uploadFile.events({
  'click .home': function(event){
    event.preventDefault();
    FlowRouter.go('/');
  },
  'click .taskDetail': function(event){
    event.preventDefault();
    FlowRouter.go('/search-record');
  },
  'click .taskInsetion': function(event){
    event.preventDefault();
    FlowRouter.go('/add-task');
  },
  'change #uploadCSVfile': function(event,tmpl){
    event.preventDefault();
    if (event.target.files[0].type==='text/csv') {
      if(event.target.files[0]){
          console.log(event.target.files[0],"event.target.files[0]");
          tmpl.uploading.set( true );
          Papa.parse( event.target.files[0], {
            header: true,
            complete( results, file ) {
              console.log("parsing successful",results.data);
              tmpl.uploading.set( false );
              var chartArr= results.data.slice(0,-1);
              Session.set("chartArr",chartArr);
                console.log(Session.get("chartArr"),"dddd");
            }
          });
      }
    }
    // else if (event.target.files[0].type==='application/vnd.ms-excel') {
    //   console.log('excel file');
    // }
    // else if (event.target.files[0].type==='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    //     console.log('extension file');
    // }
    // else{
    //   console.log('another file');
    // }

}
});
