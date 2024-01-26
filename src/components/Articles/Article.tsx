import React from "react";
import style from "./styles.module.scss";
interface ArticleProps{
    title:string;
    provider:string;
    description:string;
    thumbnail:string;
}
export const Article: React.FC<ArticleProps> = ({title, provider, description, thumbnail})=>{
    
    return (
        <article id={style.article}>
            <img className={style['imgArticle']} src={thumbnail} alt={title} />

            <div className={style.articleInfos}>
                <h2>{title}</h2>
                <h3>{provider}</h3>
                <p>{description}</p>
            </div>
        </article>
    );
}