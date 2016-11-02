angular.module('flapperNews')
.controller('MainCtrl', [
    '$scope', 'posts',
    function($scope, posts) {
        $scope.posts = posts.posts;

        // Add Post na lista
        $scope.addPost = function() {
            if(!$scope.title || $scope.title === '') { return; }
            posts.create({
                title: $scope.title,
                link: $scope.link
            });
            $scope.title = '';
            $scope.link = '';
        };

        // Incrementa upvotes
        $scope.incrementUpvotes = function(post) {
            posts.upvote(post);
        };
    }
]);