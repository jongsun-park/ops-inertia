import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { ReactSelectInput, TextInput } from "@/Components/Form/Input";
import ReactSelect from "react-select";
import { PageHeading } from "@/Components/UI/Heading";
import { DangerLink, PrimaryLink } from "@/Components/Button";
import PrimaryButton from "@/Components/PrimaryButton";

const SelectLabel = ({ children }) => (
    <p className="mr-4 w-1/3 text-sm">
        {children.replaceAll("_", " ").toUpperCase()}
    </p>
);

export default function ProductionForm({
    production = {},
    wash_opts = [],
    user = {},
    users = [],
    products = [],
    product_id = "",
}) {
    const id = production?.id;

    let init = {
        customer: production?.customer ?? "",
        id: production?.id ?? "",
        note: production?.note ?? "",
        num_of_repeats: production?.num_of_repeats ?? "",
        order_id: production?.order_id ?? "",
        packing: production?.packing ?? "",
        product_id: production?.product_id ?? product_id ?? "",
        quantity: production?.quantity ?? "",
        total_length: production?.total_length ?? "",
        urgency: production?.urgency ?? "",
        user_id: production?.user_id ?? user?.id ?? "",
        wash_option_id: production?.wash_option_id ?? "",
    };

    const isCreate = id === undefined ? true : false;

    const { data, setData, post, put, reset, processing, errors } =
        useForm(init);

    const submit = (e) => {
        e.preventDefault();
        if (isCreate) {
            post("/productions", {
                onSuccess: () => reset(),
            });
        } else {
            // update
            put(`/productions/${id}`, {
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <>
            <Head title="Production Form" />
            <PageHeading className="mt-4">
                {!isCreate ? "Update Production" : "Create New Production"}
            </PageHeading>

            <form className="flex flex-col" onSubmit={submit}>
                <TextInput
                    name="customer"
                    setData={setData}
                    errors={errors}
                    value={data["customer"]}
                />

                <TextInput
                    name="note"
                    setData={setData}
                    errors={errors}
                    value={data["note"]}
                />

                <TextInput
                    name="num_of_repeats"
                    setData={setData}
                    errors={errors}
                    value={data["num_of_repeats"]}
                />

                <TextInput
                    name="order_id"
                    setData={setData}
                    errors={errors}
                    value={data["order_id"]}
                />

                <TextInput
                    name="packing"
                    setData={setData}
                    errors={errors}
                    value={data["packing"]}
                />

                <ReactSelectInput
                    label="product"
                    options={products}
                    name="product_id"
                    setData={setData}
                    errors={errors}
                    value={data["product_id"]}
                    labelKey="sku"
                />

                <TextInput
                    name="quantity"
                    setData={setData}
                    errors={errors}
                    value={data["quantity"]}
                />

                <TextInput
                    name="total_length"
                    setData={setData}
                    errors={errors}
                    value={data["total_length"]}
                />

                <TextInput
                    name="urgency"
                    setData={setData}
                    errors={errors}
                    value={data["urgency"]}
                />

                {/* TODO - SET DEFUALT BY LOGIN INFO  */}
                <ReactSelectInput
                    label="Written By"
                    options={users}
                    name="user_id"
                    setData={setData}
                    errors={errors}
                    value={data["user_id"]}
                    labelKey="name"
                />

                <ReactSelectInput
                    label="Wash Options"
                    options={wash_opts}
                    name="wash_option_id"
                    setData={setData}
                    errors={errors}
                    value={data["wash_option_id"]}
                    labelKey="name"
                />

                <div className="buttons mt-10 flex flex-row items-center justify-center space-x-4">
                    <PrimaryButton
                        type="submit"
                        disabled={processing}
                        className="flex-1 rounded-full bg-gray-800 p-3 text-white"
                    >
                        {!isCreate ? "Update" : "Create"}
                    </PrimaryButton>
                    {!isCreate ? (
                        <DangerLink
                            href={`/productions/id}`}
                            method="delete"
                            className="w-20 text-sm text-red-600"
                            as="button"
                        >
                            Delete
                        </DangerLink>
                    ) : (
                        ""
                    )}
                </div>
            </form>
        </>
    );
}
