import { Link } from "@inertiajs/react";

export const PrimaryLink = ({ href, method, as, className, children }) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={
                `rounded-md bg-gray-800 p-2 px-4 text-xs uppercase text-white hover:bg-gray-900 ` +
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
                `rounded-md border-2 border-gray-600 p-2 px-4 text-xs font-semibold uppercase  text-gray-600 hover:bg-gray-900 hover:text-white ` +
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
                `rounded-md border-2 border-red-600 p-2 px-4 text-xs font-semibold uppercase  text-red-600 hover:bg-red-600 hover:text-white ` +
                +className
            }
        >
            {children}
        </Link>
    );
};

export const SubmitButton = ({ disabled, className, children }) => (
    <button
        type="submit"
        disabled={disabled}
        className={
            `flex-1 rounded-full bg-gray-800 p-3 text-white disabled:opacity-75 ` +
            className
        }
    >
        {children}
    </button>
);
