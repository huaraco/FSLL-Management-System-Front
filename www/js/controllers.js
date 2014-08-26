app.controller('AppCtrl', function($scope,$rootScope, $ionicModal, $timeout, dataFactory) {
    // Form data for the login modal
    // $scope.loginData = {};

    // get current user
    $rootScope.user;
    // $scope.getMember("1");
    $scope.getMember = function (memberId) {
        dataFactory.getMember(memberId)
        .success(function (member) {
            $rootScope.user = member;
            console.log("Current User: ");
            console.log($rootScope.user);
        })
        .error(function (error) {
            $scope.status = 'Error retrieving this member! ' + error.message;
        });
    };
    //test user data
    $rootScope.user = {
        "id": 3,
        "name": "王粲",
        "gender": "弟兄",
        "group": "A2"
    };
    //console.log("Current User: ");
    //console.log($rootScope.user);

    $rootScope.defaultRequirements;
    //getDefaultRequirements();
    function getDefaultRequirements() {
        dataFactory.getDefaultRequirements()
        .success(function (defaultRequirements) {
            $rootScope.defaultRequirements = defaultRequirements;
            // console.log("all defaultRequirements :");
            // console.log($rootScope.defaultRequirements);
            $rootScope.spiritualFruits = _.groupBy($rootScope.defaultRequirements, function(defaultRequirement) {
                return defaultRequirement.RequirementTypeName;
            });
            console.log($rootScope.selectedRequirements);
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }
    //test default requeirements data
    $rootScope.defaultRequirements = 
    [{
        "ID": 1,
        "Title": "仁爱",
        "Description": "仁爱的果子",
        "RequirementTypeName": "圣灵的果子",
        "RequirementTypeID": 1
    }, {
        "ID": 2,
        "Title": "喜乐",
        "Description": "喜乐的果子",
        "RequirementTypeName": "圣灵的果子",
        "RequirementTypeID": 1
    }, {
        "ID": 3,
        "Title": "和平",
        "Description": "和平的果子",
        "RequirementTypeName": "圣灵的果子",
        "RequirementTypeID": 1
    }, {
        "ID": 4,
        "Title": "传福音",
        "Description": "传福音",
        "RequirementTypeName": "教会建设的恩赐",
        "RequirementTypeID": 2
    }, {
        "ID": 5,
        "Title": "牧师",
        "Description": "牧师的恩赐",
        "RequirementTypeName": "教会建设的恩赐",
        "RequirementTypeID": 2
    }, {
        "ID": 6,
        "Title": "教师",
        "Description": "教师的恩赐",
        "RequirementTypeName": "教会建设的恩赐",
        "RequirementTypeID": 2
    }, {
        "ID": 7,
        "Title": "破除死亡，凶恶的灵",
        "Description": "破除死亡，凶恶的灵",
        "RequirementTypeName": "属灵征战",
        "RequirementTypeID": 3
    }, {
        "ID": 8,
        "Title": "破除情欲淫乱的灵",
        "Description": "破除情欲淫乱的灵",
        "RequirementTypeName": "属灵征战",
        "RequirementTypeID": 3
    }, {
        "ID": 9,
        "Title": "破除谎言的灵",
        "Description": "破除谎言的灵",
        "RequirementTypeName": "属灵征战",
        "RequirementTypeID": 3
    }];
    //console.log("default requirements are: ");
    //console.log($rootScope.defaultRequirements);

    $rootScope.sortedDefaultRequirements = _.groupBy($rootScope.defaultRequirements, function(defaultRequirement) {
        return defaultRequirement.RequirementTypeID;
    });
    $rootScope.spritualGift = $rootScope.sortedDefaultRequirements[1];
    $rootScope.giftChurchBuilding = $rootScope.sortedDefaultRequirements[2];
    $rootScope.spritualWar = $rootScope.sortedDefaultRequirements[3];

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

    $rootScope.members;
    //getMembers();
    function getMembers() {
        dataFactory.getMembers()
        .success(function (members) {
            $scope.members = members;
            // console.log("all member :");
            // console.log($scope.members);
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }
    //test members data
    $rootScope.members = [
        {
            "id": 1,
            "name": "尊化",
            "gender": "弟兄",
            "group": "A2"
        },
        {
            "id": 2,
            "name": "海蒂",
            "gender": "姐妹",
            "group": "A2"
        },
        {
            "id": 3,
            "name": "王粲",
            "gender": "弟兄",
            "group": "A2"
        },
        {
            "id": 4,
            "name": "刘宁",
            "gender": "姐妹",
            "group": "A2"
        },
        {
            "id": 5,
            "name": "佩林",
            "gender": "姐妹",
            "group": "A2"
        },
        {
            "id": 6,
            "name": "杜俊",
            "gender": "弟兄",
            "group": "A2"
        }
    ];
});


app.controller('Pray', function($scope, $rootScope, $ionicActionSheet, $timeout, dataFactory) {  

     (function (memberId) {
        dataFactory.getRequirements(memberId)
        .success(function (requirements) {
            dataFactory.getDefaultRequirements()
                .success(function (data) {
                    _.each(data, function(d){ 
                        var res = _.find(requirements, function(r){
                            return r.Title == d.Title;
                        });
                        requirements = _.filter(requirements, function(r){ return r != res });

                        if(typeof(res) != 'undefined'){
                            d.ID = res.ID;
                            d.isChecked = true;
                        }else{
                            d.ID = 0;    
                        }
                    });
                    
                    if(requirements.length > 0){
                        _.each(requirements, function(r){
                            r.isChecked = true;
                            data.push(r)
                        })
                    }
                    $scope.requirements  = _.groupBy(data,'RequirementTypeName');
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        })
        .error(function (error) {
            $scope.status = 'Error retrieving requirements! ' + error.message;
        });
    })(2);

    $scope.subRequirementsCount = function(cat){
        return _.filter($scope.requirements[cat], function(r){return r.isChecked}).length;
    }

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

    (function (memberId) {
        dataFactory.getFeedbacks(memberId)
        .success(function (feedbacks) {
            $scope.status = 'Retrieved feedbacks!';
            $scope.feedbacks = feedbacks;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving feedbacks! ' + error.message;
        });
    })(2);

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
