
  fetchData = function (){
    if(Session.get("SearchByTask")){
      console.log("task part");
      var SearchByTask=Session.get("SearchByTask");
      console.log(SearchByTask);
      var pattern= new RegExp("^"+SearchByTask);
      Session.set('searchedTasks',taskDetail.find({taskName: pattern},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({taskName: pattern},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }

    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByDate")) && (Session.get("SearchByCourse")) && (Session.get("SearchByClass"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByHours= Session.get("SearchByHours");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByClass= Session.get("SearchByClass");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, date : new Date(searchByDate), course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, date : new Date(searchByDate), course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByDate")) && (Session.get("SearchByClass"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByHours= Session.get("SearchByHours");
      var searchByDate= Session.get("SearchByDate");
      var searchByClass= Session.get("SearchByClass");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
  else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByCourse")) && (Session.get("SearchByClass")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByClass= Session.get("SearchByClass");
      console.log("searchby time");
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, date : new Date(searchByDate), course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, date : new Date(searchByDate), course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
  else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByCourse")) && (Session.get("SearchByClass"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByHours= Session.get("SearchByHours");
      var searchByClass= Session.get("SearchByClass");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
  else if ((Session.get("SearchFrom")) && (Session.get("SearchByDate")) && (Session.get("SearchByHours")) && (Session.get("SearchByCourse")) && (Session.get("SearchByClass")) ) {
      var searchFrom= Session.get("SearchFrom");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByDate= Session.get("SearchByDate");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
  else if ((Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByHours")) && (Session.get("SearchByCourse")) && (Session.get("SearchByClass"))) {
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByDate")) && (Session.get("SearchByCourse"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByHours= Session.get("SearchByHours");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByDate"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByHours= Session.get("SearchByHours");
      var searchByDate= Session.get("SearchByDate");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, date : new Date(searchByDate)},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, date : new Date(searchByDate)},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByClass")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var searchByClass= Session.get("SearchByClass");
      console.log("searchby time");
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByCourse")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      console.log("searchby time");
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByCourse"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByClass"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var SearchByClass= Session.get("SearchByClass");
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, classes: SearchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}, classes: SearchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByClass")) && (Session.get("SearchByCourse"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByClass= Session.get("SearchByClass");
      var SearchByCourse= Session.get("SearchByCourse");
      console.log("searchby time");
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByCourse")) && (Session.get("SearchByHours")) && (Session.get("SearchByClass"))) {
      var searchFrom= Session.get("SearchFrom");
      var SearchByCourse= Session.get("SearchByCourse");
      var SearchByClass= Session.get("SearchByClass");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, course: SearchByCourse, hours :{$gte: searchByHours,$lte: range1}, classes: SearchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, course: SearchByCourse, hours :{$gte: searchByHours,$lte: range1}, classes: SearchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByHours")) && (Session.get("SearchByClass"))) {
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var SearchByClass= Session.get("SearchByClass");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, classes: SearchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, classes: SearchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByDate")) && (Session.get("SearchByHours")) && (Session.get("SearchByClass"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchByDate= Session.get("SearchByDate");
        var SearchByClass= Session.get("SearchByClass");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, classes: SearchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, classes: SearchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByDate")) && (Session.get("SearchByHours")) && (Session.get("SearchByCourse")) ) {
      var searchFrom= Session.get("SearchFrom");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByDate= Session.get("SearchByDate");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, classes: SearchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByDate")) && (Session.get("SearchByClass")) && (Session.get("SearchByCourse")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchByDate= Session.get("SearchByDate");
      var searchByClass= Session.get("SearchByClass");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
  else if ((Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByClass")) && (Session.get("SearchByCourse"))) {
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var searchByClass= Session.get("SearchByClass");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByClass")) && (Session.get("SearchByCourse")) ) {
      var searchTo= Session.get("SearchTo");
      var searchByHours= Session.get("SearchByHours");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, hours :{$gte: searchByHours,$lte: range1}, classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, hours :{$gte: searchByHours,$lte: range1}, classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchByHours")) && (Session.get("SearchByDate")) && (Session.get("SearchByClass")) && (Session.get("SearchByCourse"))) {
      var searchByHours= Session.get("SearchHours");
      var searchByDate= Session.get("SearchByDate");
      var searchByClass= Session.get("SearchByClass");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({hours: searchHours, date : new Date(searchByDate), classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({hours: searchHours, date : new Date(searchByDate), classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByHours")) && (Session.get("SearchByCourse"))) {
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }



    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByDate")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      console.log("searchby time");
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, date : new Date(searchByDate)},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, date : new Date(searchByDate)},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByCourse"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var SearchByCourse= Session.get("SearchByCourse");
      console.log("searchby time");
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByClass")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByClass= Session.get("SearchByClass");
      console.log("searchby time");
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo")) && (Session.get("SearchByHours"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByDate")) && (Session.get("SearchByCourse")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByDate")) && (Session.get("SearchByClass")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchByDate= Session.get("SearchByDate");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByDate")) && (Session.get("SearchByHours")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchByDate= Session.get("SearchByDate");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByCourse")) && (Session.get("SearchByHours"))) {
      var searchFrom= Session.get("SearchFrom");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, course: SearchByCourse, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, course: SearchByCourse, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByCourse")) && (Session.get("SearchByClass")) ) {
      var searchFrom= Session.get("SearchFrom");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, course: SearchByCourse, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByClass")) && (Session.get("SearchByHours")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, classes: searchByClass, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, classes: searchByClass, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByClass"))) {
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByCourse"))) {
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByDate")) && (Session.get("SearchByHours"))) {
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate), hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByClass")) && (Session.get("SearchByCourse")) ) {
      var searchTo= Session.get("SearchTo");
      var searchByClass= Session.get("SearchByClass");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, classes: searchByClass, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByCourse")) ) {
      var searchTo= Session.get("SearchTo");
      var searchByHours= Session.get("SearchByHours");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByHours")) && (Session.get("SearchByClass")) ) {
      var searchTo= Session.get("SearchTo");
      var searchByHours= Session.get("SearchByHours");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, hours :{$gte: searchByHours,$lte: range1}, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, hours :{$gte: searchByHours,$lte: range1}, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchByHours")) && (Session.get("SearchByDate")) && (Session.get("SearchByCourse"))) {
      var searchByHours= Session.get("SearchHours");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({hours: searchHours, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({hours: searchHours, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchByHours")) && (Session.get("SearchByDate")) && (Session.get("SearchByClass"))) {
      var searchByHours= Session.get("SearchHours");
      var searchByDate= Session.get("SearchByDate");
        var searchByClass= Session.get("SearchByClass");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({hours: searchHours, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({hours: searchHours, date : new Date(searchByDate), classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchClass")) && (Session.get("SearchByDate")) && (Session.get("SearchByCourse"))) {
      var searchClass= Session.get("SearchClass");
      var searchByDate= Session.get("SearchByDate");
      var SearchByCourse= Session.get("SearchByCourse");
      Session.set('searchedTasks',taskDetail.find({classes: searchClass, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({classes: searchClass, date : new Date(searchByDate), course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchClass")) && (Session.get("SearchByHours")) && (Session.get("SearchByCourse"))) {
      var searchClass= Session.get("SearchClass");
      var searchByHours= Session.get("SearchByHours");
        var SearchByCourse= Session.get("SearchByCourse");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({classes: searchClass, hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({classes: searchClass, hours :{$gte: searchByHours,$lte: range1}, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchCourse")) && (Session.get("SearchByDate"))) {
      var searchCourse= Session.get("SearchCourse");
      var searchByDate= Session.get("SearchByDate");
      Session.set('searchedTasks',taskDetail.find({course: searchCourse, date : new Date(searchByDate)},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({course: searchCourse, date : new Date(searchByDate)},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchTo"))) {
      var searchFrom= Session.get("SearchFrom");
      var searchTo= Session.get("SearchTo");
      console.log("searchby time");
      Session.set('searchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByDate"))  ) {
      var searchFrom= Session.get("SearchFrom");
      var searchByDate= Session.get("SearchByDate");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate)},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate)},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByCourse")) ) {
      var searchFrom= Session.get("SearchFrom");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByClass")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchFrom")) && (Session.get("SearchByHours")) ) {
      var searchFrom= Session.get("SearchFrom");
      var searchByHours= Session.get("SearchByHours");
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByDate"))) {
      var searchTo= Session.get("SearchTo");
      var searchByDate= Session.get("SearchByDate");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate)},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate)},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByCourse")) ) {
      var searchTo= Session.get("SearchTo");
      var SearchByCourse= Session.get("SearchByCourse");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByClass")) ) {
      var searchTo= Session.get("SearchTo");
      var searchByClass= Session.get("SearchByClass");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchTo")) && (Session.get("SearchByHours")) ) {
      var searchTo= Session.get("SearchTo");
      var searchByHours= Session.get("SearchByHours");
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchByHours")) && (Session.get("SearchByDate"))) {
      var searchByHours= Session.get("SearchHours");
      var searchByDate= Session.get("SearchByDate");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({hours: searchHours, date : new Date(searchByDate)},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({hours: searchHours, date : new Date(searchByDate)},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchClass")) && (Session.get("SearchByDate"))) {
      var searchClass= Session.get("SearchClass");
      var searchByDate= Session.get("SearchByDate");
      Session.set('searchedTasks',taskDetail.find({classes: searchClass, date : new Date(searchByDate)},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({classes: searchClass, date : new Date(searchByDate)},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchCourse")) && (Session.get("SearchByDate"))) {
      var searchCourse= Session.get("SearchCourse");
      var searchByDate= Session.get("SearchByDate");
      Session.set('searchedTasks',taskDetail.find({course: searchCourse, date : new Date(searchByDate)},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({course: searchCourse, date : new Date(searchByDate)},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchClass")) && (Session.get("SearchByHours")) ) {
      var searchClass= Session.get("SearchClass");
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({classes: searchClass, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({classes: searchClass, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchCourse")) && (Session.get("SearchByHours")) ) {
      var searchCourse= Session.get("SearchCourse");
      var searchByHours= Session.get("SearchByHours");
      var searchArr1= searchByHours.split(":");
      searchArr1[0] =Number(searchArr1[0]) + 1;
      var range1= searchArr[0]+ ":" + "00";
      Session.set('searchedTasks',taskDetail.find({course: searchCourse, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({course: searchCourse, hours :{$gte: searchByHours,$lte: range1}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if ((Session.get("SearchByCourse")) && (Session.get("SearchByClass"))) {
      var SearchByCourse= Session.get("SearchByCourse");
      var searchByClass= Session.get("SearchByClass");
      console.log("class and course part");

      Session.set('searchedTasks',taskDetail.find({classes: searchByClass,course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({classes: searchByClass,course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if (Session.get("SearchFrom")){
      var searchFrom= Session.get("SearchFrom");
      console.log(searchFrom,"from");
      if( Session.get("CheckFrom")){
        var searchArr= searchFrom.split(":");
        searchArr[0] =Number(searchArr[0]) + 1;
        var range= searchArr[0]+ ":" + "00";
        console.log(range,"range");
        Session.set('searchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}},{limit: 10,skip: Session.get('skip')}).fetch());
        if(Session.get('nextSkip') >= 10){
          Session.set('nextSearchedTasks',taskDetail.find({from :{$gte: searchFrom,$lte: range}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
        }
      }
      else {
        Session.set('searchedTasks',taskDetail.find({from : searchFrom},{limit: 10,skip: Session.get('skip')}).fetch());
        if(Session.get('nextSkip') >= 10){
          Session.set('nextSearchedTasks',taskDetail.find({from : searchFrom},{limit: 10,skip: Session.get('nextSkip')}).fetch());
        }
      }
    }
    else if (Session.get("SearchTo")){
      var searchTo= Session.get("SearchTo");
      console.log(searchTo);
      if( Session.get("CheckTo")){
        var searchArr= searchTo.split(":");
        searchArr[0] =Number(searchArr[0]) + 1;
        var range= searchArr[0]+ ":" + "00";
        Session.set('searchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}},{limit: 10,skip: Session.get('skip')}).fetch());
        if(Session.get('nextSkip') >= 10){
          Session.set('nextSearchedTasks',taskDetail.find({to :{$gte: searchTo,$lte: range}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
        }
      }
      else {
        Session.set('searchedTasks',taskDetail.find({to : searchTo}).fetch());
        if(Session.get('nextSkip') >= 10){
          Session.set('nextSearchedTasks',taskDetail.find({to : searchTo},{limit: 10,skip: Session.get('nextSkip')}).fetch());
        }
      }
    }
    else if (Session.get("SearchByDate")) {
      var searchByDate= Session.get("SearchByDate");
      console.log("search by date");
      Session.set('searchedTasks',taskDetail.find({date : new Date(searchByDate)},{limit: 10,skip: Session.get('skip')},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({date : new Date(searchByDate)},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if (Session.get("SearchByHours")) {
      var searchByHours= Session.get("SearchByHours");
      console.log(searchByHours);
      if( Session.get("CheckHours")){
        var searchArr= searchByHours.split(":");
        searchArr[0] =Number(searchArr[0]) + 1;
        var range= searchArr[0]+ ":" + "00";
        Session.set('searchedTasks',taskDetail.find({hours :{$gte: searchByHours,$lte: range}},{limit: 10,skip: Session.get('skip')}).fetch());
        if(Session.get('nextSkip') >= 10){
          Session.set('nextSearchedTasks',taskDetail.find({hours :{$gte: searchByHours,$lte: range}},{limit: 10,skip: Session.get('nextSkip')}).fetch());
        }
      }
      else {
        Session.set('searchedTasks',taskDetail.find({hours: searchByHours},{limit: 10,skip: Session.get('skip')}).fetch());
        if(Session.get('nextSkip') >= 10){
          Session.set('nextSearchedTasks',taskDetail.find({hours: searchByHours},{limit: 10,skip: Session.get('nextSkip')}).fetch());
        }
      }
    }
    else if(Session.get("SearchByCourse")){
      var SearchByCourse= Session.get("SearchByCourse");
      console.log("course part");
      Session.set('searchedTasks',taskDetail.find({course: SearchByCourse},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({course: SearchByCourse},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else if(Session.get("SearchByClass")){
      var searchByClass= Session.get("SearchByClass");
      console.log("class part");
      Session.set('taskDetail'.find({classes: searchByClass},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({classes: searchByClass},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
    else{
      console.log("else part");
      Session.set('searchedTasks',taskDetail.find({},{limit: 10,skip: Session.get('skip')}).fetch());
      if(Session.get('nextSkip') >= 10){
        Session.set('nextSearchedTasks',taskDetail.find({},{limit: 10,skip: Session.get('nextSkip')}).fetch());
      }
    }
  }

  taskPagerButtonActions = function() {
     $('#nextPagerButton').addClass('hidden');
     $('#previousPagerButton').addClass('hidden');
     var skipCount=Session.get('skip');
     var searchedTasks=Session.get('searchedTasks');
     var nextSearchedTasks= Session.get('nextSearchedTasks');
     console.info(skipCount,"skipCountpp");
     console.info(Session.get('searchedTasks'),"searchedTaskspp");
     console.info(Session.get('nextSearchedTasks'),"nextsearchedTaskspp");
     if(skipCount == 0){
       if (searchedTasks.length <= 9) {
         $('#nextPagerButton').addClass('hidden');
      }
      else if((searchedTasks.length == 10) && (nextSearchedTasks.length != 0))  {
        $('#nextPagerButton').removeClass('hidden');
     }
        $('#previousPagerButton').addClass('hidden');
     }
     else if(((searchedTasks.length <= 9) || (nextSearchedTasks.length == 0))	&& (skipCount >= 10)) {
       $('#previousPagerButton').removeClass('hidden');
       $('#nextPagerButton').addClass('hidden');
      }
    else {
      $('#previousPagerButton').removeClass('hidden');
      $('#nextPagerButton').removeClass('hidden');
    }
  }
  drawchart = function(){
    var chartArr= Session.get("chartArr");
    console.log(chartArr.length,"chartArr");
    var margin= {
      top: 20,
      left: 50,
      bottom: 90,
      right: 20
    };
    var width=600 - margin.left - margin.right
    , height=400 - margin.top - margin.bottom;
    d3.select("svg").remove();
    d3.select(".chartDiv")
      .append("svg")
      .attr("id","barChart")
      .attr("class","chart");
    var chart= d3.select("svg");

    // Define key function, to be used when binding data
      function getDate(d) {
        return new Date(d.date);
}

    // Parse the date / time
    // var	parseDate = d3.time.format("%Y-%m").parse;

    var xScale= d3.scale.ordinal()
                        .rangeRoundBands([0, width], 0.05);

    var yScale=d3.scale.linear()
                       .range([height,0]);

    var xAxis= d3.svg.axis()
                      .scale(xScale)
                      .orient("bottom");
                      // .ticks(d3.time.days, 1)
                      // .tickFormat(d3.time.format('%a %d'))
                      // .tickSize(0)
                      // .tickPadding(8);
                      // .tickFormat(d3.time.format("%y-%m-%d"));
                      // .tickpadding(2);

    var yAxis= d3.svg.axis()
                     .scale(yScale)
                     .orient("left");

    var parseDate= d3.time.format("%y-%m-%d").parse;

    var svg = d3.select("#barChart")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");
                // // console.log(dataSet.length,"ure dataset");
                // chartArr.forEach(function(d) {
                //   d.date = parseDate(d.date);
                // });

                Deps.autorun(function(){
                  console.log(chartArr.length,"ehhhhhhaaa");
                  // xScale.domain(d3.range(chartArr,function(d) { return d.date ; }));
                  xScale.domain(d3.range(chartArr.length));
                  // xScale.domain([new Date(chartArr[0].date), d3.time.day.offset(new Date(chartArr[chartArr.length - 1].date), 1)]);
                  // xScale.domain([new Date(data[0].date), d3.time.day.offset(new Date(data[data.length - 1].date), 1)])
                  yScale.domain([0, d3.max(chartArr, function(d) { return d.price + 5 ; })]);
                  svg.append("g")
                     .attr("class", "x axis")
                     .attr("transform", "translate(0," + height + ")")
                     .call(xAxis)
                     .selectAll("text")
                     .style("text-anchor", "end")
                     .attr("dx", "-.8em")
                     .attr("dy", "-.55em")
                     .attr("transform", "rotate(-90)" );

                  svg.append("g")
                     .attr("class", "y axis")
                     .call(yAxis)
                     .append("text")
                     .attr("transform", "rotate(-90)")
                     .attr("y", 6)
                     .attr("dy", "-3.5em")
                     .style("text-anchor", "end")
                     .text("Price($)");


                 svg.selectAll("bar")
                    .data(chartArr)
                    .enter().append("rect")
                    .style("fill", "steelblue")
                    .attr("x", function(d,i) {
                       return xScale(i);
                     })
                    .attr("width", xScale.rangeBand())
                    .attr("y", function(d) { return yScale(d.price); })
                    .attr("height", function(d) { return height - yScale(d.price); });

                    svg.selectAll("bar")
                        .data(chartArr)
                        .enter()
                        .append("text")
                        .text(function(d) { return "($" + d.price + ")" ; })
                        .style("fill", "black" )
                        .attr("width", xScale.rangeBand())
                        .attr("x" ,function(d,i) {
                           return xScale(i)  ;
                        })
                        .attr("y", function(d) { return yScale(d.price) + 20; })
                        // .style("text-anchor", "middle")
                        .style("textLength", xScale.rangeBand())
                        .attr("font-family","sans-serif")
                        .attr("font-size","18px")
                        .attr("transform", "rotate(90)" )
                        .attr("transform", "translate("+ margin.left + ",0)");

                    svg.selectAll("bar")
                        .data(chartArr)
                        .enter()
                        .append("text")
                        .text(function(d) { return d.taskName; })
                        .style("fill", "black" )
                        .style("word-break", "break-all")
                        .attr("lengthAdjust","spacing")
                        .attr("textLength",xScale.rangeBand())
                        .attr("width", xScale.rangeBand())
                        .attr("x" ,function(d,i) {
                           return xScale(i);
                        })
                        .attr("y", function(d) { return yScale(d.price) + 10; })
                        // .style("text-anchor", "middle")
                        .attr("font-family","sans-serif")
                        .attr("font-size","16px")
                        .attr("transform", "rotate(90)" )
                        .attr("transform", "translate("+ margin.left + ",0)");
console.log("end");
  }
);
}
