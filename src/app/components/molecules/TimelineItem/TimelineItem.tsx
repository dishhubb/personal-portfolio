import { defineComponent, PropType } from 'vue'
import './TimelineItem.scss'

export interface TimelineEntry {
  role: string
  company: string
  period: string
  description: string
}

export default defineComponent({
  name: 'TimelineItem',
  props: {
    entry: { type: Object as PropType<TimelineEntry>, required: true },
    isLast: { type: Boolean, default: false },
  },
  setup(props) {
    return () => (
      <div class={`timeline-item ${props.isLast ? 'timeline-item--last' : ''}`}>
        <div class="timeline-item__marker" />
        <div class="timeline-item__content">
          <div class="timeline-item__header">
            <h3 class="timeline-item__role">{props.entry.role}</h3>
            <span class="timeline-item__period">{props.entry.period}</span>
          </div>
          <p class="timeline-item__company">{props.entry.company}</p>
          <p class="timeline-item__description">{props.entry.description}</p>
        </div>
      </div>
    )
  },
})
