const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('rISA3XYIVC', uuidlib.v4());
	}

module.exports = generateId
