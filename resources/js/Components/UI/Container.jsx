export default function Container({ className, children, ...props }) {
    return (
        <div {...props} className={className}>
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
