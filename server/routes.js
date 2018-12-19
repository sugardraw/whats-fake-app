const route = require("express").Router();
const fs = require("fs");
const path = require("path");

const fetchMsgs = () => {
  try {
    const msgString = fs.readFileSync(
      path.join(__dirname + "/database/posts/posts.json")
    );
    return JSON.parse(msgString);
  } catch (e) {
    return [];
  }
};

route.get("/database/posts/:id", (req, res, next) => {
  fs.readFile(path.join(__dirname + "/database/posts/posts.json"), function(
    err,
    data
  ) {
    if (err) return next(err);
    let posts = JSON.parse(data);

    let selectedConversation = [];
    for (let index in posts) {
      if (Number(posts[index].userId) === Number(req.params.id)) {
        const message = {
          time:posts[index].time,
          userId: posts[index].userId,
          id: posts[index].id,
          origin: posts[index].origin,
          title: posts[index].title,
          body: posts[index].body
        };

        selectedConversation.push(message);
      }
    }
    res.type("json").send(selectedConversation);
    next();
  });
});

route.get("/database/posts/", (req, res) => {
  let allMsgs = fetchMsgs();
  res.send(allMsgs);
});



route.post("/database/posts/addMsg", (req, res) => {
  let allMsgs = fetchMsgs();
  /**
   *set id
   */

console.log(allMsgs.length)


req.query.id=allMsgs.length+1


  let filteredList = [];

  for (let msg in allMsgs) {
    if (Number(allMsgs[msg].userId) === Number(req.query.userId)) {
      filteredList.push(allMsgs[msg]);
    }
  }

  allMsgs.splice(
    allMsgs.indexOf(filteredList[filteredList.length-1])+1,
    0,
    req.query
  );
  fs.writeFile(
    path.join(__dirname + "/database/posts/posts.json"),
    JSON.stringify(allMsgs),
    err => {
      if (err) throw err;
      console.log("The file has been saved!");
      res.send(allMsgs);
    }
  );
});

module.exports = route;
module.exports.fetchMsgs = fetchMsgs;
