import { Link } from "@inertiajs/react";

export const PrimaryLink = ({ href, method, children }) => {
    return (
        <Link
            href={href}
            method={method}
            className="text-sm bg-gray-900 p-3 rounded-md text-white uppercase hover:bg-blue-800"
        >
            {children}
        </Link>
    );
};

export const SecondaryLink = ({ href, method, children }) => {
    return (
        <Link
            href={href}
            method={method}
            className="text-sm uppercase border-gray-400 border p-3 rounded-md hover:bg-blue-800 hover:text-white"
        >
            {children}
        </Link>
    );
};
