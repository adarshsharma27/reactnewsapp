import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Cards from "./Cards";
import Search from "./Search";
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [search,setSearch]=useState("")
    const pageSize = 8;
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("");

    useEffect(() => {
        const moviesFinder = async () => {
            try{
            const ApiUrl1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_APP_KEY}&category=${category}&page=${pageNumber}&pageSize=${pageSize}&q=${search}`;
            const response = await fetch(ApiUrl1);
            const data = await response.json();
            setMovies(data.articles);
            setLoading(false);
            }
            catch(error){
                console.log(error,"API ERROR ..");
            }
        };
        moviesFinder();
    }, [pageNumber,search,category]);

    const nextPage=()=>{
        setPageNumber(pageNumber+1);
        setLoading(true)
        window.scroll(0,150)
    }
    const previousPage=()=>{
        if(pageNumber===1) return;
        setPageNumber(pageNumber-1);
        setLoading(true)
        window.scroll(0,150)
    }
    return (
        <>
            <Search  setSearch={setSearch} setPageNumber={setPageNumber} setCategory={setCategory} setLoading={setLoading}/>
            <div className="content bg-light">
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <Loader />
                        ) : movies.length ? (
                            movies.map((element, index) => {
                                let {author,title,description,urlToImage,publishedAt,url} = element;
                                return <Cards key={index} urlToImage={urlToImage} author={author} title={title} description={description} publishedAt={publishedAt} url={url}/>;
                            })
                        ) : (
                            <h2 className="text-white p-2 m-0 text-center">No More News</h2>
                        )}
                        </div>
                        <div className="btns py-2 d-flex align-items-center justify-content-between">
                        <button href="https://www.imdb.com/title/Entertainment Desk" disabled={pageNumber===1} className="btn btn-primary" target="_black" onClick={()=>{previousPage()}}>Previous</button>
                        <button className="btn btn-primary btn-secondary " disabled={!movies.length} onClick={()=>{nextPage()}}>Next</button>
                        </div>
                </div>

            </div>
        </>
    );
};

export default Home;
