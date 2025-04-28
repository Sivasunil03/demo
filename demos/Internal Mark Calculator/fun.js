function c1()
{
    let internalMark=Number(document.getElementById('im').value);
    let externalMark=Number(document.getElementById('em').value);
    let r1=internalMark*0.4;
    let r2=externalMark*0.6;
    document.getElementById('tm').innerHTML=(r1+r2).toFixed(2);
}
function c2()
{
    let internalMark=Number(document.getElementById('im').value);
    let externalMark=Number(document.getElementById('em').value);
    let r1=internalMark*0.3;
    let r2=externalMark*0.7;
    document.getElementById('tm').innerHTML=(r1+r2).toFixed(2);
}
function c3()
{
    let internalMark=Number(document.getElementById('im').value);
    let externalMark=Number(document.getElementById('em').value);
    let r1=internalMark*0.2;
    let r2=externalMark*0.8;
    document.getElementById('tm').innerHTML=(r1+r2).toFixed(2);
}
function rc()
{
    let internalMark=Number(document.getElementById('im').value);
    let externalMark=Number(document.getElementById('em').value);
    let n=Number(document.getElementById('r01').value);
    let m=Number(document.getElementById('r02').value);
    let r1=internalMark*(n/100);
    let r2=externalMark*(m/100);
    document.getElementById('tm').innerHTML=(r1+r2).toFixed(2);
}
function inFun(comes)
{
    let r1=document.getElementById('r01');
    let r2=document.getElementById('r02');
    let r1r=document.getElementById('rr');
    let r2r=document.getElementById('rrr');
    if(comes.id==='r01')
    {
        r2.value=100-r1.value;
    }
    else
    {
        r1.value=100-r2.value;
    }
    r1r.textContent=r1.value;
    r2r.textContent=r2.value;
}
function ch(comes)
{
    let val=Number(document.getElementById('em').value)
    if(val>100)
    {
        alert("Mark can not e more than hundred");
        val=0;
        document.getElementById('em').value=val;
    }
    let val1=Number(document.getElementById('im').value)
    if(val1>100)
    {
        alert("Mark can not e more than hundred");
        val1=0;
        document.getElementById('im').value=val;
    }
}