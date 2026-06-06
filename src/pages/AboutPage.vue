<template>
  <section class="about-page">
    <div class="about-page__inner container">
      <h1 class="section-title">About</h1>
      <div class="about-page__content">
        <div class="about-page__bio">
          <h2>Background</h2>
          <p>{{ profile.bio }}</p>
        </div>
        <div class="about-page__timeline">
          <h2>Experience</h2>
          <div class="timeline">
            <TimelineItem
              v-for="item in experience"
              :key="item.role + item.company"
              :role="item.role"
              :company="item.company"
              :period="item.period"
              :description="item.description"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import profile from '../../data/profile.json'
import experience from '../../data/experience.json'
import TimelineItem from '../app/components/molecules/TimelineItem/TimelineItem'
</script>

<style lang="scss" scoped>
.about-page {
  padding: var(--space-6) 0;

  &__content {
    display: grid;
    gap: var(--space-6);

    @media (min-width: 768px) {
      grid-template-columns: 1fr 2fr;
    }
  }

  &__bio h2,
  &__timeline h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--space-4);
  }

  &__bio p {
    color: var(--color-text-muted);
    line-height: 1.7;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
}
</style>
