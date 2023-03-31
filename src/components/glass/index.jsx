function Glass(props) {
    const { variant, extra, children, ...rest } = props;
    return (
        <div
            className={`p-5 rounded-[20px] glass bg-primaryLight hover:bg-primaryLight dark:bg-primaryDark ${extra}`}
            {...rest}
        >
            {children}
        </div>
    );
}

export default Glass;
