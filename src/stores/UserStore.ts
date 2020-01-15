import * as Responses from 'constants/responses'
import { action, autorun, computed, observable, runInAction } from 'mobx'

class UserStore {
	@observable token?: string

	constructor() {
		this.load()
		autorun(this.save)
	}

	private save = (): void =>
		window.localStorage.setItem(
			'UserStore',
			JSON.stringify({
				token: this.token
			})
		)

	@action
	private load = (): void =>
		Object.assign(this, JSON.parse(window.localStorage.getItem('UserStore') || '{}'))

	login = async (login: string, password: string): Promise<NonNullable<this['token']>> => {
		await new Promise(res => setTimeout(res, 2000)) // simulated 2s wait

		if (password.length < 8 && login.length > 0) {
			throw new Error('Password too short!')
		}
		const res = { token: '123123' } as Responses.Login

		runInAction(() => (this.token = res.token))

		return (this.token as this['token'])! // why? this is a typescript bug: https://github.com/microsoft/TypeScript/issues/36061
	}

	@action
	logout = (): void => {
		this.token = undefined
	}

	@computed
	get isLoggedIn(): boolean {
		return !!this.token
	}
}

export default UserStore
