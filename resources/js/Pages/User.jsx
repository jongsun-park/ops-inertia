import { Pagination } from "@/Components/Pagination";
import { PageHeading } from "@/Components/UI/Heading";
import { Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";

export default function User({ users, search = "", page }) {
    const [query, setQuery] = useState(search);
    const [curPage, setCurPage] = useState(page);

    const queryHandle = (e) => {
        setCurPage(1);
        setQuery(e.target.value);
    };

    useEffect(() => {
        const data = query
            ? {
                  q: query,
                  page: curPage,
              }
            : {
                  page: curPage,
              };

        router.get("/users", data, {
            preserveState: true,
            replace: true,
        });
    }, [query]);

    return (
        <>
            <Head title="User" />
            <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
                <PageHeading>Users</PageHeading>
                <input
                    type="search"
                    placeholder="search"
                    name="search"
                    id="search"
                    className="w-full rounded-md ring-1 ring-gray-400 focus:ring-gray-800 md:w-1/3 "
                    value={query}
                    onChange={queryHandle}
                />
            </div>

            <ul role="list" className="divide-y divide-gray-100">
                {users.data.map(({ id, name, email }) => (
                    <li className="flex justify-between gap-x-6 py-5" key={id}>
                        <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {name}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                    {email}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <Link
                                as="button"
                                href={`/users/${id}/edit`}
                                className="text-sm leading-6 text-gray-900"
                            >
                                EDIT
                            </Link>
                            <Link
                                as="button"
                                href={`/users/${id}`}
                                method="delete"
                                className="text-sm leading-6 text-red-400"
                            >
                                DELETE
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>

            <Pagination links={users.links} />
        </>
    );
}
