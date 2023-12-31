import { Head, useForm } from "@inertiajs/react";
import CreatableSelect from "react-select/creatable";
import LoomUpdateForm from "@/Components/Loom/UpdateForm";
import { PageHeading } from "@/Components/UI/Heading";

export default function Looms({ looms = [] }) {
    const { data, setData, post, reset, errors } = useForm({
        name: "",
    });

    const label = typeof data.name == "string" ? "create" : "select";

    function submit(e) {
        e.preventDefault();
        post("/looms", {
            onSuccess: () => reset(),
        });
    }

    const loomOptions = looms.map(({ id, name }) => ({
        value: id,
        label: name,
    }));

    return (
        <>
            <Head title="Looms" />

            <PageHeading>Loom List</PageHeading>
            <div className="mb-10">
                <form onSubmit={submit} className="">
                    <div className="flex flex-row">
                        <CreatableSelect
                            options={loomOptions}
                            inputId="loom"
                            noOptionsMessage={() => "Please add options"}
                            onChange={(e) => {
                                setData("name", e.value);
                            }}
                            isClearable={false}
                            className="mr-2 flex-1"
                        />

                        <button
                            type="submit"
                            className="px-4 bg-gray-200 rounded-md hover:bg-gray-300 uppercase"
                        >
                            {label}
                        </button>
                    </div>

                    {errors.name && (
                        <div className="text-red-400 font-semibold mt-2">
                            {errors.name}
                        </div>
                    )}
                </form>
            </div>

            <ul>
                {/* If there don't have any looms */}
                {looms.length == 0 && (
                    <p className="text-center text-md text-sky-700">
                        Looms are not found. Please add any loom.
                    </p>
                )}
                {/* Loop looms */}
                {looms.map(({ id, name }, i) => (
                    <LoomUpdateForm id={id} name={name} key={id} />
                ))}
            </ul>
        </>
    );
}
