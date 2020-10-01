import GetData from '../utils/getData'
const Footer = async () => {
    const data  = await GetData()
    let pages = []
    for (let i = 1; i <= data.info.pages; i++) {
        pages.push(i)
    }

    let num = 0
    const view = `
        <h6>Pages</h6>
        <div>
            ${pages.map(() =>
                `<a href="#/?page=${num++}/">${num}</a>`
            ).join('')}
        </div>`
    return view
}
export default Footer