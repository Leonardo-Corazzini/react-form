import style from "./ModifyForm.module.css"
export default function ModifyForm({ callback, callback2, title }) {
    function sendModify(event) {
        event.preventDefault()
        title && callback2()


    }
    return (
        <form onSubmit={sendModify} action="" className={style.form}>
            <input onChange={(e) => callback(e.target.value)} type="text" />
            <input type="submit" value="conferma" />
        </form>
    )
}