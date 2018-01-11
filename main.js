function createSVGRect() {
    var svgns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgns, 'svg');
    var rect = document.createElementNS(svgns, 'rect');
    svg.appendChild(rect);
    return svg;
}

window.onload = function() {
    var blocks = document.querySelectorAll('.block');

    for (var i = 0; i < blocks.length; i++) {
        var svg = createSVGRect();
        svg.classList.add('randAnimatieSVG');
        svg.children[0].classList.add('randAnimatieSVGRect');


        // svg.setAttributeNS(null, 'x', blocks[i].offsetLeft);
        // svg.setAttributeNS(null, 'y', blocks[i].offsetTop);
        svg.style.left = blocks[i].offsetLeft;
        svg.style.top = blocks[i].offsetTop;
        svg.children[0].style.width = blocks[i].clientWidth;
        svg.children[0].style.height = blocks[i].clientHeight;
        svg.setAttributeNS(null, 'width', blocks[i].clientWidth);
        svg.setAttributeNS(null, 'height', blocks[i].clientHeight);
        svg.children[0].setAttributeNS(null, 'fill', 'transparent');
        svg.children[0].setAttributeNS(null, 'width', '100');
        svg.children[0].style.strokeDasharray = (blocks[i].clientWidth*2)+(blocks[i].clientHeight*2);
        svg.children[0].setAttributeNS(null, 'height', '100');
        console.log(svg.children);

        blocks[i].appendChild(svg);

        svg.onmouseover = function() {
            this.style.strokeDashoffset = this.children[0].style.strokeDasharray;
            console.log('Hovered', this);
        }

        svg.onmouseout = function() {
            this.style.strokeDashoffset = 0;
        }

    }
}
