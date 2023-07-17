import { Link, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const Row = ({ label, value, unit = "" }) => {
    if (value == "") return;
    return (
        <div className="flex flex-row mb-2 p-2 rounded-sm">
            <p className="w-1/4 uppercase text-sm">{label}</p>
            <p className="flex-1">{value}</p>
            {unit != "" && <p className="text-sm">{unit}</p>}
        </div>
    );
};

const YarnRow = ({ label, yarn }) => {
    if (yarn == false) return;
    return (
        <div className="border border-gray-200 bg-gray-50 rounded-sm p-5 mb-2 hover:bg-gray-100">
            <a
                href={`/yarns/${yarn.id}/edit`}
                target="_blank"
                className="flex flex-row justify-between items-baseline"
                title="Opens yarn edit page in a new window or tab"
            >
                <p className="uppercase mb-4 text-semibold underline">
                    {label} - {yarn.sku}
                </p>
                <p className="text-xs">EDIT</p>
            </a>
            <Row label="color" value={yarn.color} />
            <Row label="grade" value={yarn.grade} />
            <Row label="material" value={yarn.material} />
            <Row label="supplier" value={yarn.supplier} />
        </div>
    );
};

export default function Detail({ product, warp, weft1, weft2, weft3, weft4 }) {
    return (
        <Layout>
            <Head title={`Product - ${product.sku}`} />
            <div>
                <div className="flex justify-between items-center bg-gray-100 p-5 mb-4">
                    <h1 className="text-lg">{product.sku}</h1>
                    <div className="buttons space-x-4">
                        <Link
                            href={`/products/${product.id}/edit`}
                            method="get"
                        >
                            Edit
                        </Link>
                        <Link
                            href={`/products/${product.id}`}
                            method="delete"
                            as="button"
                        >
                            Delete
                        </Link>
                    </div>
                </div>
                <div>
                    <Row label="sku" value={product.sku} />
                    <Row label="description" value={product.desc} />
                    <Row label="tf number" value={product.tf_number} />
                    <YarnRow label="wrap" yarn={warp} />
                    <YarnRow label="weft 1" yarn={weft1} />
                    <YarnRow label="weft 2" yarn={weft2} />
                    <YarnRow label="weft 3" yarn={weft3} />
                    <YarnRow label="weft 4" yarn={weft4} />
                    <Row label="divisors" value={product.divs} />
                    <Row
                        label="cut length"
                        value={product.cut_length}
                        unit="cm"
                    />
                    <Row
                        label="cut width"
                        value={product.cut_width}
                        unit="cm"
                    />
                    <Row
                        label="finish length"
                        value={product.finish_length}
                        unit="cm"
                    />
                    <Row
                        label="finish width"
                        value={product.finish_width}
                        unit="cm"
                    />
                    <Row label="label" value={product.label} />
                    <Row label="loom" value={product.loom} />
                    {/* TODO - Loom info - foregin */}
                    <Row label="ppcm" value={product.ppcm} unit="cm" />
                    <Row label="unit" value={product.unit} />
                    <Row label="hem size" value={product.hem_size} unit="cm" />
                    <Row label="hem type" value={product.hem_type} unit="cm" />
                    <Row label="updated at" value={product.updated_at} />
                </div>
            </div>
        </Layout>
    );
}
