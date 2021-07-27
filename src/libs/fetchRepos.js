async function DataRepos() {
    const response = await fetch("https://api.github.com/usershttps://api.github.com/users/danielRivera1233/repos");
    const myRepos = await response.json();
    console.log("myRepos: -> ", myRepos);
    return myRepos;
}

export default DataRepos