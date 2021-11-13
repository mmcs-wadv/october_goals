import MoneyGoal from "./money-goal";
import Placeholder from "./placeholder";
import * as d3 from 'd3'
class Dashboard {
    constructor(element) {
        this.container = element
    }

    build(){
      const goalComponent = new MoneyGoal()
      const placeholder = new Placeholder()
      const dashboardContainer = document.createElement('div')
      dashboardContainer.classList.add('dashboard-container')

      this.buildRow(dashboardContainer, [goalComponent.build(300, 300,
          75,500),
          placeholder.build()])



        d3.interval(() => {
            goalComponent.update(goalComponent.value + Math.round(-40 + 120 * Math.random()))
        }, 1500);
      this.buildRow(dashboardContainer, [placeholder.build(), placeholder.build()])

      this.container.innerHTML = ''
      this.container.appendChild(dashboardContainer)
    }

    buildRow(container, elements){
        const row = document.createElement('div')
        row.classList.add('dashboard-row')
        elements.forEach((el)=>{ row.appendChild(el) })
        container.appendChild(row)
    }
}

export default Dashboard