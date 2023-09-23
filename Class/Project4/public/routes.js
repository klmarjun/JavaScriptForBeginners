let Router = function (name, routes) {
    return {
      name,
      routes,
    };
  };
  
  
  let routerInstance = new Router("routerInstance", [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "ContactUs",
    },
  ]);
  
  
  export default routerInstance;
  
  
  