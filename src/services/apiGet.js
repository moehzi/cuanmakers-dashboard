import axios from "axios";

export async function getArtist() {
  const response = await axios.get(
    "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/top-artist"
  );
  console.log(response.data);
  return response.data;
}
