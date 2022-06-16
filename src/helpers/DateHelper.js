export default class DateHelper {
	static getCurrentDateMathDayYear() {
		let date = new Date();
		let math = date.toLocaleString('default', { month: 'short' });
		let day = date.getDay();
		let year = date.getFullYear();

		return `${math} ${day} ${year}`
	}
}