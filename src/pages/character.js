import GetData from '../utils/getData'
import GetHash from '../utils/getHash'
const Character = async () => {
    const id = GetHash()
    const character = await GetData(id)
    const view = `
    <div class="character_inner">
        <article class="character_card">
            <img class="${character.status} status_life" src="${character.image}" alt="${character.name}">
        </article>
        <article class="character_card">
            <div class="character_card-status">
                <h2>${character.name} <span class="${character.status}">❤ </span><span>${character.status}</span></h2>
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: <span>${character.origin.name}</span></h3>
                <h3>Last location: <span>${character.location.name}</span></h3>
            </div>
        </article>
    </div>`
    return view
}
export default Character