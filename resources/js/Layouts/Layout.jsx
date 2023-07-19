import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-100 flex justify-between p-4">
                <h1 className="font-semibold site-logo text-xl">
                    <Link href="/">OPS & Inertia</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-8">
                        <li className="hover:underline">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/products">Products</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/productions">Productions</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/yarns">Yarns</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/looms">Looms</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/wash_options">Wash Options</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex-1 p-6">{children}</main>
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
