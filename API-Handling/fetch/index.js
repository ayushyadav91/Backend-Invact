
function main(){
     fetch('https://trip-planner-invact.vercel.app/api/v1/flights').then(async(res)=>{
          const data = await res.json();
               console.log(data.length);
     });
}
main();