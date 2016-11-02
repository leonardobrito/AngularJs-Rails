angular.module('flapperNews')
.controller('MainCtrl', [
    '$scope', 'posts',
    function($scope, posts) {
        console.log("mainCtrl");
        console.log(posts.posts);
        $scope.teste = "Hellow";
        $scope.posts = posts.posts;

        // Add Post na lista
        $scope.addPost = function() {
            if(!$scope.title || $scope.title === '') { return; }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link, 
                upvotes: 0,
                comments: [
                    {author: 'Joe', body: 'Cool post!', upvotes: 0},
                    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
                ]
            });
            $scope.title = '';
            $scope.link = '';
        };

        // Incrementa upvotes
        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        }
    }
]);