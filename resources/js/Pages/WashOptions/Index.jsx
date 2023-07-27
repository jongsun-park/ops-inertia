import { Head, Link, useForm } from "@inertiajs/react";

const WashOptionRow = ({ label, children }) => (
    <div>
        <span className="text-xs p-1 bg-gray-100 rounded-sm mr-2 uppercase">
            {label}
        </span>
        {children}
    </div>
);

const WashOptionSectionTitle = ({ children, className }) => (
    <h2 className={`text-xl font-semibold uppercase ${className}`}>
        {children}
    </h2>
);

const Box = ({ children }) => (
    <div className="wash_option p-4 my-4 border-2 border-gray-200 rounded-md space-y-2">
        {children}
    </div>
);

export default function Looms({ wash_options = [] }) {
    return (
        <>
            <Head title="Wash Options" />

            <div className="flex flex-row justify-between items-center">
                <WashOptionSectionTitle>Wash Options</WashOptionSectionTitle>
                <Link
                    href="/wash_options/create"
                    className="uppercase text-xs font-semibold text-blue-400 hover:text-blue-600"
                >
                    Create New Wash Option
                </Link>
            </div>

            <div>
                {wash_options.map((option) => {
                    const {
                        id,
                        name,
                        temp,
                        detergt,
                        softener,
                        obas,
                        starch,
                        temble,
                        other,
                    } = option;
                    return (
                        <Box key={id}>
                            <div className="flex flex-row">
                                <h3 className="font-semibold text-lg flex-1">
                                    {name}
                                </h3>
                                <div className="links space-x-1">
                                    <Link
                                        href={`/wash_options/${id}/edit`}
                                        className="text-sm font-semibold text-blue-400 hover:text-blue-600"
                                    >
                                        EDIT
                                    </Link>
                                    <Link
                                        href={`/wash_options/${id}/`}
                                        method="delete"
                                        as="button"
                                        className="text-sm font-semibold text-red-400 hover:text-red-600"
                                    >
                                        DELETE
                                    </Link>
                                </div>
                            </div>

                            <WashOptionRow label="Temp">{temp}</WashOptionRow>

                            <WashOptionRow label="Detergt">
                                {detergt}
                            </WashOptionRow>
                            <WashOptionRow label="Softener">
                                {softener}
                            </WashOptionRow>
                            <WashOptionRow label="Obas">{obas}</WashOptionRow>
                            <WashOptionRow label="Starch">
                                {starch}
                            </WashOptionRow>
                            <WashOptionRow label="Temble">
                                {temble}
                            </WashOptionRow>
                            <WashOptionRow label="Other">{other}</WashOptionRow>
                        </Box>
                    );
                })}
            </div>
        </>
    );
}
