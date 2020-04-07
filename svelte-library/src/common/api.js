export const bookApiUrl = 'http://localhost:5000/books.json';

export function httpGet(path,data) {
	return req(path)
}

export function httpPost(post, date) {
	return req(path, 'POST'. data)
}

export function httpPut(path, data) {
	return req(path, 'PUT', data)
}

async function req(path, method = 'GET', data) {
	const res = await fetch(bookApiUrl);
	const json = await res.json();
	console.log(json);
}