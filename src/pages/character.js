import GetData from '../utils/getData'
import GetHash from '../utils/getHash'
const Character = async () => {
    const id = GetHash()
    const character = await GetData(id)
    const status = character.status
    if(status === 'Alive') {
    } else if (status === 'Dead'){
    }
    const view = `
    <div class="character_inner">
        <article class="character_card">
            <img src="${character.image}" alt="${character.name}">
            <div><h2>${character.name}</h2></div>
        </article>
        <article class="character_card">
            <h3>Status: <span class="${status}">❤ </span><span>${character.status}</span></h3>
            <h3>Episodes: <span>${character.episode.length}</span></h3>
            <h3>Species: <span>${character.species}</span></h3>
            <h3>Gender: <span>${character.gender}</span></h3>
            <h3>Origin: <span>${character.origin.name}</span></h3>
            <h3>Last location: <span>${character.location.name}</span></h3>
        </article>
    </div>`
    return view
}
export default Character