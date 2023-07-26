import { Head, Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";
import {
    TextInput,
    SelectInput,
    ReactSelectInput,
} from "@/Components/Form/Input";
import Container from "@/Components/UI/Container";
import { PageHeading } from "@/Components/UI/Heading";
import { DangerLink, PrimaryLink } from "@/Components/Button";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Products({ product = {}, yarns = [], looms = [] }) {
    const id = product?.id;

    const init = {
        sku: product?.sku ?? "",
        tf_number: product?.tf_number ?? "",
        desc: product?.desc ?? "",
        warp_id: product?.warp_id ?? "",
        weft_1_id: product?.weft_1_id ?? "",
        weft_2_id: product?.weft_2_id ?? "",
        weft_3_id: product?.weft_3_id ?? "",
        weft_4_id: product?.weft_4_id ?? "",
        unit: product?.unit ?? "",
        divs: product?.divs ?? "",
        ppcm: product?.ppcm ?? "",
        pprepeat: product?.pprepeat ?? "",
        loom_id: product?.loom_id ?? "",
        cut_width: product?.cut_width ?? "",
        cut_length: product?.cut_length ?? "",
        finish_width: product?.finish_width ?? "",
        finish_length: product?.finish_length ?? "",
        label: product?.label ?? "",
        hem_type: product?.hem_type ?? "",
        hem_size: product?.hem_size ?? "",
        corner: product?.corner ?? "",
    };

    const isCreate = id === undefined ? true : false;

    const { data, setData, post, reset, processing, errors } = useForm(init);

    const submit = (e) => {
        e.preventDefault();
        if (isCreate) {
            // store
            post("/products", {
                onSuccess: () => reset(),
            });
        } else {
            // update
            put(`/products/${id}`, {
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <Layout>
            <Head title="Product Form" />

            <Container>
                <PageHeading className="mb-8">
                    {!isCreate ? "Update Product" : "Create New Product"}
                </PageHeading>
                <form className="flex flex-col" onSubmit={submit}>
                    <TextInput
                        name="sku"
                        key="sku"
                        setData={setData}
                        errors={errors}
                        value={data["sku"]}
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

                    <ReactSelectInput
                        label="wrap"
                        options={yarns}
                        name="warp_id"
                        setData={setData}
                        errors={errors}
                        value={data["warp_id"]}
                    />

                    <ReactSelectInput
                        label="weft 1"
                        options={yarns}
                        name="weft_1_id"
                        setData={setData}
                        errors={errors}
                        value={data["weft_1_id"]}
                    />

                    <ReactSelectInput
                        label="weft 2"
                        options={yarns}
                        name="weft_2_id"
                        setData={setData}
                        errors={errors}
                        value={data["weft_2_id"]}
                    />

                    <ReactSelectInput
                        label="weft 3"
                        options={yarns}
                        name="weft_3_id"
                        setData={setData}
                        errors={errors}
                        value={data["weft_3_id"]}
                    />

                    <ReactSelectInput
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

                    <ReactSelectInput
                        label="loom"
                        options={looms}
                        name="loom_id"
                        setData={setData}
                        errors={errors}
                        value={data["loom_id"]}
                        idKey="id"
                        labelKey="name"
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
                        <PrimaryButton
                            type="submit"
                            disabled={processing}
                            className="flex-1"
                        >
                            {!isCreate ? "Update" : "Create"}
                        </PrimaryButton>
                        {!isCreate ? (
                            <DangerLink
                                href={`/products/${id}`}
                                method="delete"
                                className="text-sm w-20 border-0"
                                as="button"
                            >
                                Delete
                            </DangerLink>
                        ) : (
                            ""
                        )}
                    </div>
                </form>
            </Container>
        </Layout>
    );
}
