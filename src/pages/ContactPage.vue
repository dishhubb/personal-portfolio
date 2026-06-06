<template>
  <section class="contact-page">
    <div class="contact-page__inner container">
      <h1 class="section-title">Get in touch</h1>
      <p class="section-subtitle">
        I'm open to new opportunities and always happy to connect.
      </p>
      <div class="contact-page__links">
        <a :href="`mailto:${profile.links.email}`" class="contact-link">
          <span class="contact-link__label">Email</span>
          <span class="contact-link__value">{{ profile.links.email }}</span>
        </a>
        <a :href="profile.links.linkedin" target="_blank" rel="noopener" class="contact-link">
          <span class="contact-link__label">LinkedIn</span>
          <span class="contact-link__value">View profile →</span>
        </a>
        <a :href="profile.links.resume" class="contact-link">
          <span class="contact-link__label">Resume</span>
          <span class="contact-link__value">Download PDF →</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import profile from '../../data/profile.json'
</script>

<style lang="scss" scoped>
.contact-page {
  padding: var(--space-6) 0;

  &__links {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-top: var(--space-5);
    max-width: 560px;
  }
}

.contact-link {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4);
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--color-accent);
  }

  &__label {
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }

  &__value {
    color: var(--color-text);
    font-weight: 500;
  }
}
</style>
