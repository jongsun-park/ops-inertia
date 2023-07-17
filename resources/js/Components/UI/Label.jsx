const Label = ({ label = "", children = "" }) => {
    return (
        <p>
            <span className="label mr-2 text-xs uppercase bg-gray-50 p-1 rounded-md">
                {label}
            </span>
            {children}
        </p>
    );
};

export default Label;
