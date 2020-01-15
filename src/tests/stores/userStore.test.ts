import UserStore from 'stores/UserStore'

describe('user store', () => {
	let userStore: UserStore
	beforeEach(() => {
		userStore = new UserStore()
		fetchMock.resetMocks()
	})
	afterEach(() => window.localStorage.removeItem('UserStore'))

	const getLS = (dflt = '{}') => JSON.parse(window.localStorage.getItem('UserStore') || dflt)

	it('should have defaults', () => {
		expect(userStore.token).toBe(undefined)
		expect(userStore.isLoggedIn).toEqual(false)
	})

	it('should have defaults saved to localstorage', () => {
		expect(getLS('{"not": "empty"}')).toEqual({})
	})

	it('should load from localstorage', () => {
		const data = {
			token: '123'
		}
		window.localStorage.setItem('UserStore', JSON.stringify(data))

		const userStore = new UserStore()

		expect(userStore.token).toEqual(data.token)
		expect(userStore.isLoggedIn).toEqual(true)
	})

	it('should correctly log out', () => {
		userStore.token = '123'
		userStore.logout()

		expect(userStore.token).toEqual(undefined)
		expect(userStore.isLoggedIn).toEqual(false)
	})
})
