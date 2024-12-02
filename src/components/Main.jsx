import Card from "./Card/Card"
import posts from "../posts"

function Main() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {
                        posts.map((post) =>
                            post.published && <div key={post.id} className="col-6">
                                <Card props={post} />
                            </div>
                        )

                    }

                </div>

            </div>
        </main>
    )
}


export default Main