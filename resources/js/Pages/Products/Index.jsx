import { Link, Head } from "@inertiajs/react";

import { Pagination } from "@/Components/Pagination";
import Label from "@/Components/UI/Label";
import { PageHeading } from "@/Components/UI/Heading";
import { Box } from "@/Components/UI/Container";

import { PrimaryLink, SecondaryLink, DangerLink } from "@/Components/Button";

export default function Products({ products = [], can }) {
    const isAllowed = can?.update;
    return (
        <>
            <Head>
                <title>Products</title>
                <meta
                    type="description"
                    content="Products"
                    head-key="description"
                />
            </Head>

            <div className="flex flex-row items-center justify-between">
                <PageHeading className="mb-0">Products</PageHeading>
                {isAllowed && (
                    <PrimaryLink href="/products/create">
                        Create New Product
                    </PrimaryLink>
                )}
            </div>

            <ul className="mt-4 space-y-2">
                {/* If there don't have any products */}
                {products.data.length == 0 && (
                    <p className="text-md text-center text-sky-700">
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
                                    className="mb-2 text-lg font-semibold underline"
                                >
                                    {sku}
                                </Link>
                                {/* Buttons */}
                                {isAllowed && (
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
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label label="TF Number">{tf_number}</Label>
                                <Label label="Description">{desc}</Label>
                                {isAllowed && (
                                    <SecondaryLink
                                        href={`/productions/create/${id}`}
                                        as="button"
                                    >
                                        Create Production Order
                                    </SecondaryLink>
                                )}
                            </div>
                        </Box>
                    </li>
                ))}
            </ul>
            <Pagination className="mt-16" links={products.links} />
        </>
    );
}
