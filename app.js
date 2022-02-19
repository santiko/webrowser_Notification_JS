chrome.runtime.sendMessage('',{
	type: 'notification',
	options: {
		title: 'YAYAN-PC',
		message: 'Selamat Datang di PC server ruang Tata Usaha\nSMK Islam Donomulyo',
		iconUrl: '/logo.png',
		type: 'basic'
	}
});