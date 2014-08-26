app.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://fsll.dyndns.org/Fsll_Ms_Core/api/';
    var dataFactory = {};

    dataFactory.getMembers = function () {
        return $http.get(urlBase + 'Account/ListAllMembers');
    };

    dataFactory.getMember = function (memberId) {
        return $http.get(urlBase + "Account/GetMember?memberId=" + memberId);
    };

    dataFactory.getDefaultRequirements = function () {
        return $http.get("http://fsll.dyndns.org/fsll_ms_feedback/api/Requirement/ListDefaultRequirements");
    };

    dataFactory.getRequirements = function (memberId) {
        return $http.get(urlBase + memberId);
    };

    dataFactory.getFeedbacks = function (memberId) {
        return $http.get(urlBase + memberId);
    };

    dataFactory.updateAll = function (all) {
        return $http.post(urlBase + "", all)
    };



    return dataFactory;
}]);

