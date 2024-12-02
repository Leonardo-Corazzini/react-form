
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import Card from "./Card/Card"
import initialPosts from "../posts"

function Main() {
    const [posts, setPosts] = useState(initialPosts)
    const [newTitlePost, setNewTitlePost] = useState('')
    function addPost(event) {
        event.preventDefault()
        if (!newTitlePost) {
            return
        }
        const newPost =
        {
            id: Date.now(),
            title: newTitlePost,
            image: 'https://picsum.photos/200/300',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
            tags: ['html', 'css'],
            published: true,
        }
        setPosts([...posts, newPost])
        setNewTitlePost('')

    }

    function deletePost(postToDelete) {
        setPosts(posts.filter(post => post !== postToDelete))
    }

    return (
        <main>
            <div className="container">
                <form onSubmit={addPost} action="" className="form">
                    <input onChange={(e) => setNewTitlePost(e.target.value)} type="text" placeholder="inserisci nuovo articolo" value={newTitlePost} />
                    <input type="submit" value="add" />
                </form>
            </div>
            <div className="container">
                <div className="row">
                    {
                        posts.map((post) =>
                            post.published && <div key={post.id} className="col-6 card-container">
                                <div onClick={() => console.log(post.title)} className='xwrench'><FontAwesomeIcon icon={faWrench} /></div>
                                <div onClick={() => deletePost(post)} className='xmark'><FontAwesomeIcon icon={faXmark} /></div>
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