
//the equirectangular projection has an aspect ratio of ~~ (2 : 1) (twice as wide as high)

var initialWidth = parseInt($('.map-container').width());
var initialHeight = parseInt($('.map-container').height());
var centered;

var actualInitialHeight = initialWidth / 2;

var rescaleTransform = {
  translate: [0,0],
  scale: 1
}

console.log(actualInitialHeight, initialHeight)
var scaleRatio = 159.155/1000.0; //experimentally calculated, this will fit the maps width to container width
var coastStrokeRatio = 4 / 10000;
var borderStrokeRatio = 1 / 10000;

var projection = d3.geoEquirectangular()
    .scale(initialWidth * scaleRatio)
    .translate([initialWidth/2, initialHeight/2])
    .precision(2);

var path = d3.geoPath()
    .projection(projection);


var svg = d3.select(".map-container").append("svg")
    .attr("class", "map")
    .attr("width", initialWidth)
    .attr("height", initialHeight)
  .append("g");

var tooltip = d3.select(".map-container").append("div") 
        .attr("class", "country-tooltip")       
        .style("opacity", 0.0)

var g = svg.append("g");

g.append("defs").append("path")
    .datum({type: "Sphere"})
    .attr("id", "sphere")
//    .attr("d", path)
    .style("fill", "white")

g.append("use")
    .attr("class", "stroke")
    .attr("xlink:href", "#sphere");

g.append("use")
    .attr("class", "fill")
    .attr("xlink:href", "#sphere");

/*g.append("path")
    //.datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);
*/

var zoom = d3.behavior.zoom()

queue()
    .defer(d3.json, "js/worldMap.json")
    .defer(d3.json, "js/countryCodesToNames.json")
    .await(ready);

function ready(error, world, cctn) {
  if (error) throw error;
  console.log(world, error, cctn)
  var countries = topojson.feature(world, world.objects.countries).features,
      neighbors = topojson.neighbors(world.objects.countries.geometries);
 COUNTRIES = countries;
 WORLD = world;
  console.log(world);
  g.selectAll(".country")
      .data(countries)
    .enter().insert("path")
      .attr("class", "country")
      .attr("d", path)
      .style("stroke-width", coastStrokeRatio * initialWidth)
      .style("stroke", "black")
      .style("fill", "lightgrey")
      .on('mouseenter',function(d){
        var country = d3.select(this)
        country.style("fill", "black")
      })
      .on('mousemove',showTooltip)
      .on('mouseleave', function(){
        d3.select(this).style("fill", "lightgrey");
        tooltip.transition().duration(200).style("opacity",0.0)
      })
      .on("click", clickZoom);
  
  
  g.insert("path")
    .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
    .attr("class", "border")
    //.attr("d", path)
    .style("stroke-width", borderStrokeRatio * initialWidth/1000)


//  WORLD = world

  function showTooltip(d) {

    var countryId = d.id;
    var countryName = cctn[countryId];
    if (countryName === undefined) {
      console.log("undefined country with id " + countryId);
    }

    tooltip.html(countryName);
    

    
    
    
    //below implementation ideal since coordinates are intrinsic, but cross-browser buggy (??just FF??) and complicated by transforms
    /*    
    var mouse = d3.mouse(g.node())
        .map( function(d) { return parseInt(d); } );
    
    mouse[0] = (rescaleTransform.scale * mouse[0] + rescaleTransform.translate[0]);
    mouse[1] = (rescaleTransform.scale * mouse[1] + rescaleTransform.translate[1]);

    //HHAAACCKKK for fucked up firefox bug
    if (navigator.userAgent.indexOf("Firefox") != -1) {
      mouse[0] += window.innerWidth
      mouse[1] += window.innerHeight
    }
    //adjust tooltip position dependent on quadrant so that it never goes offscreen.
    if (mouse[0] > g.node().getBBox().width / 2) {mouse[0] -= tooltip.node().offsetWidth}
    if (mouse[1] > g.node().getBBox().height / 2) {mouse[1] -= tooltip.node().offsetHeight}
      */

    //so instead can just use absolute events which also have the benefit of being independent of svg transforms!!
    mouse = [d3.event.pageX, d3.event.pageY];
    if (mouse[0] > window.innerWidth / 2) {mouse[0] -= tooltip.node().offsetWidth}
    if (mouse[1] > window.innerHeight / 2) {mouse[1] -= tooltip.node().offsetHeight}
    mouse[0] -= $('.map-container').offset().left;
    mouse[1] -= $('.map-container').offset().top;

    tooltip
      .attr("style", "left:"+(mouse[0])+"px;top:"+(mouse[1])+"px")
      .transition().duration(500).style("opacity",0.8);
  }


  function zoomed() {
    /*
      svg.attr("transform",
          "translate(" + zoom.translate() + ")" +
          "scale(" + zoom.scale() + ")"
      );
      */
      svg.attr("style", "will-change: transform; transform: translate(" + zoom.translate()[0] + "px, " + zoom.translate()[1] + "px) scale(" + zoom.scale() + ")")
  }

  function interpolateZoom (translate, scale) {
      var self = this;
      return d3.transition().duration(1500).tween("zoom", function () {
          var iTranslate = d3.interpolate(zoom.translate(), translate),
              iScale = d3.interpolate(zoom.scale(), scale);
          return function (t) {
              zoom
                  .scale(iScale(t))
                  .translate(iTranslate(t));
              zoomed();
          };
      });
  }

  //adapted from https://bl.ocks.org/mbostock/2206590
  function clickZoom(d) {

    var x, y, scale;

    if (d && centered !== d) {
      var centroid = path.centroid(d);
      x = centroid[0], y = centroid[1];
      scale = 4;
      centered = d;
    } else {
      x = initialWidth / 2;
      y = initialHeight / 2;
      scale = 1;
      centered = null;
    }
    var resizedWidth = initialWidth / 2 * rescaleTransform.scale + rescaleTransform.translate[0];
    var resizedHeight = initialHeight / 2 * rescaleTransform.scale + rescaleTransform.translate[1];

    x = x * rescaleTransform.scale + rescaleTransform.translate[0];
    y = y * rescaleTransform.scale + rescaleTransform.translate[1];

    //TRY INTERPOLATION
    var i;


    //interpolateZoom([resizedWidth - scale*x, resizedHeight - scale*y], scale)

    /*
    svg.transition()
      .duration(1500)
      .attr("transform", "translate(" + (resizedWidth -x*scale) + "," + (resizedHeight - y*scale) +  ")scale(" + scale + ")");
    */
    svg.transition()
      .duration(1500)
      .attr("style", "transform: translate(" + (resizedWidth -x*scale) + "px," + (resizedHeight - y*scale) +  "px) scale(" + scale + ")");
    
/*

    if (centered) {
      i = d3.interpolateZoom([resizedWidth, resizedHeight, 1], [x,y,4]);
    } else {
      i = d3.interpolateZoom([x,y,4], [resizedWidth, resizedHeight, 1]);
    }
  */  


    /*
    svg.transition()
      .duration(1500)
      .attr("transform", "translate(" + resizedWidth + "," + resizedHeight + ")scale(" + scale + ")translate(" + -x + "," + -y + ")")
    */



    //svg.transition().duration(i.duration).attrTween("transform", function() { return function(t) {console.log(i(t)); return transform(i(t)); }; });
    /*
    function transform(p) {
      return "translate(" + (resizedWidth -p[0]*p[2]) + "," + ( resizedHeight- p[1]*p[2]) +  ")scale(" + p[2] + ")";
    }
*/
    //.style("stroke-width", 1.5 / scale + "px");

  }

}




