import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { TextInput } from "@/Components/Form/Input";

export default function CreateYarn({ yarn = {} }) {
    let init = {
        sku: yarn?.sku ?? "",
        grade: yarn?.grade ?? "",
        colour: yarn?.colour ?? "",
        fibre: yarn?.fibre ?? "",
        supplier: yarn?.supplier ?? "",
    };

    const isCreate = yarn?.id === undefined ? true : false;

    const { data, setData, post, put, reset, processing, errors } =
        useForm(init);

    const submit = (e) => {
        e.preventDefault();
        if (isCreate) {
            post("/yarns", {
                onSuccess: () => reset(),
            });
        } else {
            // update
            put(`/yarns/${yarn.id}`, {
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <>
            <Head title="Products" />
            <h1 className="text-2xl text-center mb-10 font-semibold">
                {!isCreate ? "Update Yarn" : "Create New Yarn"}
            </h1>
            <form className="flex flex-col max-w-lg mx-auto" onSubmit={submit}>
                {Object.keys(init).map((input) => {
                    return (
                        <TextInput
                            name={input}
                            key={input}
                            setData={setData}
                            errors={errors}
                            value={data[input]}
                            // required
                        />
                    );
                })}

                <div className="buttons flex flex-row space-x-4 items-center justify-center mt-10">
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-gray-800 p-3 rounded-full text-white flex-1"
                    >
                        {!isCreate ? "Update" : "Create"}
                    </button>
                    {!isCreate ? (
                        <Link
                            href={`/yarns/id}`}
                            method="delete"
                            className="text-sm text-red-600 w-20"
                            as="button"
                        >
                            Delete
                        </Link>
                    ) : (
                        ""
                    )}
                </div>
            </form>
        </>
    );
}
