export default function NewsDetailsPage({ params }) {
    const newsId = params.id;

    return (
        <>
            <h1>NewsDetailsPage</h1>
            <p>News ID: {newsId}</p>
        </>
    )
}