import { Button } from 'components'
import { useLocale } from 'locales'
import React, { useContext } from 'react'
import { userStore } from 'stores'
import ChangeLanuage from './ChangeLanguage'

const Settings: React.FC = () => {
	const { LOG_OUT } = useLocale()
	const user = useContext(userStore)

	return (
		<>
			<ChangeLanuage />
			<Button onClick={user.logout}>{LOG_OUT}</Button>
		</>
	)
}

export default Settings
