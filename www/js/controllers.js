angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $timeout) {

  $scope.data = {}
  
  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    var myPopup = $ionicPopup.show({
      templateUrl: 'popup.html',
      scope: $scope,
    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  };

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
  };

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
})

.controller('FavCtrl', function ($scope) {
    $scope.covers =[];
  $scope.loadImages = function(){
    for(var i = 0; i <100; i++){
      $scope.covers.push({id: i, src: "http://40.media.tumblr.com/560e8a5729181645c76461a1aece303e/tumblr_n0ly6r6ZZG1s52v17o2_500.jpg"});
    }
  }

  //  $scope.data = {
  //   showDelete:false
  // };

  // $scope.edit = function(book){
  //   alert('Edit Book: ' + book.id);
  // };
  // $scope.share = funtion(book){
  //   alert('Share Book: ' + book.id);
  // };
  // $scope.moveBook = function(book, fromIndex, toIndex){
  //   $scope.books.splice(fromIndex,1);
  //   $scope.books.splice(toIndex, 0, book);
  // };

  $scope.books = [ 
  {title: 'book5', author: 'auth5', id: 5},
  {title: 'book6', author: 'auth6', id: 6},
  {title: 'book7', author: 'auth7', id: 7},
  {title: 'book8', author: 'auth8', id: 8}
  ];
})

.controller('BooksCtrl', function ($scope) {
  $scope.covers =[];
  $scope.loadImages = function(){
    for(var i = 0; i <6; i++){
      $scope.covers.push({id: i, src: "http://40.media.tumblr.com/560e8a5729181645c76461a1aece303e/tumblr_n0ly6r6ZZG1s52v17o2_500.jpg"});
    }
  }
})

controller('BooksCtrl', function($scope, $stateParams){

});
