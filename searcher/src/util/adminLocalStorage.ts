export const saveToken = (key: string, value: string, ttl: number) => {
	const now = new Date();	
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item));
}

export const verifyRemoveToken = (key: string) => {
	const token = localStorage.getItem(key);	
	if (!token) {
		return null
	}
	const bearer = JSON.parse(token);
	const now = new Date();	
	if (now.getTime() > bearer.expiry) {		
		localStorage.removeItem(key);
		return null;
	}    
	return bearer.value;
}