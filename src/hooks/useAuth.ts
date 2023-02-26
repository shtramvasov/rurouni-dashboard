export const useAuth = () => {
	const secret = import.meta.env.VITE_APP_SECRET
	const storedSecret = localStorage.getItem('secret')

	if (secret == storedSecret) {
		return true
	}
	return false
}
