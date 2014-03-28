var encryptUtil = encryptUtil || {};
encryptUtil.certificateName = "sample.cer";
encryptUtil.algo = "rsa";
encryptUtil.hashalgo = "sha256";

/***
	* Purpose: generic method to read public certificate from resources and encrypt data provided as parameter
	* Author: Prateek
	* Called From: whenever encryption is required
*/

encryptUtil.encrypt = function(data){
	try{
    	var encryptedData = kony.crypto.encrypt(encryptUtil.algo,encryptUtil.getKey(),data,{});
    	return encryptedData;
	}catch(err){
		kony.print("the value of err.message is:"+err);
		//handle exception
	}
}

encryptUtil.getKey = function(){
	var key = kony.crypto.retrievePublicKey(encryptUtil.algo,encryptUtil.certificateName,true);
	var certificateHash = kony.crypto.createHash(encryptUtil.hashalgo, key+"" ); //Hash can be used to identify certificate tamperings
	return key;
}