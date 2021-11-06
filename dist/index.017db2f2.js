const password = 'tzAd3trXSWPLqVX';
const email = 'gwolwer1ne@gmail.com';
const api_prefix = 'https://www.myfxbook.com/api/';
async function getSession(email, password) {
    const response = await fetch(`${api_prefix}login.json?email=${email}&password=${password}`, {
        mode: 'cors'
    });
    const data = await response.json();
    //TODO checks for errors
    return data.session;
}
async function getAccountId(session) {
    const response = await fetch(`${api_prefix}/get-my-accounts.json?session=${session}`, {
        mode: 'cors'
    });
    const data = await response.json();
    //TODO checks for errors, handle multiple accounts
    return data.accounts[0].id;
}
getSession(email, password).then((session)=>getAccountId(session).then((accountId)=>{
        fetch(`${api_prefix}get-daily-gain.json?session=${session}&id=${accountId}&start=2021-10-29&end=2021-10-30`, {
            mode: 'cors'
        }).then((response)=>response.json()
        ).then((json)=>{
            let dailyGains = json;
            alert(dailyGains.dailyGain[0].value);
        });
    })
);

//# sourceMappingURL=index.017db2f2.js.map
