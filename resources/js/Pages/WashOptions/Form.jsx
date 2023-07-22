import { Link, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";
import { TextInput } from "@/Components/Form/Input";

export default function WashOptionForm({ wash_option = {} }) {
    let init = {
        name: wash_option?.name ?? "",
        temp: wash_option?.temp ?? "",
        detergt: wash_option?.detergt ?? "",
        softener: wash_option?.softener ?? "",
        obas: wash_option?.obas ?? "",
        starch: wash_option?.starch ?? "",
        temble: wash_option?.temble ?? "",
        other: wash_option?.other ?? "",
    };

    const isCreate = wash_option?.id === undefined ? true : false;

    const { data, setData, post, put, reset, processing, errors } =
        useForm(init);

    const submit = (e) => {
        e.preventDefault();
        if (isCreate) {
            post("/wash_options", {
                onSuccess: () => reset(),
            });
        } else {
            // update
            put(`/wash_options/${wash_option.id}`, {
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <Layout>
            <Head title="Wash Options" />

            <h1 className="text-2xl text-center mb-10 font-semibold">
                {!isCreate ? "Update Wash Option" : "Create New Wash Option"}
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
                            href={`/wash_options/${wash_option.id}}`}
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
        </Layout>
    );
}
