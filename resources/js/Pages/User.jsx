import { Pagination } from "@/Components/Pagination";
import { PageHeading } from "@/Components/UI/Heading";
import { Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import { debounce } from "lodash";
import { useCallback } from "react";

export default function User({ users, search = "", page, can }) {
    const [curPage, setCurPage] = useState(page);
    const [searchInput, setSearchInput] = useState(search);

    const sendQuery = (q) => {
        const data = q ? { q: q, page: curPage } : { page: curPage };
        router.get("/users", data, { preserveState: true, replace: true });
    };

    // Get results after 300ms after typing
    const delayedSearch = useCallback(
        debounce((q) => sendQuery(q), 300),
        [],
    );

    const searchInputHandler = (e) => {
        setSearchInput(e.target.value);
        setCurPage(1);
        delayedSearch(e.target.value);
    };

    return (
        <>
            <Head title="User" />
            <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
                <div className="items-base flex items-baseline space-x-4">
                    <PageHeading>Users</PageHeading>
                    {can?.createUser && (
                        <Link
                            href="#"
                            className="text-xs font-semibold uppercase text-blue-400 hover:text-blue-600"
                        >
                            Create New User
                        </Link>
                    )}
                </div>

                <input
                    type="search"
                    placeholder="search"
                    name="search"
                    id="search"
                    className="w-full rounded-md ring-1 ring-gray-400 focus:ring-gray-800 md:w-1/3 "
                    value={searchInput}
                    onChange={searchInputHandler}
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
