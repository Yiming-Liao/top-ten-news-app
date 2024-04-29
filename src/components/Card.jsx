const Card = ({ article, id }) => {
    return (
        <>
            <div className="shadow-sm card bg-base-200 mt-4 absolute top-0 w-[90%] h-[50vh] lg:w-2/4 lg:h-[65vh]" id={id}>
                <figure>
                    <img src={article.image} alt="thumbnail" className="w-[100%] aspect-auto" />
                </figure>
                <div className="card-body p-3">
                    <h2 className="card-title mt-auto">{article.title}</h2>
                    <div className="flex items-center">
                        <p>{`${article.publishedAt.slice(0, 10)}｜${article.publishedAt.slice(11, 19)}`}</p>
                        <a href={article.url} target="_blank" rel="noreferrer noopenner">
                            <button className="btn btn-ghost btn-circle flex w-28" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                查看新聞
                            </button>
                        </a>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Card