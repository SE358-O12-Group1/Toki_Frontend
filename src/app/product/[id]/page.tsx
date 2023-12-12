export default function ProductPage({ params }: { params: { id: string } }) {
    return <div>{params.id}</div>;
}
