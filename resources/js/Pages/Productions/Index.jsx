import { Link, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { Pagination } from "@/Components/Pagination";

const Label = ({ label, children }) => (
    <p>
        <span className="px-1 py-0 text-xs bg-gray-50 border border-1 border-gray-100 rounded-sm mr-2 inline-block uppercase">
            {label}
        </span>{" "}
        {children}
    </p>
);

const AuthorCard = ({ author }) => {
    const { name, email } = author;
    return (
        <Label label="Written by">
            {" "}
            <Link
                href={`mailto:${email}`}
                target="_blank"
                className="underline"
            >
                {name}
            </Link>
        </Label>
    );
};
const ProductCard = ({ product }) => {
    const { sku, desc, id } = product;
    return (
        <Label label="product">
            {" "}
            <Link href={`/products/${id}`} className="underline">
                {sku} - {desc}
            </Link>
        </Label>
    );
};
const WashOptionCard = ({ wash_option }) => {
    const { id, name } = wash_option;
    return (
        <Label label="Wash Option">
            <Link href="wash-options" className="underline">
                {name}
            </Link>
        </Label>
    );
};

const ProductionCard = ({ production }) => {
    const {
        id,
        product_id,
        order_id,
        customer,
        urgency,
        quantity,
        total_length,
        num_of_repeats,
        user_id,
        note,
        wash_option_id,
        packing,
        created_at,
        updated_at,
        author,
        product,
        wash_option,
    } = production;

    return (
        <li
            key={id}
            className="flex flex-row mb-3 border border-gray-200 p-4 rounded-md"
        >
            <div className="flex-1 space-y-1">
                <Label label="order_id">{order_id}</Label>
                <Label label="customer">{customer}</Label>
                <Label label="urgency">{urgency}</Label>
                <Label label="quantity">{quantity}</Label>
                <Label label="total_length">{total_length}</Label>
                <Label label="num_of_repeats">{num_of_repeats}</Label>
                <Label label="note">{note}</Label>
                <Label label="packing">{packing}</Label>
                <AuthorCard author={author} />
                <ProductCard product={product} />
                <WashOptionCard wash_option={wash_option} />
            </div>
            <div className="buttons flex flex-row space-x-2">
                <div>
                    <Link href={`/productions/${id}/edit`} className="text-sm">
                        Edit
                    </Link>
                </div>
                <div>
                    <Link
                        href={`/productions/${id}`}
                        method="delete"
                        className="text-sm text-red-600"
                        as="button"
                    >
                        Delete
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default function Productions({ productions = [] }) {
    return (
        <Layout>
            <Head title="Productions" />
            <div className="max-w-2xl mx-auto p-10">
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-center mb-10 font-semibold">
                        Productions
                    </h1>
                    <div>
                        <a
                            href="/productions/create"
                            className="text-xs bg-gray-700 text-white py-2 px-4 rounded-md uppercase"
                        >
                            Create New Production
                        </a>
                    </div>
                </div>

                <ul>
                    {/* If there don't have any productions */}
                    {productions.data.length == 0 && (
                        <p className="text-center text-md text-sky-700">
                            Product not found. Please add any product.
                        </p>
                    )}
                    {/* Loop products */}
                    {productions.data.map((production) => (
                        <ProductionCard
                            key={production.id}
                            production={production}
                        />
                    ))}
                </ul>
                <Pagination className="mt-16" links={productions.links} />
            </div>
        </Layout>
    );
}
