import { Pagination } from "@/Components/Pagination";
import { PageHeading } from "@/Components/UI/Heading";
import { Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router, useForm } from "@inertiajs/react";
import { debounce } from "lodash";
import { useCallback } from "react";

const UserUpdateForm = ({ user_id = "", defaultValue = "guest" }) => {
    const roles = ["admin", "designer", "updater", "guest"];

    const { data, setData, put, processing, errors } = useForm({
        role: defaultValue,
    });

    const isDisabled = defaultValue == data.role ?? processing;

    function submit(e) {
        e.preventDefault();
        put(`/users/${user_id}/edit`);
    }

    return (
        <form onSubmit={submit} className="space-x-4">
            <select
                defaultValue={data.role}
                onChange={(e) => setData("role", e.target.value)}
                className="border-0 bg-transparent text-sm ring-0"
            >
                {roles.map((role) => (
                    <option key={role} value={role}>
                        {role.toUpperCase()}
                    </option>
                ))}
            </select>
            {errors.role && <div>{errors.role}</div>}
            <button
                type="submit"
                disabled={isDisabled}
                className="rounded-md border-2 border-gray-200 px-2 py-1 text-sm leading-6 text-gray-400  disabled:opacity-40"
            >
                UPDATE
            </button>
            <Link
                className="rounded-md border-0 border-red-200 px-2 py-1 text-sm leading-6 text-red-400 hover:border-red-400 hover:text-red-700"
                method="delete"
                href={`/users/${user_id}`}
                as="button"
            >
                DELETE
            </Link>
        </form>
    );
};

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
                {users.data.map(({ id, name, email, role }) => (
                    <li className="flex justify-between gap-x-6 py-5" key={id}>
                        <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    <span className="mr-2 rounded-sm bg-sky-400 p-1 text-xs uppercase text-white">
                                        {role}
                                    </span>
                                    {name}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                    {email}
                                </p>
                            </div>
                        </div>
                        {/* Only available for admin user */}
                        {can?.updateUser && (
                            <div className="flex flex-row space-x-2">
                                <UserUpdateForm
                                    user_id={id}
                                    defaultValue={role}
                                />
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <Pagination links={users.links} />
        </>
    );
}
