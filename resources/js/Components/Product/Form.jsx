import { Link } from "@inertiajs/react";
import { SelectInput, TextInput } from "../Form/Input";

export const ProductForm = ({
    id = "",
    data,
    title,
    button,
    submit,
    setData,
    processing,
    errors,
    yarns,
}) => {
    return (
        <>
            <h1 className="text-2xl text-center mb-10 font-semibold">
                {title}
            </h1>
            <form className="flex flex-col" onSubmit={submit}>
                <TextInput
                    name="sku"
                    key="sku"
                    setData={setData}
                    errors={errors}
                    value={data["sku"]}
                    required
                />

                <TextInput
                    name="tf_number"
                    key="tf_number"
                    setData={setData}
                    errors={errors}
                    value={data["tf_number"]}
                />

                <TextInput
                    name="desc"
                    key="desc"
                    setData={setData}
                    errors={errors}
                    value={data["desc"]}
                />

                <SelectInput
                    label="wrap"
                    options={yarns}
                    name="warp_id"
                    setData={setData}
                    errors={errors}
                    value={data["warp_id"]}
                />

                <SelectInput
                    label="weft 1"
                    options={yarns}
                    name="weft_1_id"
                    setData={setData}
                    errors={errors}
                    value={data["weft_1_id"]}
                />

                <SelectInput
                    label="weft 2"
                    options={yarns}
                    name="weft_2_id"
                    setData={setData}
                    errors={errors}
                    value={data["weft_2_id"]}
                />

                <SelectInput
                    label="weft 3"
                    options={yarns}
                    name="weft_3_id"
                    setData={setData}
                    errors={errors}
                    value={data["weft_3_id"]}
                />

                <SelectInput
                    label="weft 4"
                    options={yarns}
                    name="weft_4_id"
                    setData={setData}
                    errors={errors}
                    value={data["weft_4_id"]}
                />

                <TextInput
                    name="unit"
                    key="unit"
                    setData={setData}
                    errors={errors}
                    value={data["unit"]}
                />
                <TextInput
                    name="divs"
                    key="divs"
                    setData={setData}
                    errors={errors}
                    value={data["divs"]}
                    unit="cm"
                />
                <TextInput
                    name="ppcm"
                    key="ppcm"
                    setData={setData}
                    errors={errors}
                    value={data["ppcm"]}
                    unit="cm"
                />
                <TextInput
                    name="pprepeat"
                    key="pprepeat"
                    setData={setData}
                    errors={errors}
                    value={data["pprepeat"]}
                />

                {/* TODO - SELECT */}
                <TextInput
                    name="loom"
                    key="loom"
                    setData={setData}
                    errors={errors}
                    value={data["loom"]}
                />
                <TextInput
                    name="cut_width"
                    key="cut_width"
                    setData={setData}
                    errors={errors}
                    value={data["cut_width"]}
                    unit="cm"
                />
                <TextInput
                    name="cut_length"
                    key="cut_length"
                    setData={setData}
                    errors={errors}
                    value={data["cut_length"]}
                    unit="cm"
                />
                <TextInput
                    name="finish_width"
                    key="finish_width"
                    setData={setData}
                    errors={errors}
                    value={data["finish_width"]}
                    unit="cm"
                />
                <TextInput
                    name="finish_length"
                    key="finish_length"
                    setData={setData}
                    errors={errors}
                    value={data["finish_length"]}
                    unit="cm"
                />
                <TextInput
                    name="label"
                    key="label"
                    setData={setData}
                    errors={errors}
                    value={data["label"]}
                />
                <TextInput
                    name="hem_type"
                    key="hem_type"
                    setData={setData}
                    errors={errors}
                    value={data["hem_type"]}
                />
                <TextInput
                    name="hem_size"
                    key="hem_size"
                    setData={setData}
                    errors={errors}
                    value={data["hem_size"]}
                    unit="cm"
                />
                <TextInput
                    name="corner"
                    key="corner"
                    setData={setData}
                    errors={errors}
                    value={data["corner"]}
                />

                <div className="buttons flex flex-row space-x-4 items-center justify-center mt-10">
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-gray-800 p-3 rounded-full text-white flex-1"
                    >
                        {button}
                    </button>
                    {id !== "" ? (
                        <Link
                            href={`/products/${id}`}
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
};
