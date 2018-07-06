$.fn.inView = function()
{
    //Window Object
    var win = $(window);

    //Object to Check
    obj = $(this);

    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();

    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();

    //the start of the object to check
    var objStartPos = (obj.offset().top);

    //the end of the object to check
    var objEndPos = (obj.offset().top + obj.outerHeight());

    return(visibleArea >= objStartPos && scrollPosition <= objEndPos ? true : false)
};