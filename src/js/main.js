/**
 * Created by kchunter on 2/9/2015.
 */
window.onload = function ()
{
    window.addEventListener('polymer-ready', function(e)
    {
        console.log('run it');
        var ajax            = document.querySelector('core-ajax');

        //respond to events it fires
        ajax.addEventListener('core-response', function (e)
        {
            console.log(this.response);
        });

        ajax.go(); //call its api methods.
    });
};