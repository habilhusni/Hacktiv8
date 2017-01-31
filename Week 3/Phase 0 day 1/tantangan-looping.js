function faktorial1(N) {
	var jumlah = 1;
	for(var i=N; i>0; i--){
		jumlah = jumlah*i;
	}
	return jumlah;
}

function faktorial2(M, N) {
	var jumlah = 1;
	for(var i=M; i>0; i=i-N){
		jumlah = jumlah*i;
	}
	return jumlah;
}

console.log(faktorial2(12, 5));