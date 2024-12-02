import Card from "./Card/Card"
import posts from "../posts"

function Main() {
    function onSubmit(event) {
        event.preventDefault()
        console.log('sto inserendo un nuovo post')
    }

    return (
        <main>
            <div className="container">
                <form onSubmit={onSubmit} action="" className="form">
                    <input type="text" />
                    <input type="submit" value="add" />
                </form>
            </div>
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