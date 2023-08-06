const Item =(props)=>{
    const{each,onDel}=props
    const { id,timeAccessed,logoUrl,title}=each
    const button=()=>{
        onDel(id)
    }
    return(
        <div>
            <p>{timeAccessed}</p>
            <img src={logoUrl} alt={title}/>
            <p>{title}</p>
            <button type="button" onClick={button}>delete</button>

        </div>
    )
}
export default Item





