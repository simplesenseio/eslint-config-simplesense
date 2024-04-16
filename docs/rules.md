# Rules

Redirecting to the first rule...

<script setup>
import { useData } from 'vitepress';

const {
  site,
  theme,
} = useData();

globalThis.location = site.value.base + theme.value.sidebar['/rules/'][0].items[0].items[0].link.slice(1);
</script>
