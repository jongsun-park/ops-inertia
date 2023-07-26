import { Link } from "@inertiajs/react";

export const PrimaryLink = ({ href, method, as, className, children }) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={
                `text-xs bg-gray-800 p-2 px-4 rounded-md text-white uppercase hover:bg-gray-900 ` +
                className
            }
        >
            {children}
        </Link>
    );
};

export const SecondaryLink = ({ href, method, as, className, children }) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={
                `text-xs border-2 font-semibold border-gray-600 text-gray-600 p-2 px-4 rounded-md  uppercase hover:bg-gray-900 hover:text-white ` +
                +className
            }
        >
            {children}
        </Link>
    );
};

export const DangerLink = ({ href, method, as, className, children }) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={
                `text-xs border-2 font-semibold border-red-600 text-red-600 p-2 px-4 rounded-md  uppercase hover:bg-red-600 hover:text-white ` +
                +className
            }
        >
            {children}
        </Link>
    );
};
