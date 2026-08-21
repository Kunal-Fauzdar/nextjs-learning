type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label : string;
    error? : string
}

export function Input({
    label,
    error,
    ...props
} : InputProps){
     return (
        <div className="space-y-1">
            <label className="text-sm font-medium">
                {label}
            </label>

            <input
                {...props}
                className="border rounded-md p-2 w-full"
            />

            {error && (
                <p className="text-red-500 text-sm">
                    {error}
                </p>
            )}
        </div>
    );
}