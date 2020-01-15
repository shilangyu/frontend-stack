export enum Language {
	english = 'en',
	polish = 'pl'
}

const strings = {
	LOGIN: {
		en: 'Login',
		pl: 'Login'
	},
	FAILED_LOGIN: {
		en: 'Failed to log in',
		pl: 'Nie udało sie zalogować'
	},
	PASSWORD: {
		en: 'Password',
		pl: 'Hasło'
	},
	LOG_IN: {
		en: 'Login',
		pl: 'Zaloguj'
	},
	SETTINGS: {
		en: 'Settings',
		pl: 'Ustawienia'
	},
	LOADING: {
		en: 'Loading',
		pl: 'Ładowanie'
	},
	LOG_OUT: {
		en: 'Logout',
		pl: 'Wyloguj'
	},
	CHANGE_LANGUAGE: {
		en: 'Change language',
		pl: 'Zmień język'
	}
}

export default strings as { [k in keyof typeof strings]: { [lang in Language]: string } }
