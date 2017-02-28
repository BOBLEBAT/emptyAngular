// MAIN CONTROLLER
app.controller('myCtrl', function($scope) {

	let eleve = [
	["truc","machin","truc.machin@aze.com"],
	["truc1","machin1","truc1.machin1@aze.com"],
	["truc2","machin2","truc2.machin2@aze.com"]
	];

	$scope.names = eleve;
	$scope.ajout = function() {
			eleve.push([$scope.addfirstName, $scope.addlastName, $scope.addMail]);
			$scope.addfirstName = '';
			$scope.addlastName = '';
			$scope.addMail = '';
    };
});
