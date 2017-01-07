var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      // create a hash value 
      var place=hashFn(key , max);
      // call the value by its hashed value
      return _storage[place];
    },

    insert: function(key, value) {
      // create a hash value 
      var place=hashFn(key, max);
      // place the needed in value in the hashed value  
      _storage[place]=value;
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