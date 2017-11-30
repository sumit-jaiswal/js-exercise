var Person = require('./SalesHandy.js');

(function() {
    var obj = new SalesHandy();

    obj - > doSomething('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res);
        });
})();