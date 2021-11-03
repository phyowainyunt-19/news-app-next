import { Toolbar } from '../../components/toolbar';
import { useRouter } from 'next/router';
import styles from '../../styles/Feed.module.css';
export const Feed = ({ pageNumber, articles }) => {

    const router = useRouter();

    return (
        <div className="page-container">
            <Toolbar />
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post}>
                        <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                        <p>{article.description}</p>
                        {!!article.urlToImage && <img src={article.urlToImage} />}
                    </div>
                ))}
            </div>

            <div className={styles.paginator}>
                <div
                    onClick={() => {
                        if (pageNumber > 1) {
                            // router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
                            router.push(`/feed/${pageNumber - 1}`);
                        }
                    }}
                    className={pageNumber === 1 ? styles.disabled : styles.active}>
                    Previous page
                </div>
                <div>
                    #{pageNumber}
                </div>
                <div
                    onClick={() => {
                        if (pageNumber < 10) {
                            router.push(`/feed/${pageNumber + 1}`);
                        }
                    }}
                    className={pageNumber === 10 ? styles.disabled : styles.active}>
                    Next page
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 10) {
        return {
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=Myanmar&pageSize=10&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    );

    const apiJson = await apiResponse.json();
    const { articles } = apiJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
}

export default Feed;