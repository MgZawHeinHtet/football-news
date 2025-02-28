export interface newsType{
    source : {
        id : number,
        name : string
    },
    author : string,
    title : string
    description ?: string,
    urlToImage : string,
    url ?: string,
    publishedAt : string
    content ?: string
}