
// function forceapicall()
// {
//     fetch('https://codeforces.com/api/user.info')
//     .then(function(response)
//     {
//         return response.json();
//     })
//     .then(function(user)
//     {
//         console.log(user);
//     })
// }



function forceapicall()
{
    fetch('https://codeforces.com/api/contest.list')
    .then(function(response)
    {
        if(response.ok)
            console.log('Server working fine');
        else
            console.log('server responds with error status');
    })
    .catch(function(err)
    {
        console.log('server errr',err);
    })
}