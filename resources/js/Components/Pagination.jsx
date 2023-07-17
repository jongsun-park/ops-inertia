// https://www.itsolutionstuff.com/post/laravel-react-js-pagination-using-vite-exampleexample.html

import { Link } from "@inertiajs/react";

export const Pagination = ({ links, className }) => {
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-gray-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    return (
        links.length > 3 && (
            <div className={`mb-4 ${className}`}>
                <div className="flex flex-wrap mt-8 place-content-center">
                    {links.map((link, key) => {
                        const label = link.label
                            .replace("&laquo;", "")
                            .replace("&raquo;", "");

                        return link.url === null ? (
                            <div
                                key={key}
                                className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                            >
                                {label}
                            </div>
                        ) : (
                            <Link
                                className={getClassName(link.active)}
                                href={link.url}
                                key={key}
                                preserveScroll
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        )
    );
};
