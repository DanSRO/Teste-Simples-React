import React from "react";
import './style.css';

export function Article ({title, provider, description, thumbnail}){
    
    return (
        <article id="article">
            <img className="img-article" src={thumbnail} alt={title} />

            <div className="article-infos">
                <h2>{title}</h2>
                <h3>{provider}</h3>
                <p>{description}</p>
            </div>
        </article>
    );
}



















// import React from "react";
// import './style.css';
// export class Article extends React.Component{
//     render(){
//         return(
//             <article id="article">                
//                 <img className="img-article" src={this.props.thumbnail} alt={this.props.title} />
//                 <div className="article-infos">    
//                     <h2>{this.props.title}</h2>
//                     <h3>{this.props.provider}</h3>
//                     <p>{this.props.description}</p>
//                 </div>
//             </article>
//         );
//     }
// }