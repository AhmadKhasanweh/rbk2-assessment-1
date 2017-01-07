var Stack = function() {
	//create a storage for elements 
	this._storage=[];
};

// get a value
Stack.prototype.add = function(value) {
	if(this._storage.length===0){
		return "Stroage is empty";
	}
	//add the element in the list 
	// before that check if it's empty or not 
	this._storage.push(value);
};


Stack.prototype.remove = function() {
	// remove the last element in the list
	return this._storage.pop();
};