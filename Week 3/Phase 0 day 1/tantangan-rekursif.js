function rekursi1(N) {
	if(N === 1) {
		return 1;
	}else {
		return N*rekursi1(N-1);
	}
}

function rekursi2(M, N) {
	if(M <= N) {
		return M;
	}
	else {
		return M*rekursi2(M-N, N);
	}
}

console.log(rekursi1(4));