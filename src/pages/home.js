import GetData from '../utils/getData'
import GetHash from '../utils/getHash'
const Home = async () => {
  const page = await GetHash();
  const characters = await GetData(page)
    const view = `
      <div class="characters">
        ${characters.results.map(character => `
          <article class="character_item">
            <a href="#/${character.id}/">
              <img src="${character.image}" alt="${character.name}">
              <div class="character_name"><h2>${character.name}</h2><p>${character.species}</p></div>
            </a>
          </article>
        `).join('')}
      </div>
    `
    return view;
}
export default Home