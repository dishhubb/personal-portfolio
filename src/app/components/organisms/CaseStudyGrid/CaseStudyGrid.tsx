import { defineComponent, PropType } from 'vue'
import CaseCard, { CaseCardItem } from '../../molecules/CaseCard/CaseCard'
import './CaseStudyGrid.scss'

export default defineComponent({
  name: 'CaseStudyGrid',
  props: {
    items: { type: Array as PropType<CaseCardItem[]>, required: true },
    title: { type: String, default: 'Selected work' },
    subtitle: { type: String, default: 'Case studies highlighting product strategy, discovery, and measurable outcomes.' },
    limit: { type: Number, default: undefined },
  },
  setup(props) {
    const displayItems = () => (
      props.limit ? props.items.slice(0, props.limit) : props.items
    )

    return () => (
      <section class="case-study-grid">
        <div class="case-study-grid__inner container">
          <h2 class="case-study-grid__title section-title">{props.title}</h2>
          <p class="case-study-grid__subtitle section-subtitle">{props.subtitle}</p>
          <div class="case-study-grid__list">
            {displayItems().map((item) => (
              <CaseCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    )
  },
})
