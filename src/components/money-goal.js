import * as d3 from 'd3'

class MoneyGoal {
    constructor(element) {
        this.arcGen = d3.arc()
            .innerRadius(100)
            .outerRadius(140)
            .startAngle(0)
    }

    build(width, height, startValue, targetValue){
        const goalContainer = document.createElement("div")
        goalContainer.classList.add('dashboard-goal')
        this.value = startValue
        this.targetValue = targetValue

        const graph = d3.select(goalContainer)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width/2}, ${height/2})`)
        const background = graph.append('path')
            .datum({endAngle: 2*Math.PI})
            .style('fill', '#FF0000')
            .attr('d', this.arcGen)
        this.upperground = graph.append('path')
            .datum({endAngle: this.progress()})
            .style('fill', '#00FF00')
            .attr('d', this.arcGen)
        this.dataText = graph.append("text")
            .text(this.text())
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', '34px')
        return goalContainer

    }

    progress(){
        return this.value/this.targetValue * 2 * Math.PI
    }

    update(value){
        this.value = value
        const that = this
        this.upperground.transition().duration(750).attrTween('d', function (d){
            let compute = d3.interpolate(d.endAngle, that.progress());
            return function(t){
                d.endAngle = compute(t);
                that.dataText.text(that.text());
                return that.arcGen(d);
            }
        })
    }

    text(){
        return `${this.value}/${this.targetValue}`
    }
}

export default MoneyGoal