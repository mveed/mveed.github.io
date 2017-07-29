var data = new Object();
console.log("included");
var data =    {
  loadingcircle1 : {
    frame: 1,
  },
  loadingcircle2 : {
    frame: 2,
  },
  loadingcircle3: {
    frame: 3,
  },
};


/*ever x seconds, call function to move*/
/*!!!!!!transition ease and interval need to be same*/
setInterval( function() {
  setNewFrame();
}, 1000);



function setNewFrame() {
  for (i = 1; i < 4; i ++) {
    var currentObject = "loadingcircle" + i;
    var currentFrame = data[currentObject].frame;

    $(".loadingcircle" + i).removeClass("pos" + currentFrame);
    /*if frame is 4, restart at 0*/
    if (currentFrame == 4) {
      data[currentObject].frame = "0";
    };
    data[currentObject].frame ++;
    $(".loadingcircle" + i).addClass("pos" + (data[currentObject].frame));
  };
};
