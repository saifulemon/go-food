import React from 'react';

type dataFetchProps = {
    status: "loading" | "error" | "success";
}

const DataFetch = ({status}: dataFetchProps) => {
    if (status === "loading") {
      return <h2>Data is loading ...</h2>
    }
    else if(status === "error") {
      return  <h2>Error. Data could not fetch</h2>
    }
    return (
        <div>
            <h2>Data fetched successfullly</h2> 
        </div>
    );
};

export default DataFetch;