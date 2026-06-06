import { defineComponent, PropType } from 'vue'
import './Button.scss'

export default defineComponent({
  name: 'Button',
  props: {
    label: { type: String, required: true },
    href: { type: String, default: undefined },
    variant: { type: String as PropType<'primary' | 'secondary' | 'ghost'>, default: 'primary' },
    external: { type: Boolean, default: false },
  },
  setup(props) {
    return () => {
      const className = `button button--${props.variant}`

      if (props.href) {
        return (
          <a
            class={className}
            href={props.href}
            target={props.external ? '_blank' : undefined}
            rel={props.external ? 'noopener noreferrer' : undefined}
          >
            {props.label}
          </a>
        )
      }

      return (
        <button class={className} type="button">
          {props.label}
        </button>
      )
    }
  },
})
