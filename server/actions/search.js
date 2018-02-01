const axios = require('axios');

module.exports = {
  get: (req, res) => {
    const { blogName, tag } = req.query;
    axios.get(`https://api.tumblr.com/v2/blog/${blogName}.tumblr.com/posts/text?api_key=${process.env.API_KEY}&tag=${tag}`)
      .then((result) => {
        res.send(JSON.stringify(result.data.response.posts));
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
