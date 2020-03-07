var appX=angular.module("mainApp",[]);
appX.controller('appX',function($scope){
//array for the tasks
    $scope.tasks=[];
//storing tasks
    var taskData=localStorage['tasksList'];
     if(taskData !==undefined){
        $scope.tasks =JSON.parse(taskData);
     }

//if enter button is pushed then add a task
     $scope.searchEnter=function(){
if(event.which == 13&&$scope.task !=null){
$scope.addTask();
}
};
//add task functioon
$scope.addTask=function(){

    $scope.tasks.push({"taskMessage":$scope.task, 'status':false});
console.log($scope.tasks);
$scope.task=null;
localStorage['tasksList'] =JSON.stringify($scope.tasks);
console.log(localStorage);
};
//editing the tasks
$scope.contentEdit=function(msg){

for(i=0;i<$scope.tasks.length;i++){
    if($scope.tasks[i].taskMessage== msg){
        $scope.tasks[i].taskMessage=event.target.innerText;
    }
}
//updating and storing the edited task message
localStorage['tasksList'] =JSON.stringify($scope.tasks);

    console.log(msg);
    event.target.contentEditable =
     event.target.contentEditable == "false" ? "true" :"false";
};
//updating the task
$scope.enterAgain=function(msg){
    if(event.which == 13&& msg !=null){
        $scope.contentEdit(msg);
        }
};

});