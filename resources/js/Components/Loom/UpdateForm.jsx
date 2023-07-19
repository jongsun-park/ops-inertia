import { Link, useForm } from "@inertiajs/react";

const LoomUpdateForm = ({ id, name }) => {
    const { data, setData, post, errors } = useForm({
        name: name,
    });

    function submit(e) {
        e.preventDefault();
        post(`/looms/${id}`);
    }

    return (
        <>
            <li
                key={id}
                className="flex flex-row justify-between border-2 mb-2 p-4 rounded-md hover:bg-gray-100"
            >
                <form
                    onSubmit={submit}
                    className="flex-1 flex flex-row mr-2"
                    method="post"
                >
                    <input
                        type="text"
                        value={data.name}
                        className="border-0 p-0 flex-1 focus:border-0 focus:ring-0 bg-transparent"
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    <button type="submit" className="text-xs text-blue-600">
                        Update
                    </button>
                </form>
                <Link
                    href={`/looms/${id}`}
                    method="delete"
                    as="button"
                    type="button"
                    className="text-xs text-gray-600 hover:text-red-600"
                >
                    Delete
                </Link>
            </li>
            {errors.name && (
                <div className="text-red-400 font-semibold mb-4">
                    {errors.name}
                </div>
            )}
        </>
    );
};

export default LoomUpdateForm;
