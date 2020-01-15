import { Language } from 'locales/strings'
import { action, autorun, observable } from 'mobx'

class ConfigStore {
	@observable language: Language = /pl/i.test(window.navigator.language)
		? Language.polish
		: Language.english

	constructor() {
		this.load()
		autorun(this.save)
	}

	private save = (): void =>
		window.localStorage.setItem('ConfigStore', JSON.stringify({ language: this.language }))

	@action
	private load = (): void =>
		Object.assign(this, JSON.parse(window.localStorage.getItem('ConfigStore') || '{}'))

	@action
	changeLanguage = (to: Language): void => {
		this.language = to
	}
}

export default ConfigStore
