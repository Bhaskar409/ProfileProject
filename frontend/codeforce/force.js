
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



// function forceapicall()
// {
//     fetch('https://codeforces.com/api/contest.list')
//     .then(function(response)
//     {
//         if(response.ok)
//             console.log('Server working fine');
//         else
//             console.log('server responds with error status');
//     })
//     .catch(function(err)
//     {
//         console.log('server errr',err);
//     })
// }


function forceapicall()
{
    const idforce = document.getElementById("forceid").value;
    const resultgain = document.getElementById("resultcodeforce")

    if(idforce === "")
    {
        resultgain.innerHTML = "enter your id";
        return ;
    }

    fetch(`https://codeforces.com/api/user.info?handles=${idforce}`)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(data)
    {
        if (data.status !== "OK" || !data.result.length) {
                resultgain.textContent = "User not found.";
                return;
        }
        const user = data.result[0];

        resultgain.innerHTML = `
            <p>Handle: ${user.handle}</p>
            <p>Rank: ${user.rank}</p>
        `;
    })
    .catch(function(err)
    {
        console.log(err);
    });


}