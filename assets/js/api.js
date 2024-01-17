async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/lucasbsiqueira/js-developer-portfolio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}