



function setSelected()
{
    var bracketSelectorValue = document.getElementById('bracket-selector').value;
    //alert(bracketSelectorValue);
    document.getElementById('bracket-selector').value=bracketSelectorValue;
}


function vote(group, id)
{
    alert("group => " + group + ": id => " + id);
}

function Contender(title, url, position)
{
    this.title = title;
    this.url = url;
    this.position = position;

    this.vote() = function()
    {
        alert("voted for " + this.title);
    }
}