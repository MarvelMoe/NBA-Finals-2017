TweenMax.staggerFrom('.d-logo', 2, {
    y: 200,
    opacity: 0
}, 0.3) 

TweenMax.staggerFrom('.vs', 2.3, {
    y: -400,
    opacity: 0,
    delay: 2.9
})

TweenMax.staggerFrom(".letters", .4, {
    opacity: 0,
    cycle: {
        x: [-200, 200],
        y: function(index) {
            return index * 20;
        }
    }
}, 0.3)

TweenMax.staggerFrom('.cavs', 4, {
    y: 200,
    opacity: 0,
    scale: .2,
    rotationX: 720,
    delay: 4.2
});

TweenMax.staggerFrom('.rubber li', 1, {
   opacity: 0,
   delay: 8,
    cycle: {
        x: function(index) {
            return (index + 1) * 40;
        },
        ease:function (index) {
         return Back.easeOut.config(index * 0.3)      
       }
    }
}, 0.1);











