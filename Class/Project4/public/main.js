import routerInstance from "./routes.js";
window.onload = () => {
  //get home div for rendering
  let home = document.getElementById("app");


  //get all route links
  let definedRoutes = Array.from(document.querySelectorAll("[route-link]"));


  // method to navigate
  let navigate = (rout) => {
    let route = rout.target.attributes[0].value;


    // redirect to the router instance
    let routeInfo = routerInstance.routes.filter((ri) => ri.path === route)[0];
    if (!routeInfo) {
      window.history.pushState({}, "", "error");
      home.innerHTML = `This route is not Defined`;
    } else {
      window.history.pushState({}, "", routeInfo.path);
      home.innerHTML = `You are on the ${routeInfo.name} path`;
    }
  };


  //iterate over all defined routes
  definedRoutes.forEach((route) => {
    route.addEventListener("click", navigate, false);
  });


  // get current path
  let currentPath = window.location.pathname;
  if (currentPath === "/") {
    home.innerHTML = "You are on Home page";
  } else {
    // check if route exist in the router instance
    let route = routerInstance.routes.filter(
      (ri) => ri.path === currentPath
    )[0];
    if (route) {
      home.innerHTML = `You are on the ${route.name} path`;
    } else {
      home.innerHTML = `This route is not Defined`;
    }
  }
};
