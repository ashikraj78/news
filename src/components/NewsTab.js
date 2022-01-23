import React, { useState } from "react"


function NewsTab({data}){
    const [readMore,setReadMore] = useState(false)

    console.log(data.News.slice(0,200) , "the data in news tab")
    function handleClick(){
        setReadMore(!readMore)
    }

    return(
        <> 
            <div className="singleNews" >
                <h4>{data.Headline}</h4>

                {!readMore ? (
                    <div>
                        <p>{data.News.slice(0,200)}...</p>
                        <button onClick={handleClick}>Read More</button>  
                    </div>
                ):(
                    <div>
                        <p>{data.News}</p>
                        <button onClick={handleClick}>Read Less</button>  
                    </div>
                )}

                

                

                <img src={data.Image_Link} alt="new image" width="100" height="100"></img>
                <div>
                    <button>
                         <a href={data.Hyperlink}>news</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NewsTab;