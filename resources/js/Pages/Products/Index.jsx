import { Link, Head } from "@inertiajs/react";

import { Pagination } from "@/Components/Pagination";
import Label from "@/Components/UI/Label";
import { PageHeading } from "@/Components/UI/Heading";
import { Box } from "@/Components/UI/Container";

import { PrimaryLink, SecondaryLink, DangerLink } from "@/Components/Button";

export default function Products({ products = [] }) {
    return (
        <>
            <Head title="Products" />

            <div className="flex flex-row justify-between items-center">
                <PageHeading className="mb-0">Products</PageHeading>
                <PrimaryLink href="/products/create">
                    Create New Product
                </PrimaryLink>
            </div>

            <ul className="space-y-2 mt-4">
                {/* If there don't have any products */}
                {products.data.length == 0 && (
                    <p className="text-center text-md text-sky-700">
                        Product not found. Please add any product.
                    </p>
                )}
                {/* Loop products */}
                {products.data.map(({ id, sku, tf_number, desc }) => (
                    <li key={id}>
                        <Box>
                            {/* Card Heading */}
                            <div className="flex flex-col justify-between md:flex-row">
                                <Link
                                    href={`/products/${id}`}
                                    className="font-semibold mb-2 text-lg underline"
                                >
                                    {sku}
                                </Link>
                                {/* Buttons */}
                                <div className="space-x-2">
                                    <SecondaryLink
                                        href={`/products/${id}/edit`}
                                    >
                                        Edit
                                    </SecondaryLink>

                                    <DangerLink
                                        href={`/products/${id}`}
                                        method="delete"
                                        as="button"
                                    >
                                        Delete
                                    </DangerLink>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label label="TF Number">{tf_number}</Label>
                                <Label label="Description">{desc}</Label>
                                <SecondaryLink
                                    href={`/productions/create/${id}`}
                                    as="button"
                                >
                                    Create Production Order
                                </SecondaryLink>
                            </div>
                        </Box>
                    </li>
                ))}
            </ul>
            <Pagination className="mt-16" links={products.links} />
        </>
    );
}
