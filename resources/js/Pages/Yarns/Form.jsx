import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { TextInput } from "@/Components/Form/Input";
import { SubmitButton } from "@/Components/Button";

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
            <h1 className="mb-10 text-center text-2xl font-semibold">
                {!isCreate ? "Update Yarn" : "Create New Yarn"}
            </h1>
            <form className="mx-auto flex max-w-lg flex-col" onSubmit={submit}>
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

                <div className="buttons mt-10 flex flex-row items-center justify-center space-x-4">
                    <SubmitButton disabled={processing}>
                        {!isCreate ? "Update" : "Create"}
                    </SubmitButton>
                    {!isCreate ? (
                        <Link
                            href={`/yarns/id}`}
                            method="delete"
                            className="w-20 text-sm text-red-600"
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
