var data = {
            info: function (info) { 
                return ('Info: ' + info);
            },
            warning:function (warning) { 
                return ('Warning: ' + warning);
            },
            error:function (error) { 
                return ('Error: ' + error);
            }
    };
	
	
module.exports.myDateTime = function () {
  return Date();
}; 

module.exports.log = data