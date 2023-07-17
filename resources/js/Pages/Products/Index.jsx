import { Link, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

import { Pagination } from "@/Components/Pagination";
import Label from "@/Components/UI/Label";

export default function Products({ products = [] }) {
    return (
        <Layout>
            <Head title="Products" />
            <div className="max-w-2xl mx-auto p-10">
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-center mb-10 font-semibold">
                        Products
                    </h1>
                    <div>
                        <a
                            href="/products/create"
                            className="text-xs bg-gray-700 text-white py-2 px-4 rounded-md uppercase"
                        >
                            Create New Product
                        </a>
                    </div>
                </div>

                <ul>
                    {/* If there don't have any products */}
                    {products.data.length == 0 && (
                        <p className="text-center text-md text-sky-700">
                            Product not found. Please add any product.
                        </p>
                    )}
                    {/* Loop products */}
                    {products.data.map(({ id, sku, tf_number, desc }) => (
                        <li
                            key={id}
                            className="flex flex-row p-3 border border-gray-200 rounded-md mb-3"
                        >
                            <div className="flex-1">
                                <Link
                                    href={`/products/${id}`}
                                    className="font-semibold mb-2 text-lg"
                                >
                                    {sku}
                                </Link>
                                <Label label="TF Number">{tf_number}</Label>
                                <Label label="Description">{desc}</Label>
                                <Link
                                    href={`/production/create/${id}`}
                                    className="text-sm text-sky-400 uppercase font-semibold mt-2"
                                    as="button"
                                >
                                    Create Production Order
                                </Link>
                            </div>
                            <div className="buttons flex flex-row space-x-2">
                                <div>
                                    <Link
                                        href={`/products/${id}/edit`}
                                        className="text-sm"
                                    >
                                        Edit
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href={`/products/${id}`}
                                        method="delete"
                                        className="text-sm text-red-600"
                                        as="button"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <Pagination className="mt-16" links={products.links} />
            </div>
        </Layout>
    );
}
