
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import Card from "./Card/Card"
import Modiform from "./ModifyForm/ModifyForm"
import initialPosts from "../posts"
import ModifyForm from './ModifyForm/ModifyForm'

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

    const [clickedCardID, setClickedCardID] = useState(0)
    const [modifyMode, setModifyMode] = useState(false)
    const [modifyTitle, setModifyTitle] = useState('')
    function modifyFormON(id) {
        setModifyTitle('')
        setClickedCardID(id)
        setModifyMode(true)
    }
    function modifyFormOFF(post, title) {
        post.id === clickedCardID ? post.title = title : post.title = post.title
        setClickedCardID(0)
        setModifyMode(false)
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
                                <div>{clickedCardID === post.id && modifyMode ? <ModifyForm callback={setModifyTitle} title={modifyTitle} callback2={() => modifyFormOFF(post, modifyTitle)} /> : ''}</div>
                                <div onClick={() => modifyFormON(post.id)} className='xwrench'><FontAwesomeIcon icon={faWrench} /></div>
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