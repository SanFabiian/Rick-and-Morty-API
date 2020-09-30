import Header from '../templates/header'
import Character from '../pages/character'
import Error404 from '../pages/error404'
import Home from '../pages/home'
import GetHash from '../utils/getHash'
import ResolveRoutes from '../utils/resolveRoutes'
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}
const Router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    header.innerHTML = await Header()
    let hash = GetHash()
    let route = await ResolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    content.innerHTML = await render()
}
export default Router