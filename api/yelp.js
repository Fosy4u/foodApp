import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer EdDghzrWXhLM3IVSDLyv0UmqKptnBas79ABi8Vmlyk0MOFBFip_azg1AYIe43hVrcjgdwiGmf4SSmY9uSuPgsn2RSZti81fumCoD9YKxGj8nnk8pvFQVMzwFrbs_YnYx",
  },
});
