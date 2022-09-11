import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectList.module.css'
export function ProjectList(){

    let[posts, setPosts] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:3030/project/search/36274185062')
        .then(data=>{setPosts(data.data)})
        .catch(err=>{console.log('Deu ruim')})
    }, [])

    return (
        <main>
                <h1>Meus Projetos</h1>
    
                <div className={styles.div}>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome Projeto</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Numero Membros</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((project: any) => {
                                    return(
                                        <tr key={project.id}>
                                            <td className={styles.capitalize}>{project.id}</td>
                                            <td
                                                className={styles.capitalize}>
                                                <Link to={`/project/${project.id}`}>{project.nome}</Link>
                                            </td>
                                            <td className={styles.capitalize}>{project.cidade}</td>
                                            <td className={styles.capitalize}>{project.uf}</td>
                                            <td className={styles.capitalize}>{project.numero_membros}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </main>
      )
}