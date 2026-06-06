<template>
  <CaseStudyDetail v-if="caseStudy" :case-study="caseStudy" />
  <div v-else class="case-missing container">
    <h1>Case study not found</h1>
    <RouterLink to="/work">Back to work</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CaseStudyDetail, { type CaseStudy } from '../app/components/organisms/CaseStudyDetail/CaseStudyDetail'

const route = useRoute()
const caseStudy = ref<CaseStudy | null>(null)

onMounted(async () => {
  const slug = route.params.slug as string
  try {
    const module = await import(`../../data/cases/${slug}.json`)
    caseStudy.value = module.default as CaseStudy
  } catch {
    caseStudy.value = null
  }
})
</script>

<style lang="scss" scoped>
.case-missing {
  padding: var(--space-6) 0;

  h1 {
    color: var(--color-text);
    margin-bottom: var(--space-3);
  }

  a {
    color: var(--color-accent);
  }
}
</style>
