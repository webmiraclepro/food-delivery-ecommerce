export default function Arrow(props: any) {
    const { className, onClick, arrowIcon } = props;
    return (
        <img
            className={className} src={arrowIcon}
            onClick={onClick} />
    );
}

