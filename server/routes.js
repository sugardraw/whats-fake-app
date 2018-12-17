const route = require("express").Router();
const fs = require("fs");
const path = require("path");

route.get("/database/posts/:id", (req, res, next) => {
  let id = req.params.id;

  fs.readFile(path.join(__dirname + "/database/posts/posts.json"), function(
    err,
    data
  ) {
    if (err) return next(err);
    let posts = JSON.parse(data);

    let wholeConversation = [];
    for (let index in posts) {
      if (posts[index].userId === Number(id)) {

        if (
          posts[index].hasOwnProperty("origin") &&
          posts[index].origin === "YOU"
        ) {
          const yourMessage = {
            title: posts[index].title,
            body: posts[index].body,
            origin: posts[index].origin
          };
          wholeConversation.push(yourMessage);
        } else {
          const friendMessage = {
            title: posts[index].title,
            body: posts[index].body,
            userId: posts[index].userId
          };
          wholeConversation.push(friendMessage);
        }
      }
    }

    res.type("json").send(wholeConversation);
    next();
  });
});

module.exports = route;
