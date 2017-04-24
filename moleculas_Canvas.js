(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"moleculas_Canvas_atlas_", frames: [[0,253,150,147],[0,0,256,251]]}
];


// symbols:



(lib.aroluz = function() {
	this.spriteSheet = ss["moleculas_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.relampago = function() {
	this.spriteSheet = ss["moleculas_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.relampago();
	this.instance.parent = this;
	this.instance.setTransform(-99.9,-97.9,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.9,-97.9,199.8,195.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.aroluz();
	this.instance.parent = this;
	this.instance.setTransform(-71.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-110.5,150,147);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1,0.1,0.502,2.01);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({scaleX:0.51,scaleY:0.61},2).to({scaleX:10.78,scaleY:0.12},2).to({scaleX:28.24,scaleY:0.11,skewX:180},3).to({scaleX:13.29,scaleY:0.05,skewX:0,alpha:-1},18).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,0.1,0.132,3.888);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({scaleX:0.2,scaleY:5.64,skewY:180},1).to({_off:true},1).wait(23));

	// Layer 1
	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,2.032,2.032);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.44,scaleY:0.44,rotation:1800},49,cjs.Ease.get(-1)).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.2,-224.5,304.8,298.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0.6,-34.5,0.161,0.498,0,-156.5,23.5);

	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(0.6,-34.5,0.161,0.498,0,158.5,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-65.4,-78.2,130.9,156.6), null);


// stage content:
(lib.moleculas_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		movieClip_1.addEventListener(MouseEvent.CLICK, fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage(event:MouseEvent):void
		{
			navigateToURL(new URLRequest("http://www.adobe.com"), "_blank");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		movieClip_2.addEventListener(MouseEvent.CLICK, fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2(event:MouseEvent):void
		{
			navigateToURL(new URLRequest("http://www.adobe.com"), "_blank");
		}
		this.stop();
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		movieClip_1.addEventListener(MouseEvent.CLICK, fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage(event:MouseEvent):void
		{
			navigateToURL(new URLRequest("http://www.adobe.com"), "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Layer 4
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(415,193,0.161,0.499,64.6);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-147,-226,309,303);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.24,scaleY:0.75},19).to({scaleX:0.16,scaleY:0.5},20).wait(71));

	// Layer 6
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(415,193,0.161,0.499,-62.4);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-147,-226,309,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:0.24,scaleY:0.75},20).to({scaleX:0.16,scaleY:0.5},20).wait(61));

	// Layer 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(415,193,0.161,0.498,-23.5);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_2.cache(-147,-226,309,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({scaleX:0.24,scaleY:0.75},20).to({scaleX:0.16,scaleY:0.5},20).wait(51));

	// Layer 8
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(415,193,0.161,0.498,21.5);
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_3.cache(-147,-226,309,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({scaleX:0.24,scaleY:0.75},20).to({scaleX:0.16,scaleY:0.5},20).wait(41));

	// Layer 12
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(415,193,0.161,0.499,0,115.4,-64.6);
	this.instance_4._off = true;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_4.cache(-147,-226,309,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({scaleX:0.24,scaleY:0.75},20).to({scaleX:0.16,scaleY:0.5},20).wait(31));

	// Layer 11
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(415,193,0.161,0.499,0,-117.6,62.4);
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_5.cache(-147,-226,309,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({scaleX:0.24,scaleY:0.75},20).to({scaleX:0.16,scaleY:0.5},20).wait(21));

	// Layer 10
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(415,193,0.161,0.498,0,-156.5,23.5);
	this.instance_6._off = true;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_6.cache(-147,-226,309,303);

	this.movieClip_2 = new lib.Symbol4();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(414.5,227.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},59).to({state:[{t:this.instance_6}]},20).to({state:[{t:this.instance_6}]},20).to({state:[{t:this.movieClip_2}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({scaleX:0.24,scaleY:0.75},20).to({scaleX:0.16,scaleY:0.5},20).to({_off:true,scaleX:1,scaleY:1,skewX:0,skewY:0,x:414.5,y:227.5},10).wait(1));

	// Layer 9
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(415,193,0.161,0.498,0,158.5,-21.5);
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_7.cache(-147,-226,309,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({scaleX:0.24,scaleY:0.75},20).to({_off:true},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(771.5,323.8,155.8,108.3);
// library properties:
lib.properties = {
	width: 800,
	height: 400,
	fps: 40,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/moleculas_Canvas_atlas_.png?1492916240323", id:"moleculas_Canvas_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;