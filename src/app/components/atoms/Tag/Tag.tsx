import { defineComponent } from 'vue'
import './Tag.scss'

export default defineComponent({
  name: 'Tag',
  props: {
    label: { type: String, required: true },
  },
  setup(props) {
    return () => (
      <span class="tag">
        {props.label}
      </span>
    )
  },
})
