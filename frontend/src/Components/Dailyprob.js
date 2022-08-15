import React from 'react'
import data from './data'
import data2 from './data2'

function Dailyprob() {
    
    const [posts, setPosts] = React.useState(data)
    const [exs, setEx] = React.useState(data2)

  return (
    <div>
        <div className="container contpast">
        <h3 className='h2x'>Today's Problems</h3>
        <div className="card carddp container mt-4">
                {
                    exs.map((ex,id) => {
                        return(
                            <div className="dp" key={id}>
                                {(id != 0) ? <hr/>: <></>}
                                <h3>Daily {ex.name}
                                <button className="btndp">{ex.rank1} links</button>
                                </h3>
                                <p>{ex.date}</p>                                
                            </div>            
                        )
                    })
                }                
            </div>
            <h3 className='h2x'>Past Problems</h3>
            <div className="card carddp container mt-4">
                {
                    posts.map((post,id) => {
                        return(
                            <div className="dp" key={id}>
                                {(id != 0) ? <hr/>: <></>}
                                <h3>Daily {post.name}
                                <button className="btndp">{post.rank1} links</button>
                                </h3>
                                <p>{post.date}</p>                                
                            </div>            
                        )
                    })
                }                
            </div>                        
        </div>
        <div className="end"></div>
    </div>
  )
}

export default Dailyprob