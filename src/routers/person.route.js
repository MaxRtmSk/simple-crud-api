const route = (route, request) => {
    url = request.url.split('/');

    const routers = {
      '/person': url.length === 2 && url[1] === 'person', 
      '/person/:id': url.length === 3 && url[1] === 'person' && url[2] !== ''
    }
  
    return routers[route]
  };

module.exports = {route};