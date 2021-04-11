function showData()
{
    event.preventDefault();
    var country=document.getElementById("country").value;
    var start=document.getElementById("start").value;
    var end=document.getElementById("end").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(start);

    if(country=='' || start=='' || end=='')
    alert("Enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+start+"T00:00:00Z&to="+end+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            var length=res.length;
            var index=length-1;

            var c=res[index].Confirmed;
            var a=res[index].Active;
            var d=res[index].Deaths;

            confirmed.innerHTML=c
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("res").style.display="block";
            
        })
    }

}
