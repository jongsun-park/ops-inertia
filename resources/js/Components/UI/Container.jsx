export default function Container({ className, children, ...props }) {
    return (
        <div {...props} className={`max-w-2xl mx-auto p-10 ` + className}>
            {children}
        </div>
    );
}

export const Box = ({ className, children, ...props }) => (
    <div
        {...props}
        className={`p-3 border border-gray-200 rounded-md mb-3 ` + className}
    >
        {children}
    </div>
);
