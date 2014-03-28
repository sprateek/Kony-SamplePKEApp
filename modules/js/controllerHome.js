var controlHome = controlHome || {};

controlHome.onClickEncrypt = function(){
	var data = frmHome.txtEncryptMe.text;
	var encryptedData = encryptUtil.encrypt(data);
	frmHome.lblNotice.text = kony.convertToBase64(encryptedData);
}
	