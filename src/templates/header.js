const Header = () => {
    const view = `
        <header class="header">
            <div class="header_logo">
                <a href="/">
                    <img src="https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e" alt="logo Rick and morty"/>
                </a>
                <h1>Characters Guide</h1>
            </div>
            <nav class="header_nav">
                <a href="/">
                    Home
                </a>
                <a href="#/about/">
                    About
                </a>
            </nav>
        </header>`
    return view
}
export default Header