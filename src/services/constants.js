import axios from "axios";


export async function Random(){
  const Result = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}=&rating=g`)
  .then(({ data }) => {
    return data
  });
  return Result;
}

export async function Search(){
  const Result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=&limit=25&offset=0&rating=g&lang=en`)
  .then(({ data }) => {
    return data;
  });
  return Result;
}
