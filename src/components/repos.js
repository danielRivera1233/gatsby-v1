import React, { useEffect, useState } from "react";
import fetchRepos from "../libs/fetchRepos";

import Repo from "./repo"
import repositorios from "../data/repos"
import fetchRepos from "../libs/fetchRepos"

const Repos = () => {

    const [myRepository, setData] = useState([])

    useEffect( async () => {
        const myRepos = await fetchRepos();
        setData(myRepos);
    })

    console.log("Data Repos -> ", repositorios)
    console.log("Data Repos -> ", myRepository)
        
    return (
        <div className="max-w-4xl mx-auto">
            <header className="text-center">
                <h2>Mis trabajos de aprendizaje.</h2>
                <p>Mini laboratorios aplicando lo aprendido en los diferentes cursos</p>
            </header>
            <ul className="repos-list">
                {   
                    myRepository.map( (data) => {
                        return <Repo repo={data} key={data.id} />
                    } )
                }
            </ul>
        </div>
    );
}

export default Repos
