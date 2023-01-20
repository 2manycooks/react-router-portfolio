import { Link } from "react-router-dom";

function Projects() {
    return ( 
    <>
        <h1>Projects</h1>

        <div>
            <Link to='https://github.com/2manycooks/first-lua-project'> He knows lua! </Link>
            <br></br>
            <Link to='https://github.com/2manycooks/chat-app-project'> Quick lil chat app</Link>
            <br></br>
            <Link to='https://github.com/2manycooks/Avalon-GG'> Avalon Clone </Link>
        </div> 
    </>
    
    );
}

export default Projects;