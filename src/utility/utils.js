const monthList = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"July",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const formatDate = (dateTime) => {
	const date = new Date(dateTime);
	const day = date.getDate();
	const textMonth = monthList[date.getMonth()];
	const year = date.getFullYear();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const ampm = hour >= 12 ? "PM" : "AM";
	const hour12 = hour % 12;
	const sHours = hour12 < 10 ? `0${hour12}` : hour12;
	const sMinutes = minute < 10 ? `0${minute}` : minute;
	const formattedTime = `${sHours}:${sMinutes} ${ampm}`;
	return `${day} ${textMonth}, ${year} ${formattedTime}`;
};

export const formatTime = (dateTime) => {
	const date = new Date(dateTime);
	const day = date.getDate();
	const textMonth = monthList[date.getMonth()];
	const year = date.getFullYear();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const ampm = hour >= 12 ? "PM" : "AM";
	const hour12 = hour % 12;
	const sHours = hour12 < 10 ? `0${hour12}` : hour12;
	const sMinutes = minute < 10 ? `0${minute}` : minute;
	const formattedTime = `${sHours}:${sMinutes} ${ampm}`;
	return `${day} ${textMonth}, ${year} ${formattedTime}`;
};

export const formatDateTime = (dateTime) => {
	const date = new Date(dateTime);
	const day = date.getDate();
	const textMonth = monthList[date.getMonth()];
	const year = date.getFullYear();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const ampm = hour >= 12 ? "PM" : "AM";
	const hour12 = hour % 12;
	const sHours = hour12 < 10 ? `0${hour12}` : hour12;
	const sMinutes = minute < 10 ? `0${minute}` : minute;
	const formattedTime = `${sHours}:${sMinutes} ${ampm}`;
	return `${day} ${textMonth}, ${year} ${formattedTime}`;
};
