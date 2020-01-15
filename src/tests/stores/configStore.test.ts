import { Language } from 'locales'
import ConfigStore from 'stores/ConfigStore'

describe('config store', () => {
	let configStore: ConfigStore
	beforeEach(() => (configStore = new ConfigStore()))
	afterEach(() => window.localStorage.removeItem('ConfigStore'))

	it('should have defaults', () => {
		expect(configStore.language).toBeTruthy()
	})

	it('should defaults saved to localstorage', () => {
		expect(JSON.parse(window.localStorage.getItem('ConfigStore') || '{}')).toEqual({
			language: configStore.language
		})
	})

	it('should save to localstorage', () => {
		configStore.changeLanguage(Language.polish)

		expect(JSON.parse(window.localStorage.getItem('ConfigStore') || '{}')).toEqual({
			language: Language.polish
		})
	})

	it('should load from localstorage', () => {
		const settings = {
			language: Language.polish
		}

		window.localStorage.setItem('ConfigStore', JSON.stringify(settings))

		const configStore2 = new ConfigStore()

		expect(configStore2.language).toBe(settings.language)
	})

	it('should change language', () => {
		configStore.changeLanguage(Language.polish)

		expect(configStore.language).toBe(Language.polish)
	})
})
