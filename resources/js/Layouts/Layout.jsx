import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-100/60 flex justify-between p-4 fixed top-0 left-0 right-0 shadow-sm">
                <ApplicationLogo />
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink href="/productions">Productions</NavLink>
                        </li>
                        <li>
                            <NavLink href="/yarns">Yarns</NavLink>
                        </li>
                        <li>
                            <NavLink href="/looms">Looms</NavLink>
                        </li>
                        <li>
                            <NavLink href="/wash_options">Wash Options</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex-1 p-6 mt-10">{children}</main>
            <footer className="bg-gray-800 p-4 text-white flex flex-row justify-between">
                <p className="copy">&copy; All rights are reserved</p>
                <p className="author">
                    This site was built by{" "}
                    <a href="mailto:jongsun250@gamil.com?subject=Mail from OPS Dev website">
                        Jongsun Park
                    </a>
                </p>
            </footer>
        </div>
    );
}
