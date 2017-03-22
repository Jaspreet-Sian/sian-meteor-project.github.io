
FlowRouter.route('/',{
   action: function(params,queryparams){
     BlazeLayout.render( 'applicationLayout', { main: 'home' } );
   },
   name: "mainTemplate"
});
FlowRouter.route('/add-task',{
  action: function(params,queryparams){
    BlazeLayout.render( 'applicationLayout', { main: 'addTask' } );
  },
  name: "addTask"
});
FlowRouter.route('/upload-file',{
  action: function(params,queryparams){
    BlazeLayout.render( 'applicationLayout', { main: 'uploadFile' } );
  },
  name: "uploadFile"
});

var searchedRecord= FlowRouter.group({
  prefix: '/search-record'
});
searchedRecord.route('/',{
  action: function(params,queryparams){
    BlazeLayout.render( 'applicationLayout', { main: 'result' } );
  },
  name: "searchesult"
});
searchedRecord.route('/tabular-result',{
  action: function(params,queryparams){
    BlazeLayout.render( 'result', { resultArea: 'tabularForm' } );
  },
  name: "tabularResult"
});
searchedRecord.route('/bar-chart',{
  action: function(params,queryparams){
    BlazeLayout.render( 'result', { resultArea: 'barChart' } );
  },
  name: "visualResult"
});
FlowRouter.route('/chart',{
  action: function(params,queryparams){
    BlazeLayout.render('applicationLayout',{ main: 'barChart' })
  }
});

FlowRouter.route('/parent-child',{
  action: function(params,queryparams){
    BlazeLayout.render( 'applicationLayout', { main: 'parent' } );
  },
  name: "addTask"
});
