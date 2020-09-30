import GetData from '../utils/getData'
const Home = async () => {
    const characters = await GetData()
    const view = `
      <div class="Characters">
        ${characters.results.map(character => `
          <article class="Character_item">
            <a href="#/${character.id}/">
              <img src="${character.image}" alt="${character.name}">
              <div><h2>${character.name}</h2></div>
            </a>
          </article>
        `).join('')}
      </div>
    `
    return view;
}
export default Home