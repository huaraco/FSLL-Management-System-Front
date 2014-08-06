angular.module('feedback.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    },

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };



    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };

    $scope.members = [{
        name: 'A2-Zunhua',
        id: 1
    }, {
        name: 'A2-Haidi',
        id: 2
    }, {
        name: 'A2-Wangcan',
        id: 3
    }, {
        name: 'A2-Dujun',
        id: 4
    }, {
        name: 'A2-Peilin',
        id: 5
    }, {
        name: 'A2-Liuning',
        id: 6
    }];

})

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [{
        title: 'Reggae',
        id: 1
    }, {
        title: 'Chill',
        id: 2
    }, {
        title: 'Dubstep',
        id: 3
    }, {
        title: 'Indie',
        id: 4
    }, {
        title: 'Rap',
        id: 5
    }, {
        title: 'Cowbell',
        id: 6
    }, {
        title: 'afads',
        id: 7
    }];

    $scope.showAlert = function() {
        console.log('Thank you for not eating my delicious ice cream cone');
    };


})

.controller('PlaylistCtrl', function($scope, $stateParams) {})

.controller('Pray', function($scope, $ionicActionSheet, $timeout) {
    $scope.prayItems = [{
        itemName: 'A2-Zunhua',
        itemType: '圣灵的果子',
        id: 1
    }, {
        itemName: 'A2-Haidi',
        id: 2
    }, {
        itemName: 'A2-Wangcan',
        id: 3
    }, {
        itemName: 'A2-Dujun',
        id: 4
    }, {
        itemName: 'A2-Peilin',
        id: 5
    }, {
        itemName: 'A2-Liuning',
        id: 6
    }];

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
