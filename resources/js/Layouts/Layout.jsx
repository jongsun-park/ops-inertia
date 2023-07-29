import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Head, usePage } from "@inertiajs/react";

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
                <li>
                    <NavLink href="/users" active={url.startsWith("/users")}>
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => (
    <header className="fixed left-0 right-0 top-0 flex justify-between bg-gray-100/60 p-4 shadow-sm">
        <ApplicationLogo />
        <Navigation />
    </header>
);

const Footer = () => (
    <footer className="flex flex-row justify-between bg-gray-800 p-4 text-white">
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
    <Head>
        <title>OPS</title>
        <meta
            type="description"
            content="OPS Production Management tools"
            head-key="description"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>;

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="mx-auto my-[60px] w-[90vw] max-w-[960px] flex-1 py-6 ">
                {children}
            </main>
            <Footer />
        </div>
    );
}
