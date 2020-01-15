import { internal } from 'constants/urls'
import { observer } from 'mobx-react-lite'
import Login from 'pages/Login'
import Settings from 'pages/Settings'
import React, { useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { userStore } from 'stores'

const Router = observer(() => {
	const user = useContext(userStore)

	return (
		<BrowserRouter>
			{user.isLoggedIn ? (
				<Switch>
					<Route path={internal.settings()} exact>
						<Settings />
					</Route>
					<Redirect to={internal.settings()} />
				</Switch>
			) : (
				<Switch>
					<Route path={internal.login()} exact>
						<Login />
					</Route>
					<Redirect to={internal.login()} />
				</Switch>
			)}
		</BrowserRouter>
	)
})

export default Router
