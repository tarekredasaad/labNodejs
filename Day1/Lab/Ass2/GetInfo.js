function Getinfo(name,birthdate)
{
    var now = new Date();
    var birthYear = new Date(birthdate).getFullYear();
    var age = now.getFullYear() - birthYear;

    if (isNaN(age) || birthYear > now.getFullYear() || birthYear === 2023) {
      throw new Error('Invalid birthdate');
    }

    return `Hello ${name} and your Age now is: ${age}`;
}

module.exports = {
	GetINFOO: Getinfo,
	
}