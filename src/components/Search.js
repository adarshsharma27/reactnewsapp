import React from "react";
const Search = ({ setSearch ,setPageNumber,setCategory,setLoading}) => {
    return (
        <>
            <div className="form py-4 bg-light">
                <div className="form-container w-75 mx-auto">
                    <input type="search" className="form-control   mx-auto" placeholder="search" id="search" onInput={(event) => 
                        {setSearch(event.target.value)
                        setPageNumber(1)
                        }} />


                <div className="dropdowns">
                 <select id="regions" onChange={(e)=>{
                     setLoading(true)
                     setCategory(e.target.value)
                     setPageNumber(1)
                    }}>
                    <option value="" hidden="">News Feeds</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="general">General</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                 </select>
         </div>        
                </div>
            </div>
        </>
    );
};

export default Search;
