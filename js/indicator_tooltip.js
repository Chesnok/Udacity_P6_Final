    // Event to handle mouse enter
    /*
    function onHover(e) {

        // Get the properties of the selected shape
        var cx = parseFloat(e.selectedShape.attr("x")),
            cy = parseFloat(e.selectedShape.attr("y"));

        // Set the size and position of the popup
        var width = 150,
            height = 70,
            x = (cx + width + 10 & lt; svg.attr("width") ?
                cx + 10 :
                cx - width - 20);
        y = (cy - height / 2 & lt; 0 ?
            15 :
            cy - height / 2);

        // Create a group for the popup objects
        popup = svg.append("g");

        // Add a rectangle surrounding the text
        popup
            .append("rect")
            .attr("x", x + 5)
            .attr("y", y - 5)
            .attr("width", 150)
            .attr("height", height)
            .attr("rx", 5)
            .attr("ry", 5)
            .style("fill", 'white')
            .style("stroke", 'black')
            .style("stroke-width", 2);

        // Add multiple lines of text
        popup
            .append('text')
            .attr('x', x + 10)
            .attr('y', y + 10)
            .append('tspan')
            .attr('x', x + 10)
            .attr('y', y + 20)
            .text('Species: ' + e.seriesValue[0])
            .style("font-family", "sans-serif")
            .style("font-size", 10)
            .append('tspan')
            .attr('x', x + 10)
            .attr('y', y + 40)
            .text('Dive to Surface Ratio: ' + Math.round(e.yValue * 10) / 10)
            .style("font-family", "sans-serif")
            .style("font-size", 10);
    }

    // Event to handle mouse exit
    function onLeave(e) {
        // Remove the popup
        if (popup !== null) {
            popup.remove();
        }


    function qIndicator_click(e) {
      story.pauseAnimation();
       // If selected already re-start the animation
       if (e.yValue === story.getFrameValue()) {
          story.startAnimation();
          isticking = true;
      } else { // else pause and move to selected quarter
          story.goToFrame(e.yValue);
          story.pauseAnimation();
          isticking = false;
      }
    }

          // On tick of the main charts storyboard
    function qIndicator_tick(e) {
        if (!firstTick) {
            // Color all shapes the same
            s.shapes
                  .transition()
                  .duration(frame / 2)
                  .style("fill", function (d) { return (d.y === e ? tickColor.fill : defaultColor.fill) })
                  .style("stroke", function(d) { return (d.y === e ? tickColor.stroke : defaultColor.stroke) })
        }
        firstTick = false; 
    }

*/

