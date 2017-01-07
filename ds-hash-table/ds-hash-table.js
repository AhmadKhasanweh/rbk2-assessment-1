var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      // create a hash value 
      var place=hashFn(key , max);
      // iterate over keys
      for(var i = 0; i<makeHashTable._storage[place] ; i++){
        // check if they match with the key 
        if(makeHashTable._storage[place][i][0]===key){
          // call the value by its hashed value
          return makeHashTable._storage[place][i][1];
        }
      }
      return 'key not found';
    },

    insert: function(key, value) {
      // create a hash value 
      var place=hashFn(key, max);
      // check if this value is created before
      if(makeHashTable._storage[place]===undefined){
        makeHashTable._storage[place]=[];
        // place the needed in value in the hashed value  
        makeHashTable._storage[place].push([key,value]);
      }
      // falg to know if the same key is already used
      var flag=true; 
      //iterate over keys
      for(var i = 0; i<makeHashTable._storage[place] ; i++){
        // check if its created already and want to overwrite  
        if(makeHashTable._storage[place][i][0]===key){
          // call the value by its hashed value
          makeHashTable._storage[place][i][1]=value;
          flag=false;
        }
      } 
      if(flag){  // if the key not founded 
        // place it in another place
        makeHashTable._storage[place].push([key,value]);
      }
   }
 };
}
// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};