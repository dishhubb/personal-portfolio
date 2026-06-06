import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import profile from '../../../../../data/profile.json'
import './NavBar.scss'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default defineComponent({
  name: 'NavBar',
  setup() {
    return () => (
      <header class="nav-bar">
        <div class="nav-bar__inner container">
          <RouterLink class="nav-bar__brand" to="/">
            {profile.name}
          </RouterLink>
          <nav class="nav-bar__nav">
            {navLinks.map((link) => (
              <RouterLink key={link.to} class="nav-bar__link" to={link.to}>
                {link.label}
              </RouterLink>
            ))}
          </nav>
        </div>
      </header>
    )
  },
})
