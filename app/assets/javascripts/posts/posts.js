angular.module('flapperNews')
.factory('posts', ['$http', function($http) {
    // service body
    var o = {
        posts: [
            // {title: 'post 1', upvotes: 5, comments: [
            //         {author: 'Joe', body: 'Cool post!', upvotes: 0},
            //         {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            //     ]},
            // {title: 'post 2', upvotes: 2, comments: [
            //         {author: 'Joe', body: 'Cool post!', upvotes: 0},
            //         {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            //     ]},
            // {title: 'post 3', upvotes: 15, comments: [
            //         {author: 'Joe', body: 'Cool post!', upvotes: 0},
            //         {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            //     ]},
            // {title: 'post 4', upvotes: 9, comments: [
            //         {author: 'Joe', body: 'Cool post!', upvotes: 0},
            //         {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            //     ]},
            // {title: 'post 5', upvotes: 4, comments: [
            //         {author: 'Joe', body: 'Cool post!', upvotes: 0},
            //         {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            //     ]}
        ]
    }

    o.getAll = function() {
        return $http.get('/posts.json').success(function(data){
            angular.copy(data, o.posts);
        });
    };  
    return o;
}]);