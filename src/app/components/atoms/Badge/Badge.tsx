import { defineComponent, PropType } from 'vue'
import './Badge.scss'

export default defineComponent({
  name: 'Badge',
  props: {
    label: { type: String, required: true },
    variant: { type: String as PropType<'default' | 'highlight'>, default: 'default' },
  },
  setup(props) {
    return () => (
      <span class={`badge badge--${props.variant}`}>
        {props.label}
      </span>
    )
  },
})
