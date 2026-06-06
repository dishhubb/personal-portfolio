import { defineComponent, PropType } from 'vue'
import Badge from '../../atoms/Badge/Badge'
import Button from '../../atoms/Button/Button'
import './HeroSection.scss'

export interface HeroProfile {
  name: string
  title: string
  bio: string
  avatar: string
  links: {
    linkedin: string
    resume: string
    email: string
  }
}

export default defineComponent({
  name: 'HeroSection',
  props: {
    profile: { type: Object as PropType<HeroProfile>, required: true },
    showFeaturedLabel: { type: Boolean, default: false },
  },
  setup(props) {
    return () => (
      <section class="hero-section">
        <div class="hero-section__inner container">
          <div class="hero-section__content">
            {props.showFeaturedLabel ? (
              <Badge label="Product Leader" variant="highlight" />
            ) : (
              <Badge label="Available for opportunities" variant="highlight" />
            )}
            <h1 class="hero-section__name">{props.profile.name}</h1>
            <p class="hero-section__title">{props.profile.title}</p>
            <p class="hero-section__bio">{props.profile.bio}</p>
            <div class="hero-section__actions">
              <Button href="/work" label="View case studies" variant="primary" />
              <Button href={props.profile.links.resume} label="Download resume" variant="secondary" />
              <Button href={`mailto:${props.profile.links.email}`} label="Get in touch" variant="ghost" />
            </div>
          </div>
          <div class="hero-section__visual">
            <img
              alt={`${props.profile.name} portrait`}
              class="hero-section__avatar"
              src={props.profile.avatar}
            />
          </div>
        </div>
      </section>
    )
  },
})
