const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression";

let siteName = "";
const tags = new Set();

const fetchData = async () => {      
  try {
    const result = await axios.get(siteUrl);
    console.log(result);
    return cheerio.load(result.data);
  } catch (err) {
    console.error("Error response:");
    console.error(err.response.data);
    console.error(err.response.status); 
    console.error(err.response.headers);
  }
};

const getResults = async () => {
  const $ = await fetchData();

  siteName = $('.top > .action-post-job').text();

  $("tr").each((index, element) => {
    tags.add(index+" ----  "+$(element).html());
  });
  return {
    tags: [...tags].sort(),
  };
};

module.exports = getResults;
