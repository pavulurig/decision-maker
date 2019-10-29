
console.log("App is running gopi");
var user = {
    username:"gopi",
    age:24,
    company:"tracxn"

}
function userProperty(){
    return 'unknown';
}
var template = (
<div>
    <p>{user.username}</p>
    <p>{user.age}</p>
    <p>{user.company} {userProperty()}</p>
</div>
)
var appRoot = document.getElementById("app");
ReactDOM.render(template,appRoot);