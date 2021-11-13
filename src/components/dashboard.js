import MoneyGoal from "./money-goal";
import Placeholder from "./placeholder";

class Dashboard {
    constructor(element) {
        self.container = element
    }

    build(){
      const goalComponent = new MoneyGoal()
      const placeholder = new Placeholder()
      const dashboardContainer = document.createElement('div')
      dashboardContainer.classList.add('dashboard-container')

      this.buildRow(dashboardContainer, [placeholder.build(), placeholder.build()])
      this.buildRow(dashboardContainer, [placeholder.build(), placeholder.build()])

      self.container.innerHTML = ''
      self.container.appendChild(dashboardContainer)
    }

    buildRow(container, elements){
        const row = document.createElement('div')
        row.classList.add('dashboard-row')
        elements.forEach((el)=>{ row.appendChild(el) })
        container.appendChild(row)
    }
}

export default Dashboard