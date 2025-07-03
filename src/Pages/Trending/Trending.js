// // components/Trending.jsx

// import React, { useEffect, useState } from "react";
// import { fetchTrendingData } from "../../Data/Trending"; // adjust path if needed

// function Trending() {
//   const [trendingData, setTrendingData] = useState([]);

//   useEffect(() => {
//     async function loadData() {
//       const data = await fetchTrendingData();
//       setTrendingData(data);
//     }
//     loadData();
//   }, []);

//   return (
//     <div className="App">
//       {trendingData.length === 0 ? (
//         <p>Loading trending videos...</p>
//       ) : (
//         trendingData.map((item, index) => (
//           <div key={index}>
//             <picture>
//               {item.videoThumbnails.map((picture, i) => (
//                 <img key={i} src={picture.url} alt={item.title} />
                
//               ))}
//             </picture>
//             -- {item.title[1]} ---
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Trending;
// components/Trending.jsx

import React, { useEffect, useState } from "react";
import { fetchTrendingData } from "../../Data/Trending"; // adjust path if needed

function Trending() {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchTrendingData();
      setTrendingData(data);
    }
    loadData();
  }, []);

  const firstItem = trendingData[0];

  return (
    <div className="App">
      {!firstItem ? (
        <p>Loading trending video...</p>
      ) : (
        <div>
          <picture>
            {firstItem.videoThumbnails.length > 0 && (
              <img
                src={firstItem.videoThumbnails[0].url}
                alt={firstItem.title}
              />
            )}
          </picture>
          -- {firstItem.title} ---
        </div>
      )}
    </div>
  );
}

    export default Trending;
