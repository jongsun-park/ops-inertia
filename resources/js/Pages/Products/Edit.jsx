import { Head, useForm } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { ProductForm } from "@/Components/Product/Form";

export default function Detail({ product, yarns }) {
    const productInit = {
        sku: product.sku,
        tf_number: product.tf_number,
        desc: product.desc,
        warp_id: product.warp_id,
        weft_1_id: product.weft_1_id,
        weft_2_id: product.weft_2_id,
        weft_3_id: product.weft_3_id,
        weft_4_id: product.weft_4_id,
        unit: product.unit,
        divs: product.divs,
        ppcm: product.ppcm,
        pprepeat: product.pprepeat,
        loom: product.loom,
        cut_width: product.cut_width,
        cut_length: product.cut_length,
        finish_width: product.finish_width,
        finish_length: product.finish_length,
        label: product.label,
        hem_type: product.hem_type,
        hem_size: product.hem_size,
        corner: product.corner,
    };

    const { data, setData, put, processing, errors } = useForm(productInit);

    function submit(e) {
        e.preventDefault();
        put("/products/" + product.id);
    }

    return (
        <Layout>
            <Head title={`Edit - ${product.sku}`} />
            <div className="max-w-xl mx-auto">
                <ProductForm
                    id={product.id ?? ""}
                    data={data}
                    title={`Edit - ${product.sku}`}
                    button="Update"
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
