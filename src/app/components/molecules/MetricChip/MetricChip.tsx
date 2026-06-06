import { defineComponent } from 'vue'
import './MetricChip.scss'

export default defineComponent({
  name: 'MetricChip',
  props: {
    label: { type: String, required: true },
  },
  setup(props) {
    return () => (
      <span class="metric-chip">
        {props.label}
      </span>
    )
  },
})
