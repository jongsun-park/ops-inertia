import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";
import { ProductForm } from "@/Components/Product/Form";

export default function Products({
    form_title = "Create New Product",
    button_label = "Create",
    yarns = [],
}) {
    const product_init = {
        sku: "",
        tf_number: "",
        desc: "",
        warp_id: "",
        weft_1_id: "",
        weft_2_id: "",
        weft_3_id: "",
        weft_4_id: "",
        unit: "",
        divs: "",
        ppcm: "",
        pprepeat: "",
        loom: "",
        cut_width: "",
        cut_length: "",
        finish_width: "",
        finish_length: "",
        label: "",
        hem_type: "",
        hem_size: "",
        corner: "",
    };

    const { data, setData, post, reset, processing, errors } =
        useForm(product_init);

    const submit = (e) => {
        e.preventDefault();
        post("/products", {
            onSuccess: () => reset(),
        });
    };

    return (
        <Layout>
            <Head title="Products" />

            <div className="max-w-xl mx-auto">
                <ProductForm
                    data={data}
                    title={form_title}
                    button={button_label}
                    submit={submit}
                    setData={setData}
                    processing={processing}
                    errors={errors}
                    yarns={yarns}
                />
            </div>
        </Layout>
    );
}
