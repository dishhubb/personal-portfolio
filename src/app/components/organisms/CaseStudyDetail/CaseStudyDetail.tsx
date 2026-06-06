import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router'
import Tag from '../../atoms/Tag/Tag'
import MetricChip from '../../molecules/MetricChip/MetricChip'
import './CaseStudyDetail.scss'

interface TextSection {
  type: 'text'
  heading: string
  body: string
}

interface ImageSection {
  type: 'image'
  src: string
  caption: string
}

interface MetricsSection {
  type: 'metrics'
  items: string[]
}

type CaseSection = TextSection | ImageSection | MetricsSection

export interface CaseStudy {
  slug: string
  title: string
  company: string
  year: string
  tags: string[]
  summary?: string
  sections: CaseSection[]
}

export default defineComponent({
  name: 'CaseStudyDetail',
  props: {
    caseStudy: { type: Object as PropType<CaseStudy>, required: true },
  },
  setup(props) {
    const renderSection = (section: CaseSection, index: number) => {
      if (section.type === 'text') {
        return (
          <div key={index} class="case-study-detail__section">
            <h2 class="case-study-detail__heading">{section.heading}</h2>
            <p class="case-study-detail__body">{section.body}</p>
          </div>
        )
      }

      if (section.type === 'image') {
        return (
          <figure key={index} class="case-study-detail__figure">
            <img alt={section.caption} class="case-study-detail__image" src={section.src} />
            <figcaption class="case-study-detail__caption">{section.caption}</figcaption>
          </figure>
        )
      }

      return (
        <div key={index} class="case-study-detail__metrics">
          {section.items.map((item) => (
            <MetricChip key={item} label={item} />
          ))}
        </div>
      )
    }

    return () => (
      <article class="case-study-detail">
        <div class="case-study-detail__inner container">
          <RouterLink class="case-study-detail__back" to="/work">
            ← Back to work
          </RouterLink>
          <header class="case-study-detail__header">
            <div class="case-study-detail__meta">
              <span>{props.caseStudy.company}</span>
              <span>{props.caseStudy.year}</span>
            </div>
            <h1 class="case-study-detail__title">{props.caseStudy.title}</h1>
            {props.caseStudy.summary ? (
              <p class="case-study-detail__summary">{props.caseStudy.summary}</p>
            ) : null}
            <div class="case-study-detail__tags">
              {props.caseStudy.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </header>
          <div class="case-study-detail__content">
            {props.caseStudy.sections.map((section, index) => renderSection(section, index))}
          </div>
        </div>
      </article>
    )
  },
})
