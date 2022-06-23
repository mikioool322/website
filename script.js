
        var app = angular.module("myApp", ["ngRoute"]);
        app.config(function($routeProvider) {
          $routeProvider
          .when("/", {
            templateUrl : "home.htm"
          })
          .when("/races", {
            templateUrl : "races.htm"
          })
          .when("/classes", {
            templateUrl : "classes.htm"
          })
          .when("/map", {
            templateUrl : "map.htm"           
          })
          
                   
        });

        function showGeneral(){
          document.getElementById("mapImage").src = "maps/general.jpg";
        }
        function showAzeroth(){
          document.getElementById("mapImage").src = "/maps/Azeroth.jpg";
        }
        function showOutland(){
          document.getElementById("mapImage").src = "/maps/Outland.jpg";
        }
        function showDraenor(){
          document.getElementById("mapImage").src = "/maps/Draenor.jpg";
        }
        function showShadowlands(){
          document.getElementById("mapImage").src = "/maps/Shadowlands.jpg";
        }
      