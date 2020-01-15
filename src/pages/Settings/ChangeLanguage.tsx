import { Language, useLocale } from 'locales'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { configStore } from 'stores'

const ChangeSettings: React.FC = observer(() => {
	const { CHANGE_LANGUAGE } = useLocale()
	const config = useContext(configStore)

	return (
		<>
			<label htmlFor="choose-lang">{CHANGE_LANGUAGE}</label>
			<select
				id="choose-lang"
				value={config.language}
				onChange={e => config.changeLanguage(e.target.value as Language)}
			>
				{(Object.keys(Language) as (keyof typeof Language)[]).map(lang => (
					<option value={Language[lang]} key={lang}>
						{lang}
					</option>
				))}
			</select>
		</>
	)
})

export default ChangeSettings
