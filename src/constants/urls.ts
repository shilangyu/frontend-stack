export const api = {
	base: () => 'https://example.com/api/v1',
	login: () => api.base() + '/auth/login'
}

export const internal = {
	root: () => '/',
	login: () => '/login',
	settings: () => '/settings',
	specificSetting: (id = ':id') => `${internal.settings()}/${id}`
}
