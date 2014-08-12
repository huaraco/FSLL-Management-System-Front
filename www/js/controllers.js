app.controller('AppCtrl', function($scope,$rootScope, $ionicModal, $timeout, dataFactory) {
    // Form data for the login modal
    // $scope.loginData = {};
    
    $rootScope.user;

    $scope.getMember = function (memberId) {
        dataFactory.getMember(memberId)
        .success(function (member) {
            $scope.status = 'Retrieved this member!';
            $rootScope.user = member;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving this member! ' + error.message;
        });
    };

    $scope.getMember("1");
    

    // // Create the login modal that we will use later
    // $ionicModal.fromTemplateUrl('templates/login.html', {
    //     scope: $scope
    // }).then(function(modal) {
    //     $scope.modal = modal;
    // });

    // // Triggered in the login modal to close it
    // $scope.closeLogin = function() {
    //     $scope.modal.hide();
    // },

    // // Open the login modal
    // $scope.login = function() {
    //     $scope.modal.show();
    // };

    // // Perform the login action when the user submits the login form
    // $scope.doLogin = function() {
    //     console.log('Doing login', $scope.loginData);

    //     // Simulate a login delay. Remove this and replace with your login
    //     // code if using a login system
    //     $timeout(function() {
    //         $scope.closeLogin();
    //     }, 1000);
    // };

    $scope.status;
    $scope.members;

    // $rootScope.memberID="test";

    getMembers();

    function getMembers() {
        dataFactory.getMembers()
        .success(function (members) {
            $scope.members = members;
            console.log($scope.members);
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }


    getDefaultRequirements();

    function getDefaultRequirements() {
        dataFactory.getDefaultRequirements()
        .success(function (members) {
            $scope.members = members;
            console.log($scope.members);
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }


});


app.controller('Pray', function($scope, $rootScope, $ionicActionSheet, $timeout) {
    $scope.requirements = [
      {
        "ID": 1,
        "Title": "sample string 2",
        "RequirementTypeName": "sample string 3",
        "Description": "sample string 4",
        "MemberName": "sample string 5",
        "MemberID": 1,
        "GroupName": "sample string 6",
        "GroupID": 1,
        "IsPrivate": true,
        "Status": "sample string 7"
      },
      {
        "ID": 1,
        "Title": "sample string 2",
        "RequirementTypeName": "sample string 3",
        "Description": "sample string 4",
        "MemberName": "sample string 5",
        "MemberID": 1,
        "GroupName": "sample string 6",
        "GroupID": 1,
        "IsPrivate": true,
        "Status": "sample string 7"
      }
    ];
    $scope.feedbacks = [
      {
        "FeedbackID": 1,
        "From": "sample string 2",
        "FromMemberID": 3,
        "Feedback": "sample string 4",
        "FeedbackOn": "2014-08-12T22:02:28.8865259+08:00"
      },
      {
        "FeedbackID": 1,
        "From": "sample string 2",
        "FromMemberID": 3,
        "Feedback": "sample string 4",
        "FeedbackOn": "2014-08-12T22:02:28.8865259+08:00"
      }
    ];
    $scope.all = {
        event:"",
        requirements:[],
        feedbacks:[]
    };

    $scope.status;
    $scope.members;


    $scope.getRequirements = function (memberId) {
        dataFactory.getRequirements(memberId)
        .success(function (requirements) {
            $scope.status = 'Retrieved requirements!';
            $scope.requirements = requirements;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving requirements! ' + error.message;
        });
    };

    $scope.getFeedbacks = function (memberId) {
        dataFactory.getFeedbackss(id)
        .success(function (feedbacks) {
            $scope.status = 'Retrieved feedbacks!';
            $scope.feedbacks = feedbacks;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving feedbacks! ' + error.message;
        });
    };

    $scope.updateAll = function (all) {
        dataFactory.updateCustomer(cust)
          .success(function () {
              $scope.status = 'Updated All';
          })
          .error(function (error) {
              $scope.status = 'Unable to update All: ' + error.message;
          });
    };

    $scope.show = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                text: '<b>Share</b> This'
            }, {
                text: 'Move'
            }],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            buttonClicked: function(index) {
                return true;
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            hideSheet();
        }, 2000);

    };

})
