const homeRoute = (req,res) => {
    res.send("Hello Hermann Koffi");
  };

const usernameRoute = (req,res) => {
    res.send("Hermann Koffi");
  };


module.exports = {
    homeRoute,
    usernameRoute,
};