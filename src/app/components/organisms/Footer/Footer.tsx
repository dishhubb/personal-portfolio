import { defineComponent } from 'vue'
import profile from '../../../../../data/profile.json'
import './Footer.scss'

export default defineComponent({
  name: 'Footer',
  setup() {
    return () => (
      <footer class="footer">
        <div class="footer__inner container">
          <div class="footer__brand">
            <span class="footer__name">{profile.name}</span>
            <span class="footer__copy">© {new Date().getFullYear()} — Product Manager Portfolio</span>
          </div>
          <div class="footer__links">
            <a class="footer__link" href={`mailto:${profile.links.email}`}>Email</a>
            <a class="footer__link" href={profile.links.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a>
            {profile.links.github ? (
              <a class="footer__link" href={profile.links.github} rel="noopener noreferrer" target="_blank">GitHub</a>
            ) : null}
            <a class="footer__link" href={profile.links.resume}>Resume</a>
          </div>
        </div>
      </footer>
    )
  },
})
