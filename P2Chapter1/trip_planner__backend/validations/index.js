function validateFlightQueryParams(query) {
     const error = [];
     if(!query.origin){  
       error.push("Origin is required");
     }
     if(!query.destination){  
       error.push("Destination is required");
     }
     return error;
     
     }
 function validateHotelQueryParams(query) {
          const error = [];
          if (!query.location) {
            error.push("Location is required");
          }
          return error;
        }
        
function validateSiteQueryParams(query) {
          const error = [];
          if (!query.location) {
            error.push("Location is required");
          }
          return error;
        }

module.exports = { validateFlightQueryParams , validateHotelQueryParams , validateSiteQueryParams };

