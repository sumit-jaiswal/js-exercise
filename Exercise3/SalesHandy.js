class SalesHandy {

	/** @doSomething
	  * @param: URL: string
	  * method: get
	  */
    doSomething(url) {
        return new Promise(function(resolve, reject) {
            let req = new XMLHttpRequest();
            req.open("GET", url);
            req.onload = function() {
                if (req.status === 200) {
                	// resolve with response
                    resolve(req.response);
                } else {
                	//reject with error
                    reject(new Error(req));
                }
            };

            req.onerror = function() {
            	// on server error
                reject(new Error("Server Error"));
            };

            req.send();
        });
    }
}

export { SalesHandy }