export const PageHeading = ({ className, children }) => (
    <h1 className={`text-2xl font-semibold uppercase mb-5 ` + className}>
        {children}
    </h1>
);
