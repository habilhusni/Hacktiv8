class Student {
	constructor (name, age, dateOfBirth, gender, studentId, hobbies) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.studentId = studentId;
		this.hobbies = hobbies;
	}

	setName(newName) {
		this.name = newName;
	}

	getName() {
		return this.name;
	}

	setAge(newAge) {
		this.age = newAge;
	}

	getAge() {
		return this.age;
	}

	setDateOfBirth(newDate) {
		this.dateOfBirth = newDate;
	}

	getDateOfBirth() {
		return this.dateOfBirth;
	}

	setGender(str) {
		if(str === 'Male') {
			this.gender = 'Male';
		}else if(str === 'Female') {
			this.gender = 'Female';
		}else {
			this.gender = undefined;
		}
	}

	getGender() {
		return this.gender;
	}

	setStudentId(newId) {
		this.studentId = newId;
	}

	getStudentId() {
		return this.studentId;
	}

	addHobby(newHobby) {
		this.hobbies.push(newHobby);
	}

	removeHobby(delHobby) {
		this.hobbies.splice((this.hobbies).indexOf(delHobby), 1);
	}

	getData() {
		var nama = this.name;
		var umur = this.age;
		var tglLahir = this.dateOfBirth;
		var jKelamin = this.gender;
		var identitas = this.studentId;
		var hobi = this.hobbies;

		var kalimat = 'Name: ' + nama + '\n' + 'Age: ' + umur + '\n' + 'Date of Birth: ' + tglLahir + '\n' + 'Gender: ' + jKelamin + '\n' +
					  'Student ID: ' + identitas + '\n' + 'Hobbies: ' + hobi;

		return kalimat; 
	}

}

var jonny = new Student('Jonny', 25, '18 Juli 1991', 'Male', 1234, ['Memasak', 'Berlari']);


