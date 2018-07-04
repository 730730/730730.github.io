function randomColor() {
    var l = '0123456789ABCDEF'.split('');
    var c = '#';
    for(var i=0;i<6;i++) {
        c += l[Math.floor(Math.random()*16)];
    }
    return c;
}

function BoxCanvas(canvas, options) {
    this.DOT_DISTANCE = (options != undefined && 'distance' in options) ? options['distance'] : 25; // in px
    this.DOT_RADIUS = (options != undefined && 'radius' in options) ? options['radius'] : 2;
    this.DOT_ACTIVE_RADIUS = (options != undefined && 'active_radius' in options) ? options['active_radius'] : 5;

    this.halt = false;
    this.reqID = null;
    this.startp = null;
    this.curp = null;
    this.rects = [];
    this.cursor = 0;

    this.evt_funcs = [];

    this.cv = document.querySelector(canvas);
    if (this.cv == undefined) {
        error("Couldn't find canvas element: '"+canvas+"'");
        return false;
    }
    this.ch = this.cv.offsetHeight;
    this.cw = this.cv.offsetWidth;
    this.ctx = this.cv.getContext("2d");

    this.reset();
    this.RegisterEvent(this.cv, "mousemove", this.Event_Draw);
    this.RegisterEvent(this.cv, "mousedown", this.Event_Click);

    return true;
}
BoxCanvas.prototype.Rect = function(x,y,w,h,color)  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;

    this.updateDim = function(w,h) {
        this.w = w;
        this.h = h;
    }
}

BoxCanvas.prototype.reset = function() {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0,0,this.cw,this.ch);
    // Draw the dots
    var x=y=this.DOT_DISTANCE;
    for(x,y; y<this.ch;) {
        this.ctx.fillStyle = "#D0D0D0";
        this.ctx.beginPath();
        this.ctx.arc(x,y,this.DOT_RADIUS,0,Math.PI*2,true);
        this.ctx.closePath();
        this.ctx.fill();
            x+=this.DOT_DISTANCE
        if(x>=this.cw) {
            y+=this.DOT_DISTANCE;
            x=this.DOT_DISTANCE;
        }
    }
    // Draw rects
    for(var i=0;i<this.rects.length;i++) {
        this.ctx.globalAlpha = 0.5;
        this.ctx.fillStyle = this.rects[i].color;
        this.ctx.fillRect(this.rects[i].x,this.rects[i].y,this.rects[i].w,this.rects[i].h);
    }
    this.ctx.globalAlpha = 1;
    // Draw selected dot
    if(this.startp!=null) {
        this.ctx.fillStyle = "#00FF00";
        this.ctx.beginPath();
        this.ctx.arc(this.startp.x,this.startp.y,this.DOT_ACTIVE_RADIUS,0,Math.PI*2,true);
        this.ctx.closePath();
        this.ctx.fill();
    }
}

BoxCanvas.prototype.clear = function() {
    this.rects = [];
    this.startp = null;
    this.reset();
}

BoxCanvas.prototype.draw = function(event) {
    var mx = event.layerX;
    var my = event.layerY;
    this.reset();
    this.curp = this.snap(mx,my);
    if(this.curp!=null) {
        this.ctx.fillStyle = "#FF0000";
        this.ctx.beginPath();
        this.ctx.arc(this.curp.x,this.curp.y,this.DOT_ACTIVE_RADIUS,0,Math.PI*2,true);
        this.ctx.closePath();
        this.ctx.fill();
    }
    if(this.startp!=null) {
        var rect = this.rects[this.rects.length-1];
        rect.updateDim(this.curp.x-this.startp.x,this.curp.y-rect.y);
    }
}

BoxCanvas.prototype.snap = function(x,y) {
    var p = {};
    p.x = Math.min(Math.max(this.DOT_DISTANCE,Math.round(x / this.DOT_DISTANCE) * this.DOT_DISTANCE),this.cw-this.DOT_DISTANCE);
    p.y = Math.min(Math.max(this.DOT_DISTANCE,Math.round(y / this.DOT_DISTANCE) * this.DOT_DISTANCE),this.ch-this.DOT_DISTANCE);
    return p;
}

BoxCanvas.prototype.Event_Clear = function(event, instance) {
    instance.clear();
}

BoxCanvas.prototype.Event_Draw = function(event, instance) {
    instance.draw(event);
}

BoxCanvas.prototype.Event_Undo = function(event, instance) {
    instance.rects.splice(instance.rects.length - 1, 1);
    instance.draw(event);
}

BoxCanvas.prototype.Event_Click = function(event, instance) {
    if(instance.startp==null) {
        instance.startp = instance.snap(event.layerX,event.layerY);
        var rect = new instance.Rect(instance.startp.x,instance.startp.y,0,0,randomColor());
        instance.rects.push(rect);
    } else {
        var rect = instance.rects[instance.rects.length-1];
        rect.updateDim(instance.curp.x-instance.startp.x,instance.curp.y-rect.y);
        instance.startp = null;
    }
}

BoxCanvas.prototype.Event_ToggleCursor = function(event, instance) {
    instance.cursor=(this.cursor)?0:1;
    instance.cv.style.cursor = (instance.cursor)?"none":"default";
}

BoxCanvas.prototype.RegisterEvent = function(elem, event, func) {
    var instance = this;
    var fn = function(e) { return func.call(instance, e, instance); };
    elem.addEventListener(event, fn);
    this.evt_funcs.push({'el':elem, 'evt': event, 'fn': func, 'callback': fn});
}
BoxCanvas.prototype.RemoveEvent = function(elem, event, func) {
    for (var i = 0; i < this.evt_funcs.length; i++) {
        var entry = this.evt_funcs[i];
        if (entry.el == elem && entry.evt == event && entry.fn == func) {
            elem.removeEventListener(event, entry.callback);
            this.evt_funcs.splice(i, 1);
            break;
        }
    }
}