// ASSESSMENT:
// You will be implementing a table with its content fetched from https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10
// You will use functional components and hooks
// And a simple table styling in question1.css
// An example UI of a working version is presented in question1.gif
//

// BONUS POINT: implement pagination feature with Previous-Next buttons
// _start and _limit are query parameters which you can use to fetch some of the items, which is called 'pagination'
// _limit is always 10 for our case, but _start parameter can be changed to fetch portions of that data


// SOLUTION:
// React and ReactDOM is already imported in index.html

// const [count,setCount] = useState(0);
// api url
const api_url = 
      "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10";


// Defining async function
async function getapi(url) {
    let data;

    // Storing response
     await fetch(url)
    .then( async (response) => {

        // get json response here
        data = await response.json();
        console.log(data)
    show(data);
    })
    }
  function App() {

   getapi(api_url);

   return (<div id="reactAssesment">
           
          
           </div> );
}
function show(data) {
    let tab = 
        `
        <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Completed</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let d of data) {
        tab += `<tr> 
    <td>${d.id} </td>
    <td>${d.userId}</td>
    <td>${d.title}</td> 
    <td>${d.completed}</td>          
</tr>`;
    }
       tab =`<table>`+tab+` </table> `+
           `<button id="buttons" onclick="">Previous</button>`+
           `<button id="buttons" onclick="">Next</button>`;
    // Setting innerHTML as tab variable
    document.getElementById("reactAssesment").innerHTML = tab;
}
ReactDOM.render(<App />, document.getElementById("root"));

