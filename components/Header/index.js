import Link from "next/link";

function Index() {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-auto">
                        <div className="Logo">
                            <img src="/logo.png" alt="Logo"/>
                        </div>
                    </div>
                    <div className="col-auto ms-5">
                        <nav className="d-flex align-items-center h-100">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <Link href="/articles">
                                <a>TV Shows</a>
                            </Link>
                            <Link href="/form">
                                <a>Movies</a>
                            </Link>
                            <Link href="/">
                                <a>New & Popular</a>
                            </Link>
                            <Link href="/">
                                <a>My List</a>
                            </Link>
                        </nav>
                    </div>
                    <div className="col-auto ms-auto">
                        <div className="d-flex align-items-center">
                            <div className="me-4">
                                <i className="fa fa-search"></i>
                            </div>
                            <div>
                                <Link href="/">
                                    <a className="me-3">KIDS</a>
                                </Link>
                            </div>
                            <div className="me-4">
                                <Link href="/">
                                    <a>DVD</a>
                                </Link>
                            </div>
                            <div className="me-4">
                                <i className="fa fa-gift"></i>
                            </div>
                            <div className="me-4">
                                <i className="fa fa-bell"></i>
                            </div>
                            <div className="Avatar d-flex align-items-center">
                                <img className="me-3" src="./avatar.jpg" alt="Avatar"/>
                                <i className="fa fa-caret-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Index;
