interface TodoTaskProps {
    children: React.ReactNode;
}

export const TodoLayout = (props: TodoTaskProps) => {
    return (
        <div className="mx-auto w-1/2">
            {props.children}
        </div>
    );
}