import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";

const Navigation = () => {
    const { url, component } = usePage();
    return (
        <nav>
            <ul className="flex space-x-8">
                <li>
                    <NavLink href="/" active={component === "Products/Index"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        href="/products"
                        active={url.startsWith("/products")}
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        href="/productions"
                        active={url.startsWith("/productions")}
                    >
                        Productions
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/yarns" active={url.startsWith("/yarns")}>
                        Yarns
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/looms" active={url.startsWith("/looms")}>
                        Looms
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        href="/wash_options"
                        active={url.startsWith("/wash_options")}
                    >
                        Wash Options
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => (
    <header className="bg-gray-100/60 flex justify-between p-4 fixed top-0 left-0 right-0 shadow-sm">
        <ApplicationLogo />
        <Navigation />
    </header>
);

const Footer = () => (
    <footer className="bg-gray-800 p-4 text-white flex flex-row justify-between">
        <p className="copy">&copy; All rights are reserved</p>
        <p className="author">
            This site was built by{" "}
            <a href="mailto:jongsun250@gamil.com?subject=Mail from OPS Dev website">
                Jongsun Park
            </a>
        </p>
    </footer>
);

export default function Layout({ children }) {
    // Accessing shared data
    // const { auth } = usePage().props;
    // console.log(auth.username);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="w-[90vw] max-w-[960px] mx-auto my-[60px] py-6 flex-1 ">
                {children}
            </main>
            <Footer />
        </div>
    );
}
