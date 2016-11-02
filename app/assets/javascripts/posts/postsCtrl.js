angular.module('flapperNews')
.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts) {
        console.log("postsCtrl");
        console.log(posts.posts);
        $scope.post = posts.posts[$stateParams.id];
        $scope.addComment = function() {
            if(!$scope.body || $scope.body === '') { return; }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';          
        };
        $scope.incrementUpvotes = function(comment) {
            comment.upvotes += 1;
        }
    }
]);