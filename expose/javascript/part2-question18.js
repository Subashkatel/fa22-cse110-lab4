function time_every_second()
{
    let date = new Date();
    let time = date.toLocaleDateString();
    console.log(time);
    setTimeout(time_every_second, 1000)
}

time_every_second();