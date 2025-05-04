import "./navbar.css"

export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg bg-nav" id="nav">
            <div className="container-fluid">
                <img src="https://i.postimg.cc/0NzsMw1f/logoupscale-removebg-preview.png" width="72px" height="72px"></img>
                <a className="navbar-brand" id="nav-link" href="#">Simply Spanish Centre</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link " id="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}