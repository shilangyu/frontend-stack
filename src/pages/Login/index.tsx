import { Button } from 'components'
import { useLocale } from 'locales'
import React, { useContext, useState } from 'react'
import { userStore } from 'stores'
import useAsync from 'use-async-react'

const Login: React.FC = () => {
	const { LOGIN, LOG_IN, PASSWORD, FAILED_LOGIN, LOADING } = useLocale()
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const user = useContext(userStore)
	const { call: userLogin, loading, error } = useAsync(user.login)

	return (
		<>
			<input
				type="text"
				placeholder={LOGIN}
				value={login}
				onChange={e => setLogin(e.target.value)}
			/>
			<input
				type="password"
				placeholder={PASSWORD}
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Button onClick={() => userLogin(login, password)}>{LOG_IN}</Button>
			{loading && <div>{LOADING}...</div>}
			{error && <div>{FAILED_LOGIN}</div>}
		</>
	)
}

export default Login