d3.select(self.frameElement).style("height", initialHeight + "px");

var lastT = [0,0]
var curDelta = [0,0];
var curScale = 1;


//taken from https://gist.github.com/shawnbot/6518285
/*
var zoom = d3.behavior.zoom()
        // only scale up, e.g. between 1x and 50x
        .scaleExtent([1, 15])
        .on("zoom", function() {
          // the "zoom" event populates d3.event with an object that has
          // a "translate" property (a 2-element Array in the form [x, y])
          // and a numeric "scale" property
          var e = d3.event,
              // now, constrain the x and y components of the translation by the
              // dimensions of the viewport
              tx = Math.min(0, Math.max(e.translate[0], width - width * e.scale)),
              ty = Math.min(0, Math.max(e.translate[1], height - height * e.scale));
          
          //curDelta = [Math.abs(tx-lastT[0]), Math.abs(ty-lastY[0])];
          // then, update the zoom behavior's internal translation, so that
          // it knows how to properly manipulate it on the next movement
          zoom.translate([tx, ty]);
          // and finally, update the <g> element's transform attribute with the
          // correct translation and scale (in reverse order)
          g.attr("transform", [
            "translate(" + [tx, ty] + ")",
            "scale(" + e.scale + ")"
          ].join(" "));
        });
*/
//svg
  //  .call(zoom)
    //call(zoom.event);.
/*
var x = d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, height])
    .range([0, height]);
    */
/*
var zoom = d3.behavior.zoom()
    .x(x)
    .y(y)
    .size([width, height])
    .on("zoom", zoomed);
*/
/*svg.call(zoom.event);
*/
function cz() {
  svg.transition().duration(1000).call(zoom.translate())
}

$(window).resize(function(){

  //keep the map as big as possible and preserve aspect ratio.
  //thus if width does not fit, then fit to height.
  //use svg transforms for efficiency.

  var newWidth = parseInt($('.map-container').width());
  var newHeight = parseInt($('.map-container').height());

  var isHeightGlued = (newWidth > 2*newHeight) ? true : false; //conventionally try to glue width and center height unless  
  
  var effectiveWidth = isHeightGlued ? (newHeight * 2) : newWidth;

  var newScale = effectiveWidth / initialWidth;


  var heightTranslate = (-newScale*initialHeight+newHeight)/2,
      widthTranslate = (newScale*initialWidth - effectiveWidth)/2 - (effectiveWidth - newWidth)/2,
      translate=[widthTranslate, heightTranslate];
  /* 
  g.attr("transform", [
    "translate(" + translate + ")",
     "scale(" + newScale + ")"
  ].join(" "));
*/
  g.attr("style", "transform: translate(" + translate[0] + "px, " + translate[1] + "px) scale(" + newScale + ")");

  //keep track of transform so that we can apply transform to mouse
  rescaleTransform.translate = translate;
  rescaleTransform.scale = newScale;

  //border and coast stroke-width scale with resize
  //d3.selectAll('.country').style("stroke-width", coastStrokeRatio * newWidth) //coastStrokeRatio * newWidth);
  //d3.selectAll('.border').style("stroke-width", borderStrokeRatio * newWidth);

});


